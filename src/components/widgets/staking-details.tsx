"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { JSX, SVGProps } from "react"
import stakingAbi from "@/contracts/abi/staking.json"
import { useAccount, useBalance, useContractRead, useContractWrite, useNetwork, usePrepareContractWrite } from "wagmi";
import { uint256ToBNBCurrency, uint256ToNumber } from "@/utils/bigNumber";
import addresses from "@/contracts/addresses";
import TestnetFaucet from "@/components/widgets/testnet-faucet";

export default function StakingDetails() {
  const {address} = useAccount();
  const {chain} = useNetwork();

  const {
    data: eulerBalance,
  } = useBalance({
    address: address,
    token: addresses(chain?.id)['OldToken']
  })

  const {data: userInfo}: {
    data: {
      amount: { _hex: string; };
      pendingRewards: { _hex: string; };
    } | undefined;
  } = useContractRead({
    address: addresses(chain?.id)['Staking'],
    abi: stakingAbi.abi,
    functionName: 'getUserInfo',
    args: [address],
    chainId: chain?.id,
  })

  const safeUnstakeAmount = () => {
    // Ensuring userInfo and userInfo?.amount are defined
    if (userInfo !== undefined && userInfo?.amount !== undefined) {
      // Assuming uint256ToBNBCurrency properly converts to a number or a format that can be used as a number
      const rawBalance = uint256ToNumber(userInfo?.amount as unknown as number);
      const balance = Number(rawBalance); // Convert to a number

      // Check if balance is greater than 4000 to ensure a minimum threshold for unstaking
      if (balance > 4000) {
        const toUnstake = Math.floor(balance - 1) * 10 ** 18;
        return BigInt(toUnstake); // Return the amount to unstake as a safe integer
      } else {
        return undefined; // or handle this case as per your application's needs
      }
    } else {
      return undefined;
    }
  }

  const {config: withdrawAllConfig} = usePrepareContractWrite({
    address: addresses(chain?.id)['Staking'],
    abi: stakingAbi.abi,
    functionName: 'withdraw',
    args: [safeUnstakeAmount()]
  })
  const {
    data: withdrawed,
    isLoading: isLoadingWithdraw,
    isSuccess: isSuccessWithdraw,
    write: withdrawAll,
  } = useContractWrite(withdrawAllConfig)

  const {config: claimAllConfig} = usePrepareContractWrite({
    address: addresses(chain?.id)['Staking'],
    abi: stakingAbi.abi,
    functionName: 'claim',
  })
  const {
    data: claimed,
    isLoading: isLoadingClaim,
    isSuccess: isSuccessClaim,
    write: claimAll
  } = useContractWrite(claimAllConfig)

  const {config: stakeTokensConfig} = usePrepareContractWrite({
    address: addresses(chain?.id)['Staking'],
    abi: stakingAbi.abi,
    functionName: 'deposit',
    args: [eulerBalance ? eulerBalance?.value : undefined],
  })
  const {
    data: stakedAmount,
    isLoading: isLoadingStake,
    isSuccess: isSuccessStake,
    write: stakeTokens
  } = useContractWrite(stakeTokensConfig)

  if (chain?.id === 97) {
    return (
      <TestnetFaucet/>
    )
  }

  if (!address || !userInfo) {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <img
              alt="Logo"
              className="h-12 w-12"
              height="50"
              src="/tokens/euler_v1.png"
              style={{
                aspectRatio: "50/50",
                objectFit: "cover",
                // make the image round
                borderRadius: "9999px",
              }}
              width="50"
            />
            <h3 className="text-lg font-semibold">Staking</h3>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-3 mb-6">
            <div>
              <p className="text-gray-600">
                If you staked tokens, you can claim rewards here and migrate to the new version of $POXME.
              </p>
            </div>
          </div>
          <hr className="my-4"/>
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3">Please connect your wallet to continue</h2>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
      <CardHeader className="flex items-center space-x-3 mb-6">
        <img
          alt="Logo"
          className="h-12 w-12"
          height="50"
          src="/tokens/euler_v1.png"
          style={{
            aspectRatio: "50/50",
            objectFit: "cover",
            // make the image round
            borderRadius: "9999px",
          }}
          width="50"
        />
        <div>
          <h1 className="text-2xl font-bold">Staking</h1>
          <p className="text-gray-600">
            If you staked tokens, you can claim rewards here and migrate to the new version of $POXME.
          </p>
        </div>
      </CardHeader>
      <CardContent className="m-4">
        <h2 className="text-lg font-semibold mb-3">AVAILABLE CURRENCY</h2>
        <>
          {[
            {
              amount: uint256ToBNBCurrency(eulerBalance?.value as unknown as string),
              name: 'Wallet Balance',
              color: 'red',
              button: 'Stake',
              action: stakeTokens
            },
            {
              amount: uint256ToBNBCurrency(userInfo?.amount as unknown as string),
              name: 'Staked Tokens',
              color: 'green',
              button: 'Withdraw',
              action: withdrawAll
            }, {
              amount: uint256ToBNBCurrency(userInfo?.pendingRewards as unknown as string),
              name: 'Claimable Rewards',
              color: 'green',
              button: 'Claim',
              action: claimAll
            }].map((currency) => {
            return (
              <div className="flex justify-between items-center mb-2" key={currency.name}>
                  <span className="flex items-center">
                    {currency.name}
                  </span>
                <div className="flex items-center">
                  <span>{currency.amount}</span>
                  <Button className="ml-4" onClick={() => currency.action?.()}>{currency.button}</Button>
                </div>
              </div>
            )
          })
          }
        </>
      </CardContent>
    </Card>
  )
}

function CircleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10"/>
    </svg>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { JSX, SVGProps, useState } from "react"
import stakingAbi from "@/contracts/abi/staking.json"
import { useAccount, useBalance, useContractRead, useContractWrite, usePrepareContractWrite } from "wagmi";
import { uint256ToBNBCurrency } from "@/utils/bigNumber";

interface TokenDetail {
  ticker: string;
}

export default function StakingDetails() {
  const {address, isConnecting, isDisconnected} = useAccount();
  const [amount, setAmount] = useState<string>('');

  const {
    data: eulerBalance,
    isError,
    isLoading
  } = useBalance({
    address: address,
    token: '0x3920123482070c1a2dff73aad695c60e7c6f6862'
  })

  const {
    data: allowance,
    isLoading: isLoadingAllowance
  } = useContractRead({
    address: '0xb18fab4c6f054e734ea169561787cc87928f54ee',
    abi: stakingAbi.abi,
    functionName: 'allowance',
  })

  const {data: userInfo}: {
    data: {
      amount: { _hex: string; };
      pendingRewards: { _hex: string; };
    } | undefined;
  } = useContractRead({
    address: '0xb18fab4c6f054e734ea169561787cc87928f54ee',
    abi: stakingAbi.abi,
    functionName: 'getUserInfo',
    args: [address],
  })

  const {config: withdrawAllConfig} = usePrepareContractWrite({
    address: '0xb18fab4c6f054e734ea169561787cc87928f54ee',
    abi: stakingAbi.abi,
    functionName: 'withdrawAll',
  })
  const {
    data: withdrawed,
    isLoading: isLoadingWithdraw,
    isSuccess: isSuccessWithdraw,
    write: withdrawAll,
  } = useContractWrite(withdrawAllConfig)

  const {config: claimAllConfig} = usePrepareContractWrite({
    address: '0xb18fab4c6f054e734ea169561787cc87928f54ee',
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
    address: '0xb18fab4c6f054e734ea169561787cc87928f54ee',
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

  const useEffect = () => {
    if (isSuccessStake || isSuccessClaim || isSuccessWithdraw) {
      // force re render
      window.location.reload()
    }
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
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center space-x-3 mb-6">
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
      </div>
      <hr className="my-4"/>
      <div className="mb-6">
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
              amount: uint256ToBNBCurrency(userInfo.amount as unknown as string),
              name: 'Staked Tokens',
              color: 'green',
              button: 'Withdraw',
              action: withdrawAll
            }, {
              amount: uint256ToBNBCurrency(userInfo.pendingRewards as unknown as string),
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
      </div>
    </div>
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

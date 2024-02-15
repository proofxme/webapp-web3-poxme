"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import stakingAbi from "@/contracts/abi/staking.json";
import {
  useAccount,
  useBalance,
  useReadContract,
  useWriteContract,
  useSimulateContract,
} from "wagmi";
import {
  uint256ToBNBCurrency,
  uint256ToNumber,
  safeUnstakeAmount,
} from "@/utils";
import addresses from "@/contracts/addresses";
import TestnetFaucet from "@/components/widgets/testnet-faucet";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";

export default function StakingDetails() {
  const { address, chain } = useAccount();

  const { data: eulerBalance } = useBalance({
    address: address,
    token: addresses(chain?.id)["OldToken"],
  });

  const {
    data: userInfo,
  }: {
    data:
      | {
          amount: { _hex: string };
          pendingRewards: { _hex: string };
        }
      | undefined;
  } = useReadContract({
    address: addresses(chain?.id)["Staking"],
    abi: stakingAbi.abi,
    functionName: "getUserInfo",
    args: [address],
    chainId: chain?.id,
  });

  const { writeContract } = useWriteContract();

  const { data: withdrawAllConfig } = useSimulateContract({
    address: addresses(chain?.id)["Staking"],
    abi: stakingAbi.abi,
    functionName: "withdraw",
    args: [safeUnstakeAmount(userInfo)],
  });

  const { data: claimAllConfig } = useSimulateContract({
    address: addresses(chain?.id)["Staking"],
    abi: stakingAbi.abi,
    functionName: "claim",
  });

  const { data: stakeTokensConfig } = useSimulateContract({
    address: addresses(chain?.id)["Staking"],
    abi: stakingAbi.abi,
    functionName: "deposit",
    args: [eulerBalance ? eulerBalance?.value : undefined],
  });

  if (chain?.id === 97) {
    return <TestnetFaucet />;
  }

  const cardContent = () => {
    if (!address) {
      return (
        <CardContent>
          <hr className="my-2" />
          <div className="text-red-700 bg-red-100 px-4 py-3 rounded rounded-base relative mt-6">
            Please Connect your wallet to continue
          </div>
          <div className="flex justify-center mt-3">
            <ConnectButton />
          </div>
        </CardContent>
      );
    }
    if (address) {
      return (
        <CardContent className="m-4">
          <h2 className="text-lg font-semibold mb-3">AVAILABLE CURRENCY</h2>
          <>
            {[
              {
                amount: uint256ToBNBCurrency(
                  eulerBalance?.value as unknown as string
                ),
                name: "Wallet Balance",
                color: "red",
                button: "Stake",
                action: () => writeContract(stakeTokensConfig),
              },
              {
                amount: uint256ToBNBCurrency(
                  userInfo?.amount as unknown as string
                ),
                name: "Staked Tokens",
                color: "green",
                button: "Withdraw",
                action: () => writeContract(withdrawAllConfig),
              },
              {
                amount: uint256ToBNBCurrency(
                  userInfo?.pendingRewards as unknown as string
                ),
                name: "Claimable Rewards",
                color: "green",
                button: "Claim",
                action: () => writeContract(claimAllConfig),
              },
            ].map((currency) => {
              return (
                <div
                  className="flex justify-between items-center mb-2"
                  key={currency.name}
                >
                  <span className="flex items-center">{currency.name}</span>
                  <div className="flex items-center">
                    <span>{currency.amount}</span>
                    <Button
                      className="ml-4"
                      onClick={() => currency.action?.()}
                    >
                      {currency.button}
                    </Button>
                  </div>
                </div>
              );
            })}
          </>
        </CardContent>
      );
    }
  };

  return (
    <section key="1" className="w-full">
      <div className="grid items-center justify-center gap-4 text-center md:px-6 lg:gap-10">
        <Card className="mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <CardHeader className="flex items-center space-x-3">
            <Image
              alt="Logo"
              className="h-12 w-12"
              height="50"
              src="/tokens/euler_v1.png"
              style={{
                aspectRatio: "50/50",
                objectFit: "cover",
                borderRadius: "9999px",
              }}
              width="50"
            />
            <div>
              <p className="text-gray-600">
                If you staked tokens, you can claim rewards here and migrate to
                the new version of $POXME.
              </p>
            </div>
          </CardHeader>
          {cardContent()}
        </Card>
      </div>
    </section>
  );
}

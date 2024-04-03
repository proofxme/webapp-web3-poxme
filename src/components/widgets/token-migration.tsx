"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  createConfig,
  useAccount,
  useBalance,
  useReadContract,
  useSimulateContract,
  useWriteContract,
} from "wagmi";
import { bsc, bscTestnet } from "wagmi/chains";
import { useCallback, useEffect, useState } from "react";
import addresses from "@/contracts/addresses";
import migrationAbi from "@/contracts/abi/migration.json";
import poxmeToken from "@/contracts/abi/poxmeToken.json";
import eulerToken from "@/contracts/abi/eulerToken.json";
import {
  getBigNumberCurrencyLabel,
  uint256ToBNBCurrency,
} from "@/utils/bigNumber";
import BigNumber from "bignumber.js";
import { watchBlockNumber } from "@wagmi/core";
import { createWalletClient, custom, http } from "viem";
import { watchAsset } from "viem/actions";

export const config = createConfig({
  chains: [bsc, bscTestnet],
  transports: {
    [bsc.id]: http(),
    [bscTestnet.id]: http(),
  },
});

export default function TokenMigration() {
  const { address, chain } = useAccount();
  const [visibleAmount, setVisibleAmount] = useState(BigInt(0));
  const [depositAmount, setDepositAmount] = useState(BigInt(0));

  const [blockNumber, setBlockNumber] = useState(0);
  const [penalty, setPenalty] = useState(0);

  useEffect(() => {
    const unwatch = watchBlockNumber(config, {
      onBlockNumber(blockNumber: bigint) {
        setBlockNumber(Number(blockNumber));
      },
    });

    // Unsubscribe from the block number updates when the component unmounts
    return () => {
      unwatch();
    };
  }, []); // Empty dependency array means this effect runs once on mount */

  const { data: hash, error, isPending, writeContract } = useWriteContract();

  // calculate the current supply of POXME
  const { data: poxmeSupply } = useReadContract({
    address: addresses(chain?.id)["PoxmeToken"],
    abi: poxmeToken.abi,
    functionName: "totalSupply",
    args: [],
  });

  const { data: startBlock } = useReadContract({
    address: addresses(chain?.id)["PoXMigration"],
    abi: migrationAbi.abi,
    functionName: "migrationStartedAt",
    args: [],
  });

  // Old Tokens
  const { data: eulerBalance } = useBalance({
    address: address,
    token: addresses(chain?.id)["OldToken"],
  });

  const { data: oldTokenAllowance } = useReadContract({
    address: addresses(chain?.id)["OldToken"],
    abi: eulerToken.abi,
    functionName: "allowance",
    args: [address, addresses(chain?.id)["PoXMigration"]],
  });

  const { data: approveOldTokenConfig } = useSimulateContract({
    address: addresses(chain?.id)["OldToken"],
    abi: eulerToken.abi,
    functionName: "approve",
    args: [addresses(chain?.id)["PoXMigration"], BigInt(2 * 10 ** 53 - 1)],
  });

  const { data: increaseAllowanceConfig } = useSimulateContract({
    address: addresses(chain?.id)["OldToken"],
    abi: eulerToken.abi,
    functionName: "increaseAllowance",
    args: [addresses(chain?.id)["PoXMigration"], BigInt(2 * 10 ** 53 - 1)],
  });

  const { data: poxmeAllowance } = useReadContract({
    address: addresses(chain?.id)["PoxmeToken"],
    abi: poxmeToken.abi,
    functionName: "allowance",
    args: [address, addresses(chain?.id)["PoXMigration"]],
  });

  // Migration Contract
  const { data: isMigrationActive } = useReadContract({
    address: addresses(chain?.id)["PoXMigration"],
    abi: migrationAbi.abi,
    functionName: "isMigrationActive",
    args: [],
  });

  const { data: isTokenMigrationActive } = useReadContract({
    address: addresses(chain?.id)["PoXMigration"],
    abi: migrationAbi.abi,
    functionName: "isTokenMigrationActive",
    args: [],
  });

  const {
    data: userInfo,
  }: {
    data:
      | {
          deposited: BigNumber;
          minted: BigNumber;
          lastDeposit: BigNumber;
        }
      | undefined;
  } = useReadContract({
    address: addresses(chain?.id)["PoXMigration"],
    abi: migrationAbi.abi,
    functionName: "getUserInfo",
    args: [address],
    query: {
      enabled: true,
      staleTime: 1_000,
    },
    scopeKey: "balanceOf",
  });

  // New Tokens Interactions
  // Deposit old tokens
  const depositOldTokens = useCallback(async () => {
    writeContract({
      address: addresses(chain?.id)["PoXMigration"],
      abi: migrationAbi.abi,
      functionName: "deposit",
      args: [depositAmount],
    });
  }, [chain?.id, depositAmount, writeContract]);

  // Claim new tokens
  const claimNewTokens = useCallback(async () => {
    writeContract({
      address: addresses(chain?.id)["PoXMigration"],
      abi: migrationAbi.abi,
      functionName: "claimTokens",
      args: [],
    });
  }, [chain?.id, writeContract]);

  const calculateAmounts = useCallback(() => {
    const allowance = Number(
      uint256ToBNBCurrency(oldTokenAllowance as unknown as string)
    );
    const available = Number(eulerBalance?.formatted);
    const deposited = uint256ToBNBCurrency(
      userInfo?.deposited as unknown as string
    );
    const claimed = uint256ToBNBCurrency(userInfo?.minted as unknown as string);
    const pending = Number(deposited) - Number(claimed);
    const lastDeposited = Number(userInfo?.lastDeposit?.toString());
    const canDeposit = allowance > available;
    const needsIncrease = allowance > 0 && allowance < available;
    const blocksPending =
      Number(blockNumber) - lastDeposited > 100
        ? 0
        : 100 - (Number(blockNumber) - lastDeposited);
    return {
      needsIncrease,
      allowance,
      canDeposit,
      deposited,
      blocksPending,
      claimed,
      pending,
      available,
    };
  }, [
    blockNumber,
    eulerBalance?.formatted,
    oldTokenAllowance,
    userInfo?.deposited,
    userInfo?.lastDeposit,
    userInfo?.minted,
  ]);

  useEffect(() => {
    if (startBlock) {
      const maxFee = 5184000; // 180 days in blocks
      const gracePeriod = 201600; // 7 days in blocks
      let blocksPassed = blockNumber - Number(startBlock);

      if (blocksPassed <= gracePeriod) {
        setPenalty(0); // No penalty if within or equal to the grace period
      } else if (blocksPassed > maxFee) {
        setPenalty(50); // 50% fee if the blocks passed are greater than maxFee
      } else {
        // Calculate penalty based on the time after the grace period
        let effectiveBlocks = blocksPassed - gracePeriod;
        setPenalty((effectiveBlocks / (maxFee - gracePeriod)) * 50);
      }
    }
  }, [blockNumber, startBlock]);

  return (
    <div key="3">
      <Card className="mb-4 my-3">
        <CardHeader>
          <h3 className="text-lg font-semibold">
            Deposit <span style={{ color: "blue" }}>$EULER</span>
          </h3>
        </CardHeader>
        <CardContent>
          <div className="space-x-3 mb-6">
            <p className="text-gray-500 pb-6">
              Deposit <span style={{ color: "blue" }}>$EULER</span> to claim the
              new token
            </p>
            <p className="text-gray-500">
              You have{" "}
              <strong style={{ color: "black" }}>
                {calculateAmounts().available}
              </strong>{" "}
              <span style={{ color: "blue" }}>$EULER</span> to migrate
            </p>
          </div>
          <div className="space-x-3 mb-6">
            {!calculateAmounts().canDeposit &&
              !calculateAmounts().needsIncrease && (
                <>
                  <p className="text-gray-500">
                    The migration center Allowance is{" "}
                    {calculateAmounts().allowance}
                  </p>
                  <Button
                    className="mt-4 inline-flex items-center rounded-md border border-transparent bg-gray-900 px-2.5 py-0.5 text-xs font-semibold text-gray-50 shadow transition-colors hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80 dark:focus:ring-gray-300"
                    onClick={() =>
                      writeContract(approveOldTokenConfig!.request)
                    }
                  >
                    Approve Contract
                  </Button>
                </>
              )}
            {calculateAmounts().needsIncrease && (
              <>
                <p className="text-gray-500">
                  The migration center Allowance is{" "}
                  {calculateAmounts().allowance} and you need an allowance of{" "}
                  {calculateAmounts().available}
                </p>
                <Button
                  className="mt-4 inline-flex items-center rounded-md border border-transparent bg-gray-900 px-2.5 py-0.5 text-xs font-semibold text-gray-50 shadow transition-colors hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80 dark:focus:ring-gray-300"
                  onClick={() =>
                    writeContract(increaseAllowanceConfig!.request)
                  }
                >
                  Increase allowance
                </Button>
              </>
            )}
          </div>
          {calculateAmounts().canDeposit && (
            <Button
              className="mt-4inline-flex items-center rounded-md border border-transparent bg-gray-900 ml-2 px-2.5 py-0.5 text-xs font-semibold text-gray-50 shadow transition-colors hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80 dark:focus:ring-gray-300"
              onClick={(e) => {
                const visibleValue = BigInt(
                  Math.trunc(calculateAmounts().available)
                );
                const value = BigInt(Number(visibleValue) * 10 ** 18);
                setVisibleAmount(visibleValue);
                setDepositAmount(value);
              }}
            >
              Max Tokens
            </Button>
          )}
          <div className="space-x-3 mb-6">
            {calculateAmounts().canDeposit && (
              <div className="flex justify-between pt-3">
                <Input
                  placeholder="Amount"
                  type="number"
                  value={visibleAmount.toString()}
                  onChange={(e) => {
                    const value = BigInt(Number(e.target.value) * 10 ** 18);
                    const visibleValue = BigInt(Number(e.target.value));
                    setVisibleAmount(visibleValue);
                    setDepositAmount(value);
                  }}
                />
                <Button
                  disabled={depositAmount === BigInt(0) || !isMigrationActive}
                  className="pt-3 mt-4inline-flex items-center rounded-md border border-transparent bg-gray-900 ml-2 px-2.5 py-0.5 text-xs font-semibold text-gray-50 shadow transition-colors hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80 dark:focus:ring-gray-300"
                  onClick={() => depositOldTokens()}
                >
                  Deposit
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      <Card className="mb-4 my-3">
        <CardHeader>
          <h4 className="font-bold text-white bg-red-600 px-6 rounded py-6">
            Total Penalty Applied {penalty.toFixed(2).toString()}%
          </h4>
          <span className="text-sm text-gray-500">
            Penalty is applied to the token claim, and will slowly increase to
            50% over 180 days.
          </span>
        </CardHeader>
      </Card>
      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">
            Claim new <strong style={{ color: "purple" }}>$POXME</strong> Tokens
          </h3>
          <h4 className="font-bold text-gray-900 bg-indigo-300 px-6 rounded">
            Total tokens migrated:{" "}
            {getBigNumberCurrencyLabel(
              poxmeSupply as unknown as string,
              true,
              2,
              true
            )}
          </h4>
        </CardHeader>
        <CardContent>
          <div className="space-x-3 mb-6">
            <p className="text-gray-500">
              You have deposited:
              <span className="font-bold text-gray-900">
                {" "}
                {calculateAmounts().deposited} tokens
              </span>
            </p>
            <p className="text-gray-500 mt-2">
              You have claimed:
              <span className="font-bold text-gray-900">
                {" "}
                {calculateAmounts().claimed} tokens{" "}
              </span>
            </p>
            <p className="text-gray-500 mt-2">
              You can claim:
              <span className="font-bold text-gray-900">
                {" "}
                {calculateAmounts().pending} tokens{" "}
              </span>
            </p>
          </div>
          <div className="space-x-3 mb-6">
            {calculateAmounts().blocksPending > 0 && (
              <p className="bg-red-500 border border-red-400 text-white mt-2">
                Please wait:
                <span className="font-bold text-white">
                  {" "}
                  {calculateAmounts().blocksPending} blocks
                </span>{" "}
                to claim.
              </p>
            )}
            <div className="flex justify-center pt-3">
              <Button
                disabled={
                  calculateAmounts().pending === 0 ||
                  calculateAmounts().blocksPending > 0 ||
                  !isMigrationActive
                }
                className="mt-4 inline-flex items-center rounded-md border border-transparent bg-gray-900 px-2.5 py-0.5 text-xs font-semibold text-gray-50 shadow transition-colors hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80 dark:focus:ring-gray-300"
                onClick={() => claimNewTokens()}
              >
                Claim Tokens
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

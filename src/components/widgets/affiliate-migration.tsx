"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import BigNumber from "bignumber.js";
import {
  useAccount,
  useReadContract,
  useWriteContract,
  useSimulateContract,
} from "wagmi";
import addresses from "@/contracts/addresses";
import migrationAbi from "@/contracts/abi/migration.json";
import { uint256ToNumber } from "@/utils/bigNumber";
import Image from "next/image";

export default function AffiliateMigration() {
  const { address, chain } = useAccount();

  const {
    data: userInfo,
  }: {
    data:
      | {
          deposited: BigNumber;
          minted: BigNumber;
          mintedAffiliates: BigNumber;
        }
      | undefined;
  } = useReadContract({
    address: addresses(chain?.id)["PoXMigration"],
    abi: migrationAbi.abi,
    functionName: "getUserInfo",
    args: [address],
  });

  const { data: claimAffiliatesConfig } = useSimulateContract({
    address: addresses(chain?.id)["PoXMigration"],
    abi: migrationAbi.abi,
    functionName: "claimAffiliates",
    args: [],
  });

  const { writeContract } = useWriteContract();

  const claimableAffiliates = () => {
    if (userInfo) {
      const deposited = uint256ToNumber(userInfo?.deposited) || 0;
      const mintedAffiliates = Number(userInfo?.mintedAffiliates);
      // Divide the amount of tokens deposited by 4000 rounding to the floor to get the amount of NFTs
      return Math.floor(deposited / 40000) - mintedAffiliates;
    }
  };

  const claimedAffiliates = () => {
    return Number(userInfo?.mintedAffiliates);
  };

  return (
    <div>
      <Card className="mb-4 my-3">
        <CardHeader>
          <h3 className="text-lg font-semibold">Affiliate NFTs</h3>
        </CardHeader>
        <CardContent>
          <Image
            alt="NFT Image"
            className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800 mb-4"
            height="100"
            src="https://assets.pox.me/affiliates/affiliate.png"
            width="100"
          />
          <p className="text-gray-500 pb-6">
            <span className="font-bold text-gray-900 bg-yellow-200 px-1 rounded">
              {claimedAffiliates()} Affiliate NFTs
            </span>
            claimed
          </p>
          <p className="text-gray-500">
            <span className="font-bold text-gray-900 bg-yellow-200 px-1 rounded">
              {claimableAffiliates()} Affiliate NFTs
            </span>
            available to claim
          </p>
          <Button
            disabled={!Boolean(claimAffiliatesConfig?.request)}
            onClick={() => writeContract?.(claimAffiliatesConfig!.request)}
            className="mt-4 inline-flex items-center rounded-md border border-transparent bg-gray-900 px-2.5 py-0.5 text-xs font-semibold text-gray-50 shadow transition-colors hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80 dark:focus:ring-gray-300"
          >
            Claim Affiliate NFTs
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

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

export default function MembershipMigration() {
  const { address, chain } = useAccount();

  const {
    data: userInfo,
  }: {
    data:
      | {
          deposited: BigNumber;
          minted: BigNumber;
          mintedMemberships: BigNumber;
        }
      | undefined;
  } = useReadContract({
    address: addresses(chain?.id)["PoXMigration"],
    abi: migrationAbi.abi,
    functionName: "getUserInfo",
    args: [address],
  });

  const { data: claimMembershipsConfig } = useSimulateContract({
    address: addresses(chain?.id)["PoXMigration"],
    abi: migrationAbi.abi,
    functionName: "claimMemberships",
    args: [],
  });

  const { writeContract } = useWriteContract();

  const claimableMemberships = () => {
    if (userInfo) {
      const deposited = uint256ToNumber(userInfo?.deposited) || 0;
      const mintedMemberships = Number(userInfo?.mintedMemberships);
      // Divide the amount of tokens deposited by 4000 rounding to the floor to get the amount of NFTs
      return Math.floor(deposited / 4000) - mintedMemberships;
    }
    return 0;
  };

  const claimedMemberships = () => {
    return Number(userInfo?.mintedMemberships);
  };

  return (
    <div>
      <Card className="mb-4 my-3">
        <CardHeader>
          <h3 className="text-lg font-semibold">Membership NFTs</h3>
        </CardHeader>
        <CardContent>
          <Image
            alt="NFT Image"
            className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800 mb-4"
            height="100"
            src="https://assets.pox.me/memberships/membership.png"
            width="100"
          />
          <p className="text-gray-500 pb-6">
            <span className="font-bold text-gray-900 bg-yellow-200 px-1 rounded">
              {claimedMemberships()} membership NFTs
            </span>
            claimed
          </p>
          <p className="text-gray-500">
            <span className="font-bold text-gray-900 bg-yellow-200 px-1 rounded">
              {claimableMemberships()} membership NFTs
            </span>
            available to claim
          </p>
          <div className="flex justify-center">
            <Button
              disabled={claimableMemberships() < 1}
              onClick={() => writeContract(claimMembershipsConfig!.request)}
              className="mt-4 inline-flex items-center rounded-md border border-transparent bg-gray-900 px-2.5 py-0.5 text-xs font-semibold text-gray-50 shadow transition-colors hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80 dark:focus:ring-gray-300"
            >
              Claim Membership NFTs
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

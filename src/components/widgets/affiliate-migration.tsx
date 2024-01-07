"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import BigNumber from "bignumber.js";
import { useAccount, useContractRead, useContractWrite, useNetwork, usePrepareContractWrite } from "wagmi";
import addresses from "@/contracts/addresses";
import migrationAbi from "@/contracts/abi/migration.json";
import { uint256ToNumber } from "@/utils/bigNumber";

export default function AffiliateMigration() {
  const {chain} = useNetwork();
  const {address} = useAccount();

  const {data: userInfo}: {
    data: {
      deposited: BigNumber;
      minted: BigNumber;
      mintedAffiliates: BigNumber;
    } | undefined;
  } = useContractRead({
    address: addresses(chain?.id)['PoXMigration'],
    abi: migrationAbi.abi,
    functionName: 'getUserInfo',
    args: [address],
  })

  const {config: claimAffiliatesConfig} = usePrepareContractWrite({
    address: addresses(chain?.id)['PoXMigration'],
    abi: migrationAbi.abi,
    functionName: 'claimAffiliates',
    args: [],
  })

  const {
    data: claimedAmount,
    isLoading: isLoadingClaim,
    isSuccess: isSuccessClaim,
    write: claimAffiliates
  } = useContractWrite(claimAffiliatesConfig)

  const claimableAffiliates = () => {
    if (userInfo) {
      const deposited = uint256ToNumber(userInfo?.deposited) || 0;
      const mintedAffiliates = Number(userInfo?.mintedAffiliates);
      // Divide the amount of tokens deposited by 4000 rounding to the floor to get the amount of NFTs
      return Math.floor(deposited / 40000) - mintedAffiliates;
    }
  }

  const claimedAffiliates = () => {
    return Number(userInfo?.mintedAffiliates);
  }

  return <Card>
    <CardHeader>
      <h3 className="text-lg font-semibold">Affiliate NFTs</h3>
    </CardHeader>
    <CardContent>
      <img
        alt="NFT Image"
        className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800 mb-4"
        height="100"
        src="/tokens/revealing-nft.png"
        width="100"
      />
      <p className="text-gray-500 pb-6">
        <span className="font-bold text-gray-900 bg-yellow-200 px-1 rounded">{claimedAffiliates()} Affiliate NFTs</span>
        claimed
      </p>
      <p className="text-gray-500">
        <span
          className="font-bold text-gray-900 bg-yellow-200 px-1 rounded">{claimableAffiliates()} Affiliate NFTs</span>
        available to claim
      </p>
      <div className="bg-blue-100 border border-blue-100 text-black px-4 py-3 rounded relative mt-6" role="alert">
        <h2 className="font-bold text-center">Migration Paused</h2>
        <span className="block sm:inline">The NFTs APIs are being developed, the claim process will start soon.</span>
      </div>
      <Button
        disabled
        onClick={() => claimAffiliates?.()}
        className="mt-4 inline-flex items-center rounded-md border border-transparent bg-gray-900 px-2.5 py-0.5 text-xs font-semibold text-gray-50 shadow transition-colors hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80 dark:focus:ring-gray-300">
        Claim Affiliate NFTs
      </Button>
    </CardContent>
  </Card>;
}

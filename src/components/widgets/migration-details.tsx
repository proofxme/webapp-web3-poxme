"use client";

import TokenMigration from "@/components/widgets/token-migration";
import AffiliateMigration from "@/components/widgets/affiliate-migration";
import MembershipMigration from "@/components/widgets/membership-migration";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";

export default function MigrationDetails() {
  const {address} = useAccount();
  return (
    <section key="2" className="w-full lg:w-3/4 lg:m-auto">
      <div className="grid items-center justify-center gap-4 text-center md:px-6 lg:gap-10">
        {!address && (
          <Card className="mx-auto bg-white rounded-xl shadow-md overflow-hidden md:w-[60rem]">
            <CardHeader className="flex items-center space-x-3">
              <Image
                alt="Logo"
                className="h-12 w-12"
                height="50"
                src="/tokens/poxme.jpg"
                style={{
                  aspectRatio: "50/50",
                  objectFit: "cover",
                  // make the image round
                  borderRadius: "9999px",
                }}
                width="50"
              />
            </CardHeader>
            <CardContent>
              <>
                <div className="text-red-700 bg-red-100   px-4 py-3 rounded rounded-base relative mt-6">
                  Please Connect your wallet to continue
                </div>
                <div className="flex justify-center mt-3">
                  <ConnectButton/>
                </div>
              </>
            </CardContent>
          </Card>
        )}
        {address && (
          <>
            {/* Alert Div (Remains unchanged as it meets the requirements) */}
            <div className="bg-blue-100 border border-blue-100 text-black px-4 py-3 rounded relative mt-6" role="alert">
              <h2 className="font-bold text-center">
                The minimum amount to migrate is 4000 <strong style={{color: "blue"}}>$EULER</strong> tokens
              </h2>
              <span className="block sm:inline">The migration represents a procedure designed to benefit all initial supporters of the protocol. Should you have been present from the outset yet were unable to acquire the minimum requirement, please direct message <span
                className="font-bold">@tebayoso</span> on Telegram.</span>
            </div>

            {/* TokenMigration Full Width */}
            <div className="grid grid-cols-1 gap-4 mt-6">
              {address && <TokenMigration/>}
            </div>

            {/* MembershipMigration and AffiliateMigration */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {/* MembershipMigration Half Width on Desktop, Full Width on Mobile */}
              {address && <div className="md:col-span-1"><MembershipMigration/></div>}

              {/* Assuming AffiliateMigration should follow the same pattern as MembershipMigration */}
              {address && <div className="md:col-span-1"><AffiliateMigration/></div>}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

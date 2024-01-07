"use client"

import TokenMigration from "@/components/widgets/token-migration";
import AffiliateMigration from "@/components/widgets/affiliate-migration";
import MembershipMigration from "@/components/widgets/membership-migration";
import { useAccount } from "wagmi";


export default function MigrationDetails() {
  const {address} = useAccount();
  return (
    <section key="1" className="w-full">
      <h2 className="text-4xl py-6 text-center font-bold tracking-tighter" style={{color: "purple"}}><strong
        style={{color: "black"}}>Second
        Step: </strong> Migrate the
        tokens to the new
        Protocol</h2>
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        {address &&
          <div className="bg-blue-100 border border-blue-100 text-black px-4 py-3 rounded relative mt-6" role="alert">
            <h2 className="font-bold text-center">The minimum amount to migrate is 4000 <strong
              style={{color: 'blue'}}>$EULER</strong> tokens </h2>
            <span className="block sm:inline">The migration represents a procedure designed to benefit all initial supporters of the protocol. Should you have been present from the outset yet were unable to acquire the minimum requirement, please direct message @tebayoso on Telegram.</span>
          </div>}
        {!address &&
          <div className="bg-red-500 border border-red-400 text-white px-4 py-3 rounded relative mt-6">Please
            Connect your wallet to continue</div>}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {address && <TokenMigration/>}
          {address && <MembershipMigration/>}
          {address && <AffiliateMigration/>}
        </div>
      </div>
    </section>
  )
}

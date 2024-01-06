"use client"

import TokenMigration from "@/components/widgets/token-migration";
import AffiliateMigration from "@/components/widgets/affiliate-migration";
import MembershipMigration from "@/components/widgets/membership-migration";


export default function MigrationDetails() {
  return (
    <section key="1" className="w-full">
      <h2 className="text-4xl py-6 text-center font-bold tracking-tighter" style={{color: "purple"}}><strong
        style={{color: "black"}}>Second
        Step: </strong> Migrate the
        tokens to the new
        Protocol</h2>
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <TokenMigration/>
          <MembershipMigration/>
          <AffiliateMigration/>
        </div>
      </div>
    </section>
  )
}

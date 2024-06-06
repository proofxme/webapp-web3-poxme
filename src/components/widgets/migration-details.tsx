"use client";

import AffiliateMigration from "@/components/widgets/affiliate-migration";
import MembershipMigration from "@/components/widgets/membership-migration";
import { useAccount } from "wagmi";

export default function MigrationDetails() {
  const {address} = useAccount();
  return (
    <section key="2" className="w-full lg:w-3/4 lg:m-auto">
      <div className="grid items-center justify-center gap-4 text-center md:px-6 lg:gap-10">
        {address && (
          <>
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

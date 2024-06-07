'use server';

import { getLogtoContext } from "@/lib/logto";
import TokenCard from "app/(dashboard)/dashboard/token-card";

export default async function Dashboard() {
  const {isAuthenticated, claims} = await getLogtoContext();

  if (!isAuthenticated || !claims) {
    return <div>Unauthorized</div>
  }

  return (
    <div>
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div
          className="flex flex-col items-center justify-center w-full h-32 bg-gradient-to-r from-[#FFD700] to-[#FFA500]">
          <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full">
          </div>
          <h1 className="mt-2 text-2xl font-bold">Welcome, {claims.username}</h1>
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4 md:flex-row md:gap-4">
            <div className="flex flex-col gap-4 md:w-1/2">
              <TokenCard/>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

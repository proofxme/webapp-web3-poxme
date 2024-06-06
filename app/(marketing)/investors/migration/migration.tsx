"use client";

import { Button } from "@/components/ui/button";
import MigrationDetails from "@/components/widgets/migration-details";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Migration() {
  return (
    <main className="flex min-h-screen flex-col h-auto bg-gray-50 px-3">
      <div className="flex flex-col items-center justify-center w-full h-full lg:px-12">
        <div className=" text-center w-full">
          <div
            className="bg-red-100 border-l-4 border-orange-500 text-orange-700 p-4 mt-8"
            role="alert"
          >
            <p className="font-bold">Migration Period is over</p>
            <p className="text-sm">
              The migration process is over, and the new token is live. You cannot migrate any more tokens to the new
              token, but you can acquire <i style={{color: "blue"}} className={"" + "font-bold"}>
              $POXME{" "}
            </i> at Uniswap on this link: <br/>
            </p>
            <Button
              className="bg-gradient-to-r from-blue-900 via-white-500 to-blue-500 hover:from-blue-400 hover:via-white-500 hover:to-blue-500 mt-4"
              onClick={() => window.open("https://app.uniswap.org/swap?outputCurrency=0xb469783b6b3615180da05571beec716b639cbe85", "_blank")}
            >
              Buy at Uniswap{" "}
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-full pt-12">
          <ConnectButton/>
        </div>
        <div className="pt-12 px-2">
          <div className="w-full">
            <MigrationDetails/>
          </div>
        </div>
      </div>
    </main>
  );
}

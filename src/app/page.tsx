"use client"

import { ConnectButton } from "@rainbow-me/rainbowkit";
import Questions from "@/components/widgets/questions";
import StakingDetails from "@/components/widgets/staking-details";
import { useNetwork } from "wagmi";
import { Button } from "@/components/ui/button";
import MigrationDetails from "@/components/widgets/migration-details";

export default function Home() {
  const {chain} = useNetwork()

  return (
    <main className="flex min-h-screen flex-col lg:p-8 h-auto">
      <header className="justify-between items-center lg:flex pt-0">
        <div className="max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p
            className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Proof of X&nbsp;
            <code className="font-mono font-bold">Web3 Center</code>
          </p>
        </div>
        <div
          className="flex w-full justify-center bg-gradient-to-t from-white via-white mt-16 lg:mt-0 dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <ConnectButton/>
        </div>
      </header>
      <div className="flex flex-col items-center justify-center w-full h-full py-14 px-12">
        <div className="space-y-3 text-center w-full">
          <h2 className="text-4xl text-center font-bold tracking-tighter">Migration Center</h2>
          <p
            className="mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            During the migration period, you can deposit <i style={{color: "blue"}}
                                                            className={"" + "font-bold"}>$EULER </i>
            to get the new token and claim your membership NFTs.
          </p>
          <p
            className="mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">The
            migration process is a unique opportunity to continue supporting @tebayoso during the Proof of X
            development, while maintaining the value you deposited and have an opportunity to claim back the
            investment</p>

          <Button
            className="bg-gradient-to-r from-purple-900 via-white-500 to-purple-500 hover:from-purple-400 hover:via-white-500 hover:to-purple-500"
            onClick={() => window.open("https://t.me/proofxme", "_blank")}
          >
            <svg
              className="h-5 w-5 mr-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg">
              <path
                id="telegram-1"
                d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"/>
            </svg>
            Join
            our telegram </Button>
        </div>
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-6" role="alert">
          <h2 className="font-bold text-center">Irreversible Actions</h2>
          <span className="block sm:inline">Please, read the FAQ section, or contact us in the official telegram channel if you have doubts. This is an irreversible migration process</span>
        </div>
        <h2 className="text-4xl pt-14 text-center font-bold tracking-tighter" style={{color: "purple"}}><strong
          style={{color: "black"}}>First
          Step:</strong> Withdraw the tokens from the staking</h2>
        <div
          className="lg:flex pt-14 relative flex place-items-center">
          <StakingDetails/>
        </div>
        <div
          className="lg:flex pt-14 relative flex place-items-center">
          <MigrationDetails/>
        </div>
        <div
          className="lg:flex pt-14 relative flex place-items-center">
          <Questions/>
        </div>
      </div>
    </main>
  )
}

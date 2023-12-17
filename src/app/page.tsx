import { ConnectButton } from "@rainbow-me/rainbowkit";
import StakingDetails from "@/components/widgets/staking-details";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-5 lg:p-8 h-auto">
      <header className="justify-between items-center lg:flex">
        <div className="max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p
            className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Proof of X&nbsp;
            <code className="font-mono font-bold">Web3 Center</code>
          </p>
        </div>
        <div
          className="flex w-full justify-center bg-gradient-to-t from-white via-white mt-16 lg:mt-0 dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <ConnectButton/>
        </div>
      </header>
      <div
        className="lg:flex pt-14 relative flex place-items-center">
        <StakingDetails/>
      </div>
    </main>
  )
}

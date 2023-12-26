import { ConnectButton } from "@rainbow-me/rainbowkit";
import MigrationDetails from "@/components/widgets/migration-details";
import Questions from "@/components/widgets/questions";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col pt-5 lg:p-8 h-auto">
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
      <div className="flex flex-col items-center justify-center w-full h-full py-14 px-12">
        <div className="space-y-3 text-center w-full">
          <h2 className="text-3xl text-center font-bold tracking-tighter sm:text-4xl md:text-5xl">Migration Center</h2>
          <p
            className="mx-auto text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            During the migration period, you can deposit <i style={{color: "blue"}}
                                                            className={"" + "font-bold"}>$EULER</i> to get the new token
            and
            claim
            your membership NFTs.
          </p>
          <p>The migration process is a unique opportunity to continue supporting @tebayoso during the Proof of X
            development, while maintaining the value you deposited and have an opportunity to claim back the
            investment</p>
        </div>
        <div
          className="lg:flex pt-14 relative flex place-items-center">
          <MigrationDetails/>
        </div>
        <div
          className="place-items-center w-full">
          <Questions/>
        </div>
      </div>
    </main>
  )
}

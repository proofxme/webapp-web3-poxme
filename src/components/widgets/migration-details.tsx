/**
 * v0 by Vercel.
 * @see https://v0.dev/t/5Wrm2cc6pCx
 */
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import StakingDetails from "@/components/widgets/staking-details";

export default function MigrationDetails() {
  return (
    <section key="1" className="w-full py-12 md:py-24 lg:py-6">
      <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Migration Center</h2>
          <p
            className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Deposit your old <i>$EULER</i> tokens and claim your new <i>$POXME</i> tokens and NFTs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <StakingDetails/>
            <Card className="mb-4 my-3">
              <CardHeader>
                <h3 className="text-lg font-semibold">Deposit Euler</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">Deposit Euler to get the new token</p>
                <div className="flex w-full max-w-sm items-center space-x-2 mt-4">
                  <Input placeholder="Amount" type="number"/>
                  <Button disabled>Deposit</Button>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold">Tokens</h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  You have
                  <span className="font-bold text-gray-900">100 tokens</span>
                  available
                </p>
                <p className="text-gray-500 mt-2">
                  You have claimed
                  <span className="font-bold text-gray-900">100 tokens</span>
                </p>
                <Button
                  disabled
                  className="mt-4inline-flex items-center rounded-md border border-transparent bg-gray-900 px-2.5 py-0.5 text-xs font-semibold text-gray-50 shadow transition-colors hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80 dark:focus:ring-gray-300">
                  Claim More Tokens
                </Button>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold">Membership NFTs</h3>
            </CardHeader>
            <CardContent>
              <img
                alt="NFT Image"
                className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800 mb-4"
                height="100"
                src="/tokens/revealing-nft.png"
                width="100"
              />
              <p className="text-gray-500">
                You have
                <span className="font-bold text-gray-900 bg-yellow-200 px-1 rounded">3 membership NFTs</span>
                available to claim
              </p>
              <Button
                disabled
                className="mt-4 inline-flex items-center rounded-md border border-transparent bg-gray-900 px-2.5 py-0.5 text-xs font-semibold text-gray-50 shadow transition-colors hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80 dark:focus:ring-gray-300">
                Claim Membership NFTs
              </Button>
            </CardContent>
          </Card>
          <Card>
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
              <p className="text-gray-500">
                You have
                <span className="font-bold text-gray-900 bg-yellow-200 px-1 rounded">2 affiliate NFTs</span>
                available to claim
              </p>
              <Button
                disabled
                className="mt-4 inline-flex items-center rounded-md border border-transparent bg-gray-900 px-2.5 py-0.5 text-xs font-semibold text-gray-50 shadow transition-colors hover:bg-gray-900/80 focus:outline-none focus:ring-2 focus:ring-gray-950 focus:ring-offset-2 dark:border-gray-800 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/80 dark:focus:ring-gray-300">
                Claim Affiliate NFTs
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

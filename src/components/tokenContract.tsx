import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
  CardFooter,
} from "@/components/ui/card";
import { getBigNumberCurrencyLabel } from "@/utils/bigNumber";
import addresses from "@/contracts/addresses";
import poxmeToken from "@/contracts/abi/poxmeToken.json";
import { useReadContract } from "wagmi";
import CopyToClipboardButton from "@/components/copy-clipboard";
import { Button } from "./ui/button";

export default function TokenContract() {
  const { data: poxmeSupply } = useReadContract({
    address: addresses(56)["PoxmeToken"],
    abi: poxmeToken.abi,
    functionName: "totalSupply",
    args: [],
  });

  return (
    <Card className="w-full max-w-lg">
      <CardHeader className="px-4 py-6 sm:px-6 sm:py-8">
        <CardTitle className="text-lg">Contract Information</CardTitle>
        <CardDescription className="text-sm">
          Essential details about the token contract.
        </CardDescription>
      </CardHeader>
      <CardContent className="px-4 py-6 grid gap-1 sm:gap-4 sm:px-6">
        <div className="flex items-center gap-4">
          <div className="w-1/3 text-sm font-medium text-gray-500 dark:text-gray-400">
            Contract Address
          </div>
          <div className="w-2/3 font-mono break-all">
            0xb469783b6b3615180da05571beec716b639cbe85
          </div>
          <CopyToClipboardButton text="0xb469783b6b3615180da05571beec716b639cbe85" />
        </div>
        <div className="flex items-center gap-4">
          <div className="w-1/3 text-sm font-medium text-gray-500 dark:text-gray-400">
            Token Symbol
          </div>
          <div className="w-2/3">POXME</div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-1/3 text-sm font-medium text-gray-500 dark:text-gray-400">
            Total Supply
          </div>
          <div className="w-2/3">
            {" "}
            {getBigNumberCurrencyLabel(
              poxmeSupply as unknown as string,
              true,
              2,
              true
            )}{" "}
            POXME
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="w-1/3 text-sm font-medium text-gray-500 dark:text-gray-400">
            Decimals
          </div>
          <div className="w-2/3">18</div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center gap-2">
        <a
          href="https://bscscan.com/token/0xb469783b6b3615180da05571beec716b639cbe85"
          target="_blank"
        >
          <Button size="sm" variant="outline">
            BSC Scan
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}

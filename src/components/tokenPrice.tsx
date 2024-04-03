"use client";

import { Button } from "@/components/ui/button";
import {
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import Image from "next/image";
import { useReadContract } from "wagmi";
import { getBigNumberCurrencyLabel } from "@/utils/bigNumber";
import poxmeToken from "@/contracts/abi/poxmeToken.json";
import addresses from "@/contracts/addresses";
import useTokenData from "@/hooks/useTokenData";

interface TokenPriceProps {
  scrollToInvestSection: () => void;
}

const TokenPrice: React.FC<TokenPriceProps> = ({ scrollToInvestSection }) => {
  const { data: poxmeSupply } = useReadContract({
    address: addresses(56)["PoxmeToken"],
    abi: poxmeToken.abi,
    functionName: "totalSupply",
    args: [],
  });

  const { tokenData, isLoading } = useTokenData();

  let marketCap: number | bigint | undefined;

  if (tokenData !== undefined) {
    marketCap = Number(tokenData.baseTokenPrice) * Number(poxmeSupply);
  }

  return (
    <Card className="w-full max-w-md p-6 gap-6">
      <CardHeader className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <Image
            alt="Logo"
            className="rounded-full"
            height="48"
            src="/tokens/poxme.jpg"
            style={{
              aspectRatio: "48/48",
              objectFit: "cover",
            }}
            width="48"
          />
          <div className="text-2xl font-semibold leading-none">
            <span>POXME</span>
            <span className="opacity-50">/</span>
            <span>USD</span>
          </div>
        </div>
        <div className="text-3xl font-semibold">
          {isLoading
            ? "Loading..."
            : `${Number(tokenData.baseTokenPrice).toFixed(5)}`}{" "}
          USD
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="text-sm font-medium">Market Cap</div>
          <div className="font-medium">
            {getBigNumberCurrencyLabel(
              marketCap as unknown as string,
              true,
              2,
              true
            )}{" "}
            USD
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-sm font-medium">Volume (24h)</div>
          <div className="font-medium">
            {isLoading
              ? "Loading..."
              : `${Number(tokenData.volume).toFixed(2)} USD`}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-sm font-medium">Price</div>
          <div className="font-medium">
            {" "}
            {isLoading
              ? "Loading..."
              : `${Number(tokenData.baseTokenPrice).toFixed(5)}`}{" "}
            USD
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-sm font-medium">Change (24h)</div>
          <div className="font-medium">
            {isLoading ? "Loading..." : `${Number(tokenData.priceChange)}`} %
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center gap-2">
        <a
          href="https://www.geckoterminal.com/bsc/pools/0x5ee434338c0395f2b4a4be64afa9059ae254ece3"
          target="_blank"
        >
          <Button size="sm" variant="outline">
            View Chart
          </Button>
        </a>
        <Button size="sm" variant="outline" onClick={scrollToInvestSection}>
          Invest
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TokenPrice;

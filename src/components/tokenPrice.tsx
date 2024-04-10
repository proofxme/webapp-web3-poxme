"use client";

import { Button } from "@/components/ui/button";
import {
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { JSX, SVGProps } from "react";
import { useReadContract } from "wagmi";
import { getBigNumberCurrencyLabel } from "@/utils/bigNumber";
import poxmeToken from "@/contracts/abi/poxmeToken.json";
import addresses from "@/contracts/addresses";
import useTokenData from "@/hooks/useTokenData";

interface TokenPriceProps {
  scrollToInvestSection: () => void;
}

function ProofOfXIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      fill="none"
      height="50px"
      viewBox="0 0 24 24"
      width="50px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.28966 24H22.7103C23.4227 24 24 23.4226 24 22.7103V1.28967C24 0.577353 23.4227 0 22.7103 0H1.28966C0.577346 0 0 0.577353 0 1.28967V22.7106C0 23.4226 0.577346 24 1.28966 24Z"
        fill="#6465f7"
      />
      <path
        d="M9.03865 18.9985L9.06226 18.9679L9.19667 18.7844L6.78953 15.5752L2.57593 21.1185H7.48712L9.04004 18.9982L9.03865 18.9985Z"
        fill="white"
      />
      <path
        d="M9.88227 17.8627L12.5199 14.4933L12.5177 14.4905L21.4236 2.88184H16.6435L10.1097 11.4627L7.82088 8.19632H2.78027L9.88227 17.8627Z"
        fill="white"
      />
      <path
        d="M10.5907 18.8485H10.5905L12.2464 21.0702L12.2819 21.1185H17.4531L13.1534 15.5469L10.5907 18.8485Z"
        fill="white"
      />
    </svg>
  );
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
                      <ProofOfXIcon className=" rounded-full"/>

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

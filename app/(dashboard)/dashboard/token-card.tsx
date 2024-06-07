'use client';

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import LogoPoxme from "@/logo-poxme";
import { createConfig, useAccount, useReadContract } from "wagmi";
import addresses from "@/contracts/addresses";
import { getBalance } from "@wagmi/core";
import { useCallback, useEffect, useState } from "react";
import { mainnet } from "viem/chains";
import { http } from "viem";
import { bsc, bscTestnet } from "wagmi/chains";
import poolAbi from "@/contracts/abi/univ3Abi.json"
import { safeToCurrencyLabel } from "@/utils";

export default function TokenCard() {
  const {address, chainId} = useAccount();
  const [balance, setBalance] = useState(0);
  const token = addresses(chainId).PoxmeToken
  const [price, setPrice] = useState(0);
  const web3config = createConfig({
    chains: [mainnet, bsc, bscTestnet],
    transports: {
      [mainnet.id]: http(),
      [bscTestnet.id]: http(),
      [bsc.id]: http(),
    },
  });

  // get the slot0
  const {data: slot0} = useReadContract({
    address: "0x5ee434338c0395f2b4a4be64afa9059ae254ece3",
    abi: poolAbi,
    functionName: "slot0",
    args: [],
  });

  const getTokenBalance = useCallback(async () => {
    if (address && chainId) {
      const respBalance = await getBalance(web3config, {address, chainId, token})
      setBalance(Number(respBalance.value) / Math.pow(10, respBalance.decimals));
    }
  }, [address, chainId, token, web3config]);

  const getPrice = useCallback(async () => {
    // @ts-ignore
    const sqrtPriceX96 = slot0[0];

    // Convert BigInt to a number for the calculation
    const sqrtPriceX96AsNumber = Number(sqrtPriceX96);

    // Calculate the price of token 0 in terms of token 1
    const priceRatio = Math.pow(2 ** 96 / sqrtPriceX96AsNumber, 2);

    setPrice(priceRatio);
  }, [slot0]);


  useEffect(() => {
    getTokenBalance()
    if (chainId === 56) {
      getPrice()
    }
  }, [chainId, getPrice, getTokenBalance])

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex items-center gap-4 p-4">
        <div className="flex items-center gap-4">
          <LogoPoxme className="flex-shrink-0"/>
          <div className="flex flex-col">
            <h3 className="text-lg font-medium">$POXME</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">Check your balance and token information</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 dark:text-gray-400">Network</span>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                BNB Chain
                <ChevronDownIcon className="ml-2 h-4 w-4"/>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>BNB Chain</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400">Total Tokens Owned</span>
            <span className="text-lg font-medium">{safeToCurrencyLabel(balance)}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400">Price per Token</span>
            <span className="text-lg font-medium">{safeToCurrencyLabel(price)} US$</span>
          </div>
          <div className="line-clamp-1"></div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-medium">Total Value</span>
            <span className="text-2xl font-medium">{safeToCurrencyLabel(balance * price)} US$</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4">
        <Button
          className="bg-gradient-to-r from-blue-900 via-white-500 to-blue-500 hover:from-blue-400 hover:via-white-500 hover:to-blue-500 mt-4"
          onClick={() => window.open("https://app.uniswap.org/swap?outputCurrency=0xb469783b6b3615180da05571beec716b639cbe85", "_blank")}
        >
          Buy at Uniswap{" "}
        </Button>
      </CardFooter>
    </Card>
  )
}

function ChevronDownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6"/>
    </svg>
  )
}

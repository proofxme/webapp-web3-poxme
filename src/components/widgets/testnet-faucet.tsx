"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { type BaseError, useAccount, useBalance, useWriteContract, } from "wagmi";
import { useCallback, useState } from "react";
import faucet from "@/contracts/abi/faucet.json";
import addresses from "@/contracts/addresses";

export default function TestnetFaucet() {
  const {address, chain} = useAccount();
  const [amount, setAmount] = useState(BigInt(0));
  const [errorMsg, setErrorMsg] = useState("");

  const {
    data: hash,
    error,
    isPending,
    writeContract
  } = useWriteContract()


  const {data: eulerBalance} = useBalance({
    address: address,
    token: addresses(chain?.id)["OldToken"],
  });

  const claimTokens = useCallback(async () => {
    writeContract({
      address: addresses(chain?.id)["OldFaucet"],
      abi: faucet.abi,
      functionName: "claimTokens",
      args: [],
    });
  }, [chain?.id, writeContract])

  return (
    <section key="1" className="w-full">
      <div className="grid items-center justify-center gap-4 text-center md:px-6 lg:gap-10">
        <Card className="mb-4 my-3">
          <CardHeader>
            <h3 className="text-lg font-semibold text-center">
              Get <span style={{color: "blue"}}>TESTNET $EULER</span>
            </h3>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500 pb-6 text-center">
              This are <span style={{color: "blue"}}>TESTNET $EULER</span> to
              test the migration contract
            </p>
            <div className="flex w-full justify-center max-w-sm space-x-2 mt-4">
              {errorMsg ? (
                <p className="text-red-500">Error: {errorMsg}</p>
              ) : null}
              <Button
                disabled={isPending}
                onClick={() => claimTokens()}
              >
                Claim
              </Button>
              {error && (
                <div>Error: {(error as BaseError).shortMessage || error.message}</div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

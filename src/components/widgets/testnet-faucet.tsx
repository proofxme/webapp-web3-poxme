"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  useAccount,
  useBalance,
  useConnect,
  useWriteContract,
  useSimulateContract,
} from "wagmi";
import { useState } from "react";
import faucet from "@/contracts/abi/faucet.json";
import addresses from "@/contracts/addresses";

export default function TestnetFaucet() {
  const { address, chain } = useAccount();
  const [amount, setAmount] = useState(BigInt(0));
  const [errorMsg, setErrorMsg] = useState("");

  const { writeContract } = useWriteContract();

  const { data: eulerBalance } = useBalance({
    address: address,
    token: addresses(chain?.id)["OldToken"],
  });

  const { data: claimFaucetTokens } = useSimulateContract({
    address: addresses(chain?.id)["OldFaucet"],
    abi: faucet.abi,
    functionName: "claimTokens",
    args: [],
  });

  // if (!address || isLoadingClaim) return <>Loading...</>;

  return (
    <div>
      <Card className="mb-4 my-3">
        <CardHeader>
          <h3 className="text-lg font-semibold text-center">
            Get <span style={{ color: "blue" }}>TESTNET $EULER</span>
          </h3>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500 pb-6 text-center">
            This are <span style={{ color: "blue" }}>TESTNET $EULER</span> to
            test the migration contract
          </p>
          <div className="flex w-full justify-center max-w-sm space-x-2 mt-4">
            {errorMsg ? (
              <p className="text-red-500">Error: {errorMsg}</p>
            ) : null}
            <Button onClick={() => writeContract(claimFaucetTokens!.request)}>
              Claim
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

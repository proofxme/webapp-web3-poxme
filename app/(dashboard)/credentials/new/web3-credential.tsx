'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useState } from "react";
import { createCredential } from "app/api/credentials/create-credentials";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount, useSignMessage } from "wagmi";
import { Button } from "@/components/ui/button";
import { verifyWeb3Credential } from "app/api/credentials/verify-web3-credentials";

export default function Web3Credential() {
  const [error, setError] = useState('');
  const {address, chainId} = useAccount();
  const {signMessageAsync} = useSignMessage();

  const handleSubmit = async (e: any) => {
    try {
      const response = await createCredential({provider: `web3~${address}`, handler: address, kind: 'web3'}) as any;
      const {nonce} = response;
      const message = `Domain: ${window.location.host}\nAddress: ${address}\nStatement: Sign this message to verify your ownership of this address.\nURI: ${window.location.origin}\nVersion: 1\nChain ID: ${chainId}\nNonce: ${nonce}`;

      // 2. Sign the message using Rainbowkit
      const signed = await signMessageAsync({message});

      const validated = await verifyWeb3Credential({
        provider: `web3~${address}`,
        handler: address,
        signed,
        nonce,
        message
      }) as any;

      console.log(validated);
    } catch (error) {
      setError('Failed to add address. Please try again.');
    }
  };

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Verify your address.</CardTitle>
        <CardDescription>Connect your Wallet and verify the ownership of your web3 credential.</CardDescription>
      </CardHeader>
      <CardContent>
        {address && (
          <div className="space-y-4">
            <div className="space-y-4">
              <p className="text-lg font-bold">Your address:</p>
              <p className="text-lg">{address}</p>
            </div>
            <Button onClick={handleSubmit} className="w-full" variant="default">Verify Address</Button>
          </div>
        )}
        {!address && (
          <div className="space-y-4 content-center">
            <ConnectButton chainStatus='none' accountStatus='address' showBalance={false}/>
          </div>
        )}
      </CardContent>
    </Card>
  )
}


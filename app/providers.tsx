"use client";

import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { bsc, bscTestnet } from "wagmi/chains";
import { http } from "viem";
import { SessionProvider } from "next-auth/react";

const config = getDefaultConfig({
  appName: "Proof of X",
  projectId: "381f08b7876a5bfcf90ac02742447437",
  chains: [bsc, bscTestnet],
  ssr: true,
  transports: {
    [bscTestnet.id]: http(),
    [bsc.id]: http(),
  },
});

const queryClient = new QueryClient();

export function Providers({
                            children,
                            session,
                          }: {
  children: React.ReactNode;
  session: any;
}) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return (
    <SessionProvider session={session}>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>{mounted && children}</RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </SessionProvider>
  );
}

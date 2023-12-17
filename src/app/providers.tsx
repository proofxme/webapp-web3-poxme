'use client';

import * as React from 'react';
import { connectorsForWallets, getDefaultWallets, RainbowKitProvider, } from '@rainbow-me/rainbowkit';
import { argentWallet, ledgerWallet, trustWallet, } from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { bsc, bscTestnet, } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const {chains, publicClient, webSocketPublicClient} = configureChains(
  [
    bsc, bscTestnet,
  ],
  [publicProvider()]
);

const projectId = '381f08b7876a5bfcf90ac02742447437';

const {wallets} = getDefaultWallets({
  appName: 'Proof of X Web3',
  projectId,
  chains,
});

const demoAppInfo = {
  appName: 'Proof of X Web3',
};

const connectors = connectorsForWallets([
  ...wallets,
  {
    groupName: 'Other',
    wallets: [
      argentWallet({projectId, chains}),
      trustWallet({projectId, chains}),
      ledgerWallet({projectId, chains}),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export function Providers({children}: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} appInfo={demoAppInfo}>
        {mounted && children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

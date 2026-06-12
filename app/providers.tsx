"use client";

import React, { ReactNode } from 'react';
import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
import { WagmiProvider } from 'wagmi';
import { mainnet, bsc } from 'wagmi/chains';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// 1. Setup Query Client
const queryClient = new QueryClient();

// 2. Project ID
const projectId = 'b56e18d47c72ab683b11a21d4d29bf39'; 

// 3. Configure networks
const metadata = {
  name: 'USDX Rewards',
  description: 'Premium staking and rewards platform',
  url: 'https://dead-token-exchange.vercel.app',
  icons: ['https://avatars.githubusercontent.com/u/179241852']
};

const chains = [mainnet, bsc] as const;
const config = defaultWagmiConfig({ chains, projectId, metadata });

// 4. Create Web3Modal Instance
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true,
  themeMode: 'dark',
  themeVariables: {
    '--w3m-accent': '#f59e0b',
    '--w3m-background': '#111111',
  }
});

export function Providers({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}

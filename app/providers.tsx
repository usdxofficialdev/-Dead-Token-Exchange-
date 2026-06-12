"use client";

import React, { ReactNode } from 'react';
import { createAppKit } from '@reown/appkit/react';
import { mainnet, bsc } from '@reown/appkit/networks';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// 1. Setup Query Client
const queryClient = new QueryClient();

// 2. Project ID (Abhi ke liye demo ID hai, baad mein aap apni badal sakte hain)
const projectId = 'b56e18d47c72ab683b11a21d4d29bf39'; 

// 3. Configure networks (Mainnet aur BSC)
const networks = [mainnet, bsc];

// 4. Create Wagmi Adapter
const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true
});

// 5. Create AppKit Instance (Isme Email true rakha hai)
createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  features: {
    analytics: true,
    email: true, // Isse Email login enable ho jayega
    socials: ['google', 'apple', 'x'],
  },
  themeMode: 'dark',
  themeVariables: {
    '--w3m-accent': '#f59e0b', // Gold color for your premium theme
    '--w3m-background': '#111111',
  }
});

export function Providers({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}

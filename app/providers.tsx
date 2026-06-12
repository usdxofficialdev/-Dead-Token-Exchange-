'use client'

import { ReactNode } from 'react'
import { WagmiProvider } from 'wagmi'
import { mainnet, bsc } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers/react'

// 1. Query client
const queryClient = new QueryClient()

// 2. Project ID
const projectId = 'b56e18d47c72ab683b11a21d4d29bf39'

// 3. Metadata
const metadata = {
  name: 'USDX Rewards',
  description: 'Premium staking and rewards platform',
  url: 'https://dead-token-exchange.vercel.app',
  icons: ['https://avatars.githubusercontent.com/u/179241852']
}

// 4. Correct config (v4 style)
const wagmiConfig = defaultConfig({
  metadata,
  chains: [mainnet, bsc],
  projectId
})

// 5. Web3Modal init
createWeb3Modal({
  wagmiConfig,
  projectId,
  themeMode: 'dark',
  themeVariables: {
    '--w3m-accent': '#f59e0b',
    '--w3m-background': '#111111'
  }
})

export function Providers({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  )
}

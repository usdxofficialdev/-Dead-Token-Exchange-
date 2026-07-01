'use client'

import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiProvider, createConfig, http } from 'wagmi'
import { mainnet, bsc } from 'wagmi/chains'
import { ConnectKitProvider, getDefaultConfig } from 'connectkit'

const config = createConfig(
  getDefaultConfig({
    chains: [bsc, mainnet],
    transports: {
      [bsc.id]: http(),
      [mainnet.id]: http(),
    },
    walletConnectProjectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || '',
    appName: 'USDX Network',
    appDescription: 'Premium Crypto Staking Platform',
    appUrl: process.env.NEXT_PUBLIC_APP_URL || 'https://usdx.network',
    appIcon: 'https://usdx.network/logo.png',
  })
)

const queryClient = new QueryClient()

export function Providers({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider>
          {children}
        </ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

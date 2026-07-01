import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'USDX Network - Crypto Staking Platform',
  description: 'Secure & Transparent Staking Platform with High Rewards',
  openGraph: {
    title: 'USDX Network',
    description: 'Join thousands earning passive income through our decentralized staking platform',
    url: 'https://usdx.network',
    siteName: 'USDX Network',
    images: [
      {
        url: 'https://usdx.network/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'USDX Network',
    description: 'Premium Crypto Staking Platform',
    images: ['https://usdx.network/og-image.png'],
  },
}

export default function RootMetadata() {
  return null
}

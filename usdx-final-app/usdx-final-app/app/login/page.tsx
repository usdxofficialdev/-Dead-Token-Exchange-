'use client'

import { useEffect } from 'react'
import { useAccount } from 'wagmi'
import { useRouter } from 'next/navigation'
import ConnectWallet from '@/components/ConnectWallet'

export default function LoginPage() {
  const { isConnected } = useAccount()
  const router = useRouter()

  useEffect(() => {
    if (isConnected) {
      router.push('/dashboard')
    }
  }, [isConnected, router])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-gradient-to-br from-[#0a0a12] to-black border border-[#1a1a24] rounded-lg p-8">
          {/* LOGO */}
          <div className="flex justify-center mb-8">
            <div className="w-16 h-16 bg-[#e8c547] rounded-lg flex items-center justify-center font-bold text-3xl text-black">
              U
            </div>
          </div>

          {/* TITLE */}
          <h1 className="text-center text-3xl font-bold mb-2">USDX Network</h1>
          <p className="text-center text-gray-400 text-sm mb-8">
            Secure & Transparent Staking Platform
          </p>

          {/* CONNECT WALLET */}
          <ConnectWallet />

          {/* FEATURES */}
          <div className="mt-8 space-y-3 pt-8 border-t border-[#1a1a24]">
            <div className="flex items-center gap-3">
              <span className="text-[#e8c547]">✓</span>
              <span className="text-sm text-gray-400">Secure & Transparent</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#e8c547]">✓</span>
              <span className="text-sm text-gray-400">High Rewards</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#e8c547]">✓</span>
              <span className="text-sm text-gray-400">Fast & Easy</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[#e8c547]">✓</span>
              <span className="text-sm text-gray-400">24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

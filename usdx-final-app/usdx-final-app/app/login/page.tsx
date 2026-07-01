'use client'

import Link from 'next/link'
import { useAccount, useConnect } from 'wagmi'
import { useEffect } from 'react'
import { redirect } from 'next/navigation'

export default function LoginPage() {
  const { address, isConnected } = useAccount()
  const { connectors, connect } = useConnect()

  useEffect(() => {
    if (isConnected) {
      redirect('/dashboard')
    }
  }, [isConnected])

  return (
    <div className="min-h-screen bg-gradient-dark flex items-center justify-center p-4">
      <div className="w-full max-w-md glass rounded-2xl p-8 border border-[#e8c547]/20">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-16 h-16 bg-gradient-gold rounded-xl flex items-center justify-center font-bold text-2xl text-black shadow-glow">
            U
          </div>
        </div>

        {/* Header */}
        <h1 className="text-center text-3xl font-bold mb-2">USDX Network</h1>
        <p className="text-center text-gray-400 mb-8">
          Premium Crypto Staking Platform
        </p>

        {/* Connected Info */}
        {isConnected && address && (
          <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-6">
            <p className="text-green-400 font-bold text-sm">✓ Connected</p>
            <p className="text-xs text-gray-400 mt-1">
              {address.slice(0, 6)}...{address.slice(-4)}
            </p>
          </div>
        )}

        {/* Connect Button */}
        <div className="space-y-3">
          {connectors.map((connector) => (
            <button
              key={connector.uid}
              onClick={() => connect({ connector })}
              className="w-full bg-gradient-gold text-black font-bold py-3 rounded-lg hover:shadow-glow-lg transition flex items-center justify-center gap-2"
            >
              <span>🔗</span>
              Connect {connector.name}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-[#e8c547]/20"></div>
          <span className="text-xs text-gray-500">OR</span>
          <div className="flex-1 h-px bg-[#e8c547]/20"></div>
        </div>

        {/* Info */}
        <div className="space-y-4 text-center text-sm text-gray-400">
          <p>🔒 Secure wallet connection</p>
          <p>📊 0.35% Daily ROI</p>
          <p>🚀 24/7 Support</p>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            By connecting, you agree to our{' '}
            <Link href="/terms" className="text-[#e8c547] hover:underline">
              Terms
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

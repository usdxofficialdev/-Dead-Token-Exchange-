'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-dark p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/dashboard" className="flex items-center gap-2 text-[#e8c547] hover:text-white transition mb-4">
            <ArrowLeft size={20} />
            Back to Dashboard
          </Link>
          <h1 className="text-4xl font-bold">Profile</h1>
          <p className="text-gray-400 mt-2">View and edit your profile information</p>
        </div>

        {/* Profile Card */}
        <div className="glass rounded-lg p-8 space-y-6">
          {/* Avatar */}
          <div className="flex justify-center">
            <div className="w-24 h-24 bg-gradient-gold rounded-lg flex items-center justify-center font-bold text-4xl text-black shadow-glow">
              U
            </div>
          </div>

          {/* Info */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-400 mb-2">Wallet Address</label>
              <p className="text-white font-mono">0x742d35Cc6634C0532925a3b844Bc9e7595f9...def</p>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Member Since</label>
              <p className="text-white">May 15, 2024</p>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Current Tier</label>
              <p className="text-[#e8c547] font-bold">👑 Gold Member</p>
            </div>
            <div>
              <label className="block text-sm text-gray-400 mb-2">Account Status</label>
              <p className="text-green-500 font-bold">✓ Verified</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#e8c547]/20">
            <div>
              <p className="text-gray-400 text-xs mb-1">Total Staked</p>
              <p className="text-xl font-bold">800 USDX</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-1">Total Earned</p>
              <p className="text-xl font-bold text-[#e8c547]">320.75 USDX</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-1">Active Stakes</p>
              <p className="text-xl font-bold">1</p>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-1">Referrals</p>
              <p className="text-xl font-bold">12</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

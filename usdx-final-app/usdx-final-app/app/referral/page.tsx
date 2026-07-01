'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ReferralPage() {
  const [copied, setCopied] = useState(false)
  const referralLink = 'https://usdx.network/ref/abc123def456'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-dark p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/dashboard" className="text-[#e8c547] hover:text-white transition mb-4 inline-flex items-center gap-2">
            ← Back to Dashboard
          </Link>
          <h1 className="text-4xl font-bold">Referral Program</h1>
          <p className="text-gray-400 mt-2">Earn rewards by inviting friends</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="glass rounded-lg p-6">
            <p className="text-gray-400 text-sm">Total Referrals</p>
            <p className="text-4xl font-bold text-[#e8c547] mt-2">12</p>
          </div>
          <div className="glass rounded-lg p-6">
            <p className="text-gray-400 text-sm">Referral Earnings</p>
            <p className="text-4xl font-bold text-green-500 mt-2">250 USDX</p>
          </div>
          <div className="glass rounded-lg p-6">
            <p className="text-gray-400 text-sm">Commission Rate</p>
            <p className="text-4xl font-bold text-blue-500 mt-2">10%</p>
          </div>
        </div>

        {/* Share Link */}
        <div className="glass rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-4">Share Your Referral Link</h2>
          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={referralLink}
              readOnly
              className="flex-1 bg-[#1a1a24] border border-[#e8c547]/20 rounded-lg px-4 py-3 text-white font-mono text-sm"
            />
            <button
              onClick={copyToClipboard}
              className="bg-gradient-gold text-black font-bold px-6 rounded-lg hover:shadow-glow transition"
            >
              {copied ? '✓ Copied' : 'Copy'}
            </button>
          </div>
          <p className="text-gray-500 text-sm">
            Share this link with your friends. When they join and stake, you earn 10% commission!
          </p>
        </div>

        {/* Referrals List */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Your Referrals</h2>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="glass rounded-lg p-4 flex justify-between items-center">
                <div>
                  <p className="font-bold">Referred User #{i}</p>
                  <p className="text-sm text-gray-400 mt-1">0x742d...def • Joined 3 months ago</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-[#e8c547]">+25 USDX</p>
                  <p className="text-xs text-gray-400 mt-1">Commission earned</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import Link from 'next/link'
import { Gift, TrendingUp, Clock } from 'lucide-react'

export default function RewardsPage() {
  const rewards = [
    { id: 1, amount: 50.00, date: 'Today', status: 'Unclaimed', icon: '🎁' },
    { id: 2, amount: 45.50, date: 'Yesterday', status: 'Claimed', icon: '✓' },
    { id: 3, amount: 42.30, date: '2 days ago', status: 'Claimed', icon: '✓' },
  ]

  return (
    <div className="min-h-screen bg-black p-8">
      <Link href="/dashboard" className="text-[#e8c547] hover:text-[#d4a25e] mb-6 inline-block">← Back to Dashboard</Link>
      
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Rewards</h1>
        <p className="text-gray-400 mb-8">Manage your earned rewards</p>

        {/* SUMMARY */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#0a0a12] border border-[#1a1a24] rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <Gift size={24} className="text-[#e8c547]" />
              <span className="text-gray-400 text-sm">Total Rewards</span>
            </div>
            <p className="text-3xl font-bold text-[#e8c547]">120.50 USDX</p>
          </div>
          <div className="bg-[#0a0a12] border border-[#1a1a24] rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp size={24} className="text-green-500" />
              <span className="text-gray-400 text-sm">Claimed</span>
            </div>
            <p className="text-3xl font-bold text-green-500">87.80 USDX</p>
          </div>
          <div className="bg-[#0a0a12] border border-[#1a1a24] rounded-lg p-6">
            <div className="flex items-center gap-3 mb-2">
              <Clock size={24} className="text-yellow-500" />
              <span className="text-gray-400 text-sm">Unclaimed</span>
            </div>
            <p className="text-3xl font-bold text-yellow-500">32.70 USDX</p>
          </div>
        </div>

        {/* REWARDS TABLE */}
        <div className="bg-[#0a0a12] border border-[#1a1a24] rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Recent Rewards</h2>
          <div className="space-y-3">
            {rewards.map((reward) => (
              <div key={reward.id} className="flex justify-between items-center bg-[#1a1a24] p-4 rounded border-l-4 border-[#e8c547]">
                <div>
                  <p className="font-bold">{reward.amount} USDX</p>
                  <p className="text-gray-400 text-sm">{reward.date}</p>
                </div>
                <span className={`px-4 py-2 rounded font-bold text-sm ${reward.status === 'Claimed' ? 'bg-green-500/20 text-green-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                  {reward.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CLAIM BUTTON */}
        <button className="w-full mt-8 bg-gradient-to-r from-[#e8c547] to-[#d4a25e] text-black font-bold py-4 rounded-lg hover:shadow-lg hover:shadow-[#e8c547]/50 text-lg">
          Claim All Rewards
        </button>
      </div>
    </div>
  )
}

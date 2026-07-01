'use client'

import { useRewards } from '@/hooks/useRewards'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function RewardsPage() {
  const { rewards, isLoading, claimReward, isClaiming } = useRewards()

  const pendingRewards = rewards.filter((r) => r.status === 'pending')
  const totalPending = pendingRewards.reduce((sum, r) => sum + r.amount, 0)

  return (
    <div className="min-h-screen bg-gradient-dark p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/dashboard" className="flex items-center gap-2 text-[#e8c547] hover:text-white transition mb-4">
            <ArrowLeft size={20} />
            Back to Dashboard
          </Link>
          <h1 className="text-4xl font-bold">Rewards</h1>
          <p className="text-gray-400 mt-2">Manage your earned rewards</p>
        </div>

        {/* Summary */}
        <div className="glass rounded-lg p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-gray-400 text-sm">Total Pending</p>
              <p className="text-4xl font-bold text-[#e8c547] mt-2">{totalPending.toFixed(2)}</p>
              <p className="text-gray-500 text-xs mt-1">USDX</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Total Claimed</p>
              <p className="text-4xl font-bold text-green-500 mt-2">320.75</p>
              <p className="text-gray-500 text-xs mt-1">USDX</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm">Today's Earnings</p>
              <p className="text-4xl font-bold text-blue-500 mt-2">2.80</p>
              <p className="text-gray-500 text-xs mt-1">USDX</p>
            </div>
          </div>
        </div>

        {/* Pending Rewards */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">📊 Pending Rewards</h2>
          <div className="space-y-3">
            {isLoading ? (
              <div className="text-center py-8 text-gray-400">Loading rewards...</div>
            ) : pendingRewards.length === 0 ? (
              <div className="glass rounded-lg p-6 text-center text-gray-400">
                No pending rewards
              </div>
            ) : (
              pendingRewards.map((reward) => (
                <div key={reward.id} className="glass rounded-lg p-4 flex justify-between items-center">
                  <div>
                    <p className="font-bold">{reward.amount.toFixed(4)} USDX</p>
                    <p className="text-sm text-gray-400 mt-1">From {reward.source}</p>
                  </div>
                  <button
                    onClick={() => claimReward(reward.id)}
                    disabled={isClaiming}
                    className="bg-gradient-gold text-black font-bold px-6 py-2 rounded-lg hover:shadow-glow transition disabled:opacity-50"
                  >
                    {isClaiming ? 'Claiming...' : 'Claim'}
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Claim All Button */}
        {pendingRewards.length > 0 && (
          <button className="w-full bg-gradient-gold text-black font-bold py-4 rounded-lg hover:shadow-glow-lg transition mb-8">
            💰 Claim All Rewards ({totalPending.toFixed(2)} USDX)
          </button>
        )}
      </div>
    </div>
  )
}

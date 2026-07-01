'use client'

import { useStakes } from '@/hooks/useStakes'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function MyStakesPage() {
  const { stakes, isLoading } = useStakes()

  return (
    <div className="min-h-screen bg-gradient-dark p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/dashboard" className="flex items-center gap-2 text-[#e8c547] hover:text-white transition mb-4">
            <ArrowLeft size={20} />
            Back to Dashboard
          </Link>
          <h1 className="text-4xl font-bold">My Stakes</h1>
          <p className="text-gray-400 mt-2">Manage your active staking positions</p>
        </div>

        {/* Stakes List */}
        <div className="space-y-4">
          {isLoading ? (
            <div className="text-center py-12 text-gray-400">Loading stakes...</div>
          ) : stakes.length === 0 ? (
            <div className="glass rounded-lg p-8 text-center">
              <p className="text-gray-400 mb-4">No active stakes</p>
              <Link href="/stake" className="text-[#e8c547] hover:underline">
                Start Staking Now →
              </Link>
            </div>
          ) : (
            stakes.map((stake) => (
              <div key={stake.id} className="glass rounded-lg p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{stake.amount.toFixed(2)} USDX</h3>
                    <p className="text-gray-400 text-sm mt-1">
                      Staked on {new Date(stake.start_date).toLocaleDateString()}
                    </p>
                  </div>
                  <span className="bg-green-500 text-black px-4 py-2 rounded-full text-sm font-bold">ACTIVE</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Lock Period</p>
                    <p className="text-lg font-bold">{stake.lock_period} Days</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Daily Reward</p>
                    <p className="text-lg font-bold text-[#e8c547]">{stake.daily_reward.toFixed(4)}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">ROI</p>
                    <p className="text-lg font-bold text-green-400">{stake.roi_percentage}%</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">Status</p>
                    <p className="text-lg font-bold capitalize">{stake.status}</p>
                  </div>
                </div>

                <div className="border-t border-[#e8c547]/20 pt-4 flex gap-2">
                  <button className="flex-1 bg-gradient-gold text-black font-bold py-2 rounded-lg hover:shadow-glow transition text-sm">
                    Claim Rewards
                  </button>
                  <button className="flex-1 border border-[#e8c547] text-[#e8c547] font-bold py-2 rounded-lg hover:bg-[#e8c547]/10 transition text-sm">
                    Manage
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

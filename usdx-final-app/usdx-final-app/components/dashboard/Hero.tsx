'use client'

import { useDashboard } from '@/hooks/useDashboard'
import { useRewards } from '@/hooks/useRewards'

export function Hero() {
  const { stats } = useDashboard()
  const { rewards } = useRewards()

  const totalPendingRewards = rewards.reduce((sum, r) => sum + r.amount, 0)

  return (
    <div className="mb-8 rounded-2xl border border-[#e8c547]/20 bg-gradient-to-r from-[#12121c] via-[#151521] to-[#1b1b28] p-6 md:p-8">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
        <div>
          <p className="text-[#e8c547] font-semibold text-sm">👋 Good Morning</p>
          <h1 className="text-4xl md:text-5xl font-bold mt-2">Welcome to USDX Network</h1>
          <p className="text-gray-400 mt-3 max-w-xl">
            Stake your USDX tokens, earn daily rewards, unlock Membership benefits and grow your passive income on BNB Smart Chain.
          </p>
          <div className="flex flex-wrap gap-3 mt-5">
            <span className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold">👑 Gold Member</span>
            <span className="bg-green-600 px-4 py-2 rounded-full text-sm">✅ Active</span>
          </div>
        </div>

        <div className="glass rounded-xl p-6 min-w-[300px]">
          <p className="text-gray-400 text-sm">Today's Reward</p>
          <h2 className="text-5xl font-bold text-[#e8c547] mt-2">{totalPendingRewards.toFixed(2)}</h2>
          <p className="text-green-500 mt-2">+0.35% Daily ROI</p>
          <button className="mt-5 w-full bg-gradient-gold text-black font-bold py-3 rounded-xl hover:shadow-glow-lg transition">
            Claim Rewards
          </button>
        </div>
      </div>
    </div>
  )
}

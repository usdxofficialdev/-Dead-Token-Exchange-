'use client'

import { useStakes } from '@/hooks/useStakes'
import { LoadingSkeleton } from './LoadingSkeleton'

export function ActiveStake() {
  const { stakes, isLoading } = useStakes()
  const activeStake = stakes[0]

  if (isLoading) return <LoadingSkeleton />

  if (!activeStake) {
    return (
      <div className="lg:col-span-2 glass rounded-lg p-6">
        <div className="text-center py-12">
          <p className="text-gray-400 mb-3">No active stakes</p>
          <button className="bg-gradient-gold text-black font-bold px-6 py-2 rounded-lg hover:shadow-glow transition">
            Start Staking
          </button>
        </div>
      </div>
    )
  }

  const progress = 42

  return (
    <div className="lg:col-span-2 glass rounded-lg p-6">
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold">🚀 Active Stake</h3>
            <p className="text-gray-400 text-sm mt-1">Your current staking position</p>
          </div>
          <span className="bg-green-500 text-black px-4 py-2 rounded-full text-xs font-bold">● ACTIVE</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-5xl font-bold text-[#e8c547]">{activeStake.amount.toFixed(2)}</p>
            <p className="text-3xl font-bold text-[#e8c547]">USDX</p>
            <p className="text-gray-400 mt-3">Gold Membership • BNB Smart Chain</p>
          </div>

          <div>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-400">Stake Progress</span>
              <span className="text-[#e8c547] font-bold">{progress}%</span>
            </div>
            <div className="w-full bg-[#1a1a24] rounded-full h-3 overflow-hidden">
              <div
                className="bg-gradient-gold h-3 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-[#15151d] border border-[#e8c547]/20 rounded-xl p-5 hover:border-[#e8c547] transition">
            <p className="text-xs text-gray-400 mb-2">💰 Daily Reward</p>
            <h4 className="text-xl font-bold text-[#e8c547]">{activeStake.daily_reward.toFixed(2)} USDX</h4>
          </div>
          <div className="bg-[#15151d] border border-[#e8c547]/20 rounded-xl p-5 hover:border-[#e8c547] transition">
            <p className="text-xs text-gray-400 mb-2">📈 ROI</p>
            <h4 className="text-xl font-bold text-green-400">{activeStake.roi_percentage}%</h4>
          </div>
          <div className="bg-[#15151d] border border-[#e8c547]/20 rounded-xl p-5 hover:border-[#e8c547] transition">
            <p className="text-xs text-gray-400 mb-2">🔒 Lock Period</p>
            <h4 className="text-xl font-bold">{activeStake.lock_period} Days</h4>
          </div>
          <div className="bg-[#15151d] border border-[#e8c547]/20 rounded-xl p-5 hover:border-[#e8c547] transition">
            <p className="text-xs text-gray-400 mb-2">⏳ Remaining</p>
            <h4 className="text-xl font-bold text-red-400">28 Days Left</h4>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <button className="w-full bg-gradient-gold text-black font-bold py-4 rounded-xl hover:shadow-glow-lg transition">
            🎁 Claim Reward
          </button>
          <button className="w-full border border-[#e8c547] text-[#e8c547] font-bold py-4 rounded-xl hover:bg-[#e8c547]/10 transition">
            ⚙️ Manage Stake
          </button>
        </div>
      </div>
    </div>
  )
}

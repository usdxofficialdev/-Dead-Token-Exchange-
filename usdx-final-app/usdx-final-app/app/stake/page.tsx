'use client'

import { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function StakePage() {
  const [amount, setAmount] = useState('')
  const [lockPeriod, setLockPeriod] = useState(30)

  const lockPeriods = [
    { days: 30, roi: 0.35 },
    { days: 60, roi: 0.4 },
    { days: 90, roi: 0.45 },
    { days: 180, roi: 0.5 },
    { days: 365, roi: 0.6 },
  ]

  const selectedPeriod = lockPeriods.find((p) => p.days === lockPeriod)
  const estimatedReward = amount ? (parseFloat(amount) * selectedPeriod!.roi) / 100 : 0

  return (
    <div className="min-h-screen bg-gradient-dark p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/dashboard" className="flex items-center gap-2 text-[#e8c547] hover:text-white transition mb-4">
            <ArrowLeft size={20} />
            Back to Dashboard
          </Link>
          <h1 className="text-4xl font-bold">Stake USDX</h1>
          <p className="text-gray-400 mt-2">Lock your USDX tokens and earn daily rewards</p>
        </div>

        {/* Main Card */}
        <div className="glass rounded-2xl p-8 space-y-6">
          {/* Amount Input */}
          <div>
            <label className="block text-sm font-bold mb-3">Amount to Stake</label>
            <div className="relative">
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.00"
                className="w-full bg-[#1a1a24] border border-[#e8c547]/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-[#e8c547] outline-none transition"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">USDX</span>
            </div>
            <p className="text-xs text-gray-500 mt-2">Available: 450 USDX</p>
          </div>

          {/* Lock Period */}
          <div>
            <label className="block text-sm font-bold mb-3">Lock Period</label>
            <div className="grid grid-cols-5 gap-2">
              {lockPeriods.map((period) => (
                <button
                  key={period.days}
                  onClick={() => setLockPeriod(period.days)}
                  className={`p-3 rounded-lg font-bold transition ${
                    lockPeriod === period.days
                      ? 'bg-[#e8c547] text-black'
                      : 'bg-[#1a1a24] border border-[#e8c547]/20 text-white hover:border-[#e8c547]'
                  }`}
                >
                  {period.days}d
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">Daily ROI: {selectedPeriod?.roi}%</p>
          </div>

          {/* Summary */}
          <div className="bg-[#1a1a24] rounded-lg p-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Stake Amount</span>
              <span className="font-bold">{amount || '0'} USDX</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Lock Period</span>
              <span className="font-bold">{lockPeriod} Days</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-400">Daily ROI</span>
              <span className="font-bold text-green-500">{selectedPeriod?.roi}%</span>
            </div>
            <div className="border-t border-[#e8c547]/20 pt-2 flex justify-between text-sm">
              <span className="text-gray-400">Est. Daily Reward</span>
              <span className="font-bold text-[#e8c547]">{estimatedReward.toFixed(4)} USDX</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button className="border border-[#e8c547] text-[#e8c547] font-bold py-3 rounded-lg hover:bg-[#e8c547]/10 transition">
              Cancel
            </button>
            <button className="bg-gradient-gold text-black font-bold py-3 rounded-lg hover:shadow-glow-lg transition">
              Confirm Stake
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-gradient-dark p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/dashboard" className="flex items-center gap-2 text-[#e8c547] hover:text-white transition mb-4">
            <ArrowLeft size={20} />
            Back to Dashboard
          </Link>
          <h1 className="text-4xl font-bold">Membership</h1>
          <p className="text-gray-400 mt-2">Upgrade your membership for better rewards</p>
        </div>

        {/* Current Membership */}
        <div className="glass rounded-lg p-8 mb-8">
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-400 text-sm">Current Tier</p>
              <h2 className="text-4xl font-bold text-[#e8c547] mt-2">👑 Gold Member</h2>
            </div>
            <span className="bg-green-500 text-black px-4 py-2 rounded-full font-bold">✓ ACTIVE</span>
          </div>
          <p className="text-gray-400">Renews in 180 days • Auto-renewal enabled</p>
        </div>

        {/* Membership Benefits */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Current Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="glass rounded-lg p-6">
              <p className="text-gray-400 text-sm">ROI Bonus</p>
              <p className="text-3xl font-bold text-[#e8c547] mt-2">+25%</p>
              <p className="text-gray-500 text-xs mt-2">On all stakes</p>
            </div>
            <div className="glass rounded-lg p-6">
              <p className="text-gray-400 text-sm">Reward Bonus</p>
              <p className="text-3xl font-bold text-green-500 mt-2">+15%</p>
              <p className="text-gray-500 text-xs mt-2">On earned rewards</p>
            </div>
            <div className="glass rounded-lg p-6">
              <p className="text-gray-400 text-sm">Referral Bonus</p>
              <p className="text-3xl font-bold text-blue-500 mt-2">+10%</p>
              <p className="text-gray-500 text-xs mt-2">On referral earnings</p>
            </div>
          </div>
        </div>

        {/* Membership Tiers */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Upgrade to Premium</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { name: 'Bronze', roi: 0, reward: 0, referral: 0, price: 'Free' },
              { name: 'Silver', roi: 10, reward: 5, referral: 5, price: '50 USDX' },
              { name: 'Platinum', roi: 50, reward: 30, referral: 20, price: '500 USDX' },
              { name: 'Diamond', roi: 100, reward: 50, referral: 50, price: '2000 USDX' },
            ].map((tier) => (
              <div key={tier.name} className="glass rounded-lg p-6 border-2 border-[#e8c547]/20 hover:border-[#e8c547] transition">
                <h3 className="text-xl font-bold mb-4">{tier.name}</h3>
                <div className="space-y-2 mb-6 text-sm text-gray-400">
                  <p>ROI: +{tier.roi}%</p>
                  <p>Reward: +{tier.reward}%</p>
                  <p>Referral: +{tier.referral}%</p>
                </div>
                <button className="w-full bg-gradient-gold text-black font-bold py-2 rounded-lg hover:shadow-glow transition text-sm">
                  {tier.price}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

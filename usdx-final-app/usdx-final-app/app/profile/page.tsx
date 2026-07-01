'use client'

import Link from 'next/link'
import { User, Wallet, Settings } from 'lucide-react'
import { useAccount } from 'wagmi'

export default function ProfilePage() {
  const { address } = useAccount()

  return (
    <div className="min-h-screen bg-black p-8">
      <Link href="/dashboard" className="text-[#e8c547] hover:text-[#d4a25e] mb-6 inline-block">← Back to Dashboard</Link>
      
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">My Profile</h1>

        {/* PROFILE INFO */}
        <div className="bg-[#0a0a12] border border-[#1a1a24] rounded-lg p-8 mb-6">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 bg-[#e8c547] rounded-full flex items-center justify-center">
              <User size={40} className="text-black" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">User Profile</h2>
              <p className="text-gray-400 font-mono">{address}</p>
            </div>
          </div>

          {/* STATS */}
          <div className="grid md:grid-cols-3 gap-4 mb-8 pb-8 border-b border-[#1a1a24]">
            <div>
              <p className="text-gray-400 text-sm mb-1">Total Staked</p>
              <p className="text-2xl font-bold text-[#e8c547]">800.00 USDX</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Total Rewards</p>
              <p className="text-2xl font-bold text-[#e8c547]">120.50 USDX</p>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Lifetime Earnings</p>
              <p className="text-2xl font-bold text-[#e8c547]">320.75 USDX</p>
            </div>
          </div>

          {/* EDIT SETTINGS */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
              <Settings size={20} /> Settings
            </h3>
            
            <div>
              <label className="text-gray-400 text-sm mb-2 block">Email (Optional)</label>
              <input type="email" placeholder="your@email.com" className="w-full bg-[#1a1a24] border border-[#2a2a34] rounded px-4 py-2 focus:border-[#e8c547]" />
            </div>

            <div>
              <label className="text-gray-400 text-sm mb-2 block">Preferred Currency</label>
              <select className="w-full bg-[#1a1a24] border border-[#2a2a34] rounded px-4 py-2 focus:border-[#e8c547]">
                <option>USDX</option>
                <option>USD</option>
                <option>EUR</option>
              </select>
            </div>

            <label className="flex items-center gap-3 mt-6">
              <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#e8c547]" />
              <span className="text-sm text-gray-400">Enable Email Notifications</span>
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#e8c547]" />
              <span className="text-sm text-gray-400">Auto-Claim Rewards</span>
            </label>

            <button className="w-full mt-8 bg-gradient-to-r from-[#e8c547] to-[#d4a25e] text-black font-bold py-2 rounded hover:shadow-lg hover:shadow-[#e8c547]/50">
              Save Settings
            </button>
          </div>
        </div>

        {/* WALLET INFO */}
        <div className="bg-[#0a0a12] border border-[#1a1a24] rounded-lg p-8">
          <h3 className="text-lg font-bold flex items-center gap-2 mb-4">
            <Wallet size={20} /> Connected Wallet
          </h3>
          <div className="bg-[#1a1a24] p-4 rounded flex justify-between items-center">
            <p className="font-mono text-[#e8c547]">{address}</p>
            <button className="text-gray-400 hover:text-[#e8c547]">Copy</button>
          </div>
        </div>
      </div>
    </div>
  )
}

'use client'

import { useState } from 'react'
import { BarChart3, Users, TrendingUp, Settings, LogOut } from 'lucide-react'
import Link from 'next/link'

export default function AdminPage() {
  const [adminStats] = useState([
    { label: 'Total Users', value: '12,543', change: '+5.2%' },
    { label: 'Total Staked', value: '$2.5M', change: '+12.8%' },
    { label: 'Total Rewards', value: '$125K', change: '+8.3%' },
    { label: 'Active Stakes', value: '8,932', change: '+2.1%' }
  ])

  const [recentUsers] = useState([
    { id: 1, wallet: '0x742d...8f8e', staked: '500 USDX', status: 'Active' },
    { id: 2, wallet: '0x8c4d...2b3c', staked: '300 USDX', status: 'Active' },
    { id: 3, wallet: '0x5f2e...9a1b', staked: '750 USDX', status: 'Pending' },
    { id: 4, wallet: '0x1a3f...5c7d', staked: '200 USDX', status: 'Completed' },
  ])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* TOP BAR */}
      <div className="bg-[#0a0a12] border-b border-[#1a1a24] px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#e8c547] rounded text-black font-bold flex items-center justify-center">U</div>
          <h1 className="text-2xl font-bold">USDX Admin Panel</h1>
        </div>
        <button className="bg-gradient-to-r from-[#e8c547] to-[#d4a25e] text-black font-bold px-4 py-2 rounded hover:shadow-lg hover:shadow-[#e8c547]/50 flex items-center gap-2">
          <LogOut size={16} /> Logout
        </button>
      </div>

      {/* CONTENT */}
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-8">Dashboard Statistics</h2>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {adminStats.map((stat, idx) => (
            <div key={idx} className="bg-[#0a0a12] border border-[#1a1a24] rounded-lg p-6">
              <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
              <p className="text-3xl font-bold text-[#e8c547]">{stat.value}</p>
              <p className="text-green-500 text-sm mt-2">{stat.change}</p>
            </div>
          ))}
        </div>

        {/* USERS TABLE */}
        <div className="bg-[#0a0a12] border border-[#1a1a24] rounded-lg p-6 mb-8">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Users size={20} /> Recent Users
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#1a1a24]">
                  <th className="px-4 py-3 text-left text-gray-400">Wallet Address</th>
                  <th className="px-4 py-3 text-left text-gray-400">Staked Amount</th>
                  <th className="px-4 py-3 text-left text-gray-400">Status</th>
                  <th className="px-4 py-3 text-left text-gray-400">Action</th>
                </tr>
              </thead>
              <tbody>
                {recentUsers.map((user) => (
                  <tr key={user.id} className="border-b border-[#1a1a24] hover:bg-[#1a1a24] transition">
                    <td className="px-4 py-3 font-mono text-[#e8c547]">{user.wallet}</td>
                    <td className="px-4 py-3">{user.staked}</td>
                    <td className="px-4 py-3">
                      <span className={`px-3 py-1 rounded text-xs font-bold ${
                        user.status === 'Active' ? 'bg-green-500/20 text-green-400' :
                        user.status === 'Pending' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="text-[#e8c547] hover:text-[#d4a25e] text-sm font-bold">
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* MANAGEMENT SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* REWARDS MANAGEMENT */}
          <div className="bg-[#0a0a12] border border-[#1a1a24] rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <TrendingUp size={20} /> Rewards Management
            </h3>
            <div className="space-y-3">
              <input type="number" placeholder="Daily Reward Rate (%)" className="w-full bg-[#1a1a24] border border-[#2a2a34] rounded px-4 py-2 text-sm focus:border-[#e8c547]" />
              <input type="number" placeholder="Max Stake Limit" className="w-full bg-[#1a1a24] border border-[#2a2a34] rounded px-4 py-2 text-sm focus:border-[#e8c547]" />
              <button className="w-full bg-gradient-to-r from-[#e8c547] to-[#d4a25e] text-black font-bold py-2 rounded hover:shadow-lg hover:shadow-[#e8c547]/50">
                Update Settings
              </button>
            </div>
          </div>

          {/* SYSTEM SETTINGS */}
          <div className="bg-[#0a0a12] border border-[#1a1a24] rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Settings size={20} /> System Settings
            </h3>
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#e8c547]" />
                <span className="text-sm">Enable Staking</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#e8c547]" />
                <span className="text-sm">Auto Claim Rewards</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="w-4 h-4 accent-[#e8c547]" />
                <span className="text-sm">Maintenance Mode</span>
              </label>
            </div>
          </div>
        </div>

        {/* BACK TO DASHBOARD */}
        <div className="mt-8">
          <Link href="/dashboard" className="text-[#e8c547] hover:text-[#d4a25e] font-bold">
            ← Back to Dashboard
          </Link>
        </div>
      </div>
    </div>
  )
}

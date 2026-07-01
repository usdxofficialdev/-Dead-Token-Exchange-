'use client'

import { useState, useEffect } from 'react'
import { BarChart3, TrendingUp, Gift, Wallet, Send, LogOut, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { useAccount, useDisconnect } from 'wagmi'

export default function Dashboard() {
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const stats = [
    { label: 'Total Balance', value: '1,250.00', icon: '💰' },
    { label: 'Total Staked', value: '800.00', icon: '📊' },
    { label: 'Total Rewards', value: '120.50', icon: '🎁' },
    { label: 'Lifetime Earnings', value: '320.75', icon: '📈' }
  ]

  const transactions = [
    { id: 1, type: 'Stake', amount: -500, date: 'May 24, 2025', icon: '📊' },
    { id: 2, type: 'Reward', amount: 2.80, date: 'May 24, 2025', icon: '🎁' },
    { id: 3, type: 'Stake', amount: -300, date: 'May 20, 2025', icon: '📊' },
    { id: 4, type: 'Reward', amount: 2.10, date: 'May 24, 2025', icon: '🎁' }
  ]

  const actions = [
    { label: 'Stake USDX', icon: '📊' },
    { label: 'Unstake', icon: '↩️' },
    { label: 'Claim Rewards', icon: '🎁' },
    { label: 'Swap USDX', icon: '💱' },
    { label: 'Buy USDX', icon: '🛒' },
    { label: 'Transactions', icon: '📋' }
  ]

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="bg-gradient-to-br from-[#0a0a12] to-black border border-[#1a1a24] rounded-lg p-8 max-w-md w-full mx-4">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-[#e8c547] rounded-lg flex items-center justify-center font-bold text-xl text-black">U</div>
          </div>
          <h1 className="text-center text-2xl font-bold mb-2">USDX Network</h1>
          <p className="text-center text-gray-400 mb-6">Connect your wallet to access the dashboard</p>
          <Link href="/login" className="w-full bg-gradient-to-r from-[#e8c547] to-[#d4a25e] text-black font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-[#e8c547]/50 transition">
            Connect Wallet
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      {/* SIDEBAR */}
      <div className={`${windowWidth < 768 ? `fixed inset-0 z-50 transform transition-transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}` : 'w-44'} bg-[#0a0a12] border-r border-[#1a1a24] flex flex-col`}>
        <div className="p-4 border-b border-[#1a1a24] flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#e8c547] rounded text-black font-bold flex items-center justify-center">U</div>
            <span className="font-bold text-[#e8c547]">USDX</span>
          </div>
          {windowWidth < 768 && <button onClick={() => setMobileMenuOpen(false)} className="text-[#e8c547]"><X size={20} /></button>}
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {['Dashboard', 'Stake USDX', 'My Stakes', 'Rewards', 'Swap USDX', 'Membership', 'Transactions', 'Referral', 'Profile'].map((item, idx) => (
            <Link key={idx} href={`/${item.toLowerCase().replace(' ', '-')}`} className={`block px-4 py-2 rounded text-sm ${idx === 0 ? 'bg-[#1a1a24] border-l-4 border-[#e8c547] text-[#e8c547]' : 'text-gray-400 hover:text-[#e8c547]'}`}>
              {item}
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-[#1a1a24] space-y-3">
          <div className="bg-[#1a1a24] p-3 rounded">
            <div className="text-xs text-gray-400 mb-1">USDX Price</div>
            <div className="text-2xl font-bold text-[#e8c547]">$1.00</div>
            <div className="text-xs text-green-500">+0.25%</div>
          </div>
          <button className="w-full bg-gradient-to-r from-[#e8c547] to-[#d4a25e] text-black font-bold py-2 rounded text-sm hover:shadow-lg hover:shadow-[#e8c547]/50">Buy USDX</button>
          <button onClick={() => { disconnect(); setMobileMenuOpen(false) }} className="w-full border border-[#e8c547] text-[#e8c547] font-bold py-2 rounded text-sm hover:bg-[#e8c547]/10 flex items-center justify-center gap-2">
            <LogOut size={16} /> Logout
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* TOP BAR */}
        <div className="bg-[#0a0a12] border-b border-[#1a1a24] px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-4">
            {windowWidth < 768 && <button onClick={() => setMobileMenuOpen(true)} className="text-[#e8c547]"><Menu size={24} /></button>}
            <input type="text" placeholder="Search..." className="bg-[#1a1a24] border border-[#2a2a34] rounded px-4 py-2 text-sm w-48 focus:border-[#e8c547] outline-none" />
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-[#1a1a24] px-3 py-1 rounded text-sm text-gray-400">{address?.slice(0, 6)}...{address?.slice(-4)}</div>
          </div>
        </div>

        {/* DASHBOARD CONTENT */}
        <div className="flex-1 overflow-y-auto p-6">
          <h1 className="text-3xl font-bold mb-1">Dashboard</h1>
          <p className="text-[#e8c547] mb-6">Welcome back!</p>

          {/* STATS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-gradient-to-br from-[#e8c547]/10 to-[#d4a25e]/5 border border-[#e8c547]/20 rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
                    <p className="text-2xl font-bold text-[#e8c547]">{stat.value}</p>
                    <p className="text-xs text-gray-500 mt-1">USDX</p>
                  </div>
                  <span className="text-2xl">{stat.icon}</span>
                </div>
              </div>
            ))}
          </div>

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* ACTIVE STAKE */}
            <div className="lg:col-span-2 bg-[#0a0a12] border border-[#1a1a24] rounded-lg p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold">Active Stake</h3>
                <span className="bg-[#d4a25e] text-black px-3 py-1 rounded text-xs font-bold">VIP 1</span>
              </div>
              <div className="mb-6">
                <p className="text-5xl font-bold text-[#e8c547]">800.00</p>
                <p className="text-gray-400 text-sm">USDX</p>
              </div>
              <div className="grid grid-cols-2 gap-4 pb-4 border-b border-[#1a1a24]">
                <div>
                  <p className="text-gray-400 text-xs mb-1">Daily Rewards</p>
                  <p className="text-[#e8c547] font-bold">2.80 USDX</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1">ROI</p>
                  <p className="text-[#e8c547] font-bold">0.35%</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-gray-400 text-xs mb-1">Lock Period</p>
                  <p className="text-[#e8c547] font-bold">30 Days</p>
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1">Ends In</p>
                  <p className="text-[#e8c547] font-bold">12d · 15h · 30m</p>
                </div>
              </div>
              <button className="w-full mt-6 bg-gradient-to-r from-[#e8c547] to-[#d4a25e] text-black font-bold py-2 rounded hover:shadow-lg hover:shadow-[#e8c547]/50">
                Manage Stake
              </button>
            </div>

            {/* RECENT TRANSACTIONS */}
            <div className="bg-[#0a0a12] border border-[#1a1a24] rounded-lg p-6">
              <h3 className="text-lg font-bold mb-4">Recent Transactions</h3>
              <div className="space-y-3">
                {transactions.map((tx) => (
                  <div key={tx.id} className="flex justify-between items-center bg-[#1a1a24] p-3 rounded border-l-4 border-[#e8c547]">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{tx.icon}</span>
                      <div>
                        <p className="text-sm font-bold">{tx.type}</p>
                        <p className="text-xs text-gray-400">{tx.date}</p>
                      </div>
                    </div>
                    <span className={`font-bold text-sm ${tx.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {tx.amount > 0 ? '+' : ''}{tx.amount.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* QUICK ACTIONS */}
          <div className="bg-[#0a0a12] border border-[#1a1a24] rounded-lg p-6">
            <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
              {actions.map((action, idx) => (
                <button key={idx} className="bg-[#1a1a24] border border-[#2a2a34] text-[#e8c547] p-4 rounded hover:border-[#e8c547] hover:bg-[#e8c547]/10 transition flex flex-col items-center gap-2">
                  <span className="text-2xl">{action.icon}</span>
                  <span className="text-xs font-bold text-center">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

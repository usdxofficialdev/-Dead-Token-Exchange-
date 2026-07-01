'use client'

import { useState, useEffect } from 'react'
import { useAccount } from 'wagmi'
import { redirect } from 'next/navigation'
import {
  Sidebar,
  Topbar,
  Hero,
  StatsGrid,
  ActiveStake,
  RecentTransactions,
  QuickActions,
} from '@/components/dashboard'

export default function DashboardPage() {
  const { address, isConnected } = useAccount()
  const [isMobile, setIsMobile] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (!isConnected) {
    redirect('/login')
  }

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Topbar */}
        <Topbar onMenuClick={() => setSidebarOpen(true)} isMobile={isMobile} />

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Hero */}
            <Hero />

            {/* Stats Grid */}
            <StatsGrid />

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Active Stake */}
              <ActiveStake />

              {/* Sidebar Stats */}
              <div className="space-y-6">
                <div className="glass rounded-lg p-6">
                  <p className="text-gray-400 text-sm">Membership Status</p>
                  <h3 className="text-2xl font-bold text-[#e8c547] mt-2">Gold Member</h3>
                  <p className="text-green-500 mt-2">✅ Active</p>
                  <div className="mt-4 text-xs text-gray-400 space-y-2">
                    <p>ROI Bonus: +25%</p>
                    <p>Reward Bonus: +15%</p>
                    <p>Referral Bonus: +10%</p>
                  </div>
                </div>

                <div className="glass rounded-lg p-6">
                  <p className="text-gray-400 text-sm">Referral Earnings</p>
                  <h3 className="text-2xl font-bold text-green-500 mt-2">250 USDX</h3>
                  <p className="text-gray-500 mt-2 text-xs">From 12 referrals</p>
                  <button className="mt-4 w-full bg-gradient-gold text-black font-bold py-2 rounded-lg hover:shadow-glow transition text-sm">
                    Invite Friends
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Transactions */}
            <RecentTransactions />

            {/* Quick Actions */}
            <QuickActions />
          </div>
        </div>
      </div>
    </div>
  )
}

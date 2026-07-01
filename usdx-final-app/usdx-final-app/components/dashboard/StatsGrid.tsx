'use client'

import { useDashboard } from '@/hooks/useDashboard'
import { LoadingSkeleton } from './LoadingSkeleton'

export function StatsGrid() {
  const { stats, isLoading } = useDashboard()

  if (isLoading) return <LoadingSkeleton />

  const statsData = [
    {
      label: 'Portfolio Value',
      value: `$${(stats?.portfolio_value || 0).toFixed(2)}`,
      change: '+5.24%',
      color: 'text-[#e8c547]',
    },
    {
      label: 'Available USDX',
      value: `${(stats?.available_balance || 0).toFixed(0)} USDX`,
      subtitle: 'Ready to Stake',
      color: 'text-white',
    },
    {
      label: 'Locked USDX',
      value: `${(stats?.locked_balance || 0).toFixed(0)} USDX`,
      subtitle: `${stats?.active_stakes || 0} Active Stake`,
      color: 'text-[#e8c547]',
    },
    {
      label: "Today's Reward",
      value: `${(stats?.daily_reward || 0).toFixed(2)}`,
      subtitle: 'USDX Earned',
      color: 'text-green-500',
    },
    {
      label: 'Pending Rewards',
      value: `${(stats?.pending_rewards || 0).toFixed(2)}`,
      subtitle: 'Ready to Claim',
      color: 'text-yellow-400',
    },
    {
      label: 'Lifetime Earnings',
      value: `${(stats?.lifetime_earnings || 0).toFixed(2)}`,
      subtitle: 'USDX Earned',
      color: 'text-[#e8c547]',
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mb-8">
      {statsData.map((stat, idx) => (
        <div
          key={idx}
          className="glass rounded-2xl p-6 hover:border-[#e8c547] transition-all duration-300 hover:shadow-glow"
        >
          <p className="text-gray-400 text-sm">{stat.label}</p>
          <h2 className={`text-3xl font-bold mt-2 ${stat.color}`}>{stat.value}</h2>
          {stat.subtitle && <p className="text-gray-500 mt-2 text-sm">{stat.subtitle}</p>}
          {stat.change && <p className="text-green-500 mt-2">{stat.change}</p>}
        </div>
      ))}
    </div>
  )
}

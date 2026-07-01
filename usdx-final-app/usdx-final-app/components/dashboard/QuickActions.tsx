'use client'

import Link from 'next/link'

const actions = [
  { label: 'Stake USDX', icon: '📊', href: '/stake' },
  { label: 'Unstake', icon: '↩️', href: '/unstake' },
  { label: 'Claim Rewards', icon: '🎁', href: '/rewards' },
  { label: 'Swap USDX', icon: '💱', href: '/swap' },
  { label: 'Buy USDX', icon: '🛒', href: '/buy' },
  { label: 'Transactions', icon: '📋', href: '/transactions' },
]

export function QuickActions() {
  return (
    <div className="glass rounded-lg p-6">
      <h3 className="text-lg font-bold mb-6">⚡ Quick Actions</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {actions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className="bg-[#15151d] border border-[#e8c547]/20 text-[#e8c547] p-4 rounded-lg hover:border-[#e8c547] hover:bg-[#e8c547]/10 transition flex flex-col items-center gap-2 text-center group"
          >
            <span className="text-2xl group-hover:scale-110 transition">{action.icon}</span>
            <span className="text-xs font-bold">{action.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

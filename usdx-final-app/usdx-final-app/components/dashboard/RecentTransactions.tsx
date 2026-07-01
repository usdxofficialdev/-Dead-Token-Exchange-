'use client'

import { useDashboard } from '@/hooks/useDashboard'
import { LoadingSkeleton } from './LoadingSkeleton'

export function RecentTransactions() {
  const { transactions, isLoading } = useDashboard()

  if (isLoading) return <LoadingSkeleton />

  if (!transactions || transactions.length === 0) {
    return (
      <div className="glass rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-6">📜 Recent Transactions</h3>
        <p className="text-gray-400 text-center py-8">No transactions yet</p>
      </div>
    )
  }

  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-xl font-bold">📜 Recent Transactions</h3>
          <p className="text-gray-400 text-sm mt-1">Latest wallet activity</p>
        </div>
        <button className="text-[#e8c547] text-sm hover:underline transition">
          View All →
        </button>
      </div>

      <div className="space-y-3">
        {transactions.map((tx) => (
          <div
            key={tx.id}
            className="bg-[#15151d] border border-[#e8c547]/20 rounded-xl p-4 hover:border-[#e8c547] transition"
          >
            <div className="flex justify-between items-start">
              <div className="flex gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#e8c547]/10 flex items-center justify-center text-2xl">
                  {tx.type === 'stake' ? '📊' : '🎁'}
                </div>
                <div>
                  <h4 className="font-bold capitalize">{tx.type}</h4>
                  <p className="text-xs text-gray-400 mt-1">{new Date(tx.created_at).toLocaleDateString()}</p>
                  <p className="text-xs text-gray-500 mt-1">TX: {tx.tx_hash?.slice(0, 7)}...{tx.tx_hash?.slice(-4)}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-bold ${tx.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
                  {tx.amount > 0 ? '+' : ''}{tx.amount.toFixed(2)} USDX
                </p>
                <span className="inline-block mt-2 bg-green-600/20 text-green-400 text-xs px-3 py-1 rounded-full">
                  {tx.status}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

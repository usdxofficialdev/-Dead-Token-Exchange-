'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function TransactionsPage() {
  const transactions = [
    { id: 1, type: 'Stake', amount: -500, date: 'May 24, 2025', status: 'Completed', tx: '0xA7F...9D42' },
    { id: 2, type: 'Reward', amount: 2.8, date: 'May 24, 2025', status: 'Completed', tx: '0xB8G...0E53' },
    { id: 3, type: 'Stake', amount: -300, date: 'May 20, 2025', status: 'Completed', tx: '0xC9H...1F64' },
    { id: 4, type: 'Reward', amount: 2.1, date: 'May 19, 2025', status: 'Completed', tx: '0xD0I...2G75' },
  ]

  return (
    <div className="min-h-screen bg-gradient-dark p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/dashboard" className="flex items-center gap-2 text-[#e8c547] hover:text-white transition mb-4">
            <ArrowLeft size={20} />
            Back to Dashboard
          </Link>
          <h1 className="text-4xl font-bold">Transactions</h1>
          <p className="text-gray-400 mt-2">View your complete transaction history</p>
        </div>

        {/* Transactions Table */}
        <div className="glass rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#e8c547]/20 bg-[#0a0a12]">
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-400">Type</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-400">Amount</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-400">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-400">Transaction</th>
                  <th className="px-6 py-4 text-left text-sm font-bold text-gray-400">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx) => (
                  <tr key={tx.id} className="border-b border-[#e8c547]/10 hover:bg-[#1a1a24] transition">
                    <td className="px-6 py-4 font-bold">{tx.type}</td>
                    <td className={`px-6 py-4 font-bold ${tx.amount > 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {tx.amount > 0 ? '+' : ''}{tx.amount} USDX
                    </td>
                    <td className="px-6 py-4 text-gray-400 text-sm">{tx.date}</td>
                    <td className="px-6 py-4 text-[#e8c547] text-sm font-mono">{tx.tx}</td>
                    <td className="px-6 py-4">
                      <span className="inline-block bg-green-600/20 text-green-400 text-xs px-3 py-1 rounded-full">
                        {tx.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

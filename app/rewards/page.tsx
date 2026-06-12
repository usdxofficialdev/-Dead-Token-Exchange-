'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Calendar } from 'lucide-react';

const rewardsHistory = [
  { date: '2024-06-12', type: 'Daily Reward', amount: '234 USDX', status: 'Claimed' },
  { date: '2024-06-11', type: 'Referral Bonus', amount: '50 USDX', status: 'Claimed' },
  { date: '2024-06-10', type: 'Team Bonus', amount: '75 USDX', status: 'Claimed' },
  { date: '2024-06-09', type: 'Daily Reward', amount: '234 USDX', status: 'Claimed' },
  { date: '2024-06-08', type: 'Referral Bonus', amount: '45 USDX', status: 'Claimed' },
  { date: '2024-06-07', type: 'Daily Reward', amount: '234 USDX', status: 'Claimed' },
  { date: '2024-06-06', type: 'VIP Bonus', amount: '100 USDX', status: 'Claimed' },
  { date: '2024-06-05', type: 'Daily Reward', amount: '234 USDX', status: 'Claimed' },
];

export default function RewardsPage() {
  const [filter, setFilter] = useState('all');

  const filteredRewards = filter === 'all' 
    ? rewardsHistory 
    : rewardsHistory.filter(r => r.type.toLowerCase().includes(filter.toLowerCase()));

  return (
    <main className="min-h-screen bg-black">
      <Navigation isLoggedIn={true} onLogout={() => {}} />
      
      <section className="py-20 px-4 md:px-8 pt-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-black mb-12">
              Rewards <span className="text-gold-400">History</span>
            </h1>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {[
                { label: 'Total Claimed', value: '12,450 USDX', icon: '🎯' },
                { label: 'This Month', value: '5,234 USDX', icon: '📅' },
                { label: 'Pending', value: '567 USDX', icon: '⏳' },
              ].map((card, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass rounded-2xl p-6 text-center"
                >
                  <p className="text-3xl mb-2">{card.icon}</p>
                  <p className="text-gray-400 mb-2 text-sm">{card.label}</p>
                  <p className="text-3xl font-black text-gold-400">{card.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Filters */}
            <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
              {['all', 'Daily Reward', 'Referral Bonus', 'Team Bonus'].map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-2 rounded-lg font-bold whitespace-nowrap transition ${
                    filter === f
                      ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-black'
                      : 'border border-gold-400 text-gold-400 hover:bg-gold-400/10'
                  }`}
                >
                  {f === 'all' ? 'All Rewards' : f}
                </button>
              ))}
            </div>

            {/* History Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass rounded-2xl p-6 overflow-x-auto"
            >
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gold-500/20">
                    <th className="text-left py-4 px-6 text-gray-400 font-bold">Date</th>
                    <th className="text-left py-4 px-6 text-gray-400 font-bold">Type</th>
                    <th className="text-left py-4 px-6 text-gray-400 font-bold">Amount</th>
                    <th className="text-left py-4 px-6 text-gray-400 font-bold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredRewards.map((reward, idx) => (
                    <motion.tr
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="border-b border-gold-500/10 hover:bg-gold-500/5 transition"
                    >
                      <td className="py-4 px-6 flex items-center gap-2">
                        <Calendar size={16} className="text-gold-400" />
                        {reward.date}
                      </td>
                      <td className="py-4 px-6 font-bold">{reward.type}</td>
                      <td className="py-4 px-6">
                        <span className="text-gold-400 font-bold">{reward.amount}</span>
                      </td>
                      <td className="py-4 px-6">
                        <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-bold">
                          {reward.status}
                        </span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

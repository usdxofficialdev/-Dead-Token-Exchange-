'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Medal, TrendingUp } from 'lucide-react';

const leaderboardData = [
  { rank: 1, name: 'Alex Johnson', earned: '125,000 USDX', members: 234, medal: '🥇' },
  { rank: 2, name: 'Maria Garcia', earned: '98,500 USDX', members: 189, medal: '🥈' },
  { rank: 3, name: 'John Smith', earned: '87,300 USDX', members: 167, medal: '🥉' },
  { rank: 4, name: 'Sarah Wilson', earned: '76,200 USDX', members: 145, medal: '4️⃣' },
  { rank: 5, name: 'Mike Brown', earned: '65,100 USDX', members: 123, medal: '5️⃣' },
  { rank: 6, name: 'Lisa Anderson', earned: '54,000 USDX', members: 98, medal: '6️⃣' },
  { rank: 7, name: 'Tom Taylor', earned: '42,900 USDX', members: 78, medal: '7️⃣' },
  { rank: 8, name: 'Emily Davis', earned: '31,800 USDX', members: 56, medal: '8️⃣' },
  { rank: 9, name: 'Chris Martin', earned: '20,700 USDX', members: 34, medal: '9️⃣' },
  { rank: 10, name: 'Jessica Lee', earned: '15,600 USDX', members: 22, medal: '🔟' },
];

export default function LeaderboardPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation isLoggedIn={true} onLogout={() => {}} />
      
      <section className="py-20 px-4 md:px-8 pt-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl font-black mb-4">
              Top Earners <span className="text-gold-400">Leaderboard</span>
            </h1>
            <p className="text-gray-400 text-lg">See who's making the most from USDX Rewards</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-2xl p-6 overflow-x-auto"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-gold-500/20">
                  <th className="text-left py-4 px-6 text-gray-400 font-bold">Rank</th>
                  <th className="text-left py-4 px-6 text-gray-400 font-bold">Name</th>
                  <th className="text-left py-4 px-6 text-gray-400 font-bold">Total Earned</th>
                  <th className="text-left py-4 px-6 text-gray-400 font-bold">Team Members</th>
                </tr>
              </thead>
              <tbody>
                {leaderboardData.map((entry, idx) => (
                  <motion.tr
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`border-b border-gold-500/10 hover:bg-gold-500/5 transition ${
                      idx < 3 ? 'bg-gold-500/5' : ''
                    }`}
                  >
                    <td className="py-4 px-6">
                      <span className="text-2xl">{entry.medal}</span>
                    </td>
                    <td className="py-4 px-6 font-bold">{entry.name}</td>
                    <td className="py-4 px-6">
                      <span className="text-gold-400 font-bold flex items-center gap-2">
                        <TrendingUp size={16} />
                        {entry.earned}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-gray-300">{entry.members}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

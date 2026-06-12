'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const dashboardData = [
  { day: 'Mon', rewards: 250, stake: 1000 },
  { day: 'Tue', rewards: 320, stake: 1050 },
  { day: 'Wed', rewards: 280, stake: 1100 },
  { day: 'Thu', rewards: 400, stake: 1150 },
  { day: 'Fri', rewards: 350, stake: 1200 },
  { day: 'Sat', rewards: 420, stake: 1250 },
  { day: 'Sun', rewards: 380, stake: 1300 },
];

const teamData = [
  { name: 'Direct', value: 234, color: '#f59e0b' },
  { name: 'Level 2', value: 567, color: '#d97706' },
  { name: 'Level 3', value: 890, color: '#b45309' },
];

export default function DashboardPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [stats, setStats] = useState([
    { label: 'Total Stake', value: '$45,230', change: '+12.5%' },
    { label: 'Daily Rewards', value: '234 USDX', change: '+8.3%' },
    { label: 'Team Members', value: '1,234', change: '+45%' },
    { label: 'Total Earned', value: '$124,500', change: '+25.6%' },
  ]);

  return (
    <main className="min-h-screen bg-black">
      <Navigation isLoggedIn={isLoggedIn} onLogout={() => setIsLoggedIn(false)} />
      
      <section className="py-12 px-4 md:px-8 pt-24">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-black mb-12"
          >
            Dashboard <span className="text-gold-400">Overview</span>
          </motion.h1>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <p className="text-gray-400 mb-2 text-sm">{stat.label}</p>
                <p className="text-3xl font-black mb-2">{stat.value}</p>
                <span className="text-green-400 text-sm font-bold">{stat.change}</span>
              </motion.div>
            ))}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-xl font-black mb-6 text-gold-400">Weekly Rewards</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={dashboardData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(245,158,11,0.1)" />
                  <XAxis dataKey="day" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid #f59e0b' }} />
                  <Bar dataKey="rewards" fill="#f59e0b" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-xl font-black mb-6 text-gold-400">Team Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie data={teamData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} dataKey="value">
                    {teamData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: 'rgba(0,0,0,0.8)', border: '1px solid #f59e0b' }} />
                </PieChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="glass rounded-2xl p-6"
          >
            <h3 className="text-xl font-black mb-6 text-gold-400">Recent Activity</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gold-500/20">
                    <th className="text-left py-3 px-4 text-gray-400">Date</th>
                    <th className="text-left py-3 px-4 text-gray-400">Type</th>
                    <th className="text-left py-3 px-4 text-gray-400">Amount</th>
                    <th className="text-left py-3 px-4 text-gray-400">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { date: '2024-06-12', type: 'Reward Claim', amount: '234 USDX', status: 'Completed' },
                    { date: '2024-06-11', type: 'Referral Bonus', amount: '50 USDX', status: 'Completed' },
                    { date: '2024-06-10', type: 'Stake', amount: '1000 USDX', status: 'Completed' },
                    { date: '2024-06-09', type: 'Withdrawal', amount: '500 USDX', status: 'Completed' },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-gold-500/10 hover:bg-gold-500/5 transition">
                      <td className="py-3 px-4">{row.date}</td>
                      <td className="py-3 px-4 text-gold-400 font-bold">{row.type}</td>
                      <td className="py-3 px-4">{row.amount}</td>
                      <td className="py-3 px-4"><span className="text-green-400 font-bold">{row.status}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

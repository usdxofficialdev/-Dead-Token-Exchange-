'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Users, DollarSign, TrendingUp, Settings } from 'lucide-react';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('users');

  const adminStats = [
    { label: 'Total Users', value: '45,234', icon: <Users size={32} />, color: 'gold' },
    { label: 'Total Staked', value: '$2.4M', icon: <DollarSign size={32} />, color: 'gold' },
    { label: 'Total Rewards Paid', value: '1.2M USDX', icon: <TrendingUp size={32} />, color: 'gold' },
    { label: 'Network Growth', value: '+342%', icon: <TrendingUp size={32} />, color: 'gold' },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Navigation isLoggedIn={true} onLogout={() => {}} />
      
      <section className="py-20 px-4 md:px-8 pt-32">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-black mb-12"
          >
            Admin <span className="text-gold-400">Dashboard</span>
          </motion.h1>

          {/* Admin Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {adminStats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="glass rounded-2xl p-6"
              >
                <div className="text-gold-400 mb-4">{stat.icon}</div>
                <p className="text-gray-400 mb-2 text-sm">{stat.label}</p>
                <p className="text-3xl font-black">{stat.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Admin Tabs */}
          <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
            {['users', 'payments', 'rewards', 'settings'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-lg font-bold whitespace-nowrap transition ${
                  activeTab === tab
                    ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-black'
                    : 'border border-gold-400 text-gold-400 hover:bg-gold-400/10'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* User Management */}
          {activeTab === 'users' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass rounded-2xl p-6 overflow-x-auto"
            >
              <h3 className="text-2xl font-black mb-6 text-gold-400">User Management</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gold-500/20">
                    <th className="text-left py-3 px-4 text-gray-400">User ID</th>
                    <th className="text-left py-3 px-4 text-gray-400">Name</th>
                    <th className="text-left py-3 px-4 text-gray-400">Status</th>
                    <th className="text-left py-3 px-4 text-gray-400">Staked</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: '#001', name: 'Alex Johnson', status: 'Active', staked: '$5,000' },
                    { id: '#002', name: 'Maria Garcia', status: 'Active', staked: '$7,500' },
                    { id: '#003', name: 'John Smith', status: 'Active', staked: '$3,200' },
                  ].map((user, idx) => (
                    <tr key={idx} className="border-b border-gold-500/10 hover:bg-gold-500/5 transition">
                      <td className="py-3 px-4 text-gold-400 font-bold">{user.id}</td>
                      <td className="py-3 px-4">{user.name}</td>
                      <td className="py-3 px-4"><span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs font-bold">{user.status}</span></td>
                      <td className="py-3 px-4">{user.staked}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}

          {/* Other Tabs */}
          {activeTab !== 'users' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass rounded-2xl p-6 text-center h-96 flex items-center justify-center"
            >
              <div>
                <Settings size={48} className="mx-auto mb-4 text-gold-400" />
                <h3 className="text-2xl font-black mb-2">{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h3>
                <p className="text-gray-400">Configuration interface coming soon</p>
              </div>
            </motion.div>
          )}
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

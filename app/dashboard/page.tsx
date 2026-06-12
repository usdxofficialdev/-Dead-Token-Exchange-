'use client';

import React from 'react';
import { Navigation } from '@/components/shared/Navigation';
import { Footer } from '@/components/shared/Footer';
import { motion } from 'framer-motion';
import { Wallet, TrendingUp, Users, Award } from 'lucide-react';

export default function DashboardPage() {
  const stats = [
    { icon: <Wallet size={24} />, label: 'Total Balance', value: '124,500 USDX', color: 'gold' },
    { icon: <TrendingUp size={24} />, label: 'Earned Today', value: '234 USDX', color: 'gold' },
    { icon: <Users size={24} />, label: 'Team Members', value: '1,234', color: 'gold' },
    { icon: <Award size={24} />, label: 'Total Rewards', value: '542,100 USDX', color: 'gold' },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <section className="py-20 px-4 md:px-8 pt-32">
        <div className="max-w-7xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-black mb-12"
          >
            Dashboard <span className="text-gold-400">Overview</span>
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="glass rounded-2xl p-8"
              >
                <div className="text-gold-400 mb-4">{stat.icon}</div>
                <p className="text-gray-400 mb-2 text-sm">{stat.label}</p>
                <p className="text-2xl font-black">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

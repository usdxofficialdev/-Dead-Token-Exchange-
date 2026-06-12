'use client';

import React from 'react';
import { Navigation } from '@/components/shared/Navigation';
import { Footer } from '@/components/shared/Footer';
import { motion } from 'framer-motion';
import { Copy, Users, TrendingUp } from 'lucide-react';

export default function ReferralPage() {
  const referralLink = 'https://usdx-network.vercel.app?ref=ABC12345';

  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <section className="py-20 px-4 md:px-8 pt-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-black mb-12 text-center">
              Referral <span className="text-gold-400">Program</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: <Users size={32} />, label: 'Direct Referrals', value: '1,234' },
                { icon: <TrendingUp size={32} />, label: 'Team Size', value: '5,678' },
                { icon: <Copy size={32} />, label: 'Commissions Earned', value: '42,500 USDX' },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass rounded-2xl p-8 text-center"
                >
                  <div className="text-gold-400 mb-4 flex justify-center">{stat.icon}</div>
                  <p className="text-gray-400 mb-2">{stat.label}</p>
                  <p className="text-3xl font-black">{stat.value}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold mb-4 text-gold-400">Your Referral Link</h2>
              <div className="flex items-center gap-4 bg-black/50 rounded-lg p-4">
                <input
                  type="text"
                  value={referralLink}
                  readOnly
                  className="flex-1 bg-transparent text-white outline-none"
                />
                <button className="p-2 hover:bg-gold-500/20 rounded-lg transition">
                  <Copy className="text-gold-400" size={20} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

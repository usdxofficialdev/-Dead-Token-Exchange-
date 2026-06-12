'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Copy, Users, TrendingUp, Award } from 'lucide-react';

export default function ReferralPage() {
  const [copied, setCopied] = useState(false);
  const referralLink = 'https://usdx-rewards.vercel.app?ref=USER12345';

  const copyToClipboard = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const referralStats = [
    { icon: <Users size={32} />, label: 'Direct Referrals', value: '234' },
    { icon: <TrendingUp size={32} />, label: 'Team Size', value: '5,678' },
    { icon: <Award size={32} />, label: 'Earned', value: '42,500 USDX' },
    { icon: <Users size={32} />, label: 'Active Members', value: '3,456' },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Navigation isLoggedIn={true} onLogout={() => {}} />
      
      <section className="py-20 px-4 md:px-8 pt-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-black mb-12 text-center">
              Referral <span className="text-gold-400">Program</span>
            </h1>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {referralStats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="glass rounded-2xl p-6 text-center"
                >
                  <div className="text-gold-400 mb-4 flex justify-center">{stat.icon}</div>
                  <p className="text-gray-400 mb-2 text-sm">{stat.label}</p>
                  <p className="text-3xl font-black">{stat.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Referral Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 20 }}
              transition={{ delay: 0.4 }}
              className="glass rounded-2xl p-8 mb-12"
            >
              <h2 className="text-2xl font-bold mb-6 text-gold-400">Your Referral Link</h2>
              <div className="flex items-center gap-4 bg-black/50 rounded-lg p-4 mb-4">
                <input
                  type="text"
                  value={referralLink}
                  readOnly
                  className="flex-1 bg-transparent text-white outline-none font-mono text-sm"
                />
                <button
                  onClick={copyToClipboard}
                  className="p-2 hover:bg-gold-500/20 rounded-lg transition text-gold-400"
                >
                  <Copy size={20} />
                </button>
              </div>
              <p className="text-sm text-gray-400">{copied ? '✅ Copied to clipboard!' : 'Click to copy your unique referral link'}</p>
            </motion.div>

            {/* Commission Tiers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="glass rounded-2xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6 text-gold-400">Commission Tiers</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { level: 'Level 1', commission: '10%', description: 'Direct referrals' },
                  { level: 'Level 2', commission: '5%', description: 'Their referrals' },
                  { level: 'Level 3', commission: '2%', description: 'Third generation' },
                ].map((tier, idx) => (
                  <div key={idx} className="border border-gold-500/20 rounded-lg p-6 text-center">
                    <p className="text-gold-400 font-bold mb-2">{tier.level}</p>
                    <p className="text-4xl font-black mb-2">{tier.commission}</p>
                    <p className="text-gray-400 text-sm">{tier.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

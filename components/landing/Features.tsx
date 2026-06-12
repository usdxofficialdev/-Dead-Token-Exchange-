'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Users, TrendingUp, Lock, Smartphone } from 'lucide-react';

const features = [
  {
    icon: <Zap size={32} />,
    title: 'Lightning Fast',
    description: 'Instant stake and reward claims with zero delays',
    color: 'from-gold-400 to-gold-600',
  },
  {
    icon: <Shield size={32} />,
    title: 'Secure & Safe',
    description: 'Military-grade security with multi-signature wallets',
    color: 'from-gold-400 to-gold-600',
  },
  {
    icon: <Users size={32} />,
    title: 'Community Driven',
    description: 'Governance voting on all major protocol decisions',
    color: 'from-gold-400 to-gold-600',
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'Passive Income',
    description: 'Earn rewards 24/7 through staking and referrals',
    color: 'from-gold-400 to-gold-600',
  },
  {
    icon: <Lock size={32} />,
    title: 'Non-Custodial',
    description: 'Full control of your assets with no intermediaries',
    color: 'from-gold-400 to-gold-600',
  },
  {
    icon: <Smartphone size={32} />,
    title: 'Mobile Ready',
    description: 'Manage your account from any device, anytime',
    color: 'from-gold-400 to-gold-600',
  },
];

export function Features() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Why Choose <span className="text-gold-400">USDX Network</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the future of decentralized finance with our premium features
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl p-8 hover:border-gold-400/50 transition group"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.color} text-black mb-4 group-hover:scale-110 transition`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

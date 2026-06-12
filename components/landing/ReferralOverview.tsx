'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, Gift, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export function ReferralOverview() {
  const benefits = [
    {
      icon: <Users size={32} />,
      title: 'Build Your Team',
      description: 'Refer friends and build a network of active earners',
    },
    {
      icon: <Gift size={32} />,
      title: 'Earn Commissions',
      description: 'Earn 10-20% commission from your referrals earnings',
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Passive Income',
      description: 'Build generational wealth through network growth',
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Referral <span className="text-gold-400">Program</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Turn your network into passive income
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="glass rounded-2xl p-8"
            >
              <div className="text-4xl mb-4 text-gold-400">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="glass rounded-2xl p-8 md:p-12 text-center border-gold-400/50"
        >
          <p className="text-lg text-gray-300 mb-6">Ready to start earning?</p>
          <Link
            href="/referral"
            className="inline-block px-8 py-3 rounded-lg bg-gradient-gold text-black font-bold hover:shadow-glow-gold-lg transition"
          >
            Join Referral Program
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

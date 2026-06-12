'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="mb-8 inline-block"
        >
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-r from-gold-400 to-gold-600 flex items-center justify-center text-4xl font-black text-black glow-pulse mx-auto">
            U
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black mb-6 leading-tight"
        >
          <span className="block mb-2">Earn While You</span>
          <span className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent">HODL</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Stake your USDX tokens and earn massive daily rewards. Join thousands of members already earning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link
            href="/dashboard"
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-gold-400 to-gold-600 text-black font-bold hover:shadow-glow-gold-lg transition-all duration-300 flex items-center gap-2 w-full md:w-auto justify-center"
          >
            Start Staking Now
            <ArrowRight size={20} />
          </Link>
          <Link
            href="/referral"
            className="px-8 py-4 rounded-lg border border-gold-400 text-gold-400 font-bold hover:bg-gold-400/10 transition-all duration-300 flex items-center gap-2 w-full md:w-auto justify-center"
          >
            Join Referral Program
            <ArrowRight size={20} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 pt-12 border-t border-gold-500/20"
        >
          {[
            { label: 'Daily Rewards', icon: '💰' },
            { label: '0% Fees', icon: '✨' },
            { label: 'Instant Withdraw', icon: '⚡' },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3"
            >
              <span className="text-3xl">{feature.icon}</span>
              <span className="text-gray-300 font-medium">{feature.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

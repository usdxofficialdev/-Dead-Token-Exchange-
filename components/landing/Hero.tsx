'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        {/* Logo Animation */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="mb-8 inline-block"
        >
          <div className="w-24 h-24 rounded-2xl bg-gradient-gold flex items-center justify-center text-4xl font-black text-black glow-pulse mx-auto">
            U
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black mb-6 leading-tight"
        >
          <span className="block mb-2">Welcome to</span>
          <span className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 bg-clip-text text-transparent">USDX Network</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          Join the premium Web3 ecosystem for staking, rewards, and unlimited growth potential
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12"
        >
          <div className="w-full md:w-auto">
            <ConnectButton />
          </div>
          <Link
            href="/membership"
            className="group px-8 py-3 rounded-lg bg-gradient-gold text-black font-bold hover:shadow-glow-gold-lg transition-all duration-300 flex items-center gap-2 justify-center w-full md:w-auto"
          >
            Explore Membership
            <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
          </Link>
        </motion.div>

        {/* Features Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 pt-12 border-t border-gold-500/20"
        >
          {[
            { label: 'Zero Fees', icon: '💰' },
            { label: 'Instant Rewards', icon: '⚡' },
            { label: '24/7 Support', icon: '🤝' },
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

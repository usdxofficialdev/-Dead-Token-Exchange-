'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { Users, Zap, Shield, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  const features = [
    {
      icon: <Zap size={32} />,
      title: 'Lightning Fast',
      description: 'Instant stake and reward claims with zero delays',
    },
    {
      icon: <Shield size={32} />,
      title: 'Secure & Safe',
      description: 'Military-grade security with multi-signature wallets',
    },
    {
      icon: <Users size={32} />,
      title: 'Community Driven',
      description: 'Join thousands of members earning daily rewards',
    },
    {
      icon: <TrendingUp size={32} />,
      title: 'Passive Income',
      description: 'Earn 24/7 through staking and referrals',
    },
  ];

  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <Navigation isLoggedIn={false} onLogout={() => {}} />
      <Hero />

      {/* Features Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Why Choose <span className="text-gold-400">USDX Rewards</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass rounded-2xl p-6 hover:border-gold-400/50 transition"
              >
                <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-gold-400 to-gold-600 text-black mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 relative">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-black mb-6">Ready to Start Earning?</h2>
            <p className="text-xl text-gray-300 mb-8">Join thousands of members already making passive income</p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link
                href="/dashboard"
                className="px-8 py-4 rounded-lg bg-gradient-to-r from-gold-400 to-gold-600 text-black font-bold hover:shadow-glow-gold-lg transition"
              >
                Get Started Now
              </Link>
              <Link
                href="/referral"
                className="px-8 py-4 rounded-lg border border-gold-400 text-gold-400 font-bold hover:bg-gold-400/10 transition"
              >
                Join Referral Program
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FAQ />
      <Footer />
    </main>
  );
}

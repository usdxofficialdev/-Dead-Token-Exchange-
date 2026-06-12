'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Check } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Bronze',
    price: '100',
    icon: '🥉',
    description: 'Perfect for beginners',
    features: [
      'Daily rewards (5% APY)',
      '2 team members allowed',
      'Email support',
      'Basic analytics',
    ],
    popular: false,
  },
  {
    name: 'Silver',
    price: '500',
    icon: '🥈',
    description: 'Best for active traders',
    features: [
      'Daily rewards (10% APY)',
      '10 team members allowed',
      '24/7 Priority support',
      'Advanced analytics',
      'Monthly bonus rewards',
    ],
    popular: true,
  },
  {
    name: 'Gold',
    price: '2000',
    icon: '🏆',
    description: 'For serious investors',
    features: [
      'Daily rewards (15% APY)',
      'Unlimited team members',
      'VIP support',
      'Premium analytics',
      'Monthly bonus + extra perks',
      'Exclusive events access',
    ],
    popular: false,
  },
];

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation isLoggedIn={true} onLogout={() => {}} />
      
      <section className="py-20 px-4 md:px-8 pt-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-6">
              Membership <span className="text-gold-400">Plans</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Choose your perfect plan and start earning today
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className={`relative rounded-2xl p-8 transition duration-300 ${
                  plan.popular
                    ? 'glass border-gold-500 shadow-glow-gold-lg'
                    : 'glass border-white/10 hover:border-gold-400/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-gradient-to-r from-gold-400 to-gold-600 text-black px-4 py-1 rounded-full text-sm font-bold">Most Popular</span>
                  </div>
                )}

                <div className="text-4xl mb-4">{plan.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-gold-400">{plan.name}</h3>
                <p className="text-gray-400 mb-6 text-sm">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-black">{plan.price}</span>
                  <span className="text-gray-400 ml-2">USDX</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-3">
                      <Check size={20} className="text-gold-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-bold transition duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-gold-400 to-gold-600 text-black hover:shadow-glow-gold-lg'
                      : 'border border-gold-400 text-gold-400 hover:bg-gold-400/10'
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

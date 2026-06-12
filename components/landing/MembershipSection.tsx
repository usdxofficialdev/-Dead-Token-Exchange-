'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: 'Bronze',
    price: '100',
    description: 'Perfect for getting started',
    features: ['Daily rewards', '5% APY', '2 team members', 'Email support'],
    popular: false,
  },
  {
    name: 'Silver',
    price: '500',
    description: 'Best for growth',
    features: ['Daily rewards', '10% APY', '10 team members', '24/7 support', 'Advanced analytics'],
    popular: true,
  },
  {
    name: 'Gold',
    price: '2000',
    description: 'For serious investors',
    features: ['Daily rewards', '15% APY', 'Unlimited team', 'Premium support', 'Advanced analytics', 'Exclusive events'],
    popular: false,
  },
];

export function MembershipSection() {
  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Membership <span className="text-gold-400">Plans</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your investment goals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
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
                  <span className="bg-gradient-gold text-black px-4 py-1 rounded-full text-sm font-bold">Most Popular</span>
                </div>
              )}

              <h3 className="text-2xl font-bold mb-2 text-gold-400">{plan.name}</h3>
              <p className="text-gray-400 mb-4 text-sm">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-black">{plan.price}</span>
                <span className="text-gray-400 ml-2">USDX</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-3">
                    <Check size={20} className="text-gold-400" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/membership"
                className={`w-full py-3 rounded-lg font-bold transition duration-300 text-center block ${
                  plan.popular
                    ? 'bg-gradient-gold text-black hover:shadow-glow-gold-lg'
                    : 'border border-gold-400 text-gold-400 hover:bg-gold-400/10'
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

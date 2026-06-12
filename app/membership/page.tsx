'use client';

import React from 'react';
import { Navigation } from '@/components/shared/Navigation';
import { Footer } from '@/components/shared/Footer';
import { motion } from 'framer-motion';

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
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
            <p className="text-xl text-gray-400">
              Choose your perfect plan and start earning today
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-8 text-center"
              >
                <h3 className="text-2xl font-bold text-gold-400 mb-4">Plan {i}</h3>
                <p className="text-4xl font-black mb-6">Coming Soon</p>
                <p className="text-gray-400">More details coming soon</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

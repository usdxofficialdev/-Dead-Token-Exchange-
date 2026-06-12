'use client';

import React from 'react';
import { Navigation } from '@/components/shared/Navigation';
import { Footer } from '@/components/shared/Footer';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      <section className="py-20 px-4 md:px-8 pt-32">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-2xl p-12"
          >
            <h1 className="text-5xl font-black mb-8 text-gold-400">About USDX Network</h1>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                USDX Network is revolutionizing the way people earn passive income through Web3 technology.
                Our platform combines security, transparency, and profitability in one premium ecosystem.
              </p>
              <p>
                Founded with the mission to democratize wealth creation, USDX Network provides everyone
                with the tools to build generational wealth through staking and referral programs.
              </p>
              <p>
                We believe in community-driven development and are committed to building sustainable
                wealth creation opportunities for all our members.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

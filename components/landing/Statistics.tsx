'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Award } from 'lucide-react';

interface StatItem {
  label: string;
  value: number;
  suffix: string;
  icon: React.ReactNode;
  color: string;
}

const stats: StatItem[] = [
  { label: 'Active Members', value: 45230, suffix: '+', icon: <Users size={24} />, color: 'gold' },
  { label: 'Total Rewards', value: 2450000, suffix: 'USDX', icon: <TrendingUp size={24} />, color: 'gold' },
  { label: 'Network Growth', value: 342, suffix: '%', icon: <Award size={24} />, color: 'gold' },
];

export function Statistics() {
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const timers = stats.map((stat, idx) => {
      let current = 0;
      const step = stat.value / 30;
      const interval = setInterval(() => {
        current += step;
        if (current >= stat.value) current = stat.value;
        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[idx] = Math.floor(current);
          return newCounts;
        });
      }, 30);
      return interval;
    });

    return () => timers.forEach(timer => clearInterval(timer));
  }, []);

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              className="glass rounded-2xl p-8 text-center hover:border-gold-400/50 transition"
            >
              <div className="flex justify-center mb-4 text-gold-400">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-black text-gold-400 mb-2">
                {counts[idx].toLocaleString()}{stat.suffix}
              </div>
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Menu, X, LogOut } from 'lucide-react';

export function Navigation({ isLoggedIn, onLogout }: any) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-lg border-b border-gold-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-gold-400 to-gold-600 flex items-center justify-center font-black text-black text-lg glow-pulse">
              U
            </div>
            <span className="text-xl font-black bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
              USDX Rewards
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {[
              { label: 'Dashboard', href: '/dashboard' },
              { label: 'Staking', href: '/staking' },
              { label: 'Rewards', href: '/rewards' },
              { label: 'Referral', href: '/referral' },
              { label: 'Leaderboard', href: '/leaderboard' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-300 hover:text-gold-400 transition font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/profile"
              className="px-6 py-2 rounded-lg bg-gold-500/20 text-gold-400 hover:bg-gold-500/30 transition font-bold"
            >
              Profile
            </Link>
            {isLoggedIn && (
              <button
                onClick={onLogout}
                className="px-6 py-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition font-bold flex items-center gap-2"
              >
                <LogOut size={18} />
                Logout
              </button>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gold-400"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 space-y-3 pb-4"
          >
            {[
              { label: 'Dashboard', href: '/dashboard' },
              { label: 'Staking', href: '/staking' },
              { label: 'Rewards', href: '/rewards' },
              { label: 'Referral', href: '/referral' },
              { label: 'Leaderboard', href: '/leaderboard' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 rounded-lg hover:bg-gold-500/10 transition"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

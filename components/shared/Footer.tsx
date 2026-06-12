'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Twitter } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { label: 'Membership', href: '/membership' },
        { label: 'Dashboard', href: '/dashboard' },
        { label: 'Referral Program', href: '/referral' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Blog', href: '#' },
        { label: 'Contact', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '#' },
        { label: 'Terms of Service', href: '#' },
        { label: 'Disclaimer', href: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-black/50 border-t border-gold-500/20 backdrop-blur-xl mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-gold flex items-center justify-center font-black text-black">
                U
              </div>
              <span className="text-lg font-black text-gold-400">USDX Network</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              The premium Web3 platform for staking, rewards, and community growth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gold-400 hover:text-gold-300 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gold-400 hover:text-gold-300 transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gold-400 hover:text-gold-300 transition">
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Links */}
          {footerLinks.map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="font-bold text-gold-400 mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-gold-300 transition text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="border-t border-gold-500/20 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} USDX Network. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

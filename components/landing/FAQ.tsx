'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'What is USDX Network?',
    answer: 'USDX Network is a premium Web3 platform offering staking, rewards, and a referral program for passive income generation.',
  },
  {
    question: 'How do I get started?',
    answer: 'Connect your wallet, choose a membership plan, and start earning rewards immediately.',
  },
  {
    question: 'What are the fees?',
    answer: 'USDX Network charges zero transaction fees. Rewards are paid directly to your wallet.',
  },
  {
    question: 'Can I withdraw anytime?',
    answer: 'Yes, you can withdraw your rewards anytime without any lock-up period or penalties.',
  },
  {
    question: 'How does the referral program work?',
    answer: 'Earn 10-20% commission from your referrals earnings. Build your network and increase your passive income.',
  },
  {
    question: 'Is USDX Network secure?',
    answer: 'Yes, we use military-grade security with multi-signature wallets and regular security audits.',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Frequently Asked <span className="text-gold-400">Questions</span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="glass rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gold-500/5 transition"
              >
                <span className="text-lg font-bold text-left">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-gold-400"
                >
                  <ChevronDown size={24} />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 border-t border-gold-500/20 bg-gold-500/5"
                  >
                    <p className="text-gray-300">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

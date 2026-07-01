'use client'

import Link from 'next/link'
import { useAccount } from 'wagmi'

export default function Home() {
  const { isConnected } = useAccount()

  return (
    <div className="min-h-screen bg-black text-white">
      {/* NAVBAR */}
      <nav className="bg-[#0a0a12] border-b border-[#1a1a24] px-8 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#e8c547] rounded text-black font-bold flex items-center justify-center">U</div>
          <span className="font-bold text-[#e8c547]">USDX Network</span>
        </div>
        <Link href={isConnected ? '/dashboard' : '/login'} className="bg-gradient-to-r from-[#e8c547] to-[#d4a25e] text-black font-bold px-6 py-2 rounded hover:shadow-lg hover:shadow-[#e8c547]/50">
          {isConnected ? 'Dashboard' : 'Get Started'}
        </Link>
      </nav>

      {/* HERO */}
      <div className="px-8 py-20 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Secure & Transparent
          <span className="block text-[#e8c547]">Crypto Staking</span>
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Join thousands of users earning passive income through our decentralized staking platform. 
          High rewards, fast & easy, 24/7 support.
        </p>
        <Link href={isConnected ? '/dashboard' : '/login'} className="inline-block bg-gradient-to-r from-[#e8c547] to-[#d4a25e] text-black font-bold px-10 py-4 rounded-lg text-lg hover:shadow-2xl hover:shadow-[#e8c547]/50 transition transform hover:scale-105">
          Start Staking Now
        </Link>
      </div>

      {/* FEATURES */}
      <div className="px-8 py-20 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Why Choose USDX Network?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: '🔒', title: 'Secure', desc: 'Military-grade encryption' },
            { icon: '💎', title: 'High Rewards', desc: '0.35% daily ROI' },
            { icon: '⚡', title: 'Fast & Easy', desc: 'Stake in seconds' },
            { icon: '🚀', title: '24/7 Support', desc: 'Always here to help' }
          ].map((feature, idx) => (
            <div key={idx} className="bg-[#0a0a12] border border-[#1a1a24] rounded-lg p-8 text-center hover:border-[#e8c547] transition">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* STATS */}
      <div className="bg-[#0a0a12] border-y border-[#1a1a24] px-8 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-[#e8c547] mb-2">$2.5M+</p>
            <p className="text-gray-400">Total Value Locked</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#e8c547] mb-2">12,543</p>
            <p className="text-gray-400">Active Users</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-[#e8c547] mb-2">$125K</p>
            <p className="text-gray-400">Rewards Distributed</p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#0a0a12] border-t border-[#1a1a24] px-8 py-8 text-center text-gray-400">
        <p>&copy; 2025 USDX Network. All rights reserved.</p>
      </footer>
    </div>
  )
}

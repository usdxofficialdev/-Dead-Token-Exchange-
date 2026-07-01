'use client'

import Link from 'next/link'
import { useAccount } from 'wagmi'
import { ArrowRight, Shield, Zap, TrendingUp, Users } from 'lucide-react'

export default function Home() {
  const { isConnected } = useAccount()

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="bg-gradient-to-b from-[#0a0a12] to-transparent border-b border-[#e8c547]/20 px-6 md:px-12 py-4 sticky top-0 z-40 backdrop-blur">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center font-bold text-black group-hover:shadow-glow transition">
              U
            </div>
            <span className="font-bold text-[#e8c547] text-lg hidden sm:inline">USDX Network</span>
          </Link>
          <Link
            href={isConnected ? '/dashboard' : '/login'}
            className="bg-gradient-gold text-black font-bold px-6 py-2 rounded-lg hover:shadow-glow-lg transition"
          >
            {isConnected ? 'Dashboard' : 'Get Started'}
            <ArrowRight className="inline ml-2" size={16} />
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 md:px-12 py-20 md:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Secure & Transparent
            <span className="block text-[#e8c547]">Crypto Staking</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of users earning passive income through our decentralized staking
            platform. High rewards, fast & easy, 24/7 support.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={isConnected ? '/dashboard' : '/login'}
              className="inline-block bg-gradient-gold text-black font-bold px-10 py-4 rounded-lg text-lg hover:shadow-glow-lg transition"
            >
              Start Staking Now
            </Link>
            <Link
              href="#features"
              className="inline-block border border-[#e8c547] text-[#e8c547] font-bold px-10 py-4 rounded-lg hover:bg-[#e8c547]/10 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 md:px-12 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Why Choose USDX Network?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: 'Secure',
                desc: 'Military-grade encryption & audited smart contracts',
              },
              {
                icon: TrendingUp,
                title: 'High Rewards',
                desc: '0.35% daily ROI with membership bonuses',
              },
              {
                icon: Zap,
                title: 'Fast & Easy',
                desc: 'Stake in seconds with one-click setup',
              },
              {
                icon: Users,
                title: '24/7 Support',
                desc: 'Dedicated support team always ready to help',
              },
            ].map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className="glass rounded-xl p-8 text-center hover:border-[#e8c547] transition-all duration-300 group hover:shadow-glow"
                >
                  <div className="inline-block p-3 bg-[#e8c547]/10 rounded-lg mb-4 group-hover:bg-[#e8c547]/20 transition">
                    <Icon size={32} className="text-[#e8c547]" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-dark border-y border-[#e8c547]/20 px-6 md:px-12 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            { value: '$2.5M+', label: 'Total Value Locked' },
            { value: '12,543', label: 'Active Users' },
            { value: '$125K', label: 'Rewards Distributed' },
          ].map((stat, idx) => (
            <div key={idx}>
              <p className="text-5xl font-bold text-[#e8c547] mb-2">{stat.value}</p>
              <p className="text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 py-20">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-[#12121c] via-[#151521] to-[#1b1b28] border border-[#e8c547]/20 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Earning?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Connect your wallet and start staking USDX tokens today. Earn passive income
            with our decentralized platform.
          </p>
          <Link
            href={isConnected ? '/dashboard' : '/login'}
            className="inline-block bg-gradient-gold text-black font-bold px-10 py-4 rounded-lg hover:shadow-glow-lg transition"
          >
            Connect Wallet Now
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a12] border-t border-[#e8c547]/20 px-6 md:px-12 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-[#e8c547] transition">
                    Staking
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#e8c547] transition">
                    Rewards
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#e8c547] transition">
                    Membership
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-[#e8c547] transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#e8c547] transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#e8c547] transition">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-[#e8c547] transition">
                    Terms
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#e8c547] transition">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#e8c547] transition">
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-[#e8c547] transition">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#e8c547] transition">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#e8c547] transition">
                    Telegram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#e8c547]/20 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; 2025 USDX Network. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

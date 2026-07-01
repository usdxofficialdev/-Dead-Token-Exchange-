'use client'

// @ts-ignore TS2307: React typings not available in this environment
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useAccount, useDisconnect } from 'wagmi'

type IconProps = {
  className?: string
  size?: number
  [key: string]: any
}

const BaseIcon = ({ children, className, size = 20, ...props }: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {children}
  </svg>
)

const LayoutDashboard = (props: IconProps) => (
  <BaseIcon {...props}>
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </BaseIcon>
)

const Wallet = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <path d="M16 12h4" />
    <path d="M3 10h16" />
  </BaseIcon>
)

const Coins = (props: IconProps) => (
  <BaseIcon {...props}>
    <circle cx="8" cy="8" r="5" />
    <path d="M18 14c0 2.2-2.2 4-4.9 4-2.7 0-4.9-1.8-4.9-4 0-2.2 2.2-4 4.9-4 2.7 0 4.9 1.8 4.9 4Z" />
    <path d="M4 10v4" />
    <path d="M12 4v4" />
  </BaseIcon>
)

const Gift = (props: IconProps) => (
  <BaseIcon {...props}>
    <rect x="3" y="8" width="18" height="13" rx="2" />
    <path d="M12 8v13" />
    <path d="M3 8h18" />
    <path d="M7 8c0-2.2 1.8-4 4-4 1.4 0 2.6.8 3.3 2" />
    <path d="M17 8c0-2.2-1.8-4-4-4-1.4 0-2.6.8-3.3 2" />
  </BaseIcon>
)

const ArrowLeftRight = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="m7 7 5-5 5 5" />
    <path d="m17 17-5 5-5-5" />
    <path d="M12 2v20" />
  </BaseIcon>
)

const Crown = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="m4 16 2.3-7a1 1 0 0 1 1.9-.1L11 12l2.8-3.1a1 1 0 0 1 1.8.1L18 16" />
    <path d="M5 18h14" />
  </BaseIcon>
)

const Users = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
    <path d="M16 3.1a4 4 0 0 1 0 7.8" />
  </BaseIcon>
)

const Receipt = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M4 2h16v20l-2-2-2 2-2-2-2 2-2-2-2 2-2-2-2 2V2z" />
    <path d="M7 7h10" />
    <path d="M7 11h10" />
    <path d="M7 15h6" />
  </BaseIcon>
)

const LifeBuoy = (props: IconProps) => (
  <BaseIcon {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
    <path d="M4.9 4.9 9 9" />
    <path d="m15 15 4.1 4.1" />
    <path d="M4.9 19.1 9 15" />
    <path d="m15 9 4.1-4.1" />
  </BaseIcon>
)

const Settings = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M12 3v2" />
    <path d="M12 19v2" />
    <path d="M4.2 16.2l1.4-1.4" />
    <path d="m18.4 6-1.4 1.4" />
    <path d="M3 12h2" />
    <path d="M19 12h2" />
    <path d="M4.2 7.8l1.4 1.4" />
    <path d="m18.4 18-1.4-1.4" />
    <circle cx="12" cy="12" r="3" />
  </BaseIcon>
)

const Bell = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M6 8a6 6 0 1 1 12 0c0 7 3 8 3 8H3s3-1 3-8" />
    <path d="M10 20a2 2 0 0 0 4 0" />
  </BaseIcon>
)

const UserCircle = (props: IconProps) => (
  <BaseIcon {...props}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="10" r="3" />
    <path d="M7 18a5 5 0 0 1 10 0" />
  </BaseIcon>
)

const LogOut = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <path d="m16 17 5-5-5-5" />
    <path d="M21 12H9" />
  </BaseIcon>
)

const Menu = (props: IconProps) => (
  <BaseIcon {...props}>
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="4" y1="18" x2="20" y2="18" />
  </BaseIcon>
)

const X = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </BaseIcon>
)

const Search = (props: IconProps) => (
  <BaseIcon {...props}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </BaseIcon>
)

const ChevronDown = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="m6 9 6 6 6-6" />
  </BaseIcon>
)

export default function Dashboard() {
  const { address, isConnected } = useAccount()
  const { disconnect } = useDisconnect()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024)
  const [notificationOpen, setNotificationOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const stats = [
    { label: 'Total Balance', value: '1,250.00', icon: '💰' },
    { label: 'Total Staked', value: '800.00', icon: '📊' },
    { label: 'Total Rewards', value: '120.50', icon: '🎁' },
    { label: 'Lifetime Earnings', value: '320.75', icon: '📈' }
  ]

  const transactions = [
    { id: 1, type: 'Stake', amount: -500, date: 'May 24, 2025', icon: '📊' },
    { id: 2, type: 'Reward', amount: 2.80, date: 'May 24, 2025', icon: '🎁' },
    { id: 3, type: 'Stake', amount: -300, date: 'May 20, 2025', icon: '📊' },
    { id: 4, type: 'Reward', amount: 2.10, date: 'May 24, 2025', icon: '🎁' }
  ]

  const notifications = [
    {
      id: 1,
      title: "Reward Credited",
      message: "2.80 USDX has been added to your wallet.",
      type: "reward",
      time: "2 min ago",
    },
    {
      id: 2,
      title: "Membership Active",
      message: "Gold Membership is now active.",
      type: "membership",
      time: "15 min ago",
    },
    {
      id: 3,
      title: "Admin Announcement",
      message: "New staking campaign is now live.",
      type: "announcement",
      time: "1 hour ago",
    },
    {
      id: 4,
      title: "Referral Bonus",
      message: "25 USDX referral reward received.",
      type: "referral",
      time: "3 hours ago",
    },
    {
      id: 5,
      title: "Security Alert",
      message: "New wallet login detected.",
      type: "security",
      time: "Today",
    },
  ]

  const actions = [
    { label: 'Stake USDX', icon: '📊' },
    { label: 'Unstake', icon: '↩️' },
    { label: 'Claim Rewards', icon: '🎁' },
    { label: 'Swap USDX', icon: '💱' },
    { label: 'Buy USDX', icon: '🛒' },
    { label: 'Transactions', icon: '📋' }
  ]

  const menuItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Stake USDX", href: "/stake", icon: Coins },
    { name: "My Stakes", href: "/my-stakes", icon: Wallet },
    { name: "Rewards", href: "/rewards", icon: Gift },
    { name: "Swap", href: "/swap", icon: ArrowLeftRight },
    { name: "Membership", href: "/membership", icon: Crown },
    { name: "Referral", href: "/referral", icon: Users },
    { name: "Transactions", href: "/transactions", icon: Receipt },
    { name: "Support", href: "/support", icon: LifeBuoy },
    { name: "Settings", href: "/settings", icon: Settings },
    { name: "Profile", href: "/profile", icon: UserCircle },
  ]

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="bg-gradient-to-br from-[#0a0a12] to-black border border-[#1a1a24] rounded-lg p-8 max-w-md w-full mx-4">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-[#e8c547] rounded-lg flex items-center justify-center font-bold text-xl text-black">U</div>
          </div>
          <h1 className="text-center text-2xl font-bold mb-2">USDX Network</h1>
          <p className="text-center text-gray-400 mb-6">Connect your wallet to access the dashboard</p>
          <Link href="/login" className="w-full bg-gradient-to-r from-[#e8c547] to-[#d4a25e] text-black font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-[#e8c547]/50 transition">
            Connect Wallet
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      {/* SIDEBAR */}
      <div className={`${windowWidth < 768 ? `fixed inset-0 z-50 transform transition-transform ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}` : 'w-44'} bg-[#0a0a12] border-r border-[#1a1a24] flex flex-col`}>
        <div className="p-4 border-b border-[#1a1a24] flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#e8c547] rounded text-black font-bold flex items-center justify-center">U</div>
            <span className="font-bold text-[#e8c547]">USDX</span>
          </div>
          {windowWidth < 768 && <button onClick={() => setMobileMenuOpen(false)} className="text-[#e8c547]"><X size={20} /></button>}
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {menuItems.map((item, index) => {
            const Icon = item.icon

            return (
              <Link
                key={index}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${index === 0
                    ? "bg-[#1a1a24] border-l-4 border-[#e8c547] text-[#e8c547] shadow-lg"
                    : "text-gray-400 hover:text-[#e8c547] hover:bg-[#1a1a24]"
                  }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Icon size={18} />
                <span className="text-sm font-medium">{item.name}</span>
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t border-[#1a1a24] space-y-3">
          <div className="bg-[#1a1a24] p-3 rounded">
            <div className="text-xs text-gray-400 mb-1">USDX Price</div>
            <div className="text-2xl font-bold text-[#e8c547]">$1.00</div>
            <div className="text-xs text-green-500">+0.25%</div>
          </div>
          <button className="w-full bg-gradient-to-r from-[#e8c547] to-[#d4a25e] text-black font-bold py-2 rounded text-sm hover:shadow-lg hover:shadow-[#e8c547]/50">Buy USDX</button>
          <button onClick={() => { disconnect(); setMobileMenuOpen(false) }} className="w-full border border-[#e8c547] text-[#e8c547] font-bold py-2 rounded text-sm hover:bg-[#e8c547]/10 flex items-center justify-center gap-2">
            <LogOut size={16} /> Logout
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* TOP BAR */}
        <div className="bg-[#0a0a12] border-b border-[#1a1a24] px-6 py-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            {/* LEFT */}
            <div className="flex items-center gap-4">

              {windowWidth < 768 && (
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="text-[#e8c547]"
                >
                  <Menu size={24} />
                </button>
              )}

              <div>
                <h2 className="text-2xl font-bold text-white">
                  👋 Welcome Back
                </h2>

                <div className="flex items-center gap-3 mt-1 flex-wrap">

                  <span className="text-gray-400 text-sm">
                    {address?.slice(0, 6)}...{address?.slice(-4)}
                  </span>

                  <span className="bg-yellow-500 text-black text-xs px-3 py-1 rounded-full font-bold">
                    👑 GOLD MEMBER
                  </span>

                  <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full">
                    ACTIVE
                  </span>

                </div>

              </div>

            </div>

            {/* RIGHT */}

            <div className="flex items-center gap-3 flex-wrap">

              <input
                type="text"
                placeholder="Search..."
                className="bg-[#1a1a24] border border-[#2a2a34] rounded-lg px-4 py-2 text-sm w-52 focus:border-[#e8c547] outline-none"
              />

              <button
                onClick={() => setNotificationOpen(!notificationOpen)}
                className="relative bg-[#1a1a24] p-3 rounded-lg hover:bg-[#252535] transition"
              >
                <Bell size={20} className="text-[#e8c547]" />

                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center">
                  5
                </span>
              </button>

              <div className="bg-[#1a1a24] px-4 py-2 rounded-lg border border-[#2a2a34]">
                <p className="text-xs text-gray-400">
                  Wallet
                </p>

                <p className="text-sm font-semibold text-[#e8c547]">
                  {address?.slice(0, 6)}...{address?.slice(-4)}
                </p>
              </div>

            </div>

          </div>
        </div>


        {/* DASHBOARD CONTENT */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="mb-8 rounded-2xl border border-[#e8c547]/20 bg-gradient-to-r from-[#12121c] via-[#151521] to-[#1b1b28] p-6">

            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

              <div>
                <p className="text-[#e8c547] font-semibold text-sm">
                  👋 Good Morning
                </p>

                <h1 className="text-4xl font-bold mt-2">
                  Welcome to USDExchange
                </h1>

                <p className="text-gray-400 mt-3 max-w-xl">
                  Stake your USDX tokens, earn daily rewards, unlock Membership benefits and grow your passive income on BNB Smart Chain.
                </p>

                <div className="flex flex-wrap gap-3 mt-5">

                  <span className="bg-yellow-500 text-black px-4 py-2 rounded-full text-sm font-bold">
                    👑 Gold Membership
                  </span>

                  <span className="bg-green-600 px-4 py-2 rounded-full text-sm">
                    ✅ Membership Active
                  </span>

                </div>

              </div>

              <div className="bg-[#0f0f17] border border-[#2a2a34] rounded-xl p-5 min-w-[280px]">

                <p className="text-gray-400 text-sm">
                  Today's Reward
                </p>

                <h2 className="text-4xl font-bold text-[#e8c547] mt-2">
                  2.80 USDX
                </h2>

                <p className="text-green-500 mt-2">
                  +0.35% Daily ROI
                </p>

                <button className="mt-5 w-full bg-gradient-to-r from-[#e8c547] to-[#d4a25e] text-black font-bold py-3 rounded-xl hover:scale-[1.02] transition">
                  Claim Rewards
                </button>

              </div>

            </div>

          </div>

          {/* STATS GRID */}
          {/* PREMIUM STATS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 mb-8">

            <div className="bg-[#111118] border border-[#2a2a34] rounded-2xl p-6">
              <p className="text-gray-400 text-sm">Portfolio Value</p>
              <h2 className="text-3xl font-bold text-[#e8c547] mt-2">$1,250</h2>
              <p className="text-green-500 mt-2">+5.24%</p>
            </div>

            <div className="bg-[#111118] border border-[#2a2a34] rounded-2xl p-6">
              <p className="text-gray-400 text-sm">Available USDX</p>
              <h2 className="text-3xl font-bold text-white mt-2">450 USDX</h2>
              <p className="text-gray-500 mt-2">Ready to Stake</p>
            </div>

            <div className="bg-[#111118] border border-[#2a2a34] rounded-2xl p-6">
              <p className="text-gray-400 text-sm">Locked USDX</p>
              <h2 className="text-3xl font-bold text-white mt-2">800 USDX</h2>
              <p className="text-[#e8c547] mt-2">1 Active Stake</p>
            </div>

            <div className="bg-[#111118] border border-[#2a2a34] rounded-2xl p-6">
              <p className="text-gray-400 text-sm">Today's Reward</p>
              <h2 className="text-3xl font-bold text-green-500 mt-2">2.80</h2>
              <p className="text-gray-500 mt-2">USDX Earned</p>
            </div>

            <div className="bg-[#111118] border border-[#2a2a34] rounded-2xl p-6">
              <p className="text-gray-400 text-sm">Pending Rewards</p>
              <h2 className="text-3xl font-bold text-yellow-400 mt-2">12.60</h2>
              <p className="text-gray-500 mt-2">Ready to Claim</p>
            </div>

            <div className="bg-[#111118] border border-[#2a2a34] rounded-2xl p-6">
              <p className="text-gray-400 text-sm">Lifetime Earnings</p>
              <h2 className="text-3xl font-bold text-[#e8c547] mt-2">320.75</h2>
              <p className="text-gray-500 mt-2">USDX Earned</p>
            </div>

          </div>

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* ACTIVE STAKE */}
            <div className="lg:col-span-2 bg-[#0a0a12] border border-[#1a1a24] rounded-lg p-6">
              <div className="space-y-8 pt-4">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-2xl font-bold">🚀 Active Stake</h3>
                    <p className="text-gray-400 text-sm mt-1">
                      Your current staking position
                    </p>
                  </div>

                  <span className="bg-green-500 text-black px-4 py-2 rounded-full text-xs font-bold">
                    ● ACTIVE
                  </span>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 items-center mb-8">

  <div>
    <p className="text-5xl font-bold text-[#e8c547]">
      800.00
    </p>

    <p className="text-3xl font-bold text-[#e8c547]">
      USDX
    </p>

    <p className="text-gray-400 mt-3">
      Gold Membership • BNB Smart Chain
    </p>
  </div>

  <div>
    <div className="flex justify-between text-sm mb-2">
      <span className="text-gray-400">
        Stake Progress
      </span>

      <span className="text-[#e8c547] font-bold">
        42%
      </span>
    </div>

    <div className="w-full bg-[#1a1a24] rounded-full h-3 overflow-hidden">
      <div className="bg-gradient-to-r from-[#e8c547] to-[#d4a25e] h-3 w-[42%] rounded-full"></div>
    </div>
  </div>

</div>

                
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">

  <div className="bg-[#15151d] border border-[#2a2a34] rounded-xl p-5 min-h-[110px] flex flex-col justify-between hover:border-[#e8c547] transition-all duration-300">
    <p className="text-xs text-gray-400 mb-2">💰 Daily Reward</p>
    <h4 className="text-xl font-bold text-[#e8c547]">
      2.80 USDX
    </h4>
  </div>

  <div className="bg-[#15151d] border border-[#2a2a34] rounded-xl p-5 min-h-[110px] flex flex-col justify-between hover:border-[#e8c547] transition-all duration-300">
    <p className="text-xs text-gray-400 mb-2">📈 ROI</p>
    <h4 className="text-xl font-bold text-green-400">
      0.35%
    </h4>
  </div>

  <div className="bg-[#15151d] border border-[#2a2a34] rounded-xl p-5 min-h-[110px] flex flex-col justify-between hover:border-[#e8c547] transition-all duration-300">
    <p className="text-xs text-gray-400 mb-2">🔒 Lock Period</p>
    <h4 className="text-xl font-bold">
      30 Days
    </h4>
  </div>

  <div className="bg-[#15151d] border border-[#2a2a34] rounded-xl p-5 min-h-[110px] flex flex-col justify-between hover:border-[#e8c547] transition-all duration-300">
    <p className="text-xs text-gray-400 mb-2">⏳ Remaining</p>
    <h4 className="text-xl font-bold text-red-400">
      28 Days Left
    </h4>
  </div>

</div>
              <div className="bg-[#15151d] border border-[#2a2a34] rounded-xl p-5 min-h-[110px] flex flex-col justify-between hover:border-[#e8c547] transition-all duration-300">

  <div className="flex justify-between items-center mb-4">
    <span className="text-gray-400">
      👑 Membership Bonus
    </span>

    <span className="text-[#e8c547] font-bold text-xl">
      +25%
    </span>
  </div>

  <div className="border-t border-[#2a2a34] pt-4 flex justify-between items-center">

    <span className="text-gray-400">
      ⏰ Next Reward
    </span>

    <span className="text-green-400 font-bold text-lg">
      05:18:22
    </span>

  </div>

</div>
                <div className="grid md:grid-cols-2 gap-4">

                 <button
  className="w-full bg-gradient-to-r from-[#e8c547] to-[#d4a25e] text-black font-bold py-4 rounded-xl hover:scale-[1.02] transition duration-300"
>
  🎁 Claim Reward
</button>

<button
  className="w-full border border-[#e8c547] text-[#e8c547] font-bold py-4 rounded-xl hover:bg-[#e8c547]/10 transition duration-300"
>
  ⚙️ Manage Stake
</button>
                </div>
              </div>

              {/* RECENT TRANSACTIONS */}
              <div className="bg-[#0a0a12] border border-[#1a1a24] rounded-2xl p-6">

                <div className="flex justify-between items-center mb-6">

                  <div>
                    <h3 className="text-xl font-bold">
                      📜 Recent Transactions
                    </h3>

                    <p className="text-gray-400 text-sm mt-1">
                      Latest wallet activity
                    </p>
                  </div>

                  <button className="text-[#e8c547] text-sm hover:underline">
                    View All →
                  </button>

                </div>

                <div className="space-y-4">

                  {transactions.map((tx) => (

                    <div
                      key={tx.id}
                      className="bg-[#15151d] border border-[#2a2a34] rounded-xl p-4 hover:border-[#e8c547] transition"
                    >

                      <div className="flex justify-between items-start">

                        <div className="flex gap-3">

                          <div className="w-12 h-12 rounded-xl bg-[#e8c547]/10 flex items-center justify-center text-2xl">
                            {tx.icon}
                          </div>

                          <div>

                            <h4 className="font-bold">
                              {tx.type}
                            </h4>

                            <p className="text-xs text-gray-400 mt-1">
                              {tx.date}
                            </p>

<p className="text-xs text-gray-500 mt-1">
                              TX:
                              0xA7F...9D42
                            </p>

                          </div>

                        </div>

                        <div className="text-right">

                          <p
                            className={`font-bold ${tx.amount > 0
                                ? "text-green-500"
                                : "text-red-500"
                              }`}
                          >
                            {tx.amount > 0 ? "+" : ""}
                            {tx.amount.toFixed(2)} USDX
                          </p>

                          <span className="inline-block mt-2 bg-green-600/20 text-green-400 text-xs px-3 py-1 rounded-full">
                            Completed
                          </span>

                        </div>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

              {/* QUICK ACTIONS */}
              <div className="bg-[#0a0a12] border border-[#1a1a24] rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  {actions.map((action, idx) => (
                    <button key={idx} className="bg-[#1a1a24] border border-[#2a2a34] text-[#e8c547] p-4 rounded hover:border-[#e8c547] hover:bg-[#e8c547]/10 transition flex flex-col items-center gap-2">
                      <span className="text-2xl">{action.icon}</span>
                      <span className="text-xs font-bold text-center">{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
                            
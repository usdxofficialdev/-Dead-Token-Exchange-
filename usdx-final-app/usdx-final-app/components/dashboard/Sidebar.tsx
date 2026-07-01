'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { useDisconnect } from 'wagmi'
import {
  LayoutDashboard,
  Coins,
  Wallet,
  Gift,
  ArrowLeftRight,
  Crown,
  Users,
  Receipt,
  LifeBuoy,
  Settings,
  User,
  LogOut,
  X,
} from 'lucide-react'

const menuItems = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Stake USDX', href: '/stake', icon: Coins },
  { name: 'My Stakes', href: '/my-stakes', icon: Wallet },
  { name: 'Rewards', href: '/rewards', icon: Gift },
  { name: 'Swap', href: '/swap', icon: ArrowLeftRight },
  { name: 'Membership', href: '/membership', icon: Crown },
  { name: 'Referral', href: '/referral', icon: Users },
  { name: 'Transactions', href: '/transactions', icon: Receipt },
  { name: 'Support', href: '/support', icon: LifeBuoy },
  { name: 'Settings', href: '/settings', icon: Settings },
  { name: 'Profile', href: '/profile', icon: User },
]

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()
  const { disconnect } = useDisconnect()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const sidebarClass = isMobile
    ? `fixed inset-0 z-50 transform transition-transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`
    : 'w-64'

  return (
    <div
      className={`${sidebarClass} bg-gradient-to-b from-[#0a0a12] to-[#151521] border-r border-[#e8c547]/20 h-screen flex flex-col`}
    >
      {/* Header */}
      <div className="p-6 border-b border-[#e8c547]/20 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center font-bold text-black group-hover:shadow-glow transition">
            U
          </div>
          <span className="font-bold text-[#e8c547] text-lg hidden sm:inline">
            USDX
          </span>
        </Link>
        {isMobile && (
          <button onClick={onClose} className="text-[#e8c547] hover:text-white transition">
            <X size={24} />
          </button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => isMobile && onClose()}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                isActive
                  ? 'bg-[#1a1a24] border-l-4 border-[#e8c547] text-[#e8c547] shadow-glow'
                  : 'text-gray-400 hover:text-[#e8c547] hover:bg-[#1a1a24]'
              }`}
            >
              <Icon size={20} />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-[#e8c547]/20 space-y-3">
        <div className="glass rounded-lg p-4">
          <p className="text-xs text-gray-400 mb-2">USDX Price</p>
          <p className="text-2xl font-bold text-[#e8c547]">$1.00</p>
          <p className="text-xs text-green-500 mt-1">+0.25%</p>
        </div>
        <button
          onClick={() => {
            disconnect()
            if (isMobile) onClose()
          }}
          className="w-full flex items-center justify-center gap-2 border border-[#e8c547] text-[#e8c547] font-bold py-2 rounded-lg hover:bg-[#e8c547]/10 transition"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </div>
  )
}

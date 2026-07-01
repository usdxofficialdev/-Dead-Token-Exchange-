'use client'

import { useState } from 'react'
import { useAccount } from 'wagmi'
import { Bell, Menu, Search } from 'lucide-react'
import { NotificationDropdown } from './NotificationDropdown'

interface TopbarProps {
  onMenuClick: () => void
  isMobile: boolean
}

export function Topbar({ onMenuClick, isMobile }: TopbarProps) {
  const { address } = useAccount()
  const [notificationOpen, setNotificationOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="sticky top-0 z-40 bg-gradient-to-r from-[#0a0a12] to-[#15151f] border-b border-[#e8c547]/20 backdrop-blur">
      <div className="px-6 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/* Left */}
          <div className="flex items-center gap-4">
            {isMobile && (
              <button
                onClick={onMenuClick}
                className="text-[#e8c547] hover:bg-[#1a1a24] p-2 rounded-lg transition"
              >
                <Menu size={24} />
              </button>
            )}
            <div>
              <h2 className="text-2xl font-bold text-white">👋 Welcome Back</h2>
              <p className="text-sm text-gray-400 mt-1">
                {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Connecting...'}
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-3">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-[#1a1a24] border border-[#e8c547]/20 rounded-lg pl-10 pr-4 py-2 text-sm w-48 focus:border-[#e8c547] outline-none transition"
              />
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
              />
            </div>

            <div className="relative">
              <button
                onClick={() => setNotificationOpen(!notificationOpen)}
                className="relative bg-[#1a1a24] p-3 rounded-lg hover:bg-[#252535] transition"
              >
                <Bell size={20} className="text-[#e8c547]" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  5
                </span>
              </button>
              {notificationOpen && <NotificationDropdown onClose={() => setNotificationOpen(false)} />}
            </div>

            <div className="glass px-4 py-2 rounded-lg hidden sm:block">
              <p className="text-xs text-gray-400">Wallet</p>
              <p className="text-sm font-semibold text-[#e8c547]">
                {address ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Connect'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

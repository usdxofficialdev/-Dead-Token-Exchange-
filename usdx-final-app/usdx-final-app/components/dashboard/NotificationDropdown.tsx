'use client'

import { useNotifications } from '@/hooks/useNotifications'
import { LoadingSkeleton } from './LoadingSkeleton'

interface NotificationDropdownProps {
  onClose: () => void
}

export function NotificationDropdown({ onClose }: NotificationDropdownProps) {
  const { notifications, isLoading, markAsRead } = useNotifications()

  if (isLoading) return <LoadingSkeleton />

  return (
    <div className="absolute right-0 mt-2 w-80 glass rounded-lg shadow-2xl p-0 z-50">
      <div className="p-4 border-b border-[#e8c547]/20">
        <h3 className="font-bold">Notifications</h3>
      </div>
      <div className="max-h-96 overflow-y-auto">
        {notifications.length === 0 ? (
          <div className="p-8 text-center text-gray-400">
            <p>No notifications</p>
          </div>
        ) : (
          notifications.map((notif) => (
            <div
              key={notif.id}
              className={`p-4 border-b border-[#e8c547]/10 cursor-pointer hover:bg-[#1a1a24] transition ${
                !notif.read ? 'bg-[#e8c547]/5' : ''
              }`}
              onClick={() => markAsRead(notif.id)}
            >
              <div className="flex gap-3">
                <span className="text-xl">
                  {notif.type === 'reward'
                    ? '🎁'
                    : notif.type === 'membership'
                      ? '👑'
                      : notif.type === 'referral'
                        ? '👥'
                        : '📢'}
                </span>
                <div className="flex-1">
                  <p className="font-bold text-sm">{notif.title}</p>
                  <p className="text-xs text-gray-400 mt-1">{notif.message}</p>
                  <p className="text-xs text-gray-500 mt-2">{notif.created_at}</p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

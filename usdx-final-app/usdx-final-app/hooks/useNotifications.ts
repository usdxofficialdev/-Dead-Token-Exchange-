'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useAccount } from 'wagmi'
import { notificationService } from '@/lib/supabase'

export function useNotifications() {
  const { address } = useAccount()
  const queryClient = useQueryClient()

  const { data: notifications, isLoading } = useQuery({
    queryKey: ['notifications', address],
    queryFn: () => {
      if (!address) throw new Error('Not connected')
      return notificationService.getNotifications(address)
    },
    enabled: !!address,
    staleTime: 10000,
  })

  const { data: unreadCount } = useQuery({
    queryKey: ['unreadCount', address],
    queryFn: () => {
      if (!address) throw new Error('Not connected')
      return notificationService.getUnreadCount(address)
    },
    enabled: !!address,
    staleTime: 10000,
  })

  const markAsReadMutation = useMutation({
    mutationFn: (notificationId: string) =>
      notificationService.markAsRead(notificationId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['notifications'] })
      queryClient.invalidateQueries({ queryKey: ['unreadCount'] })
    },
  })

  return {
    notifications: notifications || [],
    unreadCount: unreadCount || 0,
    isLoading,
    markAsRead: markAsReadMutation.mutate,
  }
}

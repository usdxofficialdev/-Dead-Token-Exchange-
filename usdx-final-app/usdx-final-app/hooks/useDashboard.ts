'use client'

import { useQuery } from '@tanstack/react-query'
import { useAccount } from 'wagmi'
import { dashboardService } from '@/lib/supabase'

export function useDashboard() {
  const { address } = useAccount()

  const { data: stats, isLoading: statsLoading, error: statsError } = useQuery({
    queryKey: ['dashboardStats', address],
    queryFn: () => {
      if (!address) throw new Error('Not connected')
      return dashboardService.getDashboardStats(address)
    },
    enabled: !!address,
    staleTime: 30000,
  })

  const { data: transactions, isLoading: txLoading } = useQuery({
    queryKey: ['recentTransactions', address],
    queryFn: () => {
      if (!address) throw new Error('Not connected')
      return dashboardService.getRecentTransactions(address, 5)
    },
    enabled: !!address,
    staleTime: 30000,
  })

  return {
    stats: stats || null,
    transactions: transactions || [],
    isLoading: statsLoading || txLoading,
    error: statsError,
  }
}

'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useAccount } from 'wagmi'
import { dashboardService } from '@/lib/supabase'

export function useTransactions() {
  const { address } = useAccount()
  const queryClient = useQueryClient()

  const { data: transactions, isLoading } = useMutation({
    mutationFn: async () => {
      if (!address) throw new Error('Not connected')
      return dashboardService.getRecentTransactions(address)
    },
  })

  return {
    transactions: transactions || [],
    isLoading,
  }
}

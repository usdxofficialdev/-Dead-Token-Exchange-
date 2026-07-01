'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useAccount } from 'wagmi'
import { stakeService } from '@/lib/supabase'

export function useStakes() {
  const { address } = useAccount()
  const queryClient = useQueryClient()

  const { data: stakes, isLoading } = useQuery({
    queryKey: ['activeStakes', address],
    queryFn: () => {
      if (!address) throw new Error('Not connected')
      return stakeService.getActiveStakes(address)
    },
    enabled: !!address,
    staleTime: 30000,
  })

  const createStakeMutation = useMutation({
    mutationFn: (params: { amount: number; lockPeriod: number }) => {
      if (!address) throw new Error('Not connected')
      return stakeService.createStake(address, params.amount, params.lockPeriod)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['activeStakes'] })
      queryClient.invalidateQueries({ queryKey: ['dashboardStats'] })
    },
  })

  return {
    stakes: stakes || [],
    isLoading,
    createStake: createStakeMutation.mutate,
    isCreating: createStakeMutation.isPending,
  }
}

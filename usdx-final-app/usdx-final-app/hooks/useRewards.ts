'use client'

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useAccount } from 'wagmi'
import { rewardService } from '@/lib/supabase'

export function useRewards() {
  const { address } = useAccount()
  const queryClient = useQueryClient()

  const { data: rewards, isLoading } = useQuery({
    queryKey: ['pendingRewards', address],
    queryFn: () => {
      if (!address) throw new Error('Not connected')
      return rewardService.getPendingRewards(address)
    },
    enabled: !!address,
    staleTime: 30000,
  })

  const claimRewardMutation = useMutation({
    mutationFn: (rewardId: string) => rewardService.claimReward(rewardId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['pendingRewards'] })
      queryClient.invalidateQueries({ queryKey: ['dashboardStats'] })
    },
  })

  return {
    rewards: rewards || [],
    isLoading,
    claimReward: claimRewardMutation.mutate,
    isClaiming: claimRewardMutation.isPending,
  }
}

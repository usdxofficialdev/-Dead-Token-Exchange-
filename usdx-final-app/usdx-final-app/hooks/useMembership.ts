'use client'

import { useMemo } from 'react'
import { DashboardStats } from '@/types'

export function useMembershipStats(stats: DashboardStats | null) {
  return useMemo(() => {
    if (!stats) return null

    return {
      roiBonus: 25,
      rewardBonus: 15,
      referralBonus: 10,
      tier: 'gold',
      daysRemaining: 180,
    }
  }, [stats])
}

import { Stake } from '@/types'

export function getStakeProgress(stake: Stake): number {
  const startDate = new Date(stake.start_date).getTime()
  const endDate = new Date(stake.end_date).getTime()
  const now = Date.now()

  if (now <= startDate) return 0
  if (now >= endDate) return 100

  return Math.round(((now - startDate) / (endDate - startDate)) * 100)
}

export function getRemainingDays(stake: Stake): number {
  const endDate = new Date(stake.end_date).getTime()
  const now = Date.now()
  return Math.ceil((endDate - now) / (1000 * 60 * 60 * 24))
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)
}

export function formatNumber(num: number, decimals = 2): string {
  return num.toFixed(decimals)
}

export function truncateAddress(address: string): string {
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

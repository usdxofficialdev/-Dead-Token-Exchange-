export const COLORS = {
  primary: '#e8c547',
  secondary: '#d4a25e',
  dark: '#0a0a12',
  darker: '#1a1a24',
  success: '#22c55e',
  warning: '#eab308',
  error: '#ef4444',
}

export const MEMBERSHIP_TIERS = {
  bronze: {
    roi_bonus: 0,
    reward_bonus: 0,
    referral_bonus: 0,
  },
  silver: {
    roi_bonus: 10,
    reward_bonus: 5,
    referral_bonus: 5,
  },
  gold: {
    roi_bonus: 25,
    reward_bonus: 15,
    referral_bonus: 10,
  },
  platinum: {
    roi_bonus: 50,
    reward_bonus: 30,
    referral_bonus: 20,
  },
}

export const LOCK_PERIODS = [
  { label: '30 Days', value: 30, roi: 0.35 },
  { label: '60 Days', value: 60, roi: 0.40 },
  { label: '90 Days', value: 90, roi: 0.45 },
  { label: '180 Days', value: 180, roi: 0.50 },
  { label: '365 Days', value: 365, roi: 0.60 },
]

export const NOTIFICATION_TYPES = [
  'reward',
  'membership',
  'announcement',
  'referral',
  'security',
] as const

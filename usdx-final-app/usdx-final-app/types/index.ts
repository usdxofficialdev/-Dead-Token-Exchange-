/* User & Wallet Types */
export interface UserProfile {
  id: string
  wallet_address: string
  username?: string
  email?: string
  avatar_url?: string
  membership_tier: 'bronze' | 'silver' | 'gold' | 'platinum'
  created_at: string
  updated_at: string
  last_login: string
}

export interface Wallet {
  id: string
  user_id: string
  address: string
  balance: number
  locked_balance: number
  created_at: string
  updated_at: string
}

/* Staking Types */
export interface Stake {
  id: string
  user_id: string
  amount: number
  lock_period: number
  start_date: string
  end_date: string
  roi_percentage: number
  daily_reward: number
  status: 'active' | 'completed' | 'expired'
  created_at: string
}

export interface Reward {
  id: string
  user_id: string
  amount: number
  source: 'stake' | 'referral' | 'bonus' | 'membership'
  status: 'pending' | 'claimed' | 'expired'
  claimed_at?: string
  expires_at?: string
  created_at: string
}

/* Membership Types */
export interface Membership {
  id: string
  user_id: string
  tier: 'bronze' | 'silver' | 'gold' | 'platinum'
  roi_bonus: number
  reward_bonus: number
  referral_bonus: number
  start_date: string
  end_date?: string
  auto_renew: boolean
  created_at: string
}

/* Transaction Types */
export interface Transaction {
  id: string
  user_id: string
  type: 'stake' | 'unstake' | 'reward' | 'referral' | 'buy' | 'sell'
  amount: number
  status: 'pending' | 'completed' | 'failed'
  tx_hash: string
  created_at: string
}

/* Referral Types */
export interface Referral {
  id: string
  referrer_id: string
  referred_id: string
  bonus_amount: number
  status: 'active' | 'inactive'
  created_at: string
}

/* Notification Types */
export interface Notification {
  id: string
  user_id: string
  title: string
  message: string
  type: 'reward' | 'membership' | 'announcement' | 'referral' | 'security'
  read: boolean
  created_at: string
}

/* Dashboard Stats */
export interface DashboardStats {
  portfolio_value: number
  available_balance: number
  locked_balance: number
  daily_reward: number
  pending_rewards: number
  lifetime_earnings: number
  active_stakes: number
  total_referrals: number
}

/* API Response Types */
export interface ApiResponse<T> {
  data: T
  error?: string
  message?: string
}

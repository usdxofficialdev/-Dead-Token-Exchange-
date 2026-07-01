import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseKey)

/* Auth Functions */
export const authService = {
  async loginWithWallet(address: string) {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('wallet_address', address.toLowerCase())
        .single()

      if (error && error.code === 'PGRST116') {
        // Profile doesn't exist, create one
        return await authService.createProfile(address)
      }

      if (error) throw error

      // Update last login
      await supabase
        .from('profiles')
        .update({ last_login: new Date().toISOString() })
        .eq('id', data.id)

      return data
    } catch (error) {
      console.error('Login error:', error)
      throw error
    }
  },

  async createProfile(address: string) {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .insert([
          {
            wallet_address: address.toLowerCase(),
            membership_tier: 'bronze',
            last_login: new Date().toISOString(),
          },
        ])
        .select()
        .single()

      if (error) throw error
      return data
    } catch (error) {
      console.error('Create profile error:', error)
      throw error
    }
  },
}

/* Dashboard Functions */
export const dashboardService = {
  async getDashboardStats(userId: string) {
    try {
      const [wallet, stakes, rewards] = await Promise.all([
        supabase.from('wallets').select('*').eq('user_id', userId).single(),
        supabase
          .from('stakes')
          .select('*')
          .eq('user_id', userId)
          .eq('status', 'active'),
        supabase
          .from('rewards')
          .select('*')
          .eq('user_id', userId)
          .eq('status', 'pending'),
      ])

      const activeStakes = stakes.data || []
      const pendingRewards = rewards.data || []

      const lockedBalance = activeStakes.reduce((sum, s) => sum + s.amount, 0)
      const pendingRewardAmount = pendingRewards.reduce(
        (sum, r) => sum + r.amount,
        0
      )

      return {
        portfolio_value: (wallet.data?.balance || 0) + lockedBalance,
        available_balance: wallet.data?.balance || 0,
        locked_balance: lockedBalance,
        daily_reward: activeStakes.reduce((sum, s) => sum + s.daily_reward, 0),
        pending_rewards: pendingRewardAmount,
        lifetime_earnings: wallet.data?.lifetime_earnings || 0,
        active_stakes: activeStakes.length,
        total_referrals: 0,
      }
    } catch (error) {
      console.error('Get dashboard stats error:', error)
      throw error
    }
  },

  async getRecentTransactions(userId: string, limit = 10) {
    try {
      const { data, error } = await supabase
        .from('transactions')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(limit)

      if (error) throw error
      return data
    } catch (error) {
      console.error('Get transactions error:', error)
      throw error
    }
  },
}

/* Rewards Functions */
export const rewardService = {
  async getPendingRewards(userId: string) {
    try {
      const { data, error } = await supabase
        .from('rewards')
        .select('*')
        .eq('user_id', userId)
        .eq('status', 'pending')
        .order('created_at', { ascending: false })

      if (error) throw error
      return data
    } catch (error) {
      console.error('Get pending rewards error:', error)
      throw error
    }
  },

  async claimReward(rewardId: string) {
    try {
      const { data, error } = await supabase
        .from('rewards')
        .update({
          status: 'claimed',
          claimed_at: new Date().toISOString(),
        })
        .eq('id', rewardId)
        .select()
        .single()

      if (error) throw error
      return data
    } catch (error) {
      console.error('Claim reward error:', error)
      throw error
    }
  },
}

/* Stake Functions */
export const stakeService = {
  async getActiveStakes(userId: string) {
    try {
      const { data, error } = await supabase
        .from('stakes')
        .select('*')
        .eq('user_id', userId)
        .eq('status', 'active')
        .order('created_at', { ascending: false })

      if (error) throw error
      return data
    } catch (error) {
      console.error('Get active stakes error:', error)
      throw error
    }
  },

  async createStake(userId: string, amount: number, lockPeriod: number) {
    try {
      const { data, error } = await supabase
        .from('stakes')
        .insert([
          {
            user_id: userId,
            amount,
            lock_period: lockPeriod,
            start_date: new Date().toISOString(),
            end_date: new Date(
              Date.now() + lockPeriod * 24 * 60 * 60 * 1000
            ).toISOString(),
            roi_percentage: 0.35,
            daily_reward: (amount * 0.35) / 100,
            status: 'active',
          },
        ])
        .select()
        .single()

      if (error) throw error
      return data
    } catch (error) {
      console.error('Create stake error:', error)
      throw error
    }
  },
}

/* Notification Functions */
export const notificationService = {
  async getNotifications(userId: string, limit = 10) {
    try {
      const { data, error } = await supabase
        .from('notifications')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(limit)

      if (error) throw error
      return data
    } catch (error) {
      console.error('Get notifications error:', error)
      throw error
    }
  },

  async markAsRead(notificationId: string) {
    try {
      const { data, error } = await supabase
        .from('notifications')
        .update({ read: true })
        .eq('id', notificationId)
        .select()
        .single()

      if (error) throw error
      return data
    } catch (error) {
      console.error('Mark notification as read error:', error)
      throw error
    }
  },

  async getUnreadCount(userId: string) {
    try {
      const { count, error } = await supabase
        .from('notifications')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', userId)
        .eq('read', false)

      if (error) throw error
      return count || 0
    } catch (error) {
      console.error('Get unread count error:', error)
      return 0
    }
  },
}

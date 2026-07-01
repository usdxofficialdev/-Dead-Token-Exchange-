import { SupabaseClient } from '@supabase/supabase-js'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

/**
 * SQL Schema for Supabase Database
 * Run these queries in Supabase SQL Editor
 */

export const DATABASE_SCHEMA = `
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Profiles table
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  wallet_address TEXT UNIQUE NOT NULL,
  username TEXT,
  email TEXT,
  avatar_url TEXT,
  membership_tier TEXT DEFAULT 'bronze' CHECK (membership_tier IN ('bronze', 'silver', 'gold', 'platinum')),
  last_login TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Wallets table
CREATE TABLE IF NOT EXISTS public.wallets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  address TEXT NOT NULL,
  balance DECIMAL(20, 8) DEFAULT 0,
  locked_balance DECIMAL(20, 8) DEFAULT 0,
  lifetime_earnings DECIMAL(20, 8) DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Stakes table
CREATE TABLE IF NOT EXISTS public.stakes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  amount DECIMAL(20, 8) NOT NULL,
  lock_period INT NOT NULL,
  start_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  end_date TIMESTAMP WITH TIME ZONE NOT NULL,
  roi_percentage DECIMAL(5, 2),
  daily_reward DECIMAL(20, 8),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'completed', 'expired')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Rewards table
CREATE TABLE IF NOT EXISTS public.rewards (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  amount DECIMAL(20, 8) NOT NULL,
  source TEXT CHECK (source IN ('stake', 'referral', 'bonus', 'membership')),
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'claimed', 'expired')),
  claimed_at TIMESTAMP WITH TIME ZONE,
  expires_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Transactions table
CREATE TABLE IF NOT EXISTS public.transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  type TEXT NOT NULL CHECK (type IN ('stake', 'unstake', 'reward', 'referral', 'buy', 'sell')),
  amount DECIMAL(20, 8) NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'completed', 'failed')),
  tx_hash TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Memberships table
CREATE TABLE IF NOT EXISTS public.memberships (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  tier TEXT NOT NULL CHECK (tier IN ('bronze', 'silver', 'gold', 'platinum')),
  roi_bonus INT DEFAULT 0,
  reward_bonus INT DEFAULT 0,
  referral_bonus INT DEFAULT 0,
  start_date TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  end_date TIMESTAMP WITH TIME ZONE,
  auto_renew BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Referrals table
CREATE TABLE IF NOT EXISTS public.referrals (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  referrer_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  referred_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  bonus_amount DECIMAL(20, 8),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Notifications table
CREATE TABLE IF NOT EXISTS public.notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  message TEXT,
  type TEXT CHECK (type IN ('reward', 'membership', 'announcement', 'referral', 'security')),
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Settings table
CREATE TABLE IF NOT EXISTS public.settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  notifications_enabled BOOLEAN DEFAULT TRUE,
  email_notifications BOOLEAN DEFAULT TRUE,
  two_factor_enabled BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_wallets_user_id ON public.wallets(user_id);
CREATE INDEX IF NOT EXISTS idx_stakes_user_id ON public.stakes(user_id);
CREATE INDEX IF NOT EXISTS idx_stakes_status ON public.stakes(status);
CREATE INDEX IF NOT EXISTS idx_rewards_user_id ON public.rewards(user_id);
CREATE INDEX IF NOT EXISTS idx_rewards_status ON public.rewards(status);
CREATE INDEX IF NOT EXISTS idx_transactions_user_id ON public.transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_user_id ON public.notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_read ON public.notifications(read);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.wallets ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.stakes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.rewards ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.transactions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.memberships ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.referrals ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.settings ENABLE ROW LEVEL SECURITY;

-- Create RLS Policies
CREATE POLICY "Users can view their own profile" ON public.profiles
  FOR SELECT USING (id = auth.uid());

CREATE POLICY "Users can update their own profile" ON public.profiles
  FOR UPDATE USING (id = auth.uid());

CREATE POLICY "Users can view their own wallet" ON public.wallets
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Users can view their own stakes" ON public.stakes
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Users can view their own rewards" ON public.rewards
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Users can view their own transactions" ON public.transactions
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "Users can view their own notifications" ON public.notifications
  FOR SELECT USING (user_id = auth.uid());
`

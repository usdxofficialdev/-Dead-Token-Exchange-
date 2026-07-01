# USDX Network - Premium Crypto Staking Dashboard

🚀 **Complete refactored dashboard with modular components, Supabase integration, and premium UI/UX**

## ✨ Features

- ✅ **Modular Components** - Split into reusable, maintainable components
- ✅ **Supabase Integration** - Complete database layer with typed queries
- ✅ **Wallet Authentication** - Wagmi + Viem for Web3 wallet connection
- ✅ **Responsive Design** - Perfect on mobile, tablet, laptop, desktop
- ✅ **Premium UI** - Dark theme, gold accents, glassmorphism, smooth animations
- ✅ **Real-time Data** - React Query for state management and caching
- ✅ **Type-Safe** - Full TypeScript with strict mode enabled
- ✅ **Performance** - Lazy loading, dynamic imports, memoization
- ✅ **Accessibility** - ARIA labels, keyboard support, focus states
- ✅ **SEO** - Metadata, Open Graph, Twitter cards

## 📁 Project Structure

```
usdx-final-app/
├── app/
│   ├── dashboard/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── login/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── metadata.ts
│   ├── page.tsx
│   └── providers.tsx
├── components/
│   └── dashboard/
│       ├── ActiveStake.tsx
│       ├── Hero.tsx
│       ├── LoadingSkeleton.tsx
│       ├── NotificationDropdown.tsx
│       ├── QuickActions.tsx
│       ├── RecentTransactions.tsx
│       ├── Sidebar.tsx
│       ├── StatsGrid.tsx
│       ├── Topbar.tsx
│       └── index.ts
├── constants/
│   └── index.ts
├── hooks/
│   ├── useDashboard.ts
│   ├── useNotifications.ts
│   ├── useRewards.ts
│   └── useStakes.ts
├── lib/
│   └── supabase.ts
├── types/
│   └── index.ts
├── utils/
│   └── helpers.ts
├── .env.local.example
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase account
- WalletConnect project ID

### Installation

```bash
# Navigate to project
cd usdx-final-app

# Install dependencies
npm install

# Setup environment variables
cp .env.local.example .env.local
# Edit .env.local with your credentials

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🔧 Configuration

### Supabase Setup

1. Create tables:
```sql
-- profiles
CREATE TABLE profiles (
  id UUID PRIMARY KEY,
  wallet_address TEXT UNIQUE NOT NULL,
  username TEXT,
  email TEXT,
  avatar_url TEXT,
  membership_tier TEXT DEFAULT 'bronze',
  last_login TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- wallets
CREATE TABLE wallets (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES profiles(id),
  address TEXT NOT NULL,
  balance DECIMAL DEFAULT 0,
  locked_balance DECIMAL DEFAULT 0,
  lifetime_earnings DECIMAL DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- stakes
CREATE TABLE stakes (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES profiles(id),
  amount DECIMAL NOT NULL,
  lock_period INT NOT NULL,
  start_date TIMESTAMP DEFAULT NOW(),
  end_date TIMESTAMP,
  roi_percentage DECIMAL,
  daily_reward DECIMAL,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP DEFAULT NOW()
);

-- rewards
CREATE TABLE rewards (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES profiles(id),
  amount DECIMAL NOT NULL,
  source TEXT,
  status TEXT DEFAULT 'pending',
  claimed_at TIMESTAMP,
  expires_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

-- transactions
CREATE TABLE transactions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES profiles(id),
  type TEXT NOT NULL,
  amount DECIMAL NOT NULL,
  status TEXT DEFAULT 'pending',
  tx_hash TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- notifications
CREATE TABLE notifications (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES profiles(id),
  title TEXT NOT NULL,
  message TEXT,
  type TEXT,
  read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);
```

2. Enable RLS policies for security
3. Add your Supabase URL and anon key to .env.local

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to change theme colors:
```typescript
colors: {
  primary: '#e8c547',      // Gold
  secondary: '#d4a25e',    // Secondary Gold
  dark: '#0a0a12',        // Dark background
  darker: '#1a1a24',       // Darker background
}
```

### Components
All dashboard components are in `components/dashboard/` and can be easily customized.

## 📊 Data Flow

1. **User connects wallet** → `providers.tsx` → Wagmi
2. **Redirect to dashboard** → `dashboard/page.tsx`
3. **Fetch data** → `hooks/` → `lib/supabase.ts`
4. **Render components** → `components/dashboard/`
5. **Real-time updates** → React Query caching

## 🔐 Security

- ✅ Environment variables for secrets
- ✅ RLS policies on Supabase
- ✅ Type-safe queries
- ✅ Wallet signature verification (to implement)
- ✅ No sensitive data in client

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Laptop**: 1024px - 1280px
- **Desktop**: > 1280px

## 🚀 Production Deployment

```bash
# Build
npm run build

# Start
npm run start
```

Deploy to Vercel:
```bash
npm i -g vercel
vercel
```

## 📝 Scripts

```bash
npm run dev       # Development server
npm run build     # Production build
npm run start     # Production start
npm run lint      # Linting
```

## 🎯 TODO

- [ ] Implement wallet signature verification
- [ ] Add transaction history with pagination
- [ ] Implement reward claiming
- [ ] Add membership upgrade flow
- [ ] Create referral system
- [ ] Add support chat
- [ ] Implement analytics
- [ ] Add more stake options

## 📞 Support

For issues or questions, contact support@usdx.network

## 📄 License

MIT License

---

**Built with ❤️ for the USDX Community**

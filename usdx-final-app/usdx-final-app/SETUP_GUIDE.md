╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║        🚀 USDX NETWORK - COMPLETE SETUP GUIDE 🚀             ║
║                                                              ║
║              Production Ready - Wallet Integrated             ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝


⚡ QUICK START (5 MINUTES)
═══════════════════════════════════════════════════════════════

Step 1: Install Dependencies
$ npm install

Step 2: Create Environment File
$ cp .env.example .env.local

Step 3: Start Development Server
$ npm run dev

Step 4: Open Browser
http://localhost:3000

DONE! ✅


🔧 DETAILED SETUP
═══════════════════════════════════════════════════════════════

1. PREREQUISITES
───────────────

Required:
  ✓ Node.js 18+ (https://nodejs.org)
  ✓ npm or yarn
  ✓ Git (optional)
  ✓ MetaMask or crypto wallet (for testing)

2. INSTALLATION
────────────────

a) Clone/Extract Project
   $ cd usdx-network

b) Install Dependencies
   $ npm install

   This installs:
   - Next.js 15
   - React 19
   - Wagmi (Wallet integration)
   - Supabase (Database)
   - TailwindCSS (Styling)
   - And more...

   Wait 2-3 minutes for installation to complete.

3. ENVIRONMENT SETUP
─────────────────────

a) Copy Example File
   $ cp .env.example .env.local

b) Fill in Your Details:

   # For Local Development (Optional):
   NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID=your_id
   NEXT_PUBLIC_RPC_URL=https://sepolia.base.org
   NEXT_PUBLIC_CHAIN_ID=84532

   # For Database (Optional):
   NEXT_PUBLIC_SUPABASE_URL=your_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key

   # For Local Testing (Leave Default):
   NEXT_PUBLIC_API_URL=http://localhost:3000/api
   ADMIN_SECRET_KEY=super_secret_key

4. START DEVELOPMENT SERVER
────────────────────────────

$ npm run dev

Output should show:
  ✓ Compiled successfully
  ✓ http://localhost:3000
  ✓ Press 'q' to quit

5. OPEN IN BROWSER
────────────────────

Go to: http://localhost:3000

You should see:
  ✓ USDX Network home page
  ✓ "Get Started" button
  ✓ Features section


🔐 WALLET CONNECTION TEST
═══════════════════════════════════════════════════════════════

1. Install MetaMask:
   https://metamask.io

2. Create Test Wallet (or import existing)

3. Switch to Base Sepolia Network:
   Network: Base Sepolia
   Chain ID: 84532
   RPC URL: https://sepolia.base.org

4. Get Test Tokens (Optional):
   https://www.alchemy.com/faucets/base-sepolia

5. In App:
   - Click "Get Started"
   - Click "Connect MetaMask"
   - Approve connection
   - You're in! ✅


📊 PAGES TO TEST
═══════════════════════════════════════════════════════════════

Home Page:
  http://localhost:3000
  ✓ Landing page with features
  ✓ "Get Started" button

Login Page:
  http://localhost:3000/login
  ✓ Wallet connection
  ✓ Features list

Dashboard:
  http://localhost:3000/dashboard
  ✓ Stats cards
  ✓ Active stake info
  ✓ Recent transactions
  ✓ Quick actions

Rewards:
  http://localhost:3000/rewards
  ✓ Reward summary
  ✓ Claimed/unclaimed
  ✓ Claim button

Profile:
  http://localhost:3000/profile
  ✓ Profile info
  ✓ Settings
  ✓ Connected wallet

Admin:
  http://localhost:3000/admin
  ✓ Statistics
  ✓ User management
  ✓ Settings


💾 DATABASE SETUP (Optional but Recommended)
═══════════════════════════════════════════════════════════════

If you want to use real database:

1. Create Supabase Account:
   https://supabase.com/sign-up

2. Create New Project:
   - Click "New Project"
   - Fill in details
   - Create

3. Get Credentials:
   - Go to Settings → API
   - Copy "Project URL"
   - Copy "Anon Key"

4. Update .env.local:
   NEXT_PUBLIC_SUPABASE_URL=your_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

5. Create Database Tables:
   - Go to SQL Editor
   - Paste this code:

   CREATE TABLE users (
     id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
     wallet_address TEXT UNIQUE NOT NULL,
     total_staked DECIMAL DEFAULT 0,
     total_rewards DECIMAL DEFAULT 0,
     created_at TIMESTAMP DEFAULT NOW()
   );

   CREATE TABLE stakes (
     id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
     user_id UUID REFERENCES users(id),
     amount DECIMAL NOT NULL,
     lock_period INTEGER NOT NULL,
     status TEXT DEFAULT 'active',
     created_at TIMESTAMP DEFAULT NOW()
   );

   - Click "Run"

6. Done! ✅


🎨 CUSTOMIZE DESIGN
═══════════════════════════════════════════════════════════════

Change Brand Name:
  Find all "USDX" → Replace with your name
  
  Files:
  - app/layout.tsx
  - app/page.tsx
  - app/login/page.tsx
  - components/ConnectWallet.tsx

Change Colors:
  Edit: tailwind.config.ts
  
  Change these values:
  - #e8c547 → Your primary color
  - #d4a25e → Your secondary color

  Then use:
  $ npm run dev

Change Logo:
  - Create public/logo.svg
  - Update in components


🚀 BUILD FOR PRODUCTION
═══════════════════════════════════════════════════════════════

Build:
$ npm run build

This creates:
  ✓ .next/standalone folder
  ✓ Optimized bundles
  ✓ Ready for deployment

Run Production:
$ npm start

This runs optimized version locally.


🌐 DEPLOY TO VERCEL
═══════════════════════════════════════════════════════════════

1. Push to GitHub:
   $ git init
   $ git add .
   $ git commit -m "Initial commit"
   $ git remote add origin your_github_url
   $ git push -u origin main

2. Go to Vercel:
   https://vercel.com/new

3. Import Repository:
   - Connect GitHub
   - Select your repo
   - Click Import

4. Add Environment Variables:
   - In Vercel dashboard
   - Settings → Environment Variables
   - Add all .env.local variables

5. Deploy:
   - Click Deploy
   - Wait for build
   - Get live URL!

Done! Your app is live! 🚀


📱 MOBILE TESTING
═══════════════════════════════════════════════════════════════

Test Responsive Design:

1. Open DevTools (F12)
2. Click Device Toggle (Ctrl+Shift+M)
3. Test Different Sizes:
   - Mobile: 375px
   - Tablet: 768px
   - Desktop: 1024px+

All should look perfect! ✅


🐛 COMMON ISSUES & FIXES
═══════════════════════════════════════════════════════════════

Issue: Port 3000 Already in Use
Solution:
  $ PORT=3001 npm run dev

Issue: "Module not found" Error
Solution:
  $ rm -rf node_modules package-lock.json
  $ npm install
  $ npm run dev

Issue: Wallet Not Connecting
Solution:
  - Check MetaMask is installed
  - Switch to Base Sepolia network
  - Refresh page
  - Try different wallet

Issue: Styles Not Applied
Solution:
  $ rm -rf .next
  $ npm run dev

Issue: "Cannot GET /dashboard"
Solution:
  - Connect wallet first
  - Auto-redirect should happen
  - Check browser console for errors

Issue: .env.local Not Loading
Solution:
  - Ensure file is at root level
  - Not .env, but .env.local
  - Restart dev server


📞 DEBUGGING
═══════════════════════════════════════════════════════════════

Enable Debug Mode:
  In browser console (F12):
  - Open "Console" tab
  - Check for red errors
  - Read error messages carefully

Check Terminal:
  - Look for build errors
  - Check API errors
  - Read warnings

Network Tab (F12):
  - Open "Network" tab
  - Reload page
  - Check API calls
  - Look for failed requests


✅ VERIFICATION CHECKLIST
═══════════════════════════════════════════════════════════════

Before Going Live:

□ npm install completed
□ .env.local created with values
□ npm run dev starts without errors
□ http://localhost:3000 opens
□ Wallet connection works
□ Dashboard loads after login
□ All pages accessible
□ Responsive design works
□ No console errors
□ Admin panel accessible
□ Database connected (optional)
□ Build completes: npm run build
□ Production runs: npm start


🎯 NEXT STEPS
═══════════════════════════════════════════════════════════════

After Setup:

1. ✓ Test Everything
   - Try all features
   - Test wallet connection
   - Check responsive design

2. ✓ Customize
   - Change brand name
   - Update colors
   - Add your logo

3. ✓ Add Features
   - Real staking logic
   - Database integration
   - Payment processing
   - Email notifications

4. ✓ Secure
   - Set strong admin key
   - Enable 2FA
   - Add rate limiting
   - Use HTTPS only

5. ✓ Deploy
   - Build locally
   - Test production
   - Deploy to Vercel
   - Monitor performance


═══════════════════════════════════════════════════════════════

                  YOU'RE ALL SET! 🎉

                    $ npm run dev
                    
                  http://localhost:3000

═══════════════════════════════════════════════════════════════

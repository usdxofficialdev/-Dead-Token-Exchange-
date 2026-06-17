"use client";

import { useRouter } from "next/navigation";

export default function MembershipPage() {
  const router = useRouter();

  // Dashboard se bilkul same matching Sidebar items
  const menuItems = [
    { name: "Dashboard", route: "/dashboard", active: false },
    { name: "Membership Plans", route: "/membership", active: true }, // Yeh active hai
    { name: "Rewards History", route: "/rewards", active: false },
    { name: "Referral Program", route: "/referral", active: false },
    { name: "Leaderboard", route: "/leaderboard", active: false },
    { name: "Profile Settings", route: "/profile", active: false },
    { name: "Admin Panel", route: "/admin", active: false },
  ];

  const plans = [
    {
      name: "Bronze Plan",
      price: "100 USDX",
      apy: "5% APY Daily",
      features: ["2 Team Members Allowed", "Email Support", "Basic Live Analytics"],
      color: "border-amber-500/20",
      btnBg: "bg-[#1A1A24] text-amber-500 border border-amber-500/30 hover:bg-amber-500/10",
    },
    {
      name: "Silver Plan",
      price: "500 USDX",
      apy: "10% APY Daily",
      features: ["10 Team Members Allowed", "24/7 Priority Support", "Advanced Analytics", "Monthly Bonus Rewards"],
      color: "border-amber-500 shadow-xl shadow-amber-500/5",
      btnBg: "bg-amber-500 text-black hover:bg-amber-600 font-bold",
      popular: true,
    },
    {
      name: "Gold Plan",
      price: "2,000 USDX",
      apy: "15% APY Daily",
      features: ["Unlimited Members", "VIP Personal Support", "Premium Analytics", "Exclusive Platform Events"],
      color: "border-gray-800",
      btnBg: "bg-[#1A1A24] text-white border border-gray-700 hover:bg-gray-800",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#0B0B0F] text-white">
      
      {/* 1. MATCHING SIDEBAR */}
      <aside className="w-64 border-r border-gray-800 bg-[#121218] p-6 hidden md:block">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-amber-500 tracking-wider">USDX NETWORK</h1>
          <p className="text-xs text-gray-500">Premium Token Exchange</p>
        </div>
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => router.push(item.route)}
              className={`w-full text-left px-4 p-3 rounded-xl text-sm font-medium transition-all ${
                item.active 
                  ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20" 
                  : "text-gray-400 hover:bg-[#1A1A24] hover:text-white"
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 p-8">
        
        {/* Top Header */}
        <header className="flex items-center justify-between border-b border-gray-800 pb-6 mb-8">
          <div>
            <h2 className="text-3xl font-bold">Membership Plans</h2>
            <p className="text-sm text-gray-400">Choose your premium staking tier to boost earnings.</p>
          </div>
          <div className="rounded-full bg-emerald-500/10 px-4 py-2 border border-emerald-500/20 text-emerald-400 text-sm font-medium">
            Status: Active
          </div>
        </header>

        {/* 3. STYLISH MATCHING PREMIUM CARDS */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-4">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl border bg-[#121218] p-6 flex flex-col justify-between transition-transform hover:scale-[1.01] ${plan.color}`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-3xl font-extrabold text-amber-500 my-3">{plan.price}</p>
                <span className="inline-block bg-amber-500/10 text-amber-400 text-xs font-semibold px-2 py-1 rounded-lg border border-amber-500/10 mb-6">
                  {plan.apy}
                </span>

                <ul className="space-y-3 border-t border-gray-800/60 pt-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-400">
                      <svg className="h-4 w-4 text-amber-500 shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className={`w-full mt-8 p-3 rounded-xl font-medium transition-all ${plan.btnBg}`}>
                Activate Plan
              </button>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}

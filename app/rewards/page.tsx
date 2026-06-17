"use client";

import { useRouter } from "next/navigation";

export default function RewardsPage() {
  const router = useRouter();

  // Dashboard aur Membership se bilkul same matching Sidebar items
  const menuItems = [
    { name: "Dashboard", route: "/dashboard", active: false },
    { name: "Membership Plans", route: "/membership", active: false },
    { name: "Rewards History", route: "/rewards", active: true }, // Yeh active hai
    { name: "Referral Program", route: "/referral", active: false },
    { name: "Leaderboard", route: "/leaderboard", active: false },
    { name: "Profile Settings", route: "/profile", active: false },
    { name: "Admin Panel", route: "/admin", active: false },
  ];

  // Dummy Rewards History Data
  const rewardsLog = [
    { id: "#REW-4091", date: "2026-06-15", type: "Daily Staking Interest", amount: "+45.50 USDX", status: "Claimed" },
    { id: "#REW-3982", date: "2026-06-14", type: "Daily Staking Interest", amount: "+45.50 USDX", status: "Claimed" },
    { id: "#REW-3811", date: "2026-06-12", type: "Referral Milestone Bonus", amount: "+150.00 USDX", status: "Claimed" },
    { id: "#REW-3720", date: "2026-06-11", type: "Daily Staking Interest", amount: "+32.12 USDX", status: "Claimed" },
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
            <h2 className="text-3xl font-bold">Rewards History</h2>
            <p className="text-sm text-gray-400">Track all your daily staking returns and community bonuses.</p>
          </div>
          <button className="rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-bold text-black shadow-lg shadow-amber-500/10 hover:bg-amber-600 transition-all">
            Claim All Rewards
          </button>
        </header>

        {/* 3. REWARDS SUMMARY CARDS */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          <div className="rounded-2xl border border-gray-800 bg-[#121218] p-6">
            <p className="text-sm font-medium text-gray-400">Total Rewards Distributed</p>
            <p className="mt-2 text-3xl font-bold text-amber-500">273.12 USDX</p>
          </div>
          <div className="rounded-2xl border border-gray-800 bg-[#121218] p-6">
            <p className="text-sm font-medium text-gray-400">Unclaimed Balance</p>
            <p className="mt-2 text-3xl font-bold text-emerald-400">0.00 USDX</p>
          </div>
          <div className="rounded-2xl border border-gray-800 bg-[#121218] p-6">
            <p className="text-sm font-medium text-gray-400">Last Payout Date</p>
            <p className="mt-2 text-3xl font-bold text-white">Today, 00:00 UTC</p>
          </div>
        </div>

        {/* 4. PREMIUM ACTIVITY LOG TABLE */}
        <div className="rounded-2xl border border-gray-800 bg-[#121218] p-6 shadow-xl">
          <h3 className="text-xl font-bold mb-4">Earnings Log</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-400">
              <thead className="border-b border-gray-800 text-xs uppercase text-gray-500">
                <tr>
                  <th className="py-3 px-4">Reward ID</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Description</th>
                  <th className="py-3 px-4">Amount</th>
                  <th className="py-3 px-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {rewardsLog.map((log, index) => (
                  <tr key={index}>
                    <td className="py-4 px-4 font-mono text-amber-500">{log.id}</td>
                    <td className="py-4 px-4 text-gray-300">{log.date}</td>
                    <td className="py-4 px-4 text-white">{log.type}</td>
                    <td className="py-4 px-4 text-emerald-400 font-semibold">{log.amount}</td>
                    <td className="py-4 px-4">
                      <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs text-emerald-400 border border-emerald-500/10 font-medium">
                        {log.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}

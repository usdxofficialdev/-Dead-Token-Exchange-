"use client";

import { useRouter } from "next/navigation";

export default function LeaderboardPage() {
  const router = useRouter();

  // Sabhi pages se matching Sidebar items
  const menuItems = [
    { name: "Dashboard", route: "/dashboard", active: false },
    { name: "Membership Plans", route: "/membership", active: false },
    { name: "Rewards History", route: "/rewards", active: false },
    { name: "Referral Program", route: "/referral", active: false },
    { name: "Leaderboard", route: "/leaderboard", active: true }, // Yeh active hai
    { name: "Profile Settings", route: "/profile", active: false },
    { name: "Admin Panel", route: "/admin", active: false },
  ];

  // Top Earners Data
  const leaders = [
    { rank: "🏆 1", user: "0x71C...a293", plan: "Gold Tier", totalStaked: "45,000 USDX", rewards: "5,200 USDX" },
    { rank: "🥈 2", user: "0x32A...f811", plan: "Gold Tier", totalStaked: "32,500 USDX", rewards: "3,110 USDX" },
    { rank: "🥉 3", user: "0x98b...e440", plan: "Silver Tier", totalStaked: "12,000 USDX", rewards: "1,250 USDX" },
    { rank: "4", user: "shah***@gmail.com", plan: "Silver Tier", totalStaked: "5,000 USDX", rewards: "420 USDX" },
    { rank: "5", user: "user***@gmail.com", plan: "Bronze Tier", totalStaked: "1,500 USDX", rewards: "95 USDX" },
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
            <h2 className="text-3xl font-bold">Global Leaderboard</h2>
            <p className="text-sm text-gray-400">See the top network earners and premium staking leaders worldwide.</p>
          </div>
        </header>

        {/* 3. LEADERBOARD LIST TABLE */}
        <div className="rounded-2xl border border-gray-800 bg-[#121218] p-6 shadow-xl">
          <h3 className="text-xl font-bold mb-4">Top Network Stakers</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-400">
              <thead className="border-b border-gray-800 text-xs uppercase text-gray-500">
                <tr>
                  <th className="py-3 px-4">Rank</th>
                  <th className="py-3 px-4">User Identity</th>
                  <th className="py-3 px-4">Membership</th>
                  <th className="py-3 px-4">Total Staked</th>
                  <th className="py-3 px-4">Total Earned</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800">
                {leaders.map((leader, index) => (
                  <tr key={index} className={leader.rank.includes("1") ? "bg-amber-500/5" : ""}>
                    <td className="py-4 px-4 font-bold text-white">{leader.rank}</td>
                    <td className="py-4 px-4 font-mono text-gray-300">{leader.user}</td>
                    <td className="py-4 px-4">
                      <span className={`text-xs px-2 py-0.5 rounded border ${
                        leader.plan === "Gold Tier" 
                          ? "text-amber-400 bg-amber-500/10 border-amber-500/20" 
                          : leader.plan === "Silver Tier"
                          ? "text-gray-300 bg-gray-700/50 border-gray-600"
                          : "text-amber-600 bg-amber-900/20 border-amber-900/30"
                      }`}>
                        {leader.plan}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-white font-medium">{leader.totalStaked}</td>
                    <td className="py-4 px-4 text-emerald-400 font-semibold">{leader.rewards}</td>
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

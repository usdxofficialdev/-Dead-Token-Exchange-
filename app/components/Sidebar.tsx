"use client";

import { useRouter, usePathname } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", route: "/dashboard" },
    { name: "Membership Plans", route: "/membership" },
    { name: "Rewards History", route: "/rewards" },
    { name: "Referral Program", route: "/referral" },
    { name: "Leaderboard", route: "/leaderboard" },
    { name: "Profile Settings", route: "/profile" },
    { name: "Admin Panel", route: "/admin" },
  ];

  return (
    <aside className="hidden md:flex w-64 flex-col border-r border-[#2A2A35] bg-[#121218] p-6 min-h-screen fixed left-0 top-0">
      <div className="mb-8">
        <h1 className="text-xl font-black tracking-wider text-amber-500">
          USDX NETWORK
        </h1>
        <p className="text-xs text-gray-400">
          Premium Token Exchange
        </p>
      </div>

      <nav className="space-y-2 flex-1">
        {menuItems.map((item) => {
          const active = pathname === item.route;

          return (
            <button
              key={item.route}
              onClick={() => router.push(item.route)}
              className={`w-full rounded-lg px-4 py-3 text-left text-sm font-semibold transition-all duration-200 ${
                active
                  ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20"
                  : "text-gray-400 hover:bg-[#1A1A24] hover:text-white"
              }`}
            >
              {item.name}
            </button>
          );
        })}
      </nav>

      <div className="border-t border-[#2A2A35] pt-4">
        <p className="text-xs text-gray-500 text-center">
          © 2026 USDX Network
        </p>
      </div>
    </aside>
  );
}

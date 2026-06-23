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
    <aside className="hidden md:flex w-64 flex-col border-r border-[#161920] bg-[#0E1116] p-6">
      <div className="mb-8">
        <h1 className="text-xl font-black tracking-wider text-amber-500">
          USDX NETWORK
        </h1>
        <p className="text-xs text-gray-500">
          Premium Token Exchange
        </p>
      </div>

      <nav className="space-y-2">
        {menuItems.map((item) => {
          const active = pathname === item.route;

          return (
            <button
              key={item.route}
              onClick={() => router.push(item.route)}
              className={`w-full rounded-xl px-4 py-3 text-left text-sm font-semibold transition-all ${
                active
                  ? "bg-amber-500 text-black"
                  : "text-gray-400 hover:bg-[#141922] hover:text-white"
              }`}
            >
              {item.name}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}

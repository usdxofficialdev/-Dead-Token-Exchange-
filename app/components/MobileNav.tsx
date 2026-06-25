"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
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

  const handleNavClick = (route: string) => {
    router.push(route);
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button - Only visible on mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 bg-amber-500 text-black p-2 rounded-lg hover:bg-amber-600 transition-all"
      >
        {isOpen ? (
          <X size={24} />
        ) : (
          <Menu size={24} />
        )}
      </button>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Sidebar Menu */}
      <div
        className={`md:hidden fixed left-0 top-0 h-screen w-64 bg-[#121218] border-r border-[#2A2A35] z-40 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo Section */}
        <div className="p-6 border-b border-[#2A2A35]">
          <h1 className="text-xl font-black tracking-wider text-amber-500">
            USDX NETWORK
          </h1>
          <p className="text-xs text-gray-400">Premium Token Exchange</p>
        </div>

        {/* Menu Items */}
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => {
            const active = pathname === item.route;
            return (
              <button
                key={item.route}
                onClick={() => handleNavClick(item.route)}
                className={`w-full text-left rounded-lg px-4 py-3 text-sm font-semibold transition-all duration-200 ${
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

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 border-t border-[#2A2A35] p-4">
          <p className="text-xs text-gray-500 text-center">
            © 2026 USDX Network
          </p>
        </div>
      </div>
    </>
  );
}

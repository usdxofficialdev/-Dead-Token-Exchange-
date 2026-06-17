"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Agar user logged in nahi hai to direct login page par bheje
    // Aap chahein to ise check karne ke liye wallet connection ka status bhi laga sakte hain
    const isUserLoggedIn = false; // Isko apne logic ke hisab se badlein

    if (!isUserLoggedIn) {
      router.push("/login");
    } else {
      router.push("/dashboard");
    }
  }, [router]);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-[#0B0B0F] text-white">
      <div className="text-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-amber-500 border-t-transparent mx-auto"></div>
        <p className="mt-4 text-gray-400 font-medium">Loading USDX Network...</p>
      </div>
    </div>
  );
}

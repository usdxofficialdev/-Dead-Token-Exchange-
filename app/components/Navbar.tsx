"use client";

import Link from "next/link";
import LoginWallet from "./LoginWallet"; // <-- Ye line missing thi, isko daalna zaroor hai!

export default function Navbar() {
  return (
    <div style={{
      display: "flex",
      gap: "15px",
      padding: "10px",
      background: "#111",
      color: "#fff",
      alignItems: "center",
      justifyContent: "space-between"
    }}>
      <div style={{ display: "flex", gap: "15px" }}>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/membership">Staking</Link>
        <Link href="/rewards">Rewards</Link>
        <Link href="/referral">Referral</Link>
        <Link href="/profile">Profile</Link>
        <Link href="/leaderboard">Leaderboard</Link>
      </div>
      
      {/* Wallet Button */}
      <div>
        <LoginWallet />
      </div>
    </div>
  );
}

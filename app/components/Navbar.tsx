"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <div style={{
      display: "flex",
      gap: "15px",
      padding: "10px",
      background: "#111",
      color: "#fff"
    }}>
      <Link href="/dashboard">Dashboard</Link>
      <Link href="/membership">Staking</Link>
      <Link href="/rewards">Rewards</Link>
      <Link href="/referral">Referral</Link>
      <Link href="/profile">Profile</Link>
      <Link href="/leaderboard">Leaderboard</Link>
    </div>
  );
}

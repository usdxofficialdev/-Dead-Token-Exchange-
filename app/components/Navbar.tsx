"use client";

import Link from "next/link";
import LoginWallet from "./LoginWallet"; // Kyunki dono ek hi folder mein hain

export default function Navbar() {
  return (
    <div style={{
      display: "flex",
      padding: "15px 30px",
      background: "#11141a",
      color: "#fff",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: "1px solid #1f2937"
    }}>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link href="/dashboard" style={{ color: "#9ca3af", textDecoration: "none", fontWeight: "600" }}>Dashboard</Link>
        <Link href="/membership" style={{ color: "#9ca3af", textDecoration: "none", fontWeight: "600" }}>Staking</Link>
        <Link href="/rewards" style={{ color: "#9ca3af", textDecoration: "none", fontWeight: "600" }}>Rewards</Link>
        <Link href="/referral" style={{ color: "#9ca3af", textDecoration: "none", fontWeight: "600" }}>Referral</Link>
        <Link href="/profile" style={{ color: "#9ca3af", textDecoration: "none", fontWeight: "600" }}>Profile</Link>
        <Link href="/leaderboard" style={{ color: "#9ca3af", textDecoration: "none", fontWeight: "600" }}>Leaderboard</Link>
      </div>
      
      <div>
        <LoginWallet />
      </div>
    </div>
  );
}

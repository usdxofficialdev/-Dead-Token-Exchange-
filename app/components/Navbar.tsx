"use client";

import Link from "next/link";
import LoginWallet from "./LoginWallet"; // <-- Ye import missing tha!

export default function Navbar() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between", // Isse links left mein aur wallet right mein ho jayega
      alignItems: "center",
      gap: "15px",
      padding: "12px 24px",
      background: "#111",
      color: "#fff",
      borderBottom: "1px solid #222"
    }}>
      {/* Navigation Links */}
      <div style={{ display: "flex", gap: "20px" }}>
        <Link href="/dashboard" style={{ color: "#aaa", textDecoration: "none" }}>Dashboard</Link>
        <Link href="/membership" style={{ color: "#aaa", textDecoration: "none" }}>Staking</Link>
        <Link href="/rewards" style={{ color: "#aaa", textDecoration: "none" }}>Rewards</Link>
        <Link href="/referral" style={{ color: "#aaa", textDecoration: "none" }}>Referral</Link>
        <Link href="/profile" style={{ color: "#aaa", textDecoration: "none" }}>Profile</Link>
        <Link href="/leaderboard" style={{ color: "#aaa", textDecoration: "none" }}>Leaderboard</Link>
      </div>

      {/* Wallet Button */}
      <div>
        <LoginWallet />
      </div>
    </div>
  );
}

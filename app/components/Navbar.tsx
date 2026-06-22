"use client";

import Link from "next/link";
import LoginWallet from "../components/LoginWallet"; // <-- Is path ko perfect kar diya hai

export default function Navbar() {
  return (
    <div style={{
      display: "flex",
      gap: "15px",
      padding: "12px 24px",
      background: "#111",
      color: "#fff",
      alignItems: "center",
      justifyContent: "space-between",
      borderBottom: "1px solid #222"
    }}>
      {/* Links */}
      <div style={{ display: "flex", gap: "20px" }}>
        <Link href="/dashboard" style={{ color: "#fff", textDecoration: "none", fontWeight: "500" }}>Dashboard</Link>
        <Link href="/membership" style={{ color: "#fff", textDecoration: "none", fontWeight: "500" }}>Staking</Link>
        <Link href="/rewards" style={{ color: "#fff", textDecoration: "none", fontWeight: "500" }}>Rewards</Link>
        <Link href="/referral" style={{ color: "#fff", textDecoration: "none", fontWeight: "500" }}>Referral</Link>
        <Link href="/profile" style={{ color: "#fff", textDecoration: "none", fontWeight: "500" }}>Profile</Link>
        <Link href="/leaderboard" style={{ color: "#fff", textDecoration: "none", fontWeight: "500" }}>Leaderboard</Link>
      </div>
      
      {/* Wallet Button */}
      <div>
        <LoginWallet />
      </div>
    </div>
  );
}

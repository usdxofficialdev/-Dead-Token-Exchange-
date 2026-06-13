"use client";

import { useEffect, useState, CSSProperties } from "react";

export default function Dashboard() {
  const [wallet, setWallet] = useState<string | null>(null);
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    const w = localStorage.getItem("wallet");
    if (w) setWallet(w);

    const n = localStorage.getItem("username");
    if (n) setUserName(n);
  }, []);

  const data = {
    balance: 1250,
    sent: 320,
    received: 980,
    staking: 500,
    rewards: 120,
    referral: 75
  };

  const card: CSSProperties = {
    padding: "18px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)"
  };

  const btn: CSSProperties = {
    padding: "10px 14px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer"
  };

  return (
    <div style={{
      minHeight: "100vh",
      padding: "20px",
      color: "#fff",
      background: "#0a0a0a"
    }}>
      
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        
        {/* HEADER */}
        <h1>USDX Dashboard</h1>
        <h3>Welcome, {userName}</h3>
        <p>Wallet: {wallet || "Not Connected"}</p>

        {/* HERO BALANCE */}
        <div style={{
          marginTop: "20px",
          padding: "25px",
          borderRadius: "20px",
          background: "linear-gradient(135deg, #1a1a1a, #111)",
          border: "1px solid rgba(255,255,255,0.1)"
        }}>
          <h2>Total Balance</h2>
          <h1>{data.balance} USDX</h1>
        </div>

        {/* STATS GRID */}
        <div style={{
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "15px"
        }}>
          <div style={card}>💰 Staking <h3>{data.staking}</h3></div>
          <div style={card}>🎁 Rewards <h3>{data.rewards}</h3></div>
          <div style={card}>🔗 Referral <h3>{data.referral}</h3></div>
          <div style={card}>📤 Sent <h3>{data.sent}</h3></div>
          <div style={card}>📥 Received <h3>{data.received}</h3></div>
          <div style={card}>⚡ Wallet Status <h3>{wallet ? "Active" : "Inactive"}</h3></div>
        </div>

        {/* ACTION BAR */}
        <div style={{
          marginTop: "25px",
          display: "flex",
          gap: "10px"
        }}>
          <button style={{ ...btn, background: "#00ffcc" }}>Send</button>
          <button style={{ ...btn, background: "#00aaff" }}>Receive</button>
          <button style={{ ...btn, background: "#ffcc00" }}>Stake</button>
        </div>

      </div>
    </div>
  );
}

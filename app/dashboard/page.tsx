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
    staking: 500,
    rewards: 120,
    referral: 75,
    sent: 320,
    received: 980
  };

  const card: CSSProperties = {
    padding: "18px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
    backdropFilter: "blur(12px)",
    transition: "0.3s"
  };

  const glowCard: CSSProperties = {
    ...card,
    boxShadow: "0 0 25px rgba(0,255,200,0.15)"
  };

  const btn: CSSProperties = {
    padding: "10px 14px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontWeight: 600
  };

  return (
    <div style={{
      minHeight: "100vh",
      padding: "20px",
      color: "#fff",
      background: "radial-gradient(circle at top, #111, #000)"
    }}>
      
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        
        {/* HEADER */}
        <div style={glowCard}>
          <h1>⚡ USDX NETWORK</h1>
          <h3>Welcome, {userName}</h3>

          <p>
            Wallet: {wallet ? "🟢 Connected" : "🔴 Not Connected"}
          </p>
        </div>

        {/* HERO BALANCE */}
        <div style={{
          marginTop: "20px",
          padding: "25px",
          borderRadius: "20px",
          background: "linear-gradient(135deg,#111,#1a1a1a)",
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
          <div style={card}>💰 Staking <h2>{data.staking}</h2></div>
          <div style={card}>🎁 Rewards <h2>{data.rewards}</h2></div>
          <div style={card}>🔗 Referral <h2>{data.referral}</h2></div>
          <div style={card}>📤 Sent <h2>{data.sent}</h2></div>
          <div style={card}>📥 Received <h2>{data.received}</h2></div>
          <div style={glowCard}>⚡ Status <h2>Active</h2></div>
        </div>

        {/* ACTION PANEL */}
        <div style={{
          marginTop: "25px",
          display: "flex",
          gap: "10px"
        }}>
          <button style={{ ...btn, background: "#00ffcc" }}>Send</button>
          <button style={{ ...btn, background: "#00aaff" }}>Receive</button>
          <button style={{ ...btn, background: "#ffcc00" }}>Stake</button>
        </div>

        {/* ACTIVITY PANEL */}
        <div style={{
          marginTop: "25px",
          padding: "20px",
          borderRadius: "16px",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)"
        }}>
          <h3>📊 Recent Activity</h3>
          <p>• Sent 50 USDX</p>
          <p>• Received 120 USDX</p>
          <p>• Staked 200 USDX</p>
        </div>

      </div>
    </div>
  );
}

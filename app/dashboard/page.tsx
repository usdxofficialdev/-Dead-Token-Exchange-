"use client";

import { useEffect, useState, CSSProperties } from "react";

export default function Dashboard() {
  const [wallet, setWallet] = useState<string | null>(null);
  const [userName, setUserName] = useState<string>("User");

  useEffect(() => {
    const savedWallet = localStorage.getItem("wallet");
    if (savedWallet) setWallet(savedWallet);

    const savedName = localStorage.getItem("username");
    if (savedName) setUserName(savedName);
  }, []);

  const data = {
    usdxBalance: 1250,
    sent: 320,
    received: 980,
    staking: 500,
    rewards: 120,
    referral: 75
  };

  const cardStyle: CSSProperties = {
    padding: "18px",
    borderRadius: "15px",
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.1)",
    textAlign: "center"
  };

  const actionBtn: CSSProperties = {
    marginTop: "8px",
    padding: "8px 12px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer"
  };

  return (
    <div style={{
      padding: "20px",
      display: "flex",
      justifyContent: "center",
      color: "#fff"
    }}>
      
      <div style={{
        width: "100%",
        maxWidth: "950px",
        padding: "25px",
        borderRadius: "20px",
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(12px)"
      }}>
        
        {/* HEADER */}
        <h1>USDX Dashboard</h1>

        <h3>Welcome, {userName}</h3>

        <p style={{ opacity: 0.8 }}>
          Wallet: {wallet || "Not Connected"}
        </p>

        {/* MAIN STATS */}
        <div style={{
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "15px"
        }}>
          
          <div style={cardStyle}>
            💰 USDX Balance
            <h2>{data.usdxBalance}</h2>
          </div>

          <div style={cardStyle}>
            📤 Sent
            <h2>{data.sent}</h2>
          </div>

          <div style={cardStyle}>
            📥 Received
            <h2>{data.received}</h2>
          </div>

          <div style={cardStyle}>
            🪙 Staking
            <h2>{data.staking}</h2>
          </div>

          <div style={cardStyle}>
            🎁 Rewards
            <h2>{data.rewards}</h2>
          </div>

          <div style={cardStyle}>
            🔗 Referral
            <h2>{data.referral}</h2>
          </div>

        </div>

        {/* ACTIONS */}
        <div style={{
          marginTop: "25px",
          display: "flex",
          gap: "10px",
          justifyContent: "center"
        }}>
          
          <button style={actionBtn}>
            Send USDX
          </button>

          <button style={actionBtn}>
            Receive USDX
          </button>

          <button style={actionBtn}>
            Stake Tokens
          </button>

        </div>

      </div>

    </div>
  );
}

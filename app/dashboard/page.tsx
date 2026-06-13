"use client";

import { useEffect, useState, CSSProperties } from "react";

export default function Dashboard() {
  const [wallet, setWallet] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("wallet");
    if (saved) setWallet(saved);
  }, []);

  const data = {
    staking: 0,
    rewards: 0,
    referral: 0
  };

  const cardStyle: CSSProperties = {
    padding: "20px",
    borderRadius: "15px",
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.1)",
    textAlign: "center"
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
        maxWidth: "900px",
        padding: "25px",
        borderRadius: "20px",
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(12px)"
      }}>
        
        <h1>USDX Dashboard</h1>

        <p style={{ opacity: 0.8 }}>
          Wallet: {wallet || "Not Connected"}
        </p>

        <div style={{
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "15px"
        }}>
          
          <div style={cardStyle}>
            💰 Staking
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

      </div>

    </div>
  );
}

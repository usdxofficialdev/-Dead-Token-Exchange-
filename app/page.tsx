"use client";

import { useEffect, useState } from "react";

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

  return (
    <div style={{
      minHeight: "100vh",
      padding: "20px",
      color: "#fff",
      background: "#0a0a0a"
    }}>
      
      <div style={{ maxWidth: "1000px", margin: "auto" }}>

        <div style={{
          padding: "20px",
          borderRadius: "16px",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.1)"
        }}>
          <h1>⚡ USDX DASHBOARD</h1>
          <h3>Welcome, {userName}</h3>
          <p>Wallet: {wallet || "Not Connected"}</p>
        </div>

        <div style={{
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "15px"
        }}>
          <div style={{ padding: "15px", background: "#111", borderRadius: "12px" }}>Balance <h2>{data.balance}</h2></div>
          <div style={{ padding: "15px", background: "#111", borderRadius: "12px" }}>Staking <h2>{data.staking}</h2></div>
          <div style={{ padding: "15px", background: "#111", borderRadius: "12px" }}>Rewards <h2>{data.rewards}</h2></div>
          <div style={{ padding: "15px", background: "#111", borderRadius: "12px" }}>Referral <h2>{data.referral}</h2></div>
          <div style={{ padding: "15px", background: "#111", borderRadius: "12px" }}>Sent <h2>{data.sent}</h2></div>
          <div style={{ padding: "15px", background: "#111", borderRadius: "12px" }}>Received <h2>{data.received}</h2></div>
        </div>

      </div>
    </div>
  );
}

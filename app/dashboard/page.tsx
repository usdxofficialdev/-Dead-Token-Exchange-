"use client";

import { useEffect, useState, CSSProperties } from "react";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function Dashboard() {
  const [wallet, setWallet] = useState<string | null>(null);
  const [userName, setUserName] = useState("User");
  const [membership, setMembership] = useState<string | null>(null);

  // ✅ STAKE STATES
  const [stakeAmount, setStakeAmount] = useState("");
  const [staked, setStaked] = useState(0);

  useEffect(() => {
    const w = localStorage.getItem("wallet");
    if (w) setWallet(w);

    const n = localStorage.getItem("username");
    if (n) setUserName(n);

    const m = localStorage.getItem("membership");
    if (m) setMembership(m);
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
    backdropFilter: "blur(12px)"
  };

  const btn: CSSProperties = {
    padding: "10px 14px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    fontWeight: 600
  };

  // RECEIVE
  const receiveUSDX = () => {
    if (!wallet) return alert("Wallet not connected");
    navigator.clipboard.writeText(wallet);
    alert("Wallet copied!");
  };

  // SEND
  const sendUSDX = async () => {
    if (!window.ethereum) return alert("MetaMask install karo");

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const from = accounts[0];

    await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [
        {
          from,
          to: from,
          value: "0x0"
        }
      ]
    });
  };

  // ✅ STAKE LOGIC
  const stakeTokens = () => {
    if (!stakeAmount) return alert("Amount enter karo");

    const value = Number(stakeAmount);
    if (isNaN(value) || value <= 0) return alert("Valid amount daalo");

    setStaked(prev => prev + value);
    setStakeAmount("");
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
        <div style={card}>
          <h1>⚡ USDX NETWORK</h1>
          <h3>Welcome, {userName}</h3>

          <p>Wallet: {wallet || "Not Connected"}</p>
          <p>Membership: {membership || "None"}</p>
        </div>

        {/* BALANCE */}
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

        {/* STATS */}
        <div style={{
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "15px"
        }}>
          <div style={card}>💰 Staking <h2>{data.staking + staked}</h2></div>
          <div style={card}>🎁 Rewards <h2>{data.rewards}</h2></div>
          <div style={card}>🔗 Referral <h2>{data.referral}</h2></div>
          <div style={card}>📤 Sent <h2>{data.sent}</h2></div>
          <div style={card}>📥 Received <h2>{data.received}</h2></div>
          <div style={card}>⚡ Status <h2>Active</h2></div>
        </div>

        {/* ACTIONS */}
        <div style={{
          marginTop: "25px",
          display: "flex",
          gap: "10px"
        }}>
          <button style={{ ...btn, background: "#00ffcc" }} onClick={sendUSDX}>
            Send USDX
          </button>

          <button style={{ ...btn, background: "#00aaff" }} onClick={receiveUSDX}>
            Receive USDX
          </button>

          <button style={{ ...btn, background: "#ffcc00" }}>
            Stake Tokens
          </button>
        </div>

        {/* STAKE PANEL */}
        <div style={{
          marginTop: "20px",
          padding: "20px",
          borderRadius: "16px",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)"
        }}>
          <h3>💎 Stake Panel</h3>

          <input
            value={stakeAmount}
            onChange={(e) => setStakeAmount(e.target.value)}
            placeholder="Enter stake amount"
            style={{
              padding: "10px",
              borderRadius: "10px",
              marginRight: "10px"
            }}
          />

          <button
            onClick={stakeTokens}
            style={{ ...btn, background: "#ffcc00" }}
          >
            Stake Now
          </button>

          <p style={{ marginTop: "10px" }}>
            Total Staked: {staked}
          </p>
        </div>

        {/* ACTIVITY */}
        <div style={{
          marginTop: "25px",
          padding: "20px",
          borderRadius: "16px",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)"
        }}>
          <h3>📊 Activity</h3>
          <p>• Sent 50 USDX</p>
          <p>• Received 120 USDX</p>
          <p>• Staked 200 USDX</p>
        </div>

      </div>
    </div>
  );
}

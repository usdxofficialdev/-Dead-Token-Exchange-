"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function Dashboard() {
  const [wallet, setWallet] = useState<string | null>(null);
  const [userName, setUserName] = useState("User");
  const [membership, setMembership] = useState<string | null>(null);

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

  const receiveUSDX = () => {
    if (!wallet) return alert("Wallet not connected");
    navigator.clipboard.writeText(wallet);
    alert("Wallet copied!");
  };

  const sendUSDX = async () => {
    if (!window.ethereum) return alert("MetaMask install karo");

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const from = accounts[0];

    await window.ethereum.request({
      method: "eth_sendTransaction",
      params: [{ from, to: from, value: "0x0" }]
    });
  };

  const stakeTokens = () => {
    if (!stakeAmount) return alert("Amount enter karo");

    const value = Number(stakeAmount);
    if (isNaN(value) || value <= 0) return alert("Valid amount daalo");

    setStaked(prev => prev + value);
    setStakeAmount("");
  };

  return (
    <div className="container">

      {/* HEADER */}
      <div className="card">
        <h1>⚡ USDX NETWORK</h1>
        <h3>Welcome, {userName}</h3>

        <p className="muted">Wallet: {wallet || "Not Connected"}</p>
        <p className="muted">Membership: {membership || "None"}</p>
      </div>

      {/* BALANCE */}
      <div className="card" style={{ marginTop: "20px" }}>
        <h2>Total Balance</h2>
        <h1>{data.balance} USDX</h1>
      </div>

      {/* STATS */}
      <div className="grid-3" style={{ marginTop: "20px" }}>
        <div className="card">💰 Staking <h2>{data.staking + staked}</h2></div>
        <div className="card">🎁 Rewards <h2>{data.rewards}</h2></div>
        <div className="card">🔗 Referral <h2>{data.referral}</h2></div>
        <div className="card">📤 Sent <h2>{data.sent}</h2></div>
        <div className="card">📥 Received <h2>{data.received}</h2></div>
        <div className="card">⚡ Status <h2>Active</h2></div>
      </div>

      {/* ACTIONS */}
      <div className="flex" style={{ marginTop: "25px" }}>
        <button className="btn btn-primary" onClick={sendUSDX}>
          Send USDX
        </button>

        <button className="btn btn-secondary" onClick={receiveUSDX}>
          Receive USDX
        </button>

        <button className="btn btn-warning">
          Stake Tokens
        </button>
      </div>

      {/* STAKE PANEL */}
      <div className="card" style={{ marginTop: "20px" }}>
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

        <button className="btn btn-warning" onClick={stakeTokens}>
          Stake Now
        </button>

        <p className="muted" style={{ marginTop: "10px" }}>
          Total Staked: {staked}
        </p>
      </div>

      {/* ACTIVITY */}
      <div className="card" style={{ marginTop: "25px" }}>
        <h3>📊 Activity</h3>
        <p>• Sent 50 USDX</p>
        <p>• Received 120 USDX</p>
        <p>• Staked 200 USDX</p>
      </div>

    </div>
  );
}

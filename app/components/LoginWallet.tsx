"use client";

import { useState, useEffect } from "react";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function LoginWallet() {
  const [wallet, setWallet] = useState<string | null>(null);

  // Load wallet state on client side safely
  useEffect(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("wallet");
      if (saved) setWallet(saved);
    }
  }, []);

  const saveWallet = (address: string) => {
    localStorage.setItem("wallet", address);
  };

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask install karo bhai!");
      return;
    }
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const addr = accounts[0];
      setWallet(addr);
      saveWallet(addr);
    } catch (error) {
      console.error("Connection error:", error);
    }
  };

  const disconnectWallet = () => {
    localStorage.removeItem("wallet");
    setWallet(null);
  };

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", zIndex: 9999 }}>
      {!wallet ? (
        <button 
          onClick={connectWallet}
          style={{
            background: "#2563eb",
            color: "#ffffff",
            border: "1px solid #3b82f6",
            padding: "10px 20px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            display: "block",
            visibility: "visible",
            opacity: 1
          }}
        >
          Connect Wallet
        </button>
      ) : (
        <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "#222", padding: "6px 12px", borderRadius: "8px", border: "1px solid #333" }}>
          <span style={{ fontFamily: "monospace", color: "#4ade80", fontSize: "14px" }}>
            {`${wallet.slice(0, 6)}...${wallet.slice(-4)}`}
          </span>
          <button 
            onClick={disconnectWallet}
            style={{
              background: "#ef4444",
              color: "#ffffff",
              border: "none",
              padding: "4px 10px",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: "500"
            }}
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
}

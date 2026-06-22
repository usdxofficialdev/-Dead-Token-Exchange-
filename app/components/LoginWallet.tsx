"use client";

import { useState, useEffect } from "react";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function LoginWallet() {
  const [wallet, setWallet] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("wallet");
    if (saved) setWallet(saved);
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
      console.error(error);
    }
  };

  const disconnectWallet = () => {
    localStorage.removeItem("wallet");
    setWallet(null);
  };

  if (!mounted) return null;

  return (
    <div>
      {!wallet ? (
        <button 
          onClick={connectWallet}
          style={{
            background: "#2563eb",
            color: "#fff",
            border: "none",
            padding: "8px 16px",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Connect Wallet
        </button>
      ) : (
        <div style={{ display: "flex", alignItems: "center", gap: "10px", background: "#222", padding: "5px 10px", borderRadius: "8px" }}>
          <span style={{ fontFamily: "monospace", color: "#4ade80", fontSize: "14px" }}>
            {`${wallet.slice(0, 6)}...${wallet.slice(-4)}`}
          </span>
          <button 
            onClick={disconnectWallet}
            style={{
              background: "#ef4444",
              color: "#fff",
              border: "none",
              padding: "4px 8px",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "12px"
            }}
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
}

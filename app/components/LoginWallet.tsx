"use client";

import { useState, useEffect } from "react";

/* Fix TypeScript window.ethereum */
declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function LoginWallet() {
  const [wallet, setWallet] = useState<string | null>(null);

  // load saved wallet on refresh
  useEffect(() => {
    const saved = localStorage.getItem("wallet");
    if (saved) setWallet(saved);
  }, []);

  const saveWallet = (address: string) => {
    localStorage.setItem("wallet", address);
  };

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask install karo");
      return;
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    const addr = accounts[0];
    setWallet(addr);
    saveWallet(addr);
  };

  const disconnectWallet = () => {
    localStorage.removeItem("wallet");
    setWallet(null);
  };

  return (
    <div>
      {!wallet ? (
        <button onClick={connectWallet}>
          Connect Wallet
        </button>
      ) : (
        <div>
          <p>{wallet}</p>
          <button onClick={disconnectWallet}>
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
}

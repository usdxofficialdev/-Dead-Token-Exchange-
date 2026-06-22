"use client";

import { useEffect } from "react";
import useWallet from "../lib/useWallet";

export default function LoginWallet() {
  const { wallet, connectWallet, setWallet } = useWallet();

  // 1. Page reload par address check karne ke liye
  useEffect(() => {
    const savedAddress = localStorage.getItem("userAddress");
    if (savedAddress && !wallet) {
      setWallet(savedAddress);
    }
  }, [wallet, setWallet]);

  // 2. Jab wallet connect ho, toh localStorage mein save karo
  useEffect(() => {
    if (wallet) {
      localStorage.setItem("userAddress", wallet);
    }
  }, [wallet]);

  // 3. Logout/Disconnect Logic
  const handleDisconnect = () => {
    localStorage.removeItem("userAddress");
    setWallet(null);
    window.location.reload(); // Page refresh taki state puri tarah reset ho jaye
  };

  return (
    <div>
      {!wallet ? (
        <button onClick={connectWallet}>
          Connect Wallet / Login
        </button>
      ) : (
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <p>Wallet: {wallet.slice(0, 6)}...{wallet.slice(-4)}</p>
          <button 
            onClick={handleDisconnect}
            style={{ 
              padding: '5px 10px', 
              fontSize: '12px', 
              cursor: 'pointer',
              background: '#ff4d4d', 
              color: 'white', 
              border: 'none', 
              borderRadius: '4px' 
            }}
          >
            Disconnect
          </button>
        </div>
      )}
    </div>
  );
}

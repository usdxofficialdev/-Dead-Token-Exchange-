"use client";

import { useEffect } from "react";
import useWallet from "../lib/useWallet";

export default function LoginWallet() {
  const { wallet, connectWallet, setWallet } = useWallet();

  // 1. Page reload par address check karne ke liye
  useEffect(() => {
    const savedAddress = localStorage.getItem("userAddress");
    if (savedAddress && !wallet) {
      // Agar localStorage mein address hai toh use wapas set kar do
      setWallet(savedAddress);
    }
  }, [wallet, setWallet]);

  // 2. Jab wallet connect ho, toh localStorage mein save karo
  useEffect(() => {
    if (wallet) {
      localStorage.setItem("userAddress", wallet);
    }
  }, [wallet]);

  return (
    <div>
      {!wallet ? (
        <button onClick={connectWallet}>
          Connect Wallet / Login
        </button>
      ) : (
        <p>Wallet: {wallet.slice(0, 6)}...{wallet.slice(-4)}</p>
      )}
    </div>
  );
}

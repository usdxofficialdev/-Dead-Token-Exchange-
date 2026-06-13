"use client";

import { useState } from "react";

export default function useWallet() {
  const [wallet, setWallet] = useState(null);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask install karo");
      return;
    }

    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });

    setWallet(accounts[0]);
    return accounts[0];
  };

  return { wallet, connectWallet };
}

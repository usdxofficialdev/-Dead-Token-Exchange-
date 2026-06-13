declare global {
  interface Window {
    ethereum?: any;
  }
}

"use client";

import { useState } from "react";

export default function LoginWallet() {
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
  };

  return (
    <div>
      {!wallet ? (
        <button onClick={connectWallet}>
          Connect Wallet
        </button>
      ) : (
        <p>{wallet}</p>
      )}
    </div>
  );
}

"use client";

import useWallet from "../lib/useWallet";

export default function LoginWallet() {
  const { wallet, connectWallet } = useWallet();

  return (
    <div>
      {!wallet ? (
        <button onClick={connectWallet}>
          Connect Wallet / Login
        </button>
      ) : (
        <p>Wallet: {wallet}</p>
      )}
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [wallet, setWallet] = useState<string | null>(null);

  useEffect(() => {
    const w = localStorage.getItem("wallet");
    if (w) setWallet(w);
  }, []);

  return (
    <div style={{
      padding: "20px",
      color: "#fff",
      background: "#0a0a0a",
      minHeight: "100vh"
    }}>
      <h1>USDX Dashboard</h1>
      <p>Wallet: {wallet || "Not Connected"}</p>
    </div>
  );
}

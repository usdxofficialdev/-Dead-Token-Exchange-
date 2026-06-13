import LoginWallet from "./components/LoginWallet";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      
      {/* HEADER (old UI feel) */}
      <h1>USDX Network</h1>
      <p>DeFi Staking & Rewards Platform</p>

      {/* WALLET */}
      <LoginWallet />

      {/* PLACEHOLDER FOR OLD UI */}
      <div style={{ marginTop: "40px" }}>
        <h2>Dashboard</h2>
        <p>Staking • Rewards • Referral system will appear here</p>
      </div>

    </div>
  );
}

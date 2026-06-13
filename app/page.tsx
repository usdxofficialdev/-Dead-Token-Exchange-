import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      
      <h1>USDX Network</h1>
      <p>Staking + Rewards Platform</p>

      {/* MAIN UI NAVIGATION (old app restore) */}
      <div style={{ marginTop: "20px" }}>
        
        <Link href="/dashboard">Dashboard</Link><br/>
        <Link href="/membership">Staking</Link><br/>
        <Link href="/rewards">Rewards</Link><br/>
        <Link href="/referral">Referral</Link><br/>
        <Link href="/profile">Profile</Link><br/>
        <Link href="/leaderboard">Leaderboard</Link><br/>
        <Link href="/login">Login</Link><br/>

      </div>

    </div>
  );
}

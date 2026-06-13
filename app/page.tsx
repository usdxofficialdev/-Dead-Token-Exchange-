import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: "20px" }}>
      <h1>USDX Network</h1>
      <p>DeFi Staking & Rewards Platform</p>

      <div style={{ marginTop: "20px" }}>
        <h2>Navigate</h2>

        <ul>
          <li><Link href="/dashboard">Dashboard</Link></li>
          <li><Link href="/membership">Staking</Link></li>
          <li><Link href="/rewards">Rewards</Link></li>
          <li><Link href="/referral">Referral</Link></li>
          <li><Link href="/profile">Profile</Link></li>
          <li><Link href="/leaderboard">Leaderboard</Link></li>
          <li><Link href="/login">Login</Link></li>
          <li><Link href="/admin">Admin</Link></li>
        </ul>
      </div>
    </main>
  );
}

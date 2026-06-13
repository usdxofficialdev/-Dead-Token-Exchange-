"use client";

export default function Dashboard() {
  return (
    <div style={{
      padding: "20px",
      display: "flex",
      justifyContent: "center"
    }}>
      
      <div style={{
        width: "100%",
        maxWidth: "900px",
        padding: "25px",
        borderRadius: "20px",
        background: "rgba(255,255,255,0.05)",
        border: "1px solid rgba(255,255,255,0.1)",
        backdropFilter: "blur(12px)",
        color: "#fff"
      }}>
        
        <h1>Dashboard</h1>

        <div style={{
          marginTop: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "15px"
        }}>
          
          <div>💰 Staking</div>
          <div>🎁 Rewards</div>
          <div>🔗 Referral</div>

        </div>

        <div style={{ marginTop: "20px" }}>
          <p>Total Staked: --</p>
          <p>Rewards Earned: --</p>
          <p>Referral Earnings: --</p>
        </div>

      </div>

    </div>
  );
}

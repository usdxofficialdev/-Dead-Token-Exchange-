export default function Dashboard() {
  return (
    <div style={{
      padding: "20px",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "20px"
    }}>
      
      <div style={{ padding: "20px", background: "#111", color: "#fff" }}>
        Staking
      </div>

      <div style={{ padding: "20px", background: "#111", color: "#fff" }}>
        Rewards
      </div>

      <div style={{ padding: "20px", background: "#111", color: "#fff" }}>
        Referral
      </div>

    </div>
  );
}

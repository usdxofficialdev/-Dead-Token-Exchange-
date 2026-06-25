"use client";

import React, { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [availableBalance, setAvailableBalance] = useState(12960.97);

  return (
    <div className="min-h-screen bg-[#0B0C10] text-white">
      <h1>USDX Network Dashboard</h1>
      <p>Complete dashboard loading...</p>
    </div>
  );
}

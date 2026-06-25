"use client";

import React, { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-[#0B0C10] text-white p-8">
      <h1 className="text-3xl font-bold text-[#FF9F1C]">USDX Network</h1>
      <p className="text-gray-400">Dashboard - {activeTab}</p>
    </div>
  );
}

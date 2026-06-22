"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import LoginWallet from "../components/LoginWallet"; 

export default function Dashboard() {
  const router = useRouter();

  // 1. Core Profile States Linked with Admin/Membership Parameter matrixes
  const [username, setUsername] = useState("Web3 Pioneer");
  const [activeMembership, setActiveMembership] = useState("Free Tier Account");

  // 2. Financial Metrics States (Fully linked across rewards, membership & admin)
  const [mainBalance, setMainBalance] = useState("5000.00");
  const [totalStaked, setTotalStaked] = useState("15000.00");
  const [totalRewards, setTotalRewards] = useState("1250.00");

  // 3. Mini Integrated Ledger Log State
  const [recentLogs, setRecentLogs] = useState([]);

  // 4. Interactive Transaction States
  const [stakeAmount, setStakeAmount] = useState("");
  const [sendAddress, setSendAddress] = useState("");
  const [sendAmount, setSendAmount] = useState("");

  // Syncing system states directly on component mount
  useEffect(() => {
    // Sync User Profiles from global parameters
    const savedProfile = localStorage.getItem("admin_user_profile");
    if (savedProfile) {
      const parsedProfile = JSON.parse(savedProfile);
      setUsername(parsedProfile.name || "Web3 Pioneer");
      setActiveMembership(parsedProfile.grade || "Free Tier Account");
    }

    // Pull financial parameters matrix
    const savedDashboardBalances = localStorage.getItem("user_dashboard_balances");
    if (savedDashboardBalances) {
      const parsed = JSON.parse(savedDashboardBalances);
      setMainBalance(parsed.mainBalance || "5000.00");
      setTotalStaked(parsed.totalStaked || "15000.00");
    } else {
      localStorage.setItem("user_dashboard_balances", JSON.stringify({ mainBalance, totalStaked }));
    }

    // Pull rewards engine variables
    const adminBalances = localStorage.getItem("admin_reward_balances");
    if (adminBalances) {
      const parsedRewards = JSON.parse(adminBalances);
      setTotalRewards(parsedRewards.claimed || "1250.00");
    }

    // Hydrating audit history log queue
    const masterLogs = localStorage.getItem("admin_rewards_history_list");
    if (masterLogs) {
      setRecentLogs(JSON.parse(masterLogs).slice(0, 4)); // Only taking top items for sleek mini widget look
    }
  }, []);

  // Web3 Core Action: Stake Submission Logic (Alters Core Matrix & Appends Logs Outwards)
  const handleExecuteStaking = (e: React.FormEvent) => {
    e.preventDefault();
    const amountToStake = parseFloat(stakeAmount);
    const available = parseFloat(mainBalance);

    if (!amountToStake || amountToStake <= 0) {
      alert("Please enter a valid stake mass quantity.");
      return;
    }
    if (amountToStake > available) {
      alert("Insufficient liquid balance available to perform network stake lock.");
      return;
    }

    const newMain = (available - amountToStake).toFixed(2);
    const newStake = (parseFloat(totalStaked) + amountToStake).toFixed(2);

    // Save back to synchronized state
    setMainBalance(newMain);
    setTotalStaked(newStake);
    localStorage.setItem("user_dashboard_balances", JSON.stringify({ mainBalance: newMain, totalStaked: newStake }));

    // Append OUT Ledger log across system network pipelines
    const fullLogs = JSON.parse(localStorage.getItem("admin_rewards_history_list") || "[]");
    const newStakeLog = {
      date: new Date().toISOString().split('T')[0],
      source: "Network Liquidity Stake",
      amount: `-${amountToStake.toFixed(2)} USDX`,
      type: "OUT",
      status: "Confirmed"
    };
    const updatedLogs = [newStakeLog, ...fullLogs];
    localStorage.setItem("admin_rewards_history_list", JSON.stringify(updatedLogs));
    setRecentLogs(updatedLogs.slice(0, 4));

    setStakeAmount("");
    alert(`Successfully locked ${amountToStake} USDX into secure protocol validating nodes!`);
  };

  // Web3 Core Action: Send Balance Outward Function
  const handleSendAssets = (e: React.FormEvent) => {
    e.preventDefault();
    const amountToSend = parseFloat(sendAmount);
    const available = parseFloat(mainBalance);

    if (!sendAddress.startsWith("0x") || sendAddress.length < 42) {
      alert("Invalid EVM wallet or DeFi destination node address target.");
      return;
    }
    if (!amountToSend || amountToSend <= 0 || amountToSend > available) {
      alert("Invalid balance processing volume or insufficient funds.");
      return;
    }

    const newMain = (available - amountToSend).toFixed(2);
    setMainBalance(newMain);
    localStorage.setItem("user_dashboard_balances", JSON.stringify({ mainBalance: newMain, totalStaked }));

    // Append log history
    const fullLogs = JSON.parse(localStorage.getItem("admin_rewards_history_list") || "[]");
    const newSendLog = {
      date: new Date().toISOString().split('T')[0],
      source: `Sent to ${sendAddress.substring(0, 6)}...${sendAddress.substring(38)}`,
      amount: `-${amountToSend.toFixed(2)} USDX`,
      type: "OUT",
      status: "Confirmed"
    };
    const updatedLogs = [newSendLog, ...fullLogs];
    localStorage.setItem("admin_rewards_history_list", JSON.stringify(updatedLogs));
    setRecentLogs(updatedLogs.slice(0, 4));

    setSendAmount("");
    setSendAddress("");
    alert(`Transaction broadcasted successfully to network hash registers!`);
  };

  const menuItems = [
    { name: "Dashboard", route: "/dashboard", active: true },
    { name: "Membership Plans", route: "/membership", active: false },
    { name: "Rewards History", route: "/rewards", active: false },
    { name: "Referral Program", route: "/referral", active: false },
    { name: "Leaderboard", route: "/leaderboard", active: false },
    { name: "Profile Settings", route: "/profile", active: false },
    { name: "Admin Panel", route: "/admin", active: false },
  ];

  return (
    <div className="flex min-h-screen bg-[#0B0B0F] text-white">
      
      {/* SIDEBAR ARCHITECTURE */}
      <aside className="w-64 border-r border-gray-800 bg-[#121218] p-6 hidden md:block">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-amber-500 tracking-wider">USDX NETWORK</h1>
          <p className="text-xs text-gray-500">Premium Token Exchange</p>
        </div>
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <button
              key={index}
              onClick={() => router.push(item.route)}
              className={`w-full text-left px-4 p-3 rounded-xl text-sm font-medium transition-all ${
                item.active 
                  ? "bg-amber-500 text-black shadow-lg shadow-amber-500/20" 
                  : "text-gray-400 hover:bg-[#1A1A24] hover:text-white"
              }`}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* CORE FRAME CONTAINER */}
      <main className="flex-1 p-8">
        <header className="flex flex-wrap items-center justify-between border-b border-gray-800 pb-6 mb-8 gap-4">
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-2xl md:text-3xl font-bold">Welcome, {username}</h1>
              <span className="text-[10px] uppercase font-black bg-amber-500 text-black px-2.5 py-0.5 rounded-full border border-amber-600 shadow-md">
                {activeMembership}
              </span>
            </div>
            <p className="text-sm text-gray-400">Manage real-time cross-chain node vectors, liquid states, and staking operations.</p>
          </div>
          <LoginWallet />
        </header>

        {/* FINANCIAL GRID COUNTERS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-6xl">
          <div className="bg-[#121218] border border-gray-800 p-6 rounded-2xl shadow-xl">
            <span className="block text-xs uppercase text-gray-500 font-bold mb-1">Total Available Balance</span>
            <span className="text-3xl font-black text-amber-500 tracking-tight">${parseFloat(mainBalance).toLocaleString()} <span className="text-xs font-semibold text-gray-400">USDX</span></span>
            <span className="block text-[11px] text-emerald-400 mt-2">● Real-time Synced Wallet Balance</span>
          </div>

          <div className="bg-[#121218] border border-gray-800 p-6 rounded-2xl shadow-xl">
            <span className="block text-xs uppercase text-gray-500 font-bold mb-1">Active Staked Assets</span>
            <span className="text-3xl font-black text-white tracking-tight">${parseFloat(totalStaked).toLocaleString()} <span className="text-xs font-semibold text-gray-400">USDX</span></span>
            <span className="block text-[11px] text-amber-500 font-medium mt-2">⚡ Locked Validation Nodes</span>
          </div>

          <div className="bg-[#121218] border border-gray-800 p-6 rounded-2xl shadow-xl">
            <span className="block text-xs uppercase text-gray-500 font-bold mb-1">Total Rewards Settled</span>
            <span className="text-3xl font-black text-emerald-400 tracking-tight">${parseFloat(totalRewards).toLocaleString()} <span className="text-xs font-semibold text-gray-400">USDX</span></span>
            <span className="block text-[11px] text-gray-400 mt-2">✓ Dynamic Claim Operations Ledger</span>
          </div>
        </div>

        {/* OPERATIONS GRID: INTERACTION CONSOLES */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl items-start">
          
          {/* STAKING OPERATION PANEL */}
          <div className="bg-[#121218] border border-gray-800 p-6 rounded-2xl shadow-xl lg:col-span-1">
            <h3 className="text-md font-bold text-amber-500 mb-3">⚡ Lock Vault Staking</h3>
            <p className="text-xs text-gray-400 mb-4 leading-relaxed">Instantly convert liquid wallet parameters into high-yield staking logs linked straight to system tier percentages.</p>
            <form onSubmit={handleExecuteStaking} className="space-y-3">
              <input 
                type="number" 
                placeholder="Amount to Stake (USDX)" 
                value={stakeAmount}
                onChange={(e) => setStakeAmount(e.target.value)}
                className="w-full bg-[#1A1A24] text-sm border border-gray-800 px-4 py-3 rounded-xl focus:outline-none focus:border-amber-500 transition-colors"
              />
              <button type="submit" className="w-full bg-amber-500 text-black font-black py-3 rounded-xl text-xs uppercase tracking-wide hover:bg-amber-600 transition-colors">
                Execute Protocol Stake
              </button>
            </form>
          </div>

          {/* SEND DEFI OPERATION PANEL */}
          <div className="bg-[#121218] border border-gray-800 p-6 rounded-2xl shadow-xl lg:col-span-1">
            <h3 className="text-md font-bold text-amber-500 mb-3">📤 Send Assets (Defi Route)</h3>
            <p className="text-xs text-gray-400 mb-4 leading-relaxed">Broadcast assets instantly from liquid reserves out to external MetaMask or Web3 ecosystem target nodes.</p>
            <form onSubmit={handleSendAssets} className="space-y-3">
              <input 
                type="text" 
                placeholder="Receiver 0x Address Node" 
                value={sendAddress}
                onChange={(e) => setSendAddress(e.target.value)}
                className="w-full bg-[#1A1A24] text-xs border border-gray-800 px-4 py-2.5 rounded-xl focus:outline-none focus:border-amber-500 font-mono"
              />
              <input 
                type="number" 
                placeholder="Volume Mass (USDX)" 
                value={sendAmount}
                onChange={(e) => setSendAmount(e.target.value)}
                className="w-full bg-[#1A1A24] text-sm border border-gray-800 px-4 py-2.5 rounded-xl focus:outline-none focus:border-amber-500"
              />
              <button type="submit" className="w-full bg-amber-500/10 text-amber-400 border border-amber-500/20 font-black py-3 rounded-xl text-xs uppercase tracking-wide hover:bg-amber-500 hover:text-black transition-all">
                Send Asset Pipeline
              </button>
            </form>
          </div>

          {/* COMPACT MINI BRACKET HISTORY */}
          <div className="bg-[#121218] border border-gray-800 p-6 rounded-2xl shadow-xl lg:col-span-1">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-md font-bold text-gray-200">📊 System Operations Bracket</h3>
              <button onClick={() => router.push("/rewards")} className="text-[10px] uppercase text-amber-500 hover:underline">Full Logs</button>
            </div>
            
            {recentLogs.length === 0 ? (
              <p className="text-xs text-gray-500 py-6 text-center">No transaction logs recorded inside current session cache.</p>
            ) : (
              <div className="space-y-2.5">
                {recentLogs.map((log: any, index: number) => (
                  <div key={index} className="bg-black/20 border border-gray-900/60 p-2.5 rounded-xl flex items-center justify-between text-xs">
                    <div>
                      <p className="font-semibold text-gray-300 truncate max-w-[130px]">{log.source}</p>
                      <span className="text-[10px] text-gray-500 font-mono">{log.date}</span>
                    </div>
                    <div className="text-right">
                      <span className={`font-bold ${log.type === "IN" ? "text-emerald-400" : "text-red-400"}`}>
                        {log.amount}
                      </span>
                      <span className="block text-[8px] font-mono text-gray-500 uppercase">{log.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </main>
    </div>
  );
}

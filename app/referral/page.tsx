"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();

  // Core Inputs (State Synchronized with Browser Storage Data Control)
  const [username, setUsername] = useState("CryptoKing");
  const [email, setEmail] = useState("user@example.com");
  const [selectedCode, setSelectedCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Connected KYC States
  const [kycStatus, setKycStatus] = useState("Not Submitted");
  const [fullName, setFullName] = useState("");
  const [docType, setDocType] = useState("Passport");
  const [docNumber, setDocNumber] = useState("");

  // Load existing data from shared local DB on mount
  useEffect(() => {
    const savedKyc = localStorage.getItem("admin_kyc_data");
    if (savedKyc) {
      const parsed = JSON.parse(savedKyc);
      setKycStatus(parsed.status || "Not Submitted");
      setFullName(parsed.fullName || "");
      setDocType(parsed.docType || "Passport");
      setDocNumber(parsed.docNumber || "");
    }
    
    const savedProfile = localStorage.getItem("user_profile_data");
    if (savedProfile) {
      const parsed = JSON.parse(savedProfile);
      setUsername(parsed.username || "CryptoKing");
      setEmail(parsed.email || "user@example.com");
      setSelectedCode(parsed.selectedCode || "+91");
      setPhoneNumber(parsed.phoneNumber || "");
    }
  }, []);

  const menuItems = [
    { name: "Dashboard", route: "/dashboard", active: false },
    { name: "Membership Plans", route: "/membership", active: false },
    { name: "Rewards History", route: "/rewards", active: false },
    { name: "Referral Program", route: "/referral", active: false },
    { name: "Leaderboard", route: "/leaderboard", active: false },
    { name: "Profile Settings", route: "/profile", active: true },
    { name: "Admin Panel", route: "/admin", active: false },
  ];

  const worldCountryCodes = [
    { code: "+1", country: "US/CA" }, { code: "+44", country: "UK" },
    { code: "+91", country: "IN" }, { code: "+971", country: "AE" },
    { code: "+61", country: "AU" }, { code: "+65", country: "SG" },
    { code: "+49", country: "DE" }, { code: "+33", country: "FR" },
    { code: "+81", country: "JP" }, { code: "+86", country: "CN" }
  ];

  // Save Profile Changes
  const handleProfileSave = () => {
    const profileObj = { username, email, selectedCode, phoneNumber };
    localStorage.setItem("user_profile_data", JSON.stringify(profileObj));
    alert("Profile changes saved and synced!");
  };

  // Push Live KYC Data to Admin Connection Panel
  const submitKycToAdmin = (e: React.FormEvent) => {
    e.preventDefault();
    const kycSubmission = {
      fullName,
      docType,
      docNumber,
      status: "Pending",
      submittedAt: new Date().toLocaleDateString()
    };
    localStorage.setItem("admin_kyc_data", JSON.stringify(kycSubmission));
    setKycStatus("Pending");
    alert("KYC Submitted! Connected directly to Admin Review Panel.");
  };

  return (
    <div className="flex min-h-screen bg-[#0B0B0F] text-white">
      
      {/* SIDEBAR COMPONENT (MATCHING DASHBOARD PERFECTLY) */}
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

      {/* MAIN CONTENT WORKSPACE */}
      <main className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">Profile Settings</h1>
          <p className="text-sm text-gray-400">Manage credentials, global mobile formats, and legal KYC tracking.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl">
          {/* PROFILE CARD */}
          <div className="bg-[#121218] border border-gray-800 rounded-2xl p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-amber-500 mb-4">Account Credentials</h3>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs uppercase text-gray-400 font-semibold mb-2">Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full bg-black/40 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-amber-500/50 transition-all" />
              </div>
              <div>
                <label className="block text-xs uppercase text-gray-400 font-semibold mb-2">Email Address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-black/40 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-amber-500/50 transition-all" />
              </div>
              <div>
                <label className="block text-xs uppercase text-gray-400 font-semibold mb-2">Phone Number</label>
                <div className="flex gap-2">
                  <select value={selectedCode} onChange={(e) => setSelectedCode(e.target.value)} className="bg-black/40 border border-gray-800 rounded-xl px-2 py-3 text-sm text-amber-500 outline-none cursor-pointer">
                    {worldCountryCodes.map((item, i) => (
                      <option key={i} value={item.code} className="bg-[#121218] text-white">{item.code} ({item.country})</option>
                    ))}
                  </select>
                  <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="1234567890" className="flex-1 bg-black/40 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-amber-500/50 transition-all" />
                </div>
              </div>
            </div>
            <button onClick={handleProfileSave} className="bg-amber-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-amber-600 transition-all text-sm w-full">
              Save Changes
            </button>
          </div>

          {/* KYC CORE SYSTEM */}
          <div className="bg-[#121218] border border-gray-800 rounded-2xl p-6 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-amber-500">Legal KYC Verification</h3>
              <span className={`text-xs font-bold px-3 py-1 rounded-full border ${kycStatus === "Pending" ? "bg-yellow-500/10 text-yellow-500 border-yellow-500/20" : kycStatus === "Approved" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : "bg-gray-500/10 text-gray-400 border-gray-800"}`}>
                Status: {kycStatus}
              </span>
            </div>
            <form onSubmit={submitKycToAdmin} className="space-y-4">
              <div>
                <label className="block text-xs uppercase text-gray-400 font-semibold mb-2">Full Legal Name</label>
                <input type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Official ID Name" className="w-full bg-black/40 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-amber-500/50 transition-all" />
              </div>
              <div>
                <label className="block text-xs uppercase text-gray-400 font-semibold mb-2">Document Type</label>
                <select value={docType} onChange={(e) => setDocType(e.target.value)} className="w-full bg-black/40 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-amber-500/50">
                  <option value="Passport" className="bg-[#121218]">Passport</option>
                  <option value="National ID" className="bg-[#121218]">National ID Card</option>
                  <option value="Driving License" className="bg-[#121218]">Driving License</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase text-gray-400 font-semibold mb-2">Document ID Number</label>
                <input type="text" required value={docNumber} onChange={(e) => setDocNumber(e.target.value)} placeholder="Registration ID Number" className="w-full bg-black/40 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-amber-500/50 transition-all" />
              </div>
              <button type="submit" disabled={kycStatus === "Pending"} className={`w-full font-bold px-6 py-3 rounded-xl transition-all text-sm ${kycStatus === "Pending" ? "bg-gray-800 text-gray-500 cursor-not-allowed" : "bg-amber-500 text-black hover:bg-amber-600"}`}>
                {kycStatus === "Pending" ? "Under Admin Review" : "Submit KYC Data"}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

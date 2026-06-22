"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import LoginWallet from "../components/LoginWallet"; // Asli wallet component

export default function Profile() {
  const router = useRouter();

  // Form states matching original setup
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCode, setSelectedCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");

  // KYC System States (Ready to connect with your admin panel)
  const [kycStatus, setKycStatus] = useState("Not Submitted"); // Options: Not Submitted, Pending, Approved, Rejected
  const [fullName, setFullName] = useState("");
  const [docType, setDocType] = useState("Passport");
  const [docNumber, setDocNumber] = useState("");

  // Comprehensive global country code list
  const worldCountryCodes = [
    { code: "+1", country: "United States / Canada" },
    { code: "+44", country: "United Kingdom" },
    { code: "+91", country: "India" },
    { code: "+971", country: "UAE" },
    { code: "+61", country: "Australia" },
    { code: "+65", country: "Singapore" },
    { code: "+49", country: "Germany" },
    { code: "+33", country: "France" },
    { code: "+81", country: "Japan" },
    { code: "+86", country: "China" },
    { code: "+966", country: "Saudi Arabia" },
    { code: "+20", country: "Egypt" },
    { code: "+27", country: "South Africa" },
    { code: "+31", country: "Netherlands" },
    { code: "+34", country: "Spain" },
    { code: "+39", country: "Italy" },
    { code: "+55", country: "Brazil" },
    { code: "+60", country: "Malaysia" },
    { code: "+62", country: "Indonesia" },
    { code: "+63", country: "Philippines" },
    { code: "+7", country: "Russia" },
    { code: "+82", country: "South Korea" },
    { code: "+90", country: "Turkey" },
    { code: "+92", country: "Pakistan" },
    { code: "+880", country: "Bangladesh" },
    { code: "+94", country: "Sri Lanka" },
    { code: "+98", country: "Iran" },
    { code: "+353", country: "Ireland" },
    { code: "+351", country: "Portugal" },
    { code: "+41", country: "Switzerland" }
  ];

  // Sidebar dynamic menu structure to match the main exchange layout
  const menuItems = [
    { name: "Dashboard", route: "/dashboard", active: false },
    { name: "Membership Plans", route: "/membership", active: false },
    { name: "Rewards History", route: "/rewards", active: false },
    { name: "Referral Program", route: "/referral", active: false },
    { name: "Leaderboard", route: "/leaderboard", active: false },
    { name: "Profile Settings", route: "/profile", active: true },
    { name: "Admin Panel", route: "/admin", active: false },
  ];

  // Handler to submit data to the admin pipeline
  const submitKycToAdmin = (e: React.FormEvent) => {
    e.preventDefault();
    // This pushes the state to 'Pending' so the Admin dashboard can fetch and display it
    setKycStatus("Pending");
    alert("KYC documents submitted successfully! Status updated to Pending Admin Verification.");
  };

  return (
    <div className="flex min-h-screen bg-[#0B0B0F] text-white">
      
      {/* SIDEBAR COMPONENT (Consistent branding layout) */}
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
        
        {/* HEADER WITH REALTIME WALLET COMPONENT */}
        <header className="flex flex-wrap items-center justify-between border-b border-gray-800 pb-6 mb-8 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Profile Settings</h1>
            <p className="text-sm text-gray-400">Manage your credentials, phone setup, and legal identity verification.</p>
          </div>
          <div>
            <LoginWallet />
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* LEFT: PRIMARY PROFILE INFO & CONTACT SETUP */}
          <div className="bg-[#121218] border border-gray-800 rounded-2xl p-6 shadow-xl space-y-4">
            <h3 className="text-lg font-semibold text-amber-500 mb-2">Account Credentials</h3>
            
            <div>
              <label className="block text-xs uppercase text-gray-400 font-semibold mb-2">Username</label>
              <input 
                type="text" 
                placeholder="CryptoKing" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-black/40 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-amber-500/50 transition-all" 
              />
            </div>
            
            <div>
              <label className="block text-xs uppercase text-gray-400 font-semibold mb-2">Email Address</label>
              <input 
                type="email" 
                placeholder="user@example.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/40 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-amber-500/50 transition-all" 
              />
            </div>

            {/* Global Phone Field Integration */}
            <div>
              <label className="block text-xs uppercase text-gray-400 font-semibold mb-2">Phone Number</label>
              <div className="flex gap-2">
                <select 
                  value={selectedCode}
                  onChange={(e) => setSelectedCode(e.target.value)}
                  className="bg-black/40 border border-gray-800 rounded-xl px-3 py-3 text-sm text-amber-500 outline-none cursor-pointer max-w-[110px]"
                >
                  {worldCountryCodes.map((country, idx) => (
                    <option key={idx} value={country.code} className="bg-[#121218] text-white">
                      {country.code} ({country.country.substring(0, 3)})
                    </option>
                  ))}
                </select>
                <input 
                  type="tel" 
                  placeholder="*** *** ****" 
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="flex-1 bg-black/40 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-amber-500/50 transition-all" 
                />
              </div>
            </div>

            <div className="pt-2">
              <button className="bg-amber-500 text-black font-bold px-6 py-3 rounded-xl hover:bg-amber-600 transition-all text-sm w-full">
                Save Changes
              </button>
            </div>
          </div>

          {/* RIGHT: ADVANCED LEGAL KYC CORE (CONNECTS TO ADMIN CONTROL) */}
          <div className="bg-[#121218] border border-gray-800 rounded-2xl p-6 shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-amber-500">Legal KYC Verification</h3>
              <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
                kycStatus === "Pending" ? "bg-yellow-500/10 text-yellow-500 border-yellow-500/20" :
                kycStatus === "Approved" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" :
                "bg-gray-500/10 text-gray-400 border-gray-800"
              }`}>
                Status: {kycStatus}
              </span>
            </div>

            <form onSubmit={submitKycToAdmin} className="space-y-4">
              <div>
                <label className="block text-xs uppercase text-gray-400 font-semibold mb-2">Full Legal Name</label>
                <input 
                  type="text" 
                  required
                  placeholder="Official Name" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-black/40 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-amber-500/50 transition-all" 
                />
              </div>

              <div>
                <label className="block text-xs uppercase text-gray-400 font-semibold mb-2">Document Identifier Type</label>
                <select 
                  value={docType}
                  onChange={(e) => setDocType(e.target.value)}
                  className="w-full bg-black/40 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white outline-none cursor-pointer focus:border-amber-500/50 transition-all"
                >
                  <option value="Passport" className="bg-[#121218]">International Passport</option>
                  <option value="National ID" className="bg-[#121218]">National Government ID Card</option>
                  <option value="Driving License" className="bg-[#121218]">Driving License</option>
                </select>
              </div>

              <div>
                <label className="block text-xs uppercase text-gray-400 font-semibold mb-2">Document Identification Number</label>
                <input 
                  type="text" 
                  required
                  placeholder="ID / Registration Number" 
                  value={docNumber}
                  onChange={(e) => setDocNumber(e.target.value)}
                  className="w-full bg-black/40 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-amber-500/50 transition-all" 
                />
              </div>

              <div className="border border-dashed border-gray-800 p-4 rounded-xl text-center bg-black/10">
                <p className="text-xs text-gray-400 mb-2">Upload Identity Files (PDF, PNG, JPG)</p>
                <input type="file" required className="text-xs text-gray-500 cursor-pointer mx-auto max-w-xs" />
              </div>

              <button 
                type="submit"
                disabled={kycStatus === "Pending"}
                className={`w-full font-bold px-6 py-3 rounded-xl transition-all text-sm ${
                  kycStatus === "Pending"
                    ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                    : "bg-amber-500 text-black hover:bg-amber-600"
                }`}
              >
                {kycStatus === "Pending" ? "Verifying under Admin Review" : "Submit KYC Data"}
              </button>
            </form>
          </div>

        </div>
      </main>
    </div>
  );
}

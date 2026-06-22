"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();

  // Core Inputs
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
    <div className="min-h-screen bg-[#0B0C10] text-white flex flex-col md:flex-row">
      <aside className="w-full md:w-64 bg-[#1F2833] p-4 md:p-6 flex flex-row md:flex-col justify-between md:justify-start gap-4 order-2 md:order-1 fixed bottom-0 md:relative z-50 md:z-0 border-t md:border-t-0 border-gray-800">
        <div className="hidden md:block mb-8">
          <h2 className="text-xl font-bold text-[#FF9F1C]">USDX NETWORK</h2>
          <p className="text-xs text-gray-400">Premium Token Exchange</p>
        </div>
        <nav className="flex flex-row md:flex-col gap-2 w-full justify-around md:justify-start overflow-x-auto md:overflow-visible pb-1 md:pb-0">
          <button onClick={() => router.push("/dashboard")} className="text-gray-400 hover:text-white hover:bg-gray-800/50 px-4 py-2 rounded-lg text-sm min-w-max text-center transition-all">Dashboard</button>
          <button onClick={() => router.push("/membership")} className="text-gray-400 hover:text-white hover:bg-gray-800/50 px-4 py-2 rounded-lg text-sm min-w-max text-center transition-all">Membership Plans</button>
          <button onClick={() => router.push("/rewards")} className="text-gray-400 hover:text-white hover:bg-gray-800/50 px-4 py-2 rounded-lg text-sm min-w-max text-center transition-all">Rewards History</button>
          <button onClick={() => router.push("/referral")} className="text-gray-400 hover:text-white hover:bg-gray-800/50 px-4 py-2 rounded-lg text-sm min-w-max text-center transition-all">Referral Program</button>
        </nav>
      </aside>

      <main className="flex-1 p-4 md:p-8 order-1 md:order-2 pb-24 md:pb-8">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold">Profile Settings</h1>
          <p className="text-sm text-gray-400">Manage credentials, global mobile formats, and legal KYC tracking.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl">
          {/* PROFILE CARD */}
          <div className="bg-[#1F2833]/30 border border-gray-800 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-[#FF9F1C] mb-4">Account Credentials</h3>
            <div className="space-y-4 mb-6">
              <div>
                <label className="block text-xs uppercase text-gray-400 font-semibold mb-2">Username</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full bg-black/40 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white outline-none" />
              </div>
              <div>
                <label className="block text-xs uppercase text-gray-400 font-semibold mb-2">Email Address</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-black/40 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white outline-none" />
              </div>
              <div>
                <label className="block text-xs uppercase text-gray-400 font-semibold mb-2">Phone Number</label>
                <div className="flex gap-2">
                  <select value={selectedCode} onChange={(e) => setSelectedCode(e.target.value)} className="bg-black/40 border border-gray-800 rounded-xl px-2 py-3 text-sm text-[#FF9F1C] outline-none">
                    {worldCountryCodes.map((item, i) => (
                      <option key={i} value={item.code} className="bg-[#1F2833] text-white">{item.code} ({item.country})</option>
                    ))}
                  </select>
                  <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="1234567890" className="flex-1 bg-black/40 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white outline-none" />
                </div>
              </div>
            </div>
            <button onClick={handleProfileSave} className="bg-[#FF9F1C] text-black font-bold px-6 py-3 rounded-xl hover:bg-[#e08b14] transition-all text-sm w-full">
              Save Changes
            </button>
          </div>

          {/* KYC CORE SYSTEM */}
          <div className="bg-[#1F2833]/30 border border-gray-800 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-[#FF9F1C]">Legal KYC Verification</h3>
              <span className={`text-xs font-bold px-3 py-1 rounded-full border ${kycStatus === "Pending" ? "bg-yellow-500/10 text-yellow-500 border-yellow-500/20" : kycStatus === "Approved" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : "bg-gray-500/10 text-gray-400 border-gray-800"}`}>
                Status: {kycStatus}
              </span>
            </div>
            <form onSubmit={submitKycToAdmin} className="space-y-4">
              <div>
                <label className="block text-xs uppercase text-gray-400 font-semibold mb-2">Full Legal Name</label>
                <input type="text" required value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Official ID Name" className="w-full bg-black/40 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white outline-none" />
              </div>
              <div>
                <label className="block text-xs uppercase text-gray-400 font-semibold mb-2">Document Type</label>
                <select value={docType} onChange={(e) => setDocType(e.target.value)} className="w-full bg-black/40 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white outline-none">
                  <option value="Passport" className="bg-[#1F2833]">Passport</option>
                  <option value="National ID" className="bg-[#1F2833]">National ID Card</option>
                  <option value="Driving License" className="bg-[#1F2833]">Driving License</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase text-gray-400 font-semibold mb-2">Document ID Number</label>
                <input type="text" required value={docNumber} onChange={(e) => setDocNumber(e.target.value)} placeholder="Registration ID Number" className="w-full bg-black/40 border border-gray-800 rounded-xl px-4 py-3 text-sm text-white outline-none" />
              </div>
              <button type="submit" disabled={kycStatus === "Pending"} className={`w-full font-bold px-6 py-3 rounded-xl transition-all text-sm ${kycStatus === "Pending" ? "bg-gray-800 text-gray-500 cursor-not-allowed" : "bg-[#FF9F1C] text-black hover:bg-[#e08b14]"}`}>
                {kycStatus === "Pending" ? "Under Admin Review" : "Submit KYC Data"}
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

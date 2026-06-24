"use client";

import React, { useState, useEffect } from "react";
import AppLayout from "../components/AppLayout";

export default function Profile() {
  const [username, setUsername] = useState("CryptoKing");
  const [email, setEmail] = useState("user@example.com");
  const [selectedCode, setSelectedCode] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [kycStatus, setKycStatus] = useState("Not Submitted");
  const [fullName, setFullName] = useState("");
  const [docType, setDocType] = useState("Passport");
  const [docNumber, setDocNumber] = useState("");

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

  const handleProfileSave = () => {
    const profileObj = { username, email, selectedCode, phoneNumber };
    localStorage.setItem("user_profile_data", JSON.stringify(profileObj));
    alert("Profile saved successfully!");
  };

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
    alert("KYC submitted successfully!");
  };

  return (
    <AppLayout
      title="Profile Settings"
      description="Manage your account credentials and legal verification"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Account Credentials Card */}
        <div className="bg-[#121218] border border-[#2A2A35] rounded-lg p-6">
          <h3 className="text-lg font-semibold text-amber-500 mb-4">Account Credentials</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-xs uppercase text-gray-500 font-semibold mb-2">Username</label>
              <input 
                type="text" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                className="w-full bg-black/40 border border-[#2A2A35] rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-amber-500/50 transition-all"
              />
            </div>
            
            <div>
              <label className="block text-xs uppercase text-gray-500 font-semibold mb-2">Email Address</label>
              <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                className="w-full bg-black/40 border border-[#2A2A35] rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-amber-500/50 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs uppercase text-gray-500 font-semibold mb-2">Phone Number</label>
              <div className="flex gap-2">
                <select 
                  value={selectedCode} 
                  onChange={(e) => setSelectedCode(e.target.value)} 
                  className="bg-black/40 border border-[#2A2A35] rounded-lg px-3 py-3 text-sm text-amber-500 outline-none cursor-pointer max-w-[110px]"
                >
                  {worldCountryCodes.map((item, i) => (
                    <option key={i} value={item.code} className="bg-[#121218] text-white">
                      {item.code} ({item.country})
                    </option>
                  ))}
                </select>
                <input 
                  type="tel" 
                  value={phoneNumber} 
                  onChange={(e) => setPhoneNumber(e.target.value)} 
                  placeholder="1234567890" 
                  className="flex-1 bg-black/40 border border-[#2A2A35] rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-amber-500/50 transition-all"
                />
              </div>
            </div>

            <button 
              onClick={handleProfileSave} 
              className="w-full bg-amber-500 text-black font-bold px-6 py-3 rounded-lg hover:bg-amber-600 transition-all text-sm mt-6"
            >
              Save Changes
            </button>
          </div>
        </div>

        {/* KYC Verification Card */}
        <div className="bg-[#121218] border border-[#2A2A35] rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-amber-500">Legal KYC Verification</h3>
            <span className={`text-xs font-bold px-3 py-1 rounded-full border ${
              kycStatus === "Pending" ? "bg-yellow-500/10 text-yellow-500 border-yellow-500/20" : 
              kycStatus === "Approved" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" : 
              "bg-gray-500/10 text-gray-400 border-[#2A2A35]"
            }`}>
              {kycStatus}
            </span>
          </div>

          <form onSubmit={submitKycToAdmin} className="space-y-4">
            <div>
              <label className="block text-xs uppercase text-gray-500 font-semibold mb-2">Full Legal Name</label>
              <input 
                type="text" 
                required 
                value={fullName} 
                onChange={(e) => setFullName(e.target.value)} 
                placeholder="Official ID Name" 
                className="w-full bg-black/40 border border-[#2A2A35] rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-amber-500/50 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs uppercase text-gray-500 font-semibold mb-2">Document Type</label>
              <select 
                value={docType} 
                onChange={(e) => setDocType(e.target.value)} 
                className="w-full bg-black/40 border border-[#2A2A35] rounded-lg px-4 py-3 text-sm text-white outline-none cursor-pointer focus:border-amber-500/50"
              >
                <option value="Passport" className="bg-[#121218]">Passport</option>
                <option value="National ID" className="bg-[#121218]">National ID Card</option>
                <option value="Driving License" className="bg-[#121218]">Driving License</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase text-gray-500 font-semibold mb-2">Document ID Number</label>
              <input 
                type="text" 
                required 
                value={docNumber} 
                onChange={(e) => setDocNumber(e.target.value)} 
                placeholder="Registration ID Number" 
                className="w-full bg-black/40 border border-[#2A2A35] rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-amber-500/50 transition-all"
              />
            </div>

            <div className="border border-dashed border-[#2A2A35] p-4 rounded-lg text-center bg-black/10">
              <p className="text-xs text-gray-400 mb-2">Upload Identity File (PDF, PNG, JPG)</p>
              <input type="file" className="text-xs text-gray-500 cursor-pointer mx-auto max-w-xs" />
            </div>

            <button 
              type="submit" 
              disabled={kycStatus === "Pending"} 
              className={`w-full font-bold px-6 py-3 rounded-lg transition-all text-sm ${
                kycStatus === "Pending" ? "bg-gray-800 text-gray-500 cursor-not-allowed" : "bg-amber-500 text-black hover:bg-amber-600"
              }`}
            >
              {kycStatus === "Pending" ? "Under Admin Review" : "Submit KYC Data"}
            </button>
          </form>
        </div>

      </div>
    </AppLayout>
  );
}

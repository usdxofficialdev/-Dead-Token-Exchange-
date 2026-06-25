"use client";

import React, { useState } from "react";
import AppLayout from "../components/AppLayout";

export default function Membership() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [showPayment, setShowPayment] = useState(false);
  const [txHash, setTxHash] = useState("");
  const [isMember, setIsMember] = useState(false);

  const plans = [
    { id: "bronze", name: "Bronze", price: "100 USDX", apy: "5%", features: ["Basic staking", "Monthly rewards", "Community access"] },
    { id: "silver", name: "Silver", price: "500 USDX", apy: "8%", features: ["Advanced staking", "Daily rewards", "Priority support"] },
    { id: "gold", name: "Gold", price: "1000 USDX", apy: "15%", features: ["Premium staking", "Real-time rewards", "VIP access", "Referral commissions"] },
  ];

  const handleBuyNow = (planId: string) => {
    setSelectedPlan(planId);
    setShowPayment(true);
  };

  const handleConfirmPurchase = () => {
    if (!txHash) {
      alert("Enter TRX Hash!");
      return;
    }

    const plan = plans.find(p => p.id === selectedPlan);
    const purchaseData = {
      plan: plan?.name,
      amount: plan?.price,
      txHash: txHash,
      date: new Date().toISOString().split('T')[0],
      status: "Pending"
    };

    localStorage.setItem("user_membership_purchase", JSON.stringify(purchaseData));
    localStorage.setItem("user_is_member", "true");
    localStorage.setItem("user_membership_date", new Date().toISOString().split('T')[0]);

    const adminPurchases = JSON.parse(localStorage.getItem("admin_membership_purchases") || "[]");
    adminPurchases.push(purchaseData);
    localStorage.setItem("admin_membership_purchases", JSON.stringify(adminPurchases));

    alert(`✅ Purchase Submitted!\nPlan: ${plan?.name}\nStatus: Pending Admin Approval`);
    setShowPayment(false);
    setTxHash("");
    setSelectedPlan(null);
    setIsMember(true);
  };

  return (
    <AppLayout title="Membership Plans" description="Choose your membership tier">
      {isMember && (
        <div className="bg-emerald-500/10 border border-emerald-500/30 p-6 rounded-lg mb-8">
          <h3 className="text-lg font-bold text-emerald-400">✅ You are a Premium Member!</h3>
          <p className="text-sm text-gray-400 mt-2">Enjoy daily rewards, staking benefits, and referral commissions.</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div key={plan.id} className="bg-[#121218] border border-[#2A2A35] rounded-lg p-6 hover:border-amber-500/30 transition-all">
            <h3 className="text-2xl font-black text-amber-500 mb-2">{plan.name}</h3>
            <p className="text-3xl font-bold text-white mb-2">{plan.price}</p>
            <p className="text-sm text-gray-400 mb-4">APY: <span className="text-emerald-400 font-bold">{plan.apy}</span></p>

            <div className="space-y-2 mb-6">
              {plan.features.map((feature, idx) => (
                <div key={idx} className="text-sm text-gray-300 flex items-center">
                  <span className="text-amber-500 mr-2">✓</span>{feature}
                </div>
              ))}
            </div>

            <button onClick={() => handleBuyNow(plan.id)} className="w-full bg-amber-500 text-black font-bold py-3 rounded-lg hover:bg-amber-600 transition-all">
              Buy Now
            </button>
          </div>
        ))}
      </div>

      {showPayment && selectedPlan && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-[#121218] border border-[#2A2A35] rounded-lg p-8 max-w-md w-full">
            <h3 className="text-2xl font-bold text-white mb-4">Complete Purchase</h3>

            <div className="bg-black/40 p-4 rounded-lg mb-4">
              <p className="text-sm text-gray-400 mb-2">Plan: <span className="text-white font-bold">{plans.find(p => p.id === selectedPlan)?.name}</span></p>
              <p className="text-sm text-gray-400">Amount: <span className="text-amber-500 font-bold">{plans.find(p => p.id === selectedPlan)?.price}</span></p>
            </div>

            <div className="mb-4 p-4 bg-black/40 rounded-lg text-center">
              <p className="text-xs text-gray-400 mb-2">Send to Wallet Address:</p>
              <p className="text-sm font-mono text-amber-500 break-all">0x742d35Cc6634C0532925a3b844Bc9e7595f...</p>
              <button className="text-xs text-gray-400 hover:text-gray-300 mt-2">Copy Address</button>
            </div>

            <input type="text" placeholder="Enter TRX Hash" value={txHash} onChange={(e) => setTxHash(e.target.value)} className="w-full bg-black/40 border border-[#2A2A35] rounded-lg px-4 py-3 text-white mb-4 outline-none" />

            <div className="flex gap-3">
              <button onClick={handleConfirmPurchase} className="flex-1 bg-emerald-500 text-black font-bold py-3 rounded-lg hover:bg-emerald-600">
                Confirm
              </button>
              <button onClick={() => { setShowPayment(false); setTxHash(""); }} className="flex-1 border border-gray-600 text-gray-400 font-bold py-3 rounded-lg hover:bg-gray-900">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </AppLayout>
  );
}

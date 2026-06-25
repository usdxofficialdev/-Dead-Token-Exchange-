"use client";

import React, { useState, useEffect } from "react";
import AppLayout from "../components/AppLayout";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("users");
  const [membershipPurchases, setMembershipPurchases] = useState([]);
  const [withdrawalRequests, setWithdrawalRequests] = useState([]);

  useEffect(() => {
    const purchases = JSON.parse(localStorage.getItem("admin_membership_purchases") || "[]");
    setMembershipPurchases(purchases);

    const withdrawals = JSON.parse(localStorage.getItem("user_withdrawal_requests") || "[]");
    setWithdrawalRequests(withdrawals);
  }, []);

  const handleApproveMembership = (idx: number) => {
    const updated = [...membershipPurchases];
    updated[idx].status = "Approved";
    setMembershipPurchases(updated);
    localStorage.setItem("admin_membership_purchases", JSON.stringify(updated));
    alert("✅ Membership approved!");
  };

  const handleApproveWithdrawal = (idx: number) => {
    const updated = [...withdrawalRequests];
    updated[idx].status = "Completed";
    setWithdrawalRequests(updated);
    localStorage.setItem("user_withdrawal_requests", JSON.stringify(updated));
    alert("✅ Withdrawal approved!");
  };

  return (
    <AppLayout title="Admin Dashboard" description="Manage memberships and withdrawals">
      <div className="flex gap-4 mb-8 border-b border-[#2A2A35] pb-4">
        <button onClick={() => setActiveTab("memberships")} className={`px-4 py-2 font-bold ${activeTab === "memberships" ? "text-amber-500 border-b-2 border-amber-500" : "text-gray-400"}`}>
          Memberships
        </button>
        <button onClick={() => setActiveTab("withdrawals")} className={`px-4 py-2 font-bold ${activeTab === "withdrawals" ? "text-amber-500 border-b-2 border-amber-500" : "text-gray-400"}`}>
          Withdrawals
        </button>
      </div>

      {activeTab === "memberships" && (
        <div className="bg-[#121218] border border-[#2A2A35] rounded-lg p-6 overflow-x-auto">
          <h3 className="text-lg font-bold mb-4">Membership Purchases</h3>
          <table className="w-full text-sm">
            <thead className="border-b border-[#2A2A35]">
              <tr>
                <th className="text-left py-3 px-4 text-gray-500">Plan</th>
                <th className="text-left py-3 px-4 text-gray-500">Amount</th>
                <th className="text-left py-3 px-4 text-gray-500">TRX Hash</th>
                <th className="text-left py-3 px-4 text-gray-500">Status</th>
                <th className="text-left py-3 px-4 text-gray-500">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2A2A35]">
              {membershipPurchases.map((purchase, idx) => (
                <tr key={idx} className="hover:bg-black/20">
                  <td className="py-3 px-4 text-white font-bold">{purchase.plan}</td>
                  <td className="py-3 px-4 text-amber-500">{purchase.amount}</td>
                  <td className="py-3 px-4 text-xs font-mono text-gray-400">{purchase.txHash.slice(0, 20)}...</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${purchase.status === "Approved" ? "bg-emerald-500/10 text-emerald-400" : "bg-yellow-500/10 text-yellow-400"}`}>
                      {purchase.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    {purchase.status === "Pending" && (
                      <button onClick={() => handleApproveMembership(idx)} className="bg-emerald-500 text-black px-3 py-1 rounded text-xs font-bold hover:bg-emerald-600">
                        Approve
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {activeTab === "withdrawals" && (
        <div className="bg-[#121218] border border-[#2A2A35] rounded-lg p-6 overflow-x-auto">
          <h3 className="text-lg font-bold mb-4">Withdrawal Requests</h3>
          <table className="w-full text-sm">
            <thead className="border-b border-[#2A2A35]">
              <tr>
                <th className="text-left py-3 px-4 text-gray-500">Amount</th>
                <th className="text-left py-3 px-4 text-gray-500">Address</th>
                <th className="text-left py-3 px-4 text-gray-500">Status</th>
                <th className="text-left py-3 px-4 text-gray-500">Date</th>
                <th className="text-left py-3 px-4 text-gray-500">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2A2A35]">
              {withdrawalRequests.map((request, idx) => (
                <tr key={idx} className="hover:bg-black/20">
                  <td className="py-3 px-4 text-emerald-400 font-bold">{request.amount}</td>
                  <td className="py-3 px-4 text-xs font-mono text-gray-400">{request.recipient.slice(0, 20)}...</td>
                  <td className="py-3 px-4">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${request.status === "Completed" ? "bg-emerald-500/10 text-emerald-400" : "bg-yellow-500/10 text-yellow-400"}`}>
                      {request.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 text-gray-400">{request.date}</td>
                  <td className="py-3 px-4">
                    {request.status === "Pending" && (
                      <button onClick={() => handleApproveWithdrawal(idx)} className="bg-emerald-500 text-black px-3 py-1 rounded text-xs font-bold hover:bg-emerald-600">
                        Approve
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AppLayout>
  );
}

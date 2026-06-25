"use client";
import React, { useState } from "react";
import AppLayout from "../components/AppLayout";

export default function Admin() {
  const [tab, setTab] = useState("memberships");
  const [memberships, setMemberships] = useState<any[]>([]);
  const [withdrawals, setWithdrawals] = useState<any[]>([]);

  const handleApproveMembership = (idx: number) => {
    const updated = [...memberships];
    updated[idx] = { ...updated[idx], status: "Approved" };
    setMemberships(updated);
    alert("✅ Approved!");
  };

  const handleApproveWithdrawal = (idx: number) => {
    const updated = [...withdrawals];
    updated[idx] = { ...updated[idx], status: "Completed" };
    setWithdrawals(updated);
    alert("✅ Approved!");
  };

  return (
    <AppLayout title="Admin" description="Manage platform">
      <div className="flex gap-4 mb-8 border-b border-[#2A2A35] pb-4">
        <button onClick={() => setTab("memberships")} className={`px-4 py-2 font-bold ${tab === "memberships" ? "text-amber-500 border-b-2 border-amber-500" : "text-gray-400"}`}>
          Memberships
        </button>
        <button onClick={() => setTab("withdrawals")} className={`px-4 py-2 font-bold ${tab === "withdrawals" ? "text-amber-500 border-b-2 border-amber-500" : "text-gray-400"}`}>
          Withdrawals
        </button>
      </div>

      {tab === "memberships" && (
        <div className="bg-[#121218] border border-[#2A2A35] rounded-lg p-6 overflow-x-auto">
          <h3 className="font-bold mb-4">Membership Purchases</h3>
          <table className="w-full text-sm">
            <thead className="border-b border-[#2A2A35]">
              <tr>
                <th className="text-left py-3 px-4">Plan</th>
                <th className="text-left py-3 px-4">Amount</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#2A2A35] hover:bg-black/20">
                <td className="py-3 px-4 text-white font-bold">Gold</td>
                <td className="py-3 px-4 text-amber-500">1000 USDX</td>
                <td className="py-3 px-4">
                  <span className="text-xs bg-yellow-500/10 text-yellow-400 px-2 py-1 rounded">Pending</span>
                </td>
                <td className="py-3 px-4">
                  <button className="bg-emerald-500 text-black px-3 py-1 rounded text-xs font-bold hover:bg-emerald-600">
                    Approve
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

      {tab === "withdrawals" && (
        <div className="bg-[#121218] border border-[#2A2A35] rounded-lg p-6 overflow-x-auto">
          <h3 className="font-bold mb-4">Withdrawal Requests</h3>
          <table className="w-full text-sm">
            <thead className="border-b border-[#2A2A35]">
              <tr>
                <th className="text-left py-3 px-4">Amount</th>
                <th className="text-left py-3 px-4">Address</th>
                <th className="text-left py-3 px-4">Status</th>
                <th className="text-left py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-[#2A2A35] hover:bg-black/20">
                <td className="py-3 px-4 text-emerald-400 font-bold">100 USDX</td>
                <td className="py-3 px-4 text-xs text-gray-400">0x742d...5Cc6</td>
                <td className="py-3 px-4">
                  <span className="text-xs bg-yellow-500/10 text-yellow-400 px-2 py-1 rounded">Pending</span>
                </td>
                <td className="py-3 px-4">
                  <button className="bg-emerald-500 text-black px-3 py-1 rounded text-xs font-bold hover:bg-emerald-600">
                    Approve
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </AppLayout>
  );
}

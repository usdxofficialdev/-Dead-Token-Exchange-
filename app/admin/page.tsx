"use client";

import React, { useState } from "react";
import AppLayout from "../components/AppLayout";

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("users");
  
  const [users, setUsers] = useState([
    { id: "#001", name: "Alex Johnson", status: "Pending", staked: "$5,000" },
    { id: "#002", name: "Maria Garcia", status: "Active", staked: "$7,500" },
    { id: "#003", name: "John Smith", status: "Pending", staked: "$3,200" },
    { id: "#004", name: "Sarah Williams", status: "Active", staked: "$12,000" },
    { id: "#005", name: "Mike Brown", status: "Rejected", staked: "$0" },
  ]);

  const handleStatusChange = (id: string, newStatus: string) => {
    setUsers(prev => prev.map(user => 
      user.id === id ? { ...user, status: newStatus } : user
    ));
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case "Active":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "Pending":
        return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
      case "Rejected":
        return "bg-red-500/10 text-red-400 border-red-500/20";
      default:
        return "bg-gray-500/10 text-gray-400 border-gray-500/20";
    }
  };

  return (
    <AppLayout
      title="Admin Dashboard"
      description="Manage users, memberships, and network operations"
    >
      {/* Tab Navigation */}
      <div className="flex gap-4 mb-8 border-b border-[#2A2A35] pb-4">
        <button
          onClick={() => setActiveTab("users")}
          className={`px-4 py-2 font-semibold text-sm transition-all ${
            activeTab === "users"
              ? "text-amber-500 border-b-2 border-amber-500"
              : "text-gray-400 hover:text-white"
          }`}
        >
          User Management
        </button>
        <button
          onClick={() => setActiveTab("stats")}
          className={`px-4 py-2 font-semibold text-sm transition-all ${
            activeTab === "stats"
              ? "text-amber-500 border-b-2 border-amber-500"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Network Stats
        </button>
        <button
          onClick={() => setActiveTab("settings")}
          className={`px-4 py-2 font-semibold text-sm transition-all ${
            activeTab === "settings"
              ? "text-amber-500 border-b-2 border-amber-500"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Settings
        </button>
      </div>

      {/* User Management Tab */}
      {activeTab === "users" && (
        <div className="bg-[#121218] border border-[#2A2A35] rounded-lg p-6 overflow-x-auto">
          <h3 className="text-lg font-bold mb-4 text-white">Membership Management</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#2A2A35]">
                <th className="text-left py-3 px-4 text-gray-500 font-semibold text-xs uppercase">User ID</th>
                <th className="text-left py-3 px-4 text-gray-500 font-semibold text-xs uppercase">Name</th>
                <th className="text-left py-3 px-4 text-gray-500 font-semibold text-xs uppercase">Staked Amount</th>
                <th className="text-left py-3 px-4 text-gray-500 font-semibold text-xs uppercase">Status</th>
                <th className="text-left py-3 px-4 text-gray-500 font-semibold text-xs uppercase">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id} className="border-b border-[#2A2A35] hover:bg-black/20 transition-colors">
                  <td className="py-3 px-4 text-amber-500 font-bold">{user.id}</td>
                  <td className="py-3 px-4 text-white">{user.name}</td>
                  <td className="py-3 px-4 text-gray-300">{user.staked}</td>
                  <td className="py-3 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${getStatusColor(user.status)}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3 px-4 flex gap-2">
                    <button 
                      onClick={() => handleStatusChange(user.id, "Active")}
                      className="bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500/20 px-3 py-1 rounded text-xs font-semibold transition-all border border-emerald-500/20"
                    >
                      Approve
                    </button>
                    <button 
                      onClick={() => handleStatusChange(user.id, "Rejected")}
                      className="bg-red-500/10 text-red-400 hover:bg-red-500/20 px-3 py-1 rounded text-xs font-semibold transition-all border border-red-500/20"
                    >
                      Reject
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Network Stats Tab */}
      {activeTab === "stats" && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#121218] border border-[#2A2A35] p-6 rounded-lg">
            <p className="text-xs uppercase text-gray-500 font-semibold mb-2">Total Users</p>
            <h3 className="text-3xl font-black text-white mb-2">1,245</h3>
            <p className="text-xs text-gray-400">+45 this week</p>
          </div>

          <div className="bg-[#121218] border border-[#2A2A35] p-6 rounded-lg">
            <p className="text-xs uppercase text-gray-500 font-semibold mb-2">Total Staked</p>
            <h3 className="text-3xl font-black text-amber-500 mb-2">$2.5M</h3>
            <p className="text-xs text-gray-400">+$250K this week</p>
          </div>

          <div className="bg-[#121218] border border-[#2A2A35] p-6 rounded-lg">
            <p className="text-xs uppercase text-gray-500 font-semibold mb-2">Active Stakers</p>
            <h3 className="text-3xl font-black text-emerald-400 mb-2">892</h3>
            <p className="text-xs text-gray-400">71.6% of users</p>
          </div>

          <div className="bg-[#121218] border border-[#2A2A35] p-6 rounded-lg">
            <p className="text-xs uppercase text-gray-500 font-semibold mb-2">Avg APY</p>
            <h3 className="text-3xl font-black text-blue-400 mb-2">9.2%</h3>
            <p className="text-xs text-gray-400">Network wide</p>
          </div>
        </div>
      )}

      {/* Settings Tab */}
      {activeTab === "settings" && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-[#121218] border border-[#2A2A35] rounded-lg p-6">
            <h3 className="text-lg font-bold text-amber-500 mb-4">Network Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs uppercase text-gray-500 font-semibold mb-2">Min Staking Amount</label>
                <input 
                  type="number" 
                  defaultValue="10" 
                  className="w-full bg-black/40 border border-[#2A2A35] rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-amber-500/50"
                />
              </div>
              <div>
                <label className="block text-xs uppercase text-gray-500 font-semibold mb-2">Base APY Rate</label>
                <input 
                  type="number" 
                  defaultValue="5" 
                  step="0.1"
                  className="w-full bg-black/40 border border-[#2A2A35] rounded-lg px-4 py-3 text-sm text-white outline-none focus:border-amber-500/50"
                />
              </div>
              <button className="w-full bg-amber-500 text-black font-bold py-3 rounded-lg hover:bg-amber-600 transition-all">
                Save Settings
              </button>
            </div>
          </div>

          <div className="bg-[#121218] border border-[#2A2A35] rounded-lg p-6">
            <h3 className="text-lg font-bold text-amber-500 mb-4">System Info</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">System Status:</span>
                <span className="text-sm font-bold text-emerald-400">● Operational</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Last Update:</span>
                <span className="text-sm text-gray-300">Jun 24, 2026</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Version:</span>
                <span className="text-sm text-gray-300">v1.0.0</span>
              </div>
              <div className="border-t border-[#2A2A35] pt-3 mt-3">
                <button className="w-full border border-amber-500 text-amber-500 font-bold py-2 rounded-lg hover:bg-amber-500/10 transition-all text-sm">
                  View Full Logs
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </AppLayout>
  );
}

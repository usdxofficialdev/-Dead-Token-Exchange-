'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Users, DollarSign, TrendingUp, Settings, CheckCircle, XCircle } from 'lucide-react';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('users');
  
  // Dynamic User State
  const [users, setUsers] = useState([
    { id: '#001', name: 'Alex Johnson', status: 'Pending', staked: '$5,000' },
    { id: '#002', name: 'Maria Garcia', status: 'Active', staked: '$7,500' },
    { id: '#003', name: 'John Smith', status: 'Pending', staked: '$3,200' },
  ]);

  // Status Update Function
  const handleStatusChange = (id: string, newStatus: string) => {
    setUsers(prev => prev.map(user => 
      user.id === id ? { ...user, status: newStatus } : user
    ));
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation isLoggedIn={true} onLogout={() => {}} />
      
      <section className="py-20 px-4 md:px-8 pt-32">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-black mb-12">Admin <span className="text-gold-400">Dashboard</span></h1>

          {/* User Management */}
          {activeTab === 'users' && (
            <motion.div className="glass rounded-2xl p-6 overflow-x-auto">
              <h3 className="text-2xl font-black mb-6 text-gold-400">Membership Management</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gold-500/20">
                    <th className="text-left py-3 px-4">User ID</th>
                    <th className="text-left py-3 px-4">Name</th>
                    <th className="text-left py-3 px-4">Status</th>
                    <th className="text-left py-3 px-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id} className="border-b border-gold-500/10">
                      <td className="py-3 px-4 text-gold-400 font-bold">{user.id}</td>
                      <td className="py-3 px-4">{user.name}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-1 rounded text-xs font-bold ${
                          user.status === 'Active' ? 'bg-green-500/20 text-green-400' : 
                          user.status === 'Rejected' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400'
                        }`}>
                          {user.status}
                        </span>
                      </td>
                      <td className="py-3 px-4 flex gap-2">
                        <button onClick={() => handleStatusChange(user.id, 'Active')} className="text-green-400 hover:text-green-300">
                          <CheckCircle size={20} />
                        </button>
                        <button onClick={() => handleStatusChange(user.id, 'Rejected')} className="text-red-400 hover:text-red-300">
                          <XCircle size={20} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Settings, LogOut } from 'lucide-react';

export default function ProfilePage() {
const [profile] = useState({
  name: 'John Doe',
  email: 'john@example.com',
  wallet: '0x742d35Cc6634C0532925a3b844Bc724e5c0AE924',
  joinDate: '2024-01-15',
  });

  const [isEditing] = useState(false);

  return (
    <main className="min-h-screen bg-black">
      <Navigation isLoggedIn={true} onLogout={() => {}} />
      
      <section className="py-20 px-4 md:px-8 pt-32">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl font-black mb-12">
              Profile <span className="text-gold-400">Settings</span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl p-8 mb-8"
            >
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-gold-400 to-gold-600 flex items-center justify-center text-3xl font-black text-black">
                  {profile.name[0]}
                </div>
                <div>
                  <h2 className="text-2xl font-black">{profile.name}</h2>
                  <p className="text-gray-400">Member since {profile.joinDate}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-gray-400 block mb-2">Full Name</label>
                  <input
                    type="text"
                    value={profile.name}
                    disabled={!isEditing}
                    className="w-full bg-black/50 border border-gold-500/20 rounded-lg px-4 py-2 text-white disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 block mb-2">Email</label>
                  <input
                    type="email"
                    value={profile.email}
                    disabled={!isEditing}
                    className="w-full bg-black/50 border border-gold-500/20 rounded-lg px-4 py-2 text-white disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="text-sm text-gray-400 block mb-2">Wallet Address</label>
                  <input
                    type="text"
                    value={profile.wallet}
                    disabled={!isEditing}
                    className="w-full bg-black/50 border border-gold-500/20 rounded-lg px-4 py-2 text-white disabled:opacity-50 font-mono text-sm"
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <button
                  onClick={() => setIsEditing(!isEditing)}
                  className="flex-1 px-6 py-2 rounded-lg bg-gradient-to-r from-gold-400 to-gold-600 text-black font-bold hover:shadow-glow-gold-lg transition flex items-center gap-2 justify-center"
                >
                  <Settings size={18} />
                  {isEditing ? 'Save Changes' : 'Edit Profile'}
                </button>
                <button className="flex-1 px-6 py-2 rounded-lg border border-red-500 text-red-400 font-bold hover:bg-red-500/10 transition flex items-center gap-2 justify-center">
                  <LogOut size={18} />
                  Logout
                </button>
              </div>
            </motion.div>

            {/* Security Settings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-2xl font-black mb-6 text-gold-400">Security</h3>
              <div className="space-y-4">
                <button className="w-full px-6 py-3 rounded-lg border border-gold-400 text-gold-400 font-bold hover:bg-gold-400/10 transition text-left">
                  Change Password
                </button>
                <button className="w-full px-6 py-3 rounded-lg border border-gold-400 text-gold-400 font-bold hover:bg-gold-400/10 transition text-left">
                  Enable Two-Factor Authentication
                </button>
                <button className="w-full px-6 py-3 rounded-lg border border-gold-400 text-gold-400 font-bold hover:bg-gold-400/10 transition text-left">
                  Manage Connected Devices
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}

'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function SettingsPage() {
  return (
    <div className="min-h-screen bg-gradient-dark p-6">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link href="/dashboard" className="flex items-center gap-2 text-[#e8c547] hover:text-white transition mb-4">
            <ArrowLeft size={20} />
            Back to Dashboard
          </Link>
          <h1 className="text-4xl font-bold">Settings</h1>
          <p className="text-gray-400 mt-2">Manage your account preferences</p>
        </div>

        {/* Settings Sections */}
        <div className="space-y-6">
          {/* Notifications */}
          <div className="glass rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">���� Notifications</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Push Notifications</span>
                <input type="checkbox" defaultChecked className="w-6 h-6 cursor-pointer" />
              </div>
              <div className="flex justify-between items-center">
                <span>Email Notifications</span>
                <input type="checkbox" defaultChecked className="w-6 h-6 cursor-pointer" />
              </div>
              <div className="flex justify-between items-center">
                <span>Reward Alerts</span>
                <input type="checkbox" defaultChecked className="w-6 h-6 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="glass rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">🔒 Security</h2>
            <div className="space-y-4">
              <button className="w-full text-left px-4 py-3 bg-[#1a1a24] rounded-lg hover:bg-[#252535] transition">
                Change Password
              </button>
              <button className="w-full text-left px-4 py-3 bg-[#1a1a24] rounded-lg hover:bg-[#252535] transition">
                Enable Two-Factor Authentication
              </button>
              <button className="w-full text-left px-4 py-3 bg-[#1a1a24] rounded-lg hover:bg-[#252535] transition">
                View Connected Devices
              </button>
            </div>
          </div>

          {/* Privacy */}
          <div className="glass rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">👁️ Privacy</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Public Profile</span>
                <input type="checkbox" className="w-6 h-6 cursor-pointer" />
              </div>
              <div className="flex justify-between items-center">
                <span>Show Wallet Balance</span>
                <input type="checkbox" className="w-6 h-6 cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="glass rounded-lg p-6 border-2 border-red-500/20">
            <h2 className="text-xl font-bold mb-4 text-red-500">⚠️ Danger Zone</h2>
            <button className="w-full border border-red-500 text-red-500 font-bold py-2 rounded-lg hover:bg-red-500/10 transition">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

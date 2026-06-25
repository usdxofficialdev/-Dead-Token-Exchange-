"use client";

import React, { useState, useEffect } from "react";
import AppLayout from "../components/AppLayout";

export default function Rewards() {
  const [isMember, setIsMember] = useState(false);
  const [membershipDate, setMembershipDate] = useState<string | null>(null);
  const [claimableRewards, setClaimableRewards] = useState("342.80");
  const [totalClaimed, setTotalClaimed] = useState("1,250.00");
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [showTransfer, setShowTransfer] = useState(false);
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [withdrawAddress, setWithdrawAddress] = useState("");
  const [transferAmount, setTransferAmount] = useState("");
  const [transferAddress, setTransferAddress] = useState("");
  const [txHistory, setTxHistory] = useState([
    { id: "TXN001", type: "Claim", amount: "25.50", status: "Completed", date: "2026-06-24" },
    { id: "TXN002", type: "Transfer", amount: "100.00", recipient: "0x742d....", status: "Completed", date: "2026-06-23" },
  ]);

  useEffect(() => {
    const memberStatus = localStorage.getItem("user_is_member");
    const memberDate = localStorage.getItem("user_membership_date");
    setIsMember(memberStatus === "true");
    setMembershipDate(memberDate);

    const rewards = localStorage.getItem("user_claimable_rewards");
    const claimed = localStorage.getItem("user_total_claimed");
    if (rewards) setClaimableRewards(rewards);
    if (claimed) setTotalClaimed(claimed);
  }, []);

  const handleClaim = () => {
    if (!isMember) {
      alert("Only members can claim daily rewards!");
      return;
    }

    const amount = parseFloat(claimableRewards);
    const newTotal = (parseFloat(totalClaimed) + amount).toFixed(2);

    setClaimableRewards("0.00");
    setTotalClaimed(newTotal);

    const newTx = {
      id: `TXN${Date.now()}`,
      type: "Claim",
      amount: claimableRewards,
      status: "Completed",
      date: new Date().toISOString().split('T')[0],
    };
    setTxHistory([newTx, ...txHistory]);

    localStorage.setItem("user_claimable_rewards", "0.00");
    localStorage.setItem("user_total_claimed", newTotal);
    alert(`✅ Claimed ${claimableRewards} USDX!`);
  };

  const handleWithdraw = () => {
    if (!isMember) {
      alert("Only members can withdraw!");
      return;
    }

    if (!withdrawAmount || !withdrawAddress) {
      alert("Fill all fields!");
      return;
    }

    const amount = parseFloat(withdrawAmount);
    const available = parseFloat(claimableRewards);

    if (amount > available) {
      alert("Insufficient balance!");
      return;
    }

    const newBalance = (available - amount).toFixed(2);
    setClaimableRewards(newBalance);

    const newTx = {
      id: `TXN${Date.now()}`,
      type: "Withdrawal",
      amount: withdrawAmount,
      recipient: withdrawAddress,
      status: "Pending",
      date: new Date().toISOString().split('T')[0],
    };
    setTxHistory([newTx, ...txHistory]);

    localStorage.setItem("user_withdrawal_requests", JSON.stringify([newTx]));
    alert(`✅ Withdrawal request submitted!\nAmount: ${withdrawAmount} USDX\nAddress: ${withdrawAddress}`);

    setWithdrawAmount("");
    setWithdrawAddress("");
    setShowWithdraw(false);
  };

  const handleTransfer = () => {
    if (!isMember) {
      alert("Only members can transfer!");
      return;
    }

    if (!transferAmount || !transferAddress) {
      alert("Fill all fields!");
      return;
    }

    const amount = parseFloat(transferAmount);
    const available = parseFloat(claimableRewards);

    if (amount > available) {
      alert("Insufficient balance!");
      return;
    }

    const newBalance = (available - amount).toFixed(2);
    setClaimableRewards(newBalance);

    const newTx = {
      id: `TXN${Date.now()}`,
      type: "Transfer",
      amount: transferAmount,
      recipient: transferAddress,
      status: "Completed",
      date: new Date().toISOString().split('T')[0],
    };
    setTxHistory([newTx, ...txHistory]);

    alert(`✅ Transferred ${transferAmount} USDX to ${transferAddress}!`);

    setTransferAmount("");
    setTransferAddress("");
    setShowTransfer(false);
  };

  return (
    <AppLayout title="Rewards & Withdrawals" description="Manage your rewards, claims, and transfers">
      
      {/* MEMBER STATUS */}
      <div className={`p-6 rounded-lg border mb-8 ${isMember ? "bg-emerald-500/10 border-emerald-500/30" : "bg-yellow-500/10 border-yellow-500/30"}`}>
        <div className="flex justify-between items-center">
          <div>
            <h3 className={`text-lg font-bold ${isMember ? "text-emerald-400" : "text-yellow-400"}`}>
              {isMember ? "✅ PREMIUM MEMBER" : "⚠️ NON-MEMBER"}
            </h3>
            <p className="text-xs text-gray-400 mt-1">
              {isMember ? `Member since: ${membershipDate}` : "Upgrade to unlock daily rewards"}
            </p>
          </div>
          {!isMember && <button className="bg-amber-500 text-black font-bold px-6 py-2 rounded-lg hover:bg-amber-600">Become Member</button>}
        </div>
      </div>

      {/* REWARDS CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

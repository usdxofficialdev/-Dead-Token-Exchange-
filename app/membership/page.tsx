"use client";

import React, { useState, useEffect } from "react";
import AppLayout from "../components/AppLayout";

type MembershipPlan = {
  id: number;
  name: string;
  price: number;
  currency: string;
  features: string[];
  popular: boolean;
};

export default function MembershipPlans() {
  const defaultPlans: MembershipPlan[] = [
    {
      id: 1,
      name: "Starter Tier",
      price: 10,
      currency: "USDX",
      features: [
        "Basic Node Access",
        "5% APY Staking Bracket",
        "Standard Ticket Support",
      ],
      popular: false,
    },
    {
      id: 2,
      name: "Micro Node",
      price: 50,
      currency: "USDX",
      features: [
        "Priority Node Access",
        "6% APY Staking Bracket",
        "Community Chat Access",
      ],
      popular: false,
    },
    {
      id: 3,
      name: "Advanced Node",
      price: 100,
      currency: "USDX",
      features: [
        "Validator Access (Level 1)",
        "8% APY Staking Bracket",
        "24/7 Support Line",
      ],
      popular: false,
    },
    {
      id: 4,
      name: "Pro Validator",
      price: 200,
      currency: "USDX",
      features: [
        "Validator Access (Level 2)",
        "10% APY Staking Bracket",
        "Zero Gas Fee Mints",
      ],
      popular: true,
    },
    {
      id: 5,
      name: "Silver Node",
      price: 500,
      currency: "USDX",
      features: [
        "Exclusive Liquid Pools",
        "12% APY Staking Bracket",
        "Direct Discord Dev Channel",
      ],
      popular: false,
    },
    {
      id: 6,
      name: "Gold Node",
      price: 1000,
      currency: "USDX",
      features: [
        "Matching Bonuses Activated",
        "15% APY Staking Bracket",
        "Personal Account Executive",
      ],
      popular: false,
    },
    {
      id: 7,
      name: "Platinum Cluster",
      price: 2500,
      currency: "USDX",
      features: [
        "Custom Pool Generation",
        "16.5% APY Staking Bracket",
        "Early Governance Voting Rights",
      ],
      popular: false,
    },
    {
      id: 8,
      name: "Diamond Node",
      price: 5000,
      currency: "USDX",
      features: [
        "Unlimited Node Spawning",
        "18% APY Staking Bracket",
        "VIP Real-World Event Invites",
      ],
      popular: false,
    },
    {
      id: 9,
      name: "Alpha Whale",
      price: 10000,
      currency: "USDX",
      features: [
        "Institutional Liquidity Access",
        "22% APY Staking Bracket",
        "Direct Developer Voice Calls",
      ],
      popular: false,
    },
    {
      id: 10,
      name: "Genesis Foundation",
      price: 25000,
      currency: "USDX",
      features: [
        "Full System Revenue Share",
        "25% APY Staking Bracket",
        "Core Network Board Seat",
      ],
      popular: false,
    },
  ];

  const [plans, setPlans] = useState<MembershipPlan[]>(defaultPlans);

  useEffect(() => {
    const adminPlans = localStorage.getItem("admin_membership_plans");

    if (adminPlans) {
      setPlans(JSON.parse(adminPlans));
    } else {
      localStorage.setItem(
        "admin_membership_plans",
        JSON.stringify(defaultPlans)
      );
    }
  }, []);

  const handlePurchasePlan = (plan: MembershipPlan) => {
    const dashboardData =
      localStorage.getItem("user_dashboard_balances") ||
      '{"mainBalance":"5000.00","totalStaked":"15000.00"}';

    const parsedDashboard = JSON.parse(dashboardData);
    const mainBalance = parseFloat(parsedDashboard.mainBalance);

    if (mainBalance < plan.price) {
      alert(
        `Insufficient funds. Required ${plan.price} ${plan.currency}`
      );
      return;
    }

    if (
      !window.confirm(
        `Purchase ${plan.name} for ${plan.price} ${plan.currency}?`
      )
    ) {
      return;
    }

    const newBalance = (mainBalance - plan.price).toFixed(2);

    localStorage.setItem(
      "user_dashboard_balances",
      JSON.stringify({
        mainBalance: newBalance,
        totalStaked: parsedDashboard.totalStaked,
      })
    );

    localStorage.setItem(
      "user_active_membership",
      JSON.stringify(plan)
    );

    const logs = JSON.parse(
      localStorage.getItem("admin_rewards_history_list") || "[]"
    );

    logs.unshift({
      date: new Date().toISOString().split("T")[0],
      source: `Purchased ${plan.name}`,
      amount: `-${plan.price} ${plan.currency}`,
      type: "OUT",
      status: "Confirmed",
    });

    localStorage.setItem(
      "admin_rewards_history_list",
      JSON.stringify(logs)
    );

    alert(
      `${plan.name} activated successfully.\nBalance: ${newBalance} ${plan.currency}`
    );
  };

  return (
    <AppLayout
      title="Premium Network Memberships"
      description="Unlock staking rewards, validator access and premium network benefits."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`rounded-2xl border p-5 flex flex-col justify-between transition-all bg-[#0E1116]
            ${
              plan.popular
                ? "border-amber-500 shadow-lg"
                : "border-[#161920]"
            }`}
          >
            <div>
              {plan.popular && (
                <span className="inline-block mb-3 rounded-lg bg-amber-500 px-2 py-1 text-[10px] font-black uppercase text-black">
                  Most Popular
                </span>
              )}

              <h3 className="text-lg font-bold text-white">
                {plan.name}
              </h3>

              <div className="mt-4 mb-6">
                <span className="text-3xl font-black">
                  {plan.price.toLocaleString()}
                </span>

                <span className="ml-2 text-xs font-bold text-amber-500">
                  {plan.currency}
                </span>
              </div>

              <ul className="space-y-3 border-t border-[#161920] pt-4">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex gap-2 text-xs text-gray-400"
                  >
                    <span className="text-amber-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => handlePurchasePlan(plan)}
              className={`mt-6 w-full rounded-xl py-3 text-xs font-bold transition-all
              ${
                plan.popular
                  ? "bg-amber-500 text-black hover:bg-amber-600"
                  : "border border-[#161920] bg-black/20 text-white hover:bg-[#141922]"
              }`}
            >
              Purchase Membership
            </button>
          </div>
        ))}
      </div>
    </AppLayout>
  );
}

"use client";

import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import PageHeader from "./PageHeader";

type AppLayoutProps = {
  children: ReactNode;
  title: string;
  description?: string;
};

export default function AppLayout({
  children,
  title,
  description,
}: AppLayoutProps) {
  return (
    <div className="flex min-h-screen bg-[#0B0B0F] text-white">
      {/* Sidebar - Hidden on mobile, visible on md+ */}
      <div className="hidden md:block">
        <Sidebar />
      </div>

      {/* Main Content - Full width on mobile, with margin on desktop */}
      <main className="w-full md:ml-64 overflow-x-hidden p-4 md:p-8">
        <PageHeader
          title={title}
          description={description}
        />

        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}

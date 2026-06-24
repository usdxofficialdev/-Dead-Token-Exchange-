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
      <Sidebar />

      <main className="flex-1 ml-64 overflow-x-hidden p-4 md:p-8">
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

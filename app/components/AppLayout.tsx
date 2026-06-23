"use client";

import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import PageHeader from "./PageHeader";

type AppLayoutProps = {
  children: ReactNode;
  title: string;
  description: string;
};

export default function AppLayout({
  children,
  title,
  description,
}: AppLayoutProps) {
  return (
    <div className="flex min-h-screen bg-[#07080B] text-white">
      <Sidebar />

      <main className="flex-1 p-4 md:p-8 overflow-x-hidden">
        <PageHeader
          title={title}
          description={description}
        />

        {children}
      </main>
    </div>
  );
}

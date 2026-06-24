"use client";

import LoginWallet from "./LoginWallet";

type PageHeaderProps = {
  title: string;
  description?: string;
};

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <header className="flex flex-col md:flex-row items-start md:items-center justify-between border-b border-[#2A2A35] pb-6 mb-8 gap-4">
      <div className="flex-1">
        <h1 className="text-3xl md:text-4xl font-black text-white mb-2">
          {title}
        </h1>
        {description && (
          <p className="text-sm text-gray-400">
            {description}
          </p>
        )}
      </div>
      <div className="w-full md:w-auto">
        <LoginWallet />
      </div>
    </header>
  );
}

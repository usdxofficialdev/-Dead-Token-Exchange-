"use client";

import LoginWallet from "./LoginWallet";

type PageHeaderProps = {
  title: string;
  description: string;
};

export default function PageHeader({
  title,
  description,
}: PageHeaderProps) {
  return (
    <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-[#161920] pb-6 mb-8">
      <div>
        <h1 className="text-2xl md:text-3xl font-black text-white">
          {title}
        </h1>

        <p className="mt-1 text-sm text-gray-400">
          {description}
        </p>
      </div>

      <div>
        <LoginWallet />
      </div>
    </header>
  );
}

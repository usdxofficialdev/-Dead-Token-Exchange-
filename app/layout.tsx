import type { Metadata } from "next";
import "./globals.css"; // Yeh line CSS connect karegi
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "USDX Network",
  description: "Dead Token Exchange Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#0a0a0a]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

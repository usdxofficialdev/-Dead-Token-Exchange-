import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; // <-- Sahi folder se navbar import kiya

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "USDX Network",
  description: "Premium Token Exchange",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0, background: "#0b0f17", color: "#fff" }}>
        {/* Isse navbar poori website par upar dikhega */}
        <Navbar /> 
        
        <main style={{ padding: "20px" }}>
          {children}
        </main>
      </body>
    </html>
  );
}

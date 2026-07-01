import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard - USDX Network',
  description: 'Manage your stakes and rewards',
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

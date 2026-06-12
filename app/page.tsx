'use client';

import React from 'react';
import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { MembershipSection } from '@/components/landing/MembershipSection';
import { ReferralOverview } from '@/components/landing/ReferralOverview';
import { Statistics } from '@/components/landing/Statistics';
import { FAQ } from '@/components/landing/FAQ';
import { Footer } from '@/components/shared/Footer';
import { Navigation } from '@/components/shared/Navigation';

export default function Home() {
  return (
    <main className="min-h-screen bg-black overflow-hidden">
      <Navigation />
      <Hero />
      <Statistics />
      <Features />
      <MembershipSection />
      <ReferralOverview />
      <FAQ />
      <Footer />
    </main>
  );
}


'use client';

import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"
import { FirebaseClientProvider } from '@/firebase';
import { OfferBar } from '@/components/offer-bar';

export function AppClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
      <FirebaseClientProvider>
        <div className="flex min-h-screen flex-col">
          <OfferBar />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </FirebaseClientProvider>
  );
}

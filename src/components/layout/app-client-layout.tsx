
'use client';

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster"
import { FirebaseClientProvider } from '@/firebase';
import { OfferBar } from '@/components/offer-bar';
import { Preloader } from '@/components/preloader';
import { gsap } from 'gsap';

export function AppClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    // If the page is already loaded, don't show the preloader
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }
    
    // Cleanup the event listener
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useEffect(() => {
    if (!isLoading) {
      gsap.to('.preloader-container', {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          gsap.set('.preloader-container', { display: 'none' });
        }
      });
    }
  }, [isLoading]);

  return (
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        forcedTheme="light"
        disableTransitionOnChange
      >
        <FirebaseClientProvider>
          {isLoading && <div className="preloader-container"><Preloader /></div>}
          <div className="flex min-h-screen flex-col">
            <OfferBar />
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster />
        </FirebaseClientProvider>
      </ThemeProvider>
  );
}

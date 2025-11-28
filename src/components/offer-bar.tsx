
'use client';

import { useState, useEffect } from 'react';
import { X, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function OfferBar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // sessionStorage is only available on the client
    const isDismissed = sessionStorage.getItem('offerBarDismissed');
    if (isDismissed !== 'true') {
      setIsOpen(true);
    }
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem('offerBarDismissed', 'true');
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="relative bg-gradient-to-r from-[#B33771] to-[#1e3a8a] text-primary-foreground hidden sm:block">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-center text-center text-sm font-medium">
          <p className="flex items-center">
            <Gift className="mr-2 hidden h-5 w-5 sm:inline-block" />
            <span className="font-semibold">Year End Offer:</span>
            <Link href="https://app.aonflow.com/auth/signup" className="ml-2 underline hover:opacity-80">
              Unlock Aonflow Free for 30 Days – No Code, No Risk, Unlimited Possibilities!
            </Link>
          </p>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleDismiss}
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full text-primary-foreground hover:bg-white/20"
            aria-label="Dismiss"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

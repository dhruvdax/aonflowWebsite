"use client";

import React from 'react';
import CountUp from 'react-countup';
import { useInView } from '@/hooks/use-in-view';

interface CountUpNumberProps {
  end: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}

export function CountUpNumber({ end, suffix, prefix, decimals }: CountUpNumberProps) {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      {inView ? (
        <CountUp 
          end={end} 
          duration={2.5} 
          separator="," 
          suffix={suffix} 
          prefix={prefix}
          decimals={decimals}
        />
      ) : (
        <span>0{suffix}</span>
      )}
    </div>
  );
}

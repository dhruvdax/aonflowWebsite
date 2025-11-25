
"use client";

import React, { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { cn } from '@/lib/utils';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedIconProps {
  children: ReactNode;
  className?: string;
}

export const AnimatedIcon: React.FC<AnimatedIconProps> = ({ children, className }) => {
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = iconRef.current;
    if (element) {
      const svg = element.querySelector('svg');
      if (svg) {
        const paths = Array.from(svg.querySelectorAll('path, line, polyline, circle, rect, ellipse'));
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play pause resume reset',
          },
          repeat: -1, // Loop indefinitely
          yoyo: true,   // Reverse on each repeat
        });

        gsap.set(svg, { opacity: 1 });
        // Ensure fill is always transparent
        gsap.set(paths, { fillOpacity: 0 });

        paths.forEach(path => {
          const length = (path as SVGPathElement).getTotalLength ? (path as SVGPathElement).getTotalLength() : 0;
          if (length > 0) {
            gsap.set(path, {
              strokeDasharray: length,
              strokeDashoffset: length,
              stroke: 'currentColor',
              strokeWidth: 1, // Keep the stroke thin
              fillOpacity: 0,
            });
            tl.to(path, {
              strokeDashoffset: 0,
              duration: 1.5,
              ease: 'power1.inOut',
            }, 0); // Start all path animations at the same time
          }
        });
      }
    }
  }, []);

  return (
    <div ref={iconRef} className={cn("inline-block", className)}>
      {children}
    </div>
  );
};

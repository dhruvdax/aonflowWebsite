
"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';

interface BackgroundAnimationProps {
  className?: string;
}

export const BackgroundAnimation: React.FC<BackgroundAnimationProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const blobsRef = useRef<HTMLDivElement[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mousePos.current = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const blobs = blobsRef.current;
    blobs.forEach((blob, i) => {
        gsap.set(blob, {
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
        });
    });

    const moveBlobs = () => {
        gsap.to(blobs, {
            x: mousePos.current.x,
            y: mousePos.current.y,
            duration: 2,
            ease: 'power2.out',
            stagger: 0.05,
        });
    };
    
    gsap.ticker.add(moveBlobs);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      gsap.ticker.remove(moveBlobs);
    };
  }, []);

  const blobColors = [
    "rgba(179, 55, 113, 0.1)", // #B33771
    "rgba(150, 67, 122, 0.1)",
    "rgba(121, 79, 131, 0.1)",
    "rgba(92, 91, 140, 0.1)",
    "rgba(63, 103, 149, 0.1)",
    "rgba(34, 115, 158, 0.1)",
    "rgba(30, 58, 138, 0.1)" // #1e3a8a
];


  return (
    <div
      ref={containerRef}
      className={cn("absolute inset-0 -z-10 h-full w-full overflow-hidden p-4", className)}
    >
      <div className="relative h-full w-full">
        {blobColors.map((color, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) blobsRef.current[i] = el;
            }}
            className="absolute h-96 w-96 rounded-full lg:h-[32rem] lg:w-[32rem]"
            style={{ 
              backgroundColor: color,
              filter: 'blur(100px)',
            }}
          />
        ))}
      </div>
    </div>
  );
};

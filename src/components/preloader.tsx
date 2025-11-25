
"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Logo } from '@/components/logo';

export const Preloader = () => {
    const preloaderRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const preloader = preloaderRef.current;
        const logo = logoRef.current;

        if (preloader && logo) {
            const svg = logo.querySelector('svg');
            const paths = svg ? svg.querySelectorAll('path') : [];
            
            const tl = gsap.timeline({ repeat: -1, yoyo: true });

            tl.to(logo, { 
                scale: 1.05, 
                duration: 1, 
                ease: "power1.inOut" 
            });

            if (paths.length > 1) {
                // Animate the internal paths of the logo
                tl.to(paths, {
                    opacity: 0.5,
                    stagger: 0.1,
                    duration: 0.8,
                    ease: "power1.inOut"
                }, "-=0.8");
            }
        }
    }, []);


    return (
        <div 
            ref={preloaderRef}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
            <div ref={logoRef}>
                <Logo svgClassName="h-24 w-auto" showText={false} />
            </div>
        </div>
    );
};

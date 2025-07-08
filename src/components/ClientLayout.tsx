// components/ClientLayout.tsx
'use client';

import { useEffect, useState, useRef } from 'react';
import LoadingScreen from './LoadingScreen';
import NavbarDemo from './Navbar';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // Smooth Scroll GSAP logic after loading
  useEffect(() => {
    if (!loading && containerRef.current) {
      const ctx = gsap.context(() => {
        const sections = gsap.utils.toArray('.section') as HTMLElement[];

        sections.forEach((section) => {
          gsap.fromTo(
            section,
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                end: 'top 30%',
                scrub: false,
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      }, containerRef);

      return () => {
        ctx.revert(); // clean up animations
        ScrollTrigger.getAll().forEach((t) => t.kill());
      };
    }
  }, [loading]);

  return (
    <>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      {!loading && (
        <>
          <NavbarDemo />
          <div ref={containerRef}>{children}</div>
        </>
      )}
    </>
  );
}
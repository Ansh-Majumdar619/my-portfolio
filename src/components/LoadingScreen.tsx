'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const LoadingScreen: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [percentage, setPercentage] = useState(0);
  const percentRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to({}, { duration: 0.5 }); // Delay

    tl.to(barRef.current, {
      width: '100%',
      duration: 2.5,
      ease: 'power2.inOut',
      onUpdate: () => {
        const p = Math.round(tl.progress() * 100);
        setPercentage(p > 100 ? 100 : p);
      },
      onComplete: () => {
        gsap.to('.loading-text', {
          opacity: 0,
          scale: 1.2,
          ease: 'power2.out',
          duration: 0.6,
          onComplete: onFinish,
        });
      },
    });

    // Glow loop effect
    gsap.to(barRef.current, {
      boxShadow: '0 0 20px #000',
      repeat: -1,
      yoyo: true,
      duration: 1.2,
      ease: 'sine.inOut',
    });

    // ✅ Proper cleanup
    return () => {
      tl.kill();
    };
  }, [onFinish]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#c3bbb3]">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center font-mono"
      >
        {/* Animated loading bar */}
        <div className="relative w-[300px] h-3 bg-gray-300 rounded mb-6 mx-auto overflow-hidden">
          <div
            ref={barRef}
            className="absolute left-0 top-0 h-full bg-black transition-all duration-500"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>

        {/* Percentage */}
        <span
          ref={percentRef}
          className="loading-text text-5xl md:text-7xl font-bold text-black tracking-widest"
        >
          {percentage}%
        </span>

        {/* Loading message */}
        <p className="mt-4 text-gray-800 text-lg md:text-xl font-semibold animate-pulse tracking-widest">
          ⚡ LOADING . . .
        </p>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;

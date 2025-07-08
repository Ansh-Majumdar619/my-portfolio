"use client";

import React, { useEffect, useRef } from "react";
import { TabsDemo } from "@/components/TabsDemo";
import { gsap } from "gsap";
import { HeroScrollDemo } from "@/components/HeroScrollDemo";

const title = "Project's";

const ProjectPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    if (containerRef.current && letterRefs.current.length > 0) {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

      // Reset all letters initially
      tl.set(letterRefs.current, { opacity: 0, y: "100%" });

      // Animate in each letter like a typewriter
      tl.to(letterRefs.current, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.08,
      });

      // Optional: fade out before repeating
      tl.to(
        letterRefs.current,
        {
          opacity: 0,
          y: "-100%",
          duration: 0.3,
          ease: "power2.in",
          stagger: 0.06,
        },
        "+=1" // wait 1 second before fading out
      );
    }
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-0"
      style={{
        backgroundColor: "#000",
        backgroundImage:
          "linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      {/* Full-width strip with animated typewriter */}
      <div
        ref={containerRef}
        className="w-full bg-[#bc9153] rounded-lg py-6 px-4 text-center shadow-md"
      >
        <h1
          className="text-3xl md:text-5xl font-bold text-[#332217] tracking-wide flex justify-center gap-1 flex-wrap"
          style={{ fontFamily: "neuro" }}
        >
          {[...title].map((char, i) => (
            <span
              key={i}
              ref={(el) => {
                letterRefs.current[i] = el;
              }}
              className="inline-block"
            >
              {char}
            </span>
          ))}
        </h1>
      </div>

      <TabsDemo />
      <HeroScrollDemo />
    </div>
  );
};

export default ProjectPage;

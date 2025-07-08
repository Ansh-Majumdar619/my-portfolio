"use client";
import { useEffect, useRef } from "react";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { motion } from "framer-motion";
import gsap from "gsap";

export function SVGMaskEffectDemo() {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (textRef.current) {
      const lines = textRef.current.querySelectorAll(".line");
      gsap.fromTo(
        lines,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
        }
      );
    }
  }, []);

  return (
    <div className="flex h-[40rem] w-full items-center justify-center overflow-hidden">
      <MaskContainer
        revealText={
          <div
            ref={textRef}
            className="mx-auto max-w-3xl px-4 text-center text-xl sm:text-2xl md:text-3xl font-semibold text-slate-800 dark:text-white space-y-3 leading-relaxed"
          >
            <motion.p
              className="line text-[#c8a76f]"
              whileHover={{ scale: 1.08, color: "#e8dcc0" }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{fontFamily: "neuro"}}
            >
              Welcome to Full Stack Club.
            </motion.p>
            <motion.p
              className="line text-[#e8dcc0] "
              whileHover={{ scale: 1.05, rotate: -1 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{fontFamily: "milksea"}}
            >
              Rule 1: I don’t just build apps. I craft chaos… intentionally.
            </motion.p>
            <motion.p
              className="line text-[#e8dcc0] "
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{fontFamily: "milksea"}}
            >
              Rule 2: Inline styles are banned. Forever.
            </motion.p>
            <motion.p
              className="line text-[#e8dcc0]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", bounce: 0.5 }}
              style={{fontFamily: "milksea"}}
            >
              Rule 3: Sleep is rare. Coffee isn’t.
            </motion.p>
            <motion.p
              className="line text-[#c8a76f]"
              whileHover={{ scale: 1.08, color: "#e8dcc0" }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{fontFamily: "neuro"}}
            >
              First night here?
            </motion.p>
            <motion.p
              className="line text-[#bc9153]"
              whileHover={{ scale: 1.1, rotate: -2 }}
              transition={{ duration: 0.4 }}
              style={{fontFamily: "modern"}}
            >
              Great. Push to main.
            </motion.p>
          </div>
        }
        className="h-[40rem] rounded-md border text-white dark:text-black"  
        >
        <span className="text-[#d8c499] font-semibold" style={{fontFamily: "neuro"}} >
          Commerce grad turned full-stack dev
        </span>
        <span className="" style={{fontFamily: "nolinga"}} >
          . From console.logs to production logs — I break, fix, and ship stuff.{" "}
        </span>
        <span className="text-[#d8c499] font-semibold" style={{fontFamily: "neuro"}} >
          No bugs. Just features in disguise.
        </span>
      </MaskContainer>
    </div>
  );
}

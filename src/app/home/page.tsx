// "use client";

// import Image from "next/image";
// import React, { useEffect, useRef } from "react";
// import { motion, Variants } from "framer-motion";
// import gsap from "gsap";
// import { BackgroundLinesDemo } from "@/components/BackgroundLinesDemo";
// import HeroParallaxDemo from "@/components/HeroParallaxDemo";

// // Animation variant
// const fadeUpVariant: Variants = {
//   hidden: { opacity: 0, y: 20 },
//   visible: (i = 0) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.2,
//       duration: 0.6,
//       ease: [0.25, 0.1, 0.25, 1],
//     },
//   }),
// };

// const HomePage: React.FC = () => {
//   const imageRef = useRef<HTMLDivElement>(null);

//   // Magnetic hover effect
//   useEffect(() => {
//     const el = imageRef.current;
//     if (!el) return;

//     const handleMouseMove = (e: MouseEvent) => {
//       const rect = el.getBoundingClientRect();
//       const x = e.clientX - rect.left;
//       const y = e.clientY - rect.top;
//       const centerX = rect.width / 2;
//       const centerY = rect.height / 2;

//       gsap.to(el, {
//         rotateX: -(y - centerY) / 15,
//         rotateY: (x - centerX) / 15,
//         scale: 1.05,
//         duration: 0.3,
//         ease: "power2.out",
//       });
//     };

//     const reset = () => {
//       gsap.to(el, {
//         rotateX: 0,
//         rotateY: 0,
//         scale: 1,
//         duration: 0.5,
//         ease: "power3.out",
//       });
//     };

//     el.addEventListener("mousemove", handleMouseMove);
//     el.addEventListener("mouseleave", reset);

//     return () => {
//       el.removeEventListener("mousemove", handleMouseMove);
//       el.removeEventListener("mouseleave", reset);
//     };
//   }, []);

//   return (
//     <div
//       className="w-screen min-h-screen flex items-center justify-center px-2 py-6 bg-black"
//       style={{
//         backgroundImage:
//           "linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
//         backgroundSize: "40px 40px",
//       }}
//     >
//       <motion.div
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
//         className="w-full max-w-[1300px] min-h-[85vh] border-[8px] sm:border-[16px] border-[#e8dcc0] rounded-xl shadow-lg relative overflow-hidden flex items-center justify-center"
//       >
//         {/* Background Lines */}
//         <div className="absolute inset-0 z-0">
//           <BackgroundLinesDemo className="w-full h-full" />
//         </div>

//         {/* Top Greeting + Download CV Wrapper */}
//         <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 sm:flex-row sm:justify-between sm:top-6 sm:left-4 sm:-translate-x-0 sm:w-full sm:px-6">
//           {/* Greeting */}
//           <motion.div
//             custom={0}
//             initial="hidden"
//             animate="visible"
//             variants={fadeUpVariant}
//             className="text-[10px] xs:text-xs sm:text-sm font-semibold tracking-wide text-[#d8c499] whitespace-nowrap max-w-[95vw] text-center"
//             style={{ fontFamily: "neuro" }}
//           >
//             HI THERE, I’M ANSH MAJUMDAR
//           </motion.div>

//           {/* Download CV Button */}
//           <motion.a
//             href="/files/Ansh Majumdar.pdf"
//             download
//             whileHover={{
//               scale: 1.1,
//               boxShadow: "0px 0px 12px rgba(216, 196, 153, 0.5)",
//             }}
//             whileTap={{ scale: 0.95 }}
//             custom={1}
//             initial="hidden"
//             animate="visible"
//             variants={fadeUpVariant}
//             className="mt-6 sm:mt-0
//              text-[10px] xs:text-xs sm:text-sm 
//              font-semibold tracking-wide text-[#d8c499] 
//              border border-[#d8c499] px-3 py-1 sm:px-4 sm:py-2 
//              rounded transition-all duration-300 
//              bg-transparent hover:bg-[#d8c499] hover:text-black"
//             style={{ fontFamily: "neuro" }}
//           >
//             Download CV
//           </motion.a>
//         </div>

//         {/* FULL + IMAGE + STACK Row */}

//         <div className="relative z-10 flex items-center justify-center">
//           {/* FULL */}
//           <motion.h1
//             custom={2}
//             initial="hidden"
//             animate="visible"
//             variants={fadeUpVariant}
//             className="absolute 
//              text-[28px] sm:text-[50px] md:text-[80px] 
//              font-extrabold text-[#d8c499] uppercase tracking-tight z-20 
//              left-4 sm:left-10 md:left-44
//              -translate-x-[60%] sm:-translate-x-[70%] md:-translate-x-[120%] 
//              -translate-y-[170%] sm:-translate-y-[100%] md:-translate-y-[150%]"
//             style={{ fontFamily: "neuro" }}
//           >
//             FULL
//           </motion.h1>

//           {/* STACK */}
//           <motion.h1
//             custom={3}
//             initial="hidden"
//             animate="visible"
//             variants={fadeUpVariant}
//             className="absolute 
//                text-[30px] sm:text-[50px] md:text-[80px] 
//                font-extrabold text-[#d8c499] uppercase tracking-tight z-20 
//                -right-5 sm:right-10 md:right-4 
//                translate-x-[30%] sm:translate-x-[50%] md:translate-x-[63%] 
//                -translate-y-[150%] sm:-translate-y-[100%] md:-translate-y-[150%]"
//             style={{ fontFamily: "neuro" }}
//           >
//             STACK
//           </motion.h1>

//           {/* DEVELOPER – one element, responsive position */}
//           <motion.h1
//             custom={4}
//             initial="hidden"
//             animate="visible"
//             variants={fadeUpVariant}
//             className="absolute 
//              text-[22px] sm:text-[28px] md:text-[60px] 
//              font-bold text-[#d8c499] uppercase tracking-widest z-40 
//              left-1/2 -translate-x-1/2 
//              top-[95%] sm:top-[50%] md:top-[unset] md:bottom-[-50px]"
//             style={{ fontFamily: "neuro" }}
//           >
//             DEVELOPER
//           </motion.h1>

//           {/* IMAGE */}
//           <div
//             ref={imageRef}
//             className="relative 
//                w-[220px] sm:w-[300px] md:w-[420px] 
//                h-[280px] sm:h-[360px] md:h-[500px] 
//                flex items-center justify-center 
//                z-30 will-change-transform"
//             style={{
//               transformStyle: "preserve-3d",
//               transformOrigin: "center center",
//             }}
//           >
//             <div className="absolute w-[120%] h-[110%] rounded-xl border border-white/20 z-10 shadow-[0_0_60px_20px_rgba(255,255,255,0.08)]" />

//             <Image
//               src="/assets/3d 2.png"
//               alt="Ansh Majumdar"
//               fill
//               className="object-cover rounded-lg z-30 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
//             />
//           </div>
//         </div>

//         {/* Tagline */}
//         <motion.div
//           custom={5}
//           initial="hidden"
//           animate="visible"
//           variants={fadeUpVariant}
//           className="absolute 
//              right-4 sm:right-10 
//              bottom-8 sm:bottom-10 
//              w-[180px] 
//              text-xs sm:text-sm 
//              text-right text-[#d8c499] 
//              font-medium leading-relaxed z-30"
//           style={{ fontFamily: "milksea" }}
//         >
//           I AM A CREATIVE FULL-STACK DEVELOPER WITH A STRONG FOCUS ON MOTION AND
//           INTERACTION.
//         </motion.div>

//         {/* Code Icon */}
//         <motion.div
//           custom={6}
//           initial="hidden"
//           animate="visible"
//           variants={fadeUpVariant}
//           className="absolute left-6 bottom-10 text-[#d8c499] text-5xl sm:text-7xl z-30"
//         >
//           {"</>"}
//         </motion.div>
//       </motion.div>



// {/* Place the HeroParallaxDemo below the hero container */}
// <div className="mt-10 w-full max-w-[1300px]">
//         <HeroParallaxDemo />
//       </div>

//     </div>
//   );
// };

// export default HomePage;














"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { motion, Variants } from "framer-motion";
import gsap from "gsap";
import { BackgroundLinesDemo } from "@/components/BackgroundLinesDemo";
import HeroParallaxDemo from "@/components/HeroParallaxDemo";

// Animation variant
const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const HomePage: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = imageRef.current;
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      gsap.to(el, {
        rotateX: -(y - centerY) / 15,
        rotateY: (x - centerX) / 15,
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const reset = () => {
      gsap.to(el, {
        rotateX: 0,
        rotateY: 0,
        scale: 1,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", reset);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <div
      className="w-full flex flex-col items-center bg-black"
      style={{
        backgroundImage:
          "linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
      {/* Hero Section */}
      <section className="w-full flex justify-center px-2 py-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full max-w-[1300px] min-h-[85vh] border-[8px] sm:border-[16px] border-[#e8dcc0] rounded-xl shadow-lg relative overflow-hidden flex items-center justify-center"
        >
          {/* Background Lines */}
          <div className="absolute inset-0 z-0">
            <BackgroundLinesDemo className="w-full h-full" />
          </div>

          {/* Top Greeting + Download CV Wrapper */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-30 sm:flex-row sm:justify-between sm:top-6 sm:left-4 sm:-translate-x-0 sm:w-full sm:px-6">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              className="text-[10px] xs:text-xs sm:text-sm font-semibold tracking-wide text-[#d8c499] whitespace-nowrap max-w-[95vw] text-center"
              style={{ fontFamily: "neuro" }}
            >
              HI THERE, I’M ANSH MAJUMDAR
            </motion.div>

            <motion.a
              href="/files/Ansh Majumdar.pdf"
              download
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 0px 12px rgba(216, 196, 153, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              className="mt-6 sm:mt-0 text-[10px] xs:text-xs sm:text-sm font-semibold tracking-wide text-[#d8c499] border border-[#d8c499] px-3 py-1 sm:px-4 sm:py-2 rounded transition-all duration-300 bg-transparent hover:bg-[#d8c499] hover:text-black"
              style={{ fontFamily: "neuro" }}
            >
              Download CV
            </motion.a>
          </div>

          {/* FULL + STACK + DEVELOPER + IMAGE */}
          <div className="relative z-10 flex items-center justify-center">
            {/* FULL */}
            <motion.h1
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              className="absolute text-[28px] sm:text-[50px] md:text-[80px] font-extrabold text-[#d8c499] uppercase tracking-tight z-20 left-4 sm:left-10 md:left-44 -translate-x-[60%] sm:-translate-x-[70%] md:-translate-x-[120%] -translate-y-[170%] sm:-translate-y-[100%] md:-translate-y-[150%]"
              style={{ fontFamily: "neuro" }}
            >
              FULL
            </motion.h1>

            {/* STACK */}
            <motion.h1
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              className="absolute text-[30px] sm:text-[50px] md:text-[80px] font-extrabold text-[#d8c499] uppercase tracking-tight z-20 -right-5 sm:right-10 md:right-4 translate-x-[30%] sm:translate-x-[50%] md:translate-x-[63%] -translate-y-[150%] sm:-translate-y-[100%] md:-translate-y-[150%]"
              style={{ fontFamily: "neuro" }}
            >
              STACK
            </motion.h1>

            {/* DEVELOPER */}
            <motion.h1
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUpVariant}
              className="absolute text-[22px] sm:text-[28px] md:text-[60px] font-bold text-[#d8c499] uppercase tracking-widest z-40 left-1/2 -translate-x-1/2 top-[95%] sm:top-[50%] md:top-[unset] md:bottom-[-50px]"
              style={{ fontFamily: "neuro" }}
            >
              DEVELOPER
            </motion.h1>

            {/* IMAGE */}
            <div
              ref={imageRef}
              className="relative w-[220px] sm:w-[300px] md:w-[420px] h-[280px] sm:h-[360px] md:h-[500px] flex items-center justify-center z-30 will-change-transform"
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "center center",
              }}
            >
              <div className="absolute w-[120%] h-[110%] rounded-xl border border-white/20 z-10 shadow-[0_0_60px_20px_rgba(255,255,255,0.08)]" />
              <Image
                src="/assets/3d 2.png"
                alt="Ansh Majumdar"
                fill
                className="object-cover rounded-lg z-30 shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
              />
            </div>
          </div>

          {/* Tagline */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            className="absolute right-4 sm:right-10 bottom-8 sm:bottom-10 w-[180px] text-xs sm:text-sm text-right text-[#d8c499] font-medium leading-relaxed z-30"
            style={{ fontFamily: "milksea" }}
          >
            I AM A CREATIVE FULL-STACK DEVELOPER WITH A STRONG FOCUS ON MOTION AND INTERACTION.
          </motion.div>

          {/* Code Icon */}
          <motion.div
            custom={6}
            initial="hidden"
            animate="visible"
            variants={fadeUpVariant}
            className="absolute left-6 bottom-10 text-[#d8c499] text-5xl sm:text-7xl z-30"
          >
            {"</>"}
          </motion.div>
        </motion.div>
      </section>

      {/* 👇 HeroParallax Section BELOW hero box */}
      <section className="w-full mt-20">
        <HeroParallaxDemo />
      </section>
    </div>
  );
};

export default HomePage;

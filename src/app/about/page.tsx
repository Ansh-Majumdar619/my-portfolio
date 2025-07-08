"use client";

import React from "react";
import { TimelineDemo } from "@/components/TimelineDemo";
import { SVGMaskEffectDemo } from "@/components/SVGMaskEffectDemo";

const AboutPage: React.FC = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen px-4 text-center"
      style={{
        backgroundColor: "#000",
        backgroundImage:
          "linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
        backgroundSize: "40px 40px",
      }}
    >
     {/* Timeline Section */}
     <div className="w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-16">
        <TimelineDemo />
      </div>


      {/* Mask Effect Section with top and bottom spacing */}
      <div className="w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-24">
        <SVGMaskEffectDemo />
      </div>

    </div>
  );
};

export default AboutPage;

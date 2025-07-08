"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";

export function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#d8c499] leading-snug px-2 text-center" style={{fontFamily: "neuro"}} >
              I am not your framework.
              <br />
              <span className="text-3xl sm:text-4xl md:text-[5rem] font-bold mt-1 leading-tight block">
                I am a Full Stack Rebel.
              </span>
            </h1>
          </>
        }
      >
        <Image
          src="/assets/ai.png"
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}

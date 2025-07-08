import React from "react";
import { Cover } from "@/components/ui/cover";



export function CoverDemo() {
  return (
    <div>
      <h1
        className="text-4xl md:text-4xl lg:text-6xl text-[#e8dcc0] max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text"
        style={{ fontFamily: "Retrosome" }}
      >
        Hi, I am Ansh Majumdar <br />
        <span className="whitespace-nowrap" style={{ fontFamily: "retro" }}>
          A{" "}
          <Cover className="whitespace-nowrap" style={{ color: "#d8c499" }}>
            Full-Stack Developer
          </Cover>
        </span>
      </h1>
    </div>
  );
}

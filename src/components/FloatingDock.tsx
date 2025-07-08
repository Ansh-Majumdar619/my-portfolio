/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandX,
  IconBrandLinkedin,
  IconHome,
  IconBriefcase,
  IconUser,
} from "@tabler/icons-react";

import Link from "next/link";
import Image from "next/image";


export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-[#d8c499]" />
      ),
      href: "/",
    },

    {
      title: "About Me",
      icon: (
        <IconUser className="h-full w-full text-[#d8c499]" />
      ),
      href: "/about",
    }
    ,
    {
      title: "Projects",
      icon: (
        <IconBriefcase className="h-full w-full text-[#d8c499]" />
      ),
      href: "/projects",
    }
    ,
    {
      title: "Ansh Majumdar",
      icon: (
        <Image
          src="/ansh-logo.png"
          width={50}
          height={50}
          alt="Ansh Logo"
        />
      ),
      href: "/",
    },
    {
      title: "LinkedIn",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-[#d8c499]" />
      ),
      href: "https://www.linkedin.com/in/ansh-majumdar/", // Replace with your actual LinkedIn profile link
    }
    ,

    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-[#d8c499]" />
      ),
      href: "https://x.com/anshmajumdar619",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-[#d8c499]" />
      ),
      href: "https://github.com/Ansh-Majumdar619/",
    },
  ];
  return (
    <div className="flex items-center justify-center  pb-3 w-full" 
    style={{
      backgroundColor: "#000",
      backgroundImage:
        "linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
      backgroundSize: "40px 40px",
    }}>
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
      />
    </div>
  );
}

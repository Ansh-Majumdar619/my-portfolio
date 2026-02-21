import React from "react";
import { Timeline } from "@/components/ui/timeline";
// import img from "next/img";
import Image from "next/image";

export function TimelineDemo() {
  const data = [
    {
      title: "2026",
      content: (
        <div>
          <p
            className="mb-8 text-xl font-normal text-[#d8c499]"
            style={{ fontFamily: "neuro" }}
          >
            Full-Stack Developer & Tech Lead at OPM Corporation
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/opm.png"
              alt="opm template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/assets/replicast upload.png"
              alt="upload page"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/assets/ridlin.png"
              alt="ridlin page"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/assets/avtaar.png"
              alt="avtaar"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Mid 2025",
      content: (
        <div>
          <p
            className="mb-8 text-lg  text-[#e8dcc0]"
            style={{ fontFamily: "nolinga" }}
          >
            Joined OPM Corporation as a Backend Developer and contributed to
            multiple production-grade systems including the main website, admin
            panel, and backend APIs.
          </p>
          <p
            className="mb-8 text-lg  text-[#e8dcc0] md:text-lg "
            style={{ fontFamily: "nolinga" }}
          >
            Designed and developed scalable REST APIs, implemented secure
            authentication & authorization flows, managed MongoDB databases, and
            optimized server performance.
            <br /> Led backend architecture for new modules, handled deployment
            on AWS, configured domains & SSL, and ensured seamless integration
            between frontend, admin panel, and backend services.
            <br /> Stepped up into a Tech Lead role during critical phases,
            coordinated with the team, managed delivery timelines, and
            successfully deployed projects to production.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/preptalk home.png"
              alt="preptalk"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />

            <Image
              src="/assets/stayfinder home.png"
              alt="stayfinder"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/assets/uber home.png"
              alt="uber clone"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="https://images.pexels.com/photos/16689017/pexels-photo-16689017.jpeg"
              alt="cards template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p
            className="mb-4 text-lg text-[#d8c499] md:text-lg "
            style={{ fontFamily: "nolinga" }}
          >
            Key contributions and responsibilities at OPM Corporation.
          </p>
          <div className="mb-8 space-y-3 text-left">
            {[
              "Architected and developed scalable backend systems using Node.js and Express.",
              "Designed MongoDB schemas, implemented indexing strategies, and optimized queries.",
              "Built secure authentication systems using JWT and role-based access control.",
              "Led backend development for Admin Panel, Main Website, and API services.",
              "Managed AWS deployments, domain configuration, SSL setup, and CI/CD workflows.",
              "Coordinated with frontend and stakeholders to ensure timely project delivery.",
            ].map((line, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 text-lg text-[#e8dcc0] md:text-lg"
                style={{ fontFamily: "nolinga" }}
              >
                <span className="min-w-[1.5rem]">✅</span>
                <span className="whitespace-normal">{line}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://devhumor.com/content/uploads/images/April2025/vibe_coding_security_and_performance.jpeg"
              alt="hero template"
              width={500}
              height={500}
              className="h-auto w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://devhumor.com/content/uploads/images/January2020/Food-coma-animation.gif"
              alt="feature template"
              width={500}
              height={500}
              className="h-auto w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://devhumor.com/content/uploads/images/March2017/not-lazy-animation.gif"
              alt="bento template"
              width={500}
              height={500}
              className="h-auto w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://devhumor.com/content/uploads/images/June2024/crying_dev_frustration.jpg"
              alt="cards template"
              width={500}
              height={500}
              className="h-auto w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} />
    </div>
  );
}

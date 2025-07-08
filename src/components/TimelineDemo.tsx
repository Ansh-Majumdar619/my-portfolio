import React from "react";
import { Timeline } from "@/components/ui/timeline";
// import img from "next/img";
import Image from "next/image";

export function TimelineDemo() {
  const data = [
    {
      title: "2025",
      content: (
        <div>
          <p
            className="mb-8 text-xl font-normal text-[#d8c499]"
            style={{ fontFamily: "neuro" }}
          >
            Built and launched RepliCast from scratch
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/assets/replicast home.png"
              alt="replicast template"
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
              src="/assets/results page.png"
              alt="results page"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/assets/docs screenshot.png"
              alt="docs"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Mid 2024",
      content: (
        <div>
          <p
            className="mb-8 text-lg  text-[#e8dcc0]"
            style={{ fontFamily: "nolinga" }}
          >
            I usually run out of copy, but when I see content this big, I resist
            the urge to Lorem Ipsum it. Lorem Ipsum is for people who gave up. I
            didn’t. I just panicked creatively and kept typing.
          </p>
          <p
            className="mb-8 text-lg  text-[#e8dcc0] md:text-lg "
            style={{ fontFamily: "nolinga" }}
          >
            I started learning Full-Stack Development at Innomatics Research
            Labs in Hyderabad while doing B.Com—because who needs sleep, right?
            I even did my full-stack internship there after that point (proof
            that caffeine and curiosity go a long way).
            <br /> Now that I switched from commerce into code I build apps
            instead of spreadsheets. I went directly from Googling “what is a
            div?” to also shipping full-stack projects at 2AM with just 27 open
            tabs and absolutely zero regrets. <br /> Here’s what I’ve built, as
            I promise to you that most bugs are now gone.
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
            Once upon a time, I was balancing ledgers. Now I balance frontend
            and backend like a circus juggler with caffeine.
          </p>
          <div className="mb-8 space-y-3 text-left">
            {[
              "Built a MongoDB-powered app. NoSQL? No sleep either.",
              "Styled everything with Tailwind CSS — because vanilla CSS gave me trust issues.",
              "Added Framer Motion & GSAP animations that bounce smoother than my grades in B.Com.",
              "Refactored code like a champ — even Stack Overflow blushed.",
              "Officially declared war on bugs. Debugged them with console.logs and divine intervention.",
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
              src="https://preview.redd.it/l022ux9vti781.jpg?width=320&crop=smart&auto=webp&s=dfcf706c0f12f236b84a3eaace917ab14e38b159"
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
              src="https://devhumor.com/content/uploads/images/April2017/its-not-a-bug-animation.gif"
              alt="bento template"
              width={500}
              height={500}
              className="h-auto w-full rounded-lg object-contain shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="https://devhumor.com/content/uploads/images/June2024/error_403_vote_for_bidden.jpg"
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

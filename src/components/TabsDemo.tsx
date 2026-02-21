'use client';

import Link from 'next/link';
import { Tabs } from './ui/tabs';

export function TabsDemo() {
  const tabs = [
    {
      title: "OPM Corporation",
      value: "opm",
      content: (
        <TabContent
          title="OPM Corporation Tab"
          imageSrc="/assets/opm.png"
          linkHref="https://opmcorporation.com/"
        />
      ),
    },
    {
      title: "Avtaar Music",
      value: "avtaar",
      content: (
        <TabContent
          title="Avtaar Music Tab"
          imageSrc="/assets/avtaar.png"
          linkHref="https://avtaarmusic.com/"
        />
      ),
    },
    {
      title: "Ridlin",
      value: "ridlin",
      content: (
        <TabContent
          title="Avtaar Music Tab"
          imageSrc="/assets/ridlin.png"
          linkHref="https://ridlin.com/"
        />
      ),
    },
    {
      title: "RepliCast",
      value: "product",
      content: (
        <TabContent
          title="RepliCast Tab"
          imageSrc="/assets/replicast home.png"
          linkHref="https://replicast-ai.onrender.com/"
        />
      ),
    },
    {
      title: "PrepTalk",
      value: "services",
      content: (
        <TabContent
          title="PrepTalk Tab"
          imageSrc="/assets/preptalk home.png"
          linkHref="https://prep-talk-ten.vercel.app/"
        />
      ),
    },
    {
      title: "StayFinder",
      value: "playground",
      content: (
        <TabContent
          title="StayFinder Tab"
          imageSrc="/assets/stayfinder home.png"
          linkHref="https://stayfinder-frontend-4pgr.onrender.com/"
        />
      ),
    },
    {
      title: "Uber",
      value: "content",
      content: (
        <TabContent
          title="Uber Tab"
          imageSrc="/assets/uber home.png"
          linkHref="https://uber-frontend-tovo.onrender.com/"
        />
      ),
    },
    {
      title: "BMW",
      value: "random",
      content: (
        <TabContent
          title="BMW Moto Tab"
          imageSrc="/assets/bmw.png"
          linkHref="https://bmw-motosport.netlify.app/"
        />
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-center justify-center my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const TabContent = ({
  title,
  imageSrc,
  linkHref,
}: {
  title: string;
  imageSrc: string;
  linkHref?: string;
}) => {
  return (
    <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 flex flex-col items-center justify-center text-center text-xl md:text-4xl font-bold text-[#332217] bg-[#bc9153]" style={{fontFamily: "neuro"}} >
      <p className="mb-4">{title}</p>
      <DummyContent imageSrc={imageSrc} linkHref={linkHref} />
    </div>
  );
};

const DummyContent = ({
  imageSrc,
  linkHref,
}: {
  imageSrc: string;
  linkHref?: string;
}) => {
  const image = (
    <img
      src={imageSrc}
      alt="Tab Image"
      width={1000}
      height={1000}
      className="object-cover object-left-top h-[60%] md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto transition-transform hover:scale-105"
    />
  );

  return linkHref ? (
    <Link href={linkHref} target="_blank" rel="noopener noreferrer">
      {image}
    </Link>
  ) : (
    image
  );
};

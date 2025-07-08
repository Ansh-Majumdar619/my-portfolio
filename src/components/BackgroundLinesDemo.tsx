import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";

type Props = {
  className?: string;
};

export function BackgroundLinesDemo({ className }: Props) {
  return (
    <BackgroundLines className={className}>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        {/* Get the best advices from our experts, including expert artists,
        painters, marathon enthusiasts and RDX, totally free. */}
      </p>
    </BackgroundLines>
  );
}

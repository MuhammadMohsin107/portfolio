"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceAnimationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".archive-card");

      cards.forEach((card, index) => {
        // Don't animate the last card pushing back
        if (index === cards.length - 1) return;

        gsap.to(card, {
          scale: 0.9,
          filter: "brightness(0.3)",
          ease: "none",
          scrollTrigger: {
            trigger: card,
            start: "top top",
            end: () => `+=${window.innerHeight}`,
            scrub: true,
            invalidateOnRefresh: true,
          },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <section ref={containerRef} className="relative w-full bg-[#0A0A0A]">
      {children}
    </section>
  );
}

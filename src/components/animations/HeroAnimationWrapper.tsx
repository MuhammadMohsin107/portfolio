"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function HeroAnimationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // 1. Mouse Parallax (Desktop Only)
      const textNode = sectionRef.current?.querySelector(".hero-text-layer");
      const apertureNode = sectionRef.current?.querySelector(".hero-aperture");
      
      if (textNode) {
        const xTo = gsap.quickTo(textNode, "x", { duration: 0.8, ease: "power3" });
        const yTo = gsap.quickTo(textNode, "y", { duration: 0.8, ease: "power3" });

        const handleMouseMove = (e: MouseEvent) => {
          const { innerWidth, innerHeight } = window;
          const xPos = (e.clientX / innerWidth - 0.5) * -40;
          const yPos = (e.clientY / innerHeight - 0.5) * -40;
          xTo(xPos);
          yTo(yPos);
        };

        const mm = gsap.matchMedia();
        mm.add("(min-width: 1024px)", () => {
          window.addEventListener("mousemove", handleMouseMove);
          return () => window.removeEventListener("mousemove", handleMouseMove);
        });
      }

      if (textNode && apertureNode) {
        // 2. Scroll Expansion
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=150%",
            pin: true,
            scrub: 1.5,
            anticipatePin: 1,
          },
        });

        tl.to(textNode, {
          scale: 0.85,
          opacity: 0,
          ease: "power2.inOut",
        }).to(
          apertureNode,
          {
            scale: 30, // Absolute coverage
            duration: 2,
            ease: "power3.inOut",
          },
          0,
        );
      }
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-[#F4F4F5] overflow-hidden flex items-center justify-center"
    >
      {children}
    </section>
  );
}

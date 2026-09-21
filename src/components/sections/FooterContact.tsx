"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { EB_Garamond } from "next/font/google";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "700", "800"],
});

gsap.registerPlugin(ScrollTrigger);

const SOCIAL_LINKS = [
  { name: "Email", href: "mailto:aliyannadeem10@gmail.com", id: "email" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-aliyan-1900a7275/",
    id: "li",
  },
  { name: "GitHub", href: "https://github.com/MuhammadAliyan10", id: "gh" },
  {
    name: "Resume",
    href: "https://www.canva.com/design/DAGQ9_HkS7U/c1nS5v7YF2Bq4f4eS7Bq4Q/view",
    id: "cv",
  },
];

export default function FooterContact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      gsap.from(titleRef.current, {
        yPercent: 100,
        duration: 1.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
        },
      });

      gsap.from(".editorial-line", {
        scaleX: 0,
        duration: 1.5,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <footer
      ref={containerRef}
      className="relative w-full h-[90vh] md:h-screen bg-transparent pointer-events-none"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-0 left-0 w-full h-[90vh] md:h-screen bg-[#F4F4F5] pointer-events-auto flex flex-col justify-between p-8 md:p-24 overflow-hidden border-t border-zinc-200">
        <div className="mt-12 md:mt-24">
          <div className="overflow-hidden">
            <h2
              ref={titleRef}
              className={`${ebGaramond.className} text-[10vw] md:text-[8vw] leading-[0.85] tracking-tight text-[#0A0A0A] font-medium`}
            >
              Let&apos;s build the <br />
              <span className="italic font-normal serif-italic">
                exceptional
              </span>
              .
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <div className="editorial-line h-[1px] w-full bg-[#0A0A0A] origin-left" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-end">
            <div className="flex flex-col gap-2">
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-[#0A0A0A]">
                Muhammad Aliyan Nadeem
              </span>
              <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-zinc-400">
                Software Engineer & Architect
              </span>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <span className="inline-block px-3 py-1 bg-zinc-200 text-zinc-600 text-[10px] md:text-xs uppercase tracking-widest font-bold self-start rounded-sm">
                  Accepting select B2B consulting & founding engineering engagements
                </span>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-2">
                  <a
                    href="https://calendly.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#0A0A0A] text-[#F4F4F5] px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-[#4F46E5] transition-colors duration-300"
                  >
                    Schedule Architectural Audit ↗
                  </a>
                  <a
                    href="mailto:aliyannadeem10@gmail.com?subject=[Consulting]%20Architecture%20Inquiry"
                    className="flex items-center justify-center gap-2 border border-[#0A0A0A] text-[#0A0A0A] px-6 py-3 font-mono text-xs uppercase tracking-widest hover:bg-zinc-200 transition-colors duration-300"
                  >
                    Direct Engineering Inquiry
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap gap-x-8 gap-y-4 mt-4">
                {SOCIAL_LINKS.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative group text-xs md:text-sm font-medium text-zinc-500 transition-all duration-300"
                  >
                    <span className="group-hover:italic group-hover:text-[#0A0A0A] transition-all duration-300">
                      {link.name}
                    </span>
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#0A0A0A] transition-all duration-500 ease-out group-hover:w-full" />
                  </a>
                ))}
              </div>
            </div>

            <div
              className={`text-right ${ebGaramond.className} text-[#0A0A0A]`}
            >
              <span className="text-2xl md:text-4xl italic block">© 2026</span>
              <span className="text-xs md:text-sm tracking-widest uppercase opacity-50 block mt-2">
                Punjab, PK — Global Distributed
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

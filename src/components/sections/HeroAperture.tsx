import { EB_Garamond } from "next/font/google";
import HeroAnimationWrapper from "@/components/animations/HeroAnimationWrapper";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "700", "800"],
});

export default function HeroAperture() {
  return (
    <HeroAnimationWrapper>
      {/* The Aperture (The Black Void) */}
      <div
        className="hero-aperture absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] md:w-[22vw] aspect-[3/4] bg-[#0A0A0A] z-10 will-change-transform"
      />

      {/* Blending Typography Layer */}
      <div
        className="hero-text-layer relative z-20 w-full flex flex-col items-center justify-center pointer-events-none mix-blend-difference will-change-transform px-6 md:px-12"
      >
        <div className="flex flex-col items-center justify-center w-full max-w-7xl">
          <h1
            className={`${ebGaramond.className} text-[12vw] md:text-[10vw] lg:text-[8.5vw] leading-[0.8] tracking-tighter text-[#F4F4F5] italic font-medium text-center`}
          >
            SYSTEMS &
          </h1>
          <h1
            className={`${ebGaramond.className} text-[12vw] md:text-[10vw] lg:text-[8.5vw] leading-[0.8] tracking-tighter text-[#F4F4F5] italic font-medium text-center`}
          >
            ARCHITECTURE.
          </h1>
        </div>
      </div>
    </HeroAnimationWrapper>
  );
}

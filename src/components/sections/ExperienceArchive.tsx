import { EB_Garamond } from "next/font/google";
import ExperienceAnimationWrapper from "@/components/animations/ExperienceAnimationWrapper";
import { experienceData } from "@/lib/experience-data";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "700", "800"],
});

export default function ExperienceArchive() {
  return (
    <ExperienceAnimationWrapper>
      {experienceData.map((card, i) => (
        <div
          key={card.id}
          className={`archive-card sticky top-0 h-screen w-full flex flex-col justify-center px-6 md:px-24 will-change-transform origin-top overflow-hidden ${card.bg} ${card.text}`}
        >
          {/* Background Typography */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none w-full text-center">
            <span
              className="font-black text-[25vw] md:text-[20vw] leading-none tracking-tighter opacity-20 block"
              style={{
                color: "transparent",
                WebkitTextStroke: `2px ${card.stroke}`,
              }}
            >
              {card.year}
            </span>
          </div>

          {/* Foreground Content */}
          <div className="relative z-10 flex flex-col gap-8 max-w-7xl">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] opacity-40">
                SYSTEM ARCHITECTURE // ROLE 0{i + 1}
              </span>
              <h2 className="text-4xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tighter leading-[0.9]">
                {card.role}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-end pt-8">
              <div className="flex flex-col gap-4 border-l border-current/20 pl-6">
                <span className="font-mono text-xs md:text-sm uppercase font-bold opacity-80">
                  @{card.company}
                </span>
                <p
                  className={`${ebGaramond.className} text-xl md:text-3xl font-medium leading-[1.2] max-w-xl opacity-90`}
                >
                  {card.description}
                </p>
              </div>

              <div className="flex flex-col gap-4 items-end">
                <div className="h-[2px] w-32 bg-current opacity-20 mb-2" />
                <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.4em] opacity-30 text-right">
                  {card.tech}
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </ExperienceAnimationWrapper>
  );
}

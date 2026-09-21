import Image from "next/image";
import Link from "next/link";
import { EB_Garamond } from "next/font/google";
import { projectsData } from "@/lib/projects-data";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "700", "800"],
});

export default function ProjectArchive() {
  return (
    <section className="relative w-full py-24 md:py-48 px-6 md:px-24 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-24">
        <div className="flex flex-col gap-4">
          <span className="font-mono text-xs md:text-sm uppercase tracking-[0.4em] text-zinc-600">
            Index // Selected Works
          </span>
          <h2
            className={`${ebGaramond.className} text-6xl md:text-9xl text-[#F4F4F5] font-medium tracking-tight`}
          >
            Archive & <span className="italic font-normal">Index.</span>
          </h2>
        </div>

        <ul className="flex flex-col border-t border-zinc-800 group/list">
          {projectsData.map((project) => (
            <li
              key={project.id}
              className="relative transition-opacity duration-300 hover:!opacity-100 group-hover/list:opacity-30"
            >
              <Link
                href={`/projects/${project.id}`}
                className="group flex flex-col md:flex-row items-center justify-between gap-8 py-8 md:py-12 border-b border-zinc-800 transition-all duration-500 hover:bg-zinc-900/30"
              >
                <div className="flex items-center gap-8 w-full group-hover:translate-x-4 md:group-hover:translate-x-8 transition-transform duration-500 z-10">
                  <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-zinc-600 shrink-0 w-12 md:w-24">
                    {project.year}
                  </span>

                  <h3
                    className={`${ebGaramond.className} text-3xl md:text-7xl lg:text-8xl text-[#F4F4F5]`}
                  >
                    {project.title}
                  </h3>
                </div>

                <div className="flex items-center gap-8 md:gap-12 shrink-0 z-10">
                  <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest text-zinc-500 hidden md:block">
                    {project.tech}
                  </span>

                  <div className="flex items-center gap-2 text-[#4F46E5] font-bold tracking-widest text-[10px] opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    EXPLORE <span className="text-lg">↗</span>
                  </div>
                </div>

                {/* Hover Image Reveal */}
                <div className="absolute top-1/2 left-[60%] -translate-y-1/2 -translate-x-1/2 w-[400px] aspect-[4/3] opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 z-0 hidden lg:block overflow-hidden rounded-lg shadow-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-60 mix-blend-screen"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

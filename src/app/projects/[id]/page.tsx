import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { EB_Garamond } from "next/font/google";
import { projectsData, getProject } from "@/lib/projects-data";
import { Metadata } from "next";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "700", "800"],
});

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    id: project.id,
  }));
}

export async function generateMetadata(
  props: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const params = await props.params;
  const project = getProject(params.id);
  if (!project) return { title: "Not Found" };
  
  return {
    title: `${project.title} | Case Study`,
    description: project.summary,
  };
}

export default async function ProjectPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const project = getProject(params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-[#F4F4F5] selection:bg-[#4F46E5] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-6 md:p-12 mix-blend-difference z-50 flex justify-between items-center pointer-events-none">
        <Link href="/" className="font-mono text-xs uppercase tracking-[0.2em] pointer-events-auto hover:opacity-50 transition-opacity">
          ← Back to Index
        </Link>
        <span className="font-mono text-xs uppercase tracking-[0.2em] opacity-50">
          Case Study // {project.year}
        </span>
      </nav>

      {/* Hero Header */}
      <section className="relative pt-48 pb-24 px-6 md:px-24 max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-6">
          <span className="font-mono text-xs md:text-sm uppercase tracking-[0.4em] text-zinc-500">
            {project.category}
          </span>
          <h1 className={`${ebGaramond.className} text-6xl md:text-8xl lg:text-9xl font-medium tracking-tight leading-[0.9]`}>
            {project.title}
          </h1>
          <p className="font-mono text-sm md:text-base uppercase tracking-widest text-[#4F46E5] mt-4">
            Role: {project.role} &nbsp;&nbsp;//&nbsp;&nbsp; Timeline: {project.timeline}
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative w-full aspect-video mt-12 overflow-hidden bg-zinc-900 border border-zinc-800 rounded-lg">
          <Image
            src={project.image}
            alt={`${project.title} architecture`}
            fill
            className="object-cover opacity-80 mix-blend-lighten"
            priority
            sizes="100vw"
          />
        </div>
      </section>

      {/* Content Body */}
      <section className="px-6 md:px-24 pb-48 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
        
        {/* Sidebar Info */}
        <div className="md:col-span-4 flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 border-b border-zinc-800 pb-4">
              Core Metrics
            </h3>
            <ul className="flex flex-col gap-3 mt-4">
              {project.metrics.map((metric, i) => (
                <li key={i} className="text-sm md:text-base border-l-2 border-[#4F46E5] pl-4">
                  {metric}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 border-b border-zinc-800 pb-4">
              Technology Stack
            </h3>
            <div className="flex flex-col gap-6 mt-4">
              <div>
                <span className="block text-[10px] uppercase tracking-widest opacity-50 mb-2">Languages</span>
                <p className="text-sm">{project.stack.languages}</p>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest opacity-50 mb-2">Orchestration</span>
                <p className="text-sm">{project.stack.orchestration}</p>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest opacity-50 mb-2">Data Layer</span>
                <p className="text-sm">{project.stack.database}</p>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-widest opacity-50 mb-2">Frontend</span>
                <p className="text-sm">{project.stack.frontend}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-8 flex flex-col gap-24">
          
          <div className="flex flex-col gap-8">
            <h2 className={`${ebGaramond.className} text-4xl md:text-5xl font-medium`}>
              The Problem & Constraint
            </h2>
            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
              {project.summary}
            </p>
          </div>

          <div className="flex flex-col gap-8">
            <h2 className={`${ebGaramond.className} text-4xl md:text-5xl font-medium`}>
              System Topology
            </h2>
            <div className="p-8 bg-zinc-900 border border-zinc-800 font-mono text-sm leading-loose text-zinc-300 rounded-lg">
              {project.architecture}
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <h2 className={`${ebGaramond.className} text-4xl md:text-5xl font-medium`}>
              Engineering Tradeoffs
            </h2>
            <ul className="flex flex-col gap-6">
              {project.keyDecisions.map((decision, i) => (
                <li key={i} className="flex gap-4">
                  <span className="text-[#4F46E5] font-mono mt-1">0{i + 1}</span>
                  <p className="text-zinc-300 leading-relaxed">{decision}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </section>
    </main>
  );
}

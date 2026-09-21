import { EB_Garamond } from "next/font/google";

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "700", "800"],
});

const SERVICES = [
  {
    id: "01",
    title: "Autonomous Systems & Browser Automation",
    description: "Building custom scraping, automation, and AI workflows that eliminate manual operational work. Bypassing complex captchas and deploying deterministic headless fleets.",
    tags: ["Playwright", "LLM Extraction", "Temporal"]
  },
  {
    id: "02",
    title: "Distributed Systems Architecture",
    description: "Decoupling bottlenecks, setting up robust message queues, and scaling databases for high throughput. Architecting zero-trust networks and resilient infrastructure.",
    tags: ["Go", "NATS JetStream", "Kubernetes"]
  },
  {
    id: "03",
    title: "Full-Stack B2B Digitization",
    description: "Replacing manual, paper-based business operations with dedicated web apps, RBAC portals, and custom Point-of-Sale (POS) solutions tailored for high-growth agencies.",
    tags: ["Next.js", "PostgreSQL", "RBAC"]
  }
];

export default function ConsultingServices() {
  return (
    <section className="relative w-full py-24 md:py-48 px-6 md:px-24 bg-[#F4F4F5] text-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col gap-16 md:gap-32">
        <div className="flex flex-col gap-6 max-w-4xl">
          <span className="font-mono text-xs md:text-sm uppercase tracking-[0.4em] text-[#4F46E5] font-bold">
            B2B Consulting & Agency Services
          </span>
          <h2
            className={`${ebGaramond.className} text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1]`}
          >
            Engineering <span className="italic text-zinc-500">Scale.</span>
          </h2>
          <p className="text-lg md:text-2xl text-zinc-600 max-w-2xl mt-4 leading-relaxed">
            I partner directly with founders and traditional businesses to replace outdated operations with highly available, custom digital infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
          {SERVICES.map((service) => (
            <div key={service.id} className="flex flex-col gap-8 p-8 md:p-10 border border-zinc-300 bg-white shadow-sm hover:shadow-xl transition-shadow duration-500 rounded-lg group">
              <span className="font-mono text-2xl md:text-3xl text-zinc-300 group-hover:text-[#4F46E5] transition-colors duration-300">
                {service.id}
              </span>
              
              <div className="flex flex-col gap-4 flex-grow">
                <h3 className={`${ebGaramond.className} text-3xl md:text-4xl font-medium leading-[1.2]`}>
                  {service.title}
                </h3>
                <p className="text-zinc-600 leading-relaxed text-sm md:text-base mt-2">
                  {service.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-8">
                {service.tags.map((tag, i) => (
                  <span key={i} className="font-mono text-[10px] uppercase tracking-widest text-zinc-500 bg-zinc-100 px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

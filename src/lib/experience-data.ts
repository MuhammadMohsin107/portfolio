export interface Experience {
  id: string;
  role: string;
  company: string;
  timeline: string;
  description: string;
  achievements: string[];
  skills: string[];
  // Added for backwards compatibility with UI components
  year: string;
  tech: string;
  bg: string;
  text: string;
  stroke: string;
}

export const experienceData: Experience[] = [
  {
    id: "tech-consultancy",
    role: "Founder & Lead Software Engineer",
    company: "Independent Tech Consultancy",
    timeline: "Jan 2026 – Present",
    year: "PRESENT",
    tech: "NEXT.JS / POSTGRES",
    bg: "bg-[#18181B]",
    text: "text-[#F4F4F5]",
    stroke: "#3f3f46",
    description: "Founding and operating a solo software agency dedicated to helping traditional B2B businesses modernize by replacing manual, paper-based management with custom digital infrastructure and highly available web systems.",
    achievements: [
      "Partner directly with business owners to architect bespoke software solutions, including Point-of-Sale (POS) systems and headless e-commerce storefronts.",
      "Design and deploy comprehensive internal systems with secure admin panels, multi-stakeholder portals, and strict Role-Based Access Control (RBAC).",
      "Manage the entire software development lifecycle independently, from requirement gathering to full-stack implementation (Next.js, PostgreSQL) and cloud deployment."
    ],
    skills: ["System Architecture", "Technical Consulting", "Next.js", "PostgreSQL", "B2B Software", "RBAC"]
  },
  {
    id: "quanta",
    role: "Founder / Principal Software Engineer",
    company: "Quanta (Startup)",
    timeline: "Dec 2024 – Present",
    year: "2024",
    tech: "GO / TEMPORAL / NATS",
    bg: "bg-[#F4F4F5]",
    text: "text-[#0A0A0A]",
    stroke: "#D4D4D8",
    description: "Architected and deployed a distributed Execution-as-a-Service platform for AI-driven browser automation, decoupling a Go control plane and Python execution environment via gRPC and Temporal.",
    achievements: [
      "Engineered a custom Playwright extraction engine using deterministic structural DOM fingerprinting, reducing multimodal token costs by bypassing vision models.",
      "Built fault-tolerant job execution using Temporal, ensuring idempotency via PostgreSQL and transient LLM failure recovery.",
      "Engineered high-throughput execution logging using NATS JetStream, piping live telemetry data to the frontend via SSE."
    ],
    skills: ["Go", "Python", "Temporal", "NATS JetStream", "Playwright", "Distributed Systems", "RAG"]
  },
  {
    id: "uol",
    role: "Lead System Architect & Programming Head",
    company: "The University of Lahore",
    timeline: "Sep 2025 – Jun 2026",
    year: "2026",
    tech: "WEBSOCKETS / POSTGRES",
    bg: "bg-[#4F46E5]",
    text: "text-[#F4F4F5]",
    stroke: "#818cf8",
    description: "Led the university's technical society and independently engineered two production-grade platforms deployed for campus-wide events, managing the full lifecycle from system architecture to live infrastructure deployment.",
    achievements: [
      "Architected Sentinel: A complete access-control infrastructure that validated 470+ concurrent attendees with zero downtime, solving venue cellular latency with offline-first React Native architecture.",
      "Architected UOLJudge: A live speed-programming platform utilizing WebSockets to maintain exact real-time state synchronization across 70+ active competitors.",
      "Awarded the university 'System Architect' shield for flawless end-to-end system operation under live pressure."
    ],
    skills: ["System Architecture", "WebSockets", "Supabase", "React Native", "PostgreSQL", "Real-Time Systems"]
  }
];

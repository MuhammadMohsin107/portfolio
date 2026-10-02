export interface Project {
  id: string;
  title: string;
  role: string;
  category: string;
  timeline: string;
  summary: string;
  metrics: string[];
  architecture: string;
  stack: {
    languages: string;
    orchestration: string;
    database: string;
    frontend: string;
  };
  keyDecisions: string[];
  // Added for backwards compatibility with UI components
  year: string;
  image: string;
  tech: string;
}

export const projectsData: Project[] = [
  {
    id: "Portal Hub",
    title: "Portal Hub – AI-Powered Job bot ",
    role: "Founder / Principal Software Engineer",
    category: "AI Infrastructure & Distributed job execution",
    timeline: "Dec 2024 – Present",
    year: "2024",
    image: "/projects/zero_trust_platform_mockup.png",
    tech: "Go / Temporal",
    summary: "An AI-powered web job platform built to execute complex, real time  jobs.",
    metrics: [
      "Sustained 10 concurrent Playwright contexts within a strict 2GB container budget",
      "Enforced hard caps of 40,000-token execution limits to prevent runaway LLM loop costs",
      "Bypassed WAFs successfully using AES-256-GCM encrypted  job browser-session "
    ],
    architecture: "The system is strictly decoupled into a Go-based Control Plane (handling REST, JWT validation, and atomic billing) and a Python Execution Plane. Communication is orchestrated via gRPC and Temporal workflows. Live execution telemetry is buffered in memory via NATS JetStream and piped to the frontend via Server-Sent Events (SSE) to ensure the Python worker is never blocked.",
    stack: {
      languages: " Python, TypeScript",
      orchestration: "Temporal, NATS JetStream, Docker",
      database: "PostgreSQL, Redis, Qdrant, MinIO",
      frontend: "Next.js, Playwright"
    },
    keyDecisions: [
      "Engineered a deterministic JavaScript schema-walker and structural DOM fingerprinting to extract data directly, invoking Llama-3.1-8B and Gemini 2.0 Flash purely as dynamic fallbacks.",
      "Implemented semantic RAG caching using Qdrant and all-MiniLM-L6-v2 embeddings to match new navigation objectives with structurally similar, previously successful execution sequences."
    ]
  },
  {
    id: "Scorelo AI",
    title: "Scorelo AI – Shopify Store Enhancing Platform",
    role: "Lead Software Architect",
    category: "Scorelo AI Business Automation",
    timeline: "2026",
    year: "2026",
    image: "/projects/pacedream_booking_mockup.png",
    tech: "TypeScript / PostgreSQL",
    summary: "A comprehensive Point-of-Sale (POS) and operations platform for the Shopify Stores industry, featuring a custom conversational ordering pipeline, live kitchen synchronization, and strict transactional data integrity.",
    metrics: [
      "Eliminated long-lived connection overhead via smart dynamic polling (15s active / 60s idle)",
      "Zero invalid payload submissions achieved via deeply nested Zod schema validation",
      "Maintained 100% idempotency against Meta's automated retry mechanisms"
    ],
    architecture: "Driven by an event-driven architecture using the official Meta WhatsApp Business API. Incoming webhooks are verified via SHA-256 HMAC signatures, trapped for duplicates via DB constraints, and pushed to a background job queue (Upstash QStash) for processing. The Kitchen Display System utilizes TanStack Query with aggressive polling and tab-visibility detection to manage live state without WebSockets.",
    stack: {
      languages: "TypeScript, SQL",
      orchestration: "Upstash QStash, Next.js Server Actions",
      database: "Neon PostgreSQL, Drizzle ORM",
      frontend: "Next.js, TanStack Query, React Hook Form, Tailwind CSS"
    },
    keyDecisions: [
      "Designed a highly constrained database schema utilizing PostgreSQL check constraints to prevent race conditions (e.g., negative sub-totals).",
      "Implemented a granular, JSONB-driven Role-Based Access Control (RBAC) system with immutable activity auditing and instant session revocation via version tracking."
    ]
  },
  {
    id: "Nexus-IO",
    title: "Nexus-IO –  DataScraping Platform",
    role: "Systems Architect",
    category: "AI Infrastructure",
    timeline: "2026",
    year: "2026",
    image: "/projects/zero_trust_platform_mockup.png",
    tech: "Go / Python / RabbitMQ",
    summary: "A production-oriented microservices backend for multi-agent AI workflows, decoupling API gateways from asynchronous Python execution engines to ensure high availability and observability.",
    metrics: [
      "Fully decoupled API routing from long-running LLM execution",
      "Comprehensive telemetry tracing across all microservices"
    ],
    architecture: "Separates the system into a Go API gateway, a Python-based AI engine, and asynchronous Celery workers. Components communicate through gRPC and RabbitMQ. Features domain models, persona-specific LangGraph agents, document processing pipelines, and vector search. Deployed via a Docker Compose stack configured with persistent volumes and local service orchestration.",
    stack: {
      languages: "Go, Python",
      orchestration: "gRPC, RabbitMQ, Celery, Docker Compose",
      database: "PostgreSQL, Redis, Qdrant",
      frontend: "REST APIs"
    },
    keyDecisions: [
      "Configured full-stack observability utilizing OpenTelemetry, Prometheus, and Grafana to track trace latencies across distributed AI agents.",
      "Utilized asynchronous Celery workers and RabbitMQ to offload intensive LangGraph processing, preventing API gateway blocking."
    ]
  },
  {
    id: "sentinel",
    title: "Sentinel – Offline-First Security Platform",
    role: "Lead System Architect",
    category: "Real-Time Systems & Cryptography",
    timeline: "2025 – 2026",
    year: "2026",
    image: "/projects/cloud_infra_automation_mockup.png",
    tech: "React Native / Supabase",
    summary: "An enterprise-grade access-control platform that processed hundreds of live event attendees with zero downtime, solving high-density venue cellular latency through offline cryptographic verification.",
    metrics: [
      "Processed 470+ live attendees concurrently with zero downtime",
      "Maintained accurate chronology for offline scans by syncing in optimal batches of 20"
    ],
    architecture: "Mobile scanners (React Native) bypass venue network latency by utilizing an offline-first architecture, generating TOTP tokens locally. Backend state is synchronized optimistically. The admin dashboard leverages Supabase Realtime (Postgres Change Data Capture) to compute live venue occupancy instantly.",
    stack: {
      languages: "TypeScript",
      orchestration: "Supabase Realtime, Next.js",
      database: "PostgreSQL, Prisma ORM",
      frontend: "React Native, Expo, Tailwind CSS"
    },
    keyDecisions: [
      "Implemented a Time-based One-Time Password (TOTP) QR engine using SHA-1 hashing, 20-byte Base32 secrets, and a ±60-second time-drift window.",
      "Built strict anti-passback transaction guards using Prisma `$transaction` isolation levels to atomically reject duplicate entry states and prevent replay attacks."
    ]
  },
  {
    id: "uol-judge",
    title: "UOLJudge – Real-Time Concurrency Platform",
    role: "System Architect",
    category: "Distributed Systems & Networking",
    timeline: "2025 – 2026",
    year: "2026",
    image: "/projects/cloud_infra_automation_mockup.png",
    tech: "Node.js / WebSockets",
    summary: "A live competitive programming and code-grading platform utilizing optimized database concurrency and custom WebSocket implementations to maintain zero-drift state synchronization across multiple university labs.",
    metrics: [
      "Handled 70+ concurrent participants and 50+ active submissions natively",
      "Achieved sub-100ms broadcasting for live leaderboard updates",
      "O(1) memory cleanup achieved for dead socket connections"
    ],
    architecture: "Utilizes a standalone Node.js `ws` server independent of the Next.js frontend to maintain live competition state. Handles submission bursts entirely without an external Redis queue by optimizing PostgreSQL connection pooling (300 concurrent) and leveraging atomic database accumulator patterns.",
    stack: {
      languages: "TypeScript, Node.js",
      orchestration: "WebSockets (ws), Docker Compose, Azure",
      database: "PostgreSQL, Prisma",
      frontend: "Next.js"
    },
    keyDecisions: [
      "Enforced a strict 'One Active Submission' rule utilizing Prisma `$transaction` at a `Serializable` isolation level to completely prevent TOCTOU race conditions.",
      "Synchronously upserted a denormalized TeamScore model during submission transactions, replacing expensive on-the-fly aggregations with lightning-fast O(1) reads."
    ]
  }
];

export function getProject(id: string): Project | undefined {
  return projectsData.find((p) => p.id === id);
}

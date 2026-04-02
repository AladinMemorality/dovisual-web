import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { SectionLabel } from "@/components/SectionLabel";
import { Divider } from "@/components/Divider";
import { Terminal } from "@/components/Terminal";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Guides, references, and tutorials for the DoVisual platform. CLI, API, SDKs, and MCP integration.",
};

const categories = [
  {
    title: "Getting Started",
    desc: "Install the CLI, authenticate, create your first card. Up and running in under 5 minutes.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "CLI Reference",
    desc: "Full documentation for all 8 CLI commands, flags, options, and output formats.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <polyline points="4 17 10 11 4 5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="19" x2="20" y2="19" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "API Reference",
    desc: "REST API endpoints, authentication, request/response schemas, error codes, and rate limits.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "MCP Integration",
    desc: "Setup guide, tool reference, permission model, and best practices for Claude and other MCP runtimes.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    title: "SDK Guides",
    desc: "Node.js and Python SDK setup, framework recipes for LangChain, CrewAI, and AutoGen.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path d="M4 19.5A2.5 2.5 0 016.5 17H20" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Security & Compliance",
    desc: "Encryption architecture, authentication flows, agent isolation, and audit logging reference.",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function DocsPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="max-w-[1120px] mx-auto px-8 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.04)_0%,transparent_65%)] -top-[200px] left-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="relative z-10">
          <SectionLabel>Documentation</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
            Everything you need
            <br />
            to build.
          </h1>
          <p className="text-zinc-500 max-w-xl text-base leading-relaxed">
            Comprehensive guides, API references, and tutorials for the
            DoVisual platform. From first install to production deployment.
          </p>
        </div>
      </section>

      <Divider />

      {/* Quick Start */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <div className="bg-zinc-950 border border-white/[0.08] rounded-2xl p-10 grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
          <div className="space-y-3">
            <SectionLabel>Quick Start</SectionLabel>
            <h3 className="text-2xl font-bold tracking-tight leading-tight">
              Three commands.
              <br />
              Five minutes.
            </h3>
            <p className="text-zinc-500 text-sm">
              Install the CLI, authenticate with a magic link, and connect to
              your AI agent. Everything after that is handled by your agent.
            </p>
          </div>
          <Terminal label="terminal">
            <div className="space-y-0">
              <div>
                <span className="text-primary">$ </span>
                <span className="text-zinc-300">npm install -g dovisual</span>
              </div>
              <div>
                <span className="text-primary">$ </span>
                <span className="text-zinc-300">dovi auth</span>
              </div>
              <div>
                <span className="text-primary">$ </span>
                <span className="text-zinc-300">dovi setup-mcp</span>
              </div>
              <div className="text-primary">
                &nbsp; &#10003; Ready to connect to Claude
              </div>
            </div>
          </Terminal>
        </div>
      </section>

      <Divider />

      {/* Documentation Categories */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <SectionLabel>Browse by Topic</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          Find what you need.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-zinc-950 border border-white/[0.08] rounded-xl p-8 hover:border-primary/20 transition-colors group"
            >
              <div className="w-9 h-9 rounded-md border border-white/[0.10] flex items-center justify-center text-primary mb-6 group-hover:border-primary/30 transition-colors">
                {cat.icon}
              </div>
              <h4 className="font-bold text-base mb-2">{cat.title}</h4>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {cat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}

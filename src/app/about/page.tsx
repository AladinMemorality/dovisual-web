import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { SectionLabel } from "@/components/SectionLabel";
import { Divider } from "@/components/Divider";

export const metadata: Metadata = {
  title: "About",
  description:
    "DoVisual is a mobile-first cloud platform. Terminal, containers, AI, and server management from your phone.",
};

export default function AboutPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="max-w-[1120px] mx-auto px-8 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.04)_0%,transparent_65%)] -top-[200px] left-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="relative z-10">
          <SectionLabel>About</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
            Building developer infrastructure
            <br />
            <span className="bg-gradient-to-br from-white/90 to-zinc-500 bg-clip-text text-transparent">
              for the mobile era.
            </span>
          </h1>
          <p className="text-zinc-500 max-w-2xl text-base leading-relaxed">
            Developers shouldn&apos;t need a laptop for everything. DoVisual
            puts full server control in your pocket &mdash; terminal,
            containers, files, and AI from your phone.
          </p>
        </div>
      </section>

      <Divider />

      {/* Mission */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <div className="max-w-3xl">
          <SectionLabel>Mission</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-8">
            Servers shouldn&apos;t require{" "}
            <span className="bg-gradient-to-br from-white/90 to-zinc-500 bg-clip-text text-transparent italic">
              a laptop.
            </span>
          </h2>
          <div className="space-y-4 text-zinc-400 leading-relaxed">
            <p>
              The cloud runs 24/7, but developers are tied to their laptops.
              Server issues at dinner, deployment failures on the train, config
              emergencies at midnight &mdash; the tools haven&apos;t caught up.
            </p>
            <p>
              Mobile devices are powerful enough to manage infrastructure.
              What&apos;s missing is the interface. Current tools are
              desktop-first afterthoughts on mobile.
            </p>
            <p>
              <span className="text-white font-semibold">DoVisual</span> bridges
              this gap. We provide the mobile-first operating system for your
              cloud infrastructure &mdash; terminal, containers, files, and AI
              in one unified app.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* Platform Pillars */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <SectionLabel>What We Build</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          Four pillars. One stack.
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: "Terminal Access",
              desc: "Full PTY terminal sessions via WebSocket. Tab completion, colors, history, and scroll buffer. As powerful as your desktop terminal, from your phone.",
            },
            {
              title: "Container Management",
              desc: "Docker lifecycle management. List, start, stop, restart, rebuild containers. View logs, inspect configs, manage compose projects.",
            },
            {
              title: "AI Assistant",
              desc: "Claude Code integrated directly. Deploy apps, debug issues, edit files, and manage infrastructure conversationally. Destructive actions require your approval.",
            },
            {
              title: "System Monitoring",
              desc: "Real-time CPU, memory, disk, and network stats. Process list, port scanning, and Docker status at a glance.",
            },
          ].map((pillar) => (
            <div
              key={pillar.title}
              className="bg-zinc-950 border border-white/[0.08] rounded-xl p-8 hover:border-primary/20 transition-colors"
            >
              <div className="font-mono text-sm text-primary font-semibold mb-3">
                {pillar.title}
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* Key Numbers */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <SectionLabel>By the Numbers</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          The scale of the opportunity.
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "90s", label: "Server setup time", source: "DoVisual" },
            { value: "6", label: "Core capabilities", source: "DoVisual" },
            { value: "v1.0.0", label: "Current stable release", source: "DoVisual" },
            { value: "24/7", label: "Mobile access", source: "DoVisual" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-zinc-950 border border-white/[0.08] rounded-xl p-6"
            >
              <div className="text-3xl font-black tracking-tighter mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-zinc-500">{stat.label}</div>
              <div className="text-[10px] text-zinc-700 mt-2">
                {stat.source}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* Contact */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <div className="relative bg-zinc-950 border border-white/[0.08] rounded-[20px] p-16 text-center overflow-hidden">
          <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.06)_0%,transparent_65%)] -top-[200px] left-1/2 -translate-x-1/2 pointer-events-none" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight relative z-10">
            Get in touch.
          </h2>
          <p className="text-zinc-500 mt-4 mb-8 max-w-md mx-auto text-sm relative z-10">
            Questions, partnerships, or just curious? We&apos;d love to hear
            from you.
          </p>
          <a
            href="mailto:hello@dovisual.com"
            className="inline-block px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:brightness-110 transition-all text-sm relative z-10"
          >
            hello@dovisual.com
          </a>
        </div>
      </section>
    </PageLayout>
  );
}

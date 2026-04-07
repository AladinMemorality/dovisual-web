import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Strategic Plan 2026",
  description:
    "The Mobile-First Cloud OS for Developers. Strategic Plan, March 2026.",
};

export default function DeckPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Nav />
      {/* ====== SECTION 1: HERO ====== */}
      <section className="min-h-screen flex flex-col justify-center px-8 pt-32 pb-24 relative overflow-hidden">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.04)_0%,transparent_65%)] -top-[200px] left-1/2 -translate-x-1/2 pointer-events-none" />

        <div className="max-w-[1120px] w-full mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] tracking-widest uppercase font-medium mb-8">
            <span className="w-[5px] h-[5px] rounded-full bg-primary animate-pulse" />
            Strategic Plan &mdash; March 2026
          </div>

          <h1 className="font-black font-headline tracking-tighter leading-[0.95] text-4xl md:text-6xl lg:text-7xl mb-8 max-w-4xl">
            DoVisual:{" "}
            <span className="bg-gradient-to-br from-white/90 to-zinc-500 bg-clip-text text-transparent">
              The Mobile-First Cloud OS
            </span>
            <br />
            <span className="bg-gradient-to-br from-white/90 to-zinc-500 bg-clip-text text-transparent">
              for Developers
            </span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-500 max-w-2xl leading-relaxed mb-16">
            Cloud infrastructure management from your phone. Terminal,
            containers, AI, and monitoring &mdash; one app, any VPS.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-zinc-950 border border-white/[0.08] rounded-xl p-8">
              <div className="text-[11px] font-mono text-primary mb-4 tracking-widest uppercase">
                Status
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xl font-bold tracking-tight">
                  Beta &mdash; Live
                </span>
              </div>
              <p className="mt-4 text-xs text-zinc-600">
                Mobile-first VPS management for developers.
              </p>
            </div>
            <div className="bg-zinc-950 border border-white/[0.08] rounded-xl p-8">
              <div className="text-[11px] font-mono text-primary mb-4 tracking-widest uppercase">
                TAM &mdash; Cloud Management
              </div>
              <div className="text-xl font-bold tracking-tight">
                $40B by 2028
              </div>
              <p className="mt-4 text-xs text-zinc-600">
                Cloud management and DevOps tooling market.
              </p>
              <p className="mt-1 text-[10px] text-zinc-700">
                Source: Gartner, 2025
              </p>
            </div>
            <div className="bg-zinc-950 border border-white/[0.08] rounded-xl p-8">
              <div className="text-[11px] font-mono text-primary mb-4 tracking-widest uppercase">
                Mobile Developer Tools
              </div>
              <div className="text-xl font-bold tracking-tight">
                $12B by 2028
              </div>
              <p className="mt-4 text-xs text-zinc-600">
                Developer tools accessible from mobile devices.
              </p>
              <p className="mt-1 text-[10px] text-zinc-700">
                Source: Markets and Markets, 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      {/* ====== SECTION 2: THESIS ====== */}
      <section className="px-8 py-28">
        <div className="max-w-[1120px] mx-auto">
          <div className="mb-20 max-w-3xl">
            <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase flex items-center gap-3 mb-4">
              <span className="w-5 h-px bg-primary" />
              Thesis
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-[1] mb-8">
              Developers deserve{" "}
              <span className="bg-gradient-to-br from-white/90 to-zinc-500 bg-clip-text text-transparent italic">
                better mobile tools.
              </span>
            </h2>
            <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed">
              The cloud runs 24/7 but developers are tied to their desks.{" "}
              <span className="text-white font-semibold">DoVisual</span>{" "}
              provides the mobile-first operating system for cloud
              infrastructure, enabling developers to manage servers, deploy apps,
              and code with AI from anywhere.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <div className="bg-zinc-950 border border-white/[0.08] rounded-xl p-8">
              <div className="text-[11px] font-mono text-primary mb-10 tracking-widest uppercase">
                Cloud Infrastructure Spend
              </div>
              <div className="text-5xl font-black tracking-tighter mb-3">
                $600B
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Annual global cloud infrastructure spending continues to grow at
                20%+ year over year.
              </p>
              <p className="mt-3 text-[10px] text-zinc-700">
                Source: Synergy Research, 2025
              </p>
              <div className="mt-6 h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full w-[90%]" />
              </div>
            </div>
            <div className="bg-zinc-950 border border-white/[0.08] rounded-xl p-8">
              <div className="text-[11px] font-mono text-primary mb-10 tracking-widest uppercase">
                Developer Population
              </div>
              <div className="text-5xl font-black tracking-tighter mb-3">
                30M+
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Professional developers worldwide, most managing at least one
                cloud server.
              </p>
              <p className="mt-3 text-[10px] text-zinc-700">
                Source: GitHub Octoverse, 2025
              </p>
              <div className="mt-6 h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full w-[60%]" />
              </div>
            </div>
            <div className="bg-zinc-950 border border-white/[0.08] rounded-xl p-8">
              <div className="text-[11px] font-mono text-primary mb-10 tracking-widest uppercase">
                Mobile-First Developers
              </div>
              <div className="text-5xl font-black tracking-tighter mb-3">
                65%
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Of developers use mobile devices for work-related tasks beyond
                email and chat.
              </p>
              <p className="mt-3 text-[10px] text-zinc-700">
                Source: Stack Overflow Survey, 2025
              </p>
              <div className="mt-6 h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full w-[40%]" />
              </div>
            </div>
          </div>

          {/* The Mobile Gap */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-zinc-950 border border-white/[0.08] rounded-xl p-10">
              <h3 className="text-xl font-bold mb-4 text-primary">
                The Mobile Gap
              </h3>
              <p className="text-zinc-500 leading-relaxed mb-6 text-sm">
                Cloud infrastructure tools are desktop-first. Developers
                managing production servers need access from anywhere, not just
                their laptops.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  ["No mobile-first SSH", "Terminal apps on mobile are afterthoughts. No integration with Docker, files, or monitoring."],
                  ["Fragmented tools", "Managing a server requires 5+ different apps. SSH client, Docker dashboard, file manager, monitoring tool, notes app."],
                  ["No AI assistance", "When something breaks at midnight, you're on your own. No AI to help diagnose and fix issues from your phone."],
                ].map(([title, desc]) => (
                  <div
                    key={title}
                    className="py-3 border-b border-white/[0.08] last:border-0"
                  >
                    <div className="text-xs text-white font-semibold uppercase tracking-wider mb-1">
                      {title}
                    </div>
                    <div className="text-xs text-zinc-600">
                      {desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-end">
              <button className="w-full bg-primary text-black py-5 px-10 font-bold rounded-xl flex items-center justify-between hover:brightness-110 transition-all text-sm">
                Read the whitepaper
                <span className="text-xl">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      {/* ====== SECTION 3: WHY NOW ====== */}
      <section className="px-8 py-28">
        <div className="max-w-[1120px] mx-auto">
          <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase flex items-center gap-3 mb-4">
            <span className="w-5 h-px bg-primary" />
            Why Now
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-[1.05] mb-16">
            The inflection point.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-zinc-950 border-l-2 border-l-primary border border-white/[0.08] rounded-xl p-8 flex flex-col">
              <blockquote className="text-base leading-relaxed mb-8 flex-1">
                &ldquo;Every single company in the world today has to have an
                OpenClaw strategy. This is definitely the next ChatGPT.&rdquo;
              </blockquote>
              <div>
                <div className="text-sm font-bold">Jensen Huang</div>
                <div className="text-xs text-zinc-500">
                  CEO, Nvidia &mdash; GTC, March 2026
                </div>
              </div>
              <p className="mt-6 text-xs text-zinc-600 border-t border-white/[0.08] pt-4">
                AI-powered development environments are becoming the standard.
                DoVisual brings AI server management to mobile.
              </p>
            </div>

            <div className="bg-zinc-950 border-l-2 border-l-blue-400 border border-white/[0.08] rounded-xl p-8 flex flex-col">
              <blockquote className="text-base leading-relaxed mb-8 flex-1">
                &ldquo;We believe that, in 2025, we may see the first AI agents
                &lsquo;join the workforce&rsquo; and materially change the
                output of companies.&rdquo;
              </blockquote>
              <div>
                <div className="text-sm font-bold">Sam Altman</div>
                <div className="text-xs text-zinc-500">
                  CEO, OpenAI &mdash; January 2025
                </div>
              </div>
              <p className="mt-6 text-xs text-zinc-600 border-t border-white/[0.08] pt-4">
                AI agents managing infrastructure need mobile oversight.
                DoVisual provides the human-in-the-loop interface.
              </p>
            </div>

            <div className="bg-zinc-950 border-l-2 border-l-yellow-400 border border-white/[0.08] rounded-xl p-8 flex flex-col">
              <blockquote className="text-base leading-relaxed mb-8 flex-1">
                &ldquo;Every organization will have a constellation of
                agents &mdash; ranging from simple prompt-and-response to fully
                autonomous.&rdquo;
              </blockquote>
              <div>
                <div className="text-sm font-bold">Satya Nadella</div>
                <div className="text-xs text-zinc-500">
                  CEO, Microsoft &mdash; 2025
                </div>
              </div>
              <p className="mt-6 text-xs text-zinc-600 border-t border-white/[0.08] pt-4">
                Constellations of agents need monitoring from anywhere. DoVisual
                puts your entire server fleet in your pocket.
              </p>
            </div>
          </div>

          {/* Additional signal */}
          <div className="mt-8 bg-zinc-950 border border-white/[0.08] rounded-xl p-8 flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-1">
              <div className="text-xs text-primary font-mono uppercase tracking-widest mb-2">
                Industry Signal
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed">
                In 2025, <span className="text-white font-semibold">Claude Code</span> became the fastest-growing
                developer tool, with millions of developers using AI for coding
                and infrastructure management. Mobile-first access to these AI
                tools is the next frontier.
              </p>
              <p className="mt-2 text-[10px] text-zinc-700">
                Source: Anthropic, 2025
              </p>
            </div>
            <div className="shrink-0 text-right">
              <div className="text-3xl font-black tracking-tighter">100:1</div>
              <div className="text-xs text-zinc-500">
                AI agents per employee
              </div>
              <div className="text-[10px] text-zinc-700">
                Nvidia&apos;s 10-year workforce vision
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      {/* ====== SECTION 4: PLATFORM ====== */}
      <section className="px-8 py-28">
        <div className="max-w-[1120px] mx-auto">
          <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase flex items-center gap-3 mb-4">
                <span className="w-5 h-px bg-primary" />
                Platform
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter leading-[1.05] mb-6">
                Six capabilities.
                <br />
                One unified app.
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                DoVisual combines terminal, containers, files, monitoring, AI,
                and notifications into a single mobile-first platform.
              </p>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Terminal Sessions",
                desc: "Full PTY terminal via WebSocket. Tab completion, colors, scroll buffer. Multiple sessions with pinning. As powerful as your desktop terminal.",
              },
              {
                title: "Docker Management",
                desc: "List, start, stop, restart, and rebuild containers. View logs, inspect configs, manage compose projects. One-tap container lifecycle.",
              },
              {
                title: "File Manager",
                desc: "Browse, read, edit, upload, and delete files. Git clone repos directly. Search by name. Full filesystem access from your phone.",
              },
              {
                title: "System Monitoring",
                desc: "Real-time CPU, memory, disk, and network stats. Process list, port scanning, Docker status at a glance.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-zinc-950 border border-white/[0.08] rounded-xl p-8 hover:border-primary/20 transition-colors"
              >
                <div className="font-mono text-sm text-primary font-semibold tracking-wider uppercase mb-4">
                  {f.title}
                </div>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}

            {/* AI Native (tall) */}
            <div className="bg-zinc-950 border border-white/[0.08] rounded-xl p-8 hover:border-primary/20 transition-colors lg:row-span-2 flex flex-col">
              <div className="font-mono text-sm text-primary font-semibold tracking-wider uppercase mb-4">
                AI Native
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                Built with Claude Code integration from day one. AI has full
                server access &mdash; terminal, files, Docker, system stats.
                Every destructive action requires your approval via the mobile
                app.
              </p>
              <div className="flex-1 min-h-[120px] bg-black rounded-lg p-5 flex flex-col gap-4 border border-white/[0.08]">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-2xl font-black tracking-tighter">
                      30M+
                    </div>
                    <div className="text-[10px] text-zinc-600 mt-0.5">
                      Claude Code users
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black tracking-tighter">
                      24/7
                    </div>
                    <div className="text-[10px] text-zinc-600 mt-0.5">
                      Mobile AI access
                    </div>
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="text-[10px] text-zinc-700 mb-2">
                    Powered By
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {["Claude Code", "Anthropic API", "WebSocket", "Docker", "nginx", "Let's Encrypt"].map(
                      (name) => (
                        <span
                          key={name}
                          className="text-[10px] px-2 py-0.5 bg-zinc-900 border border-white/[0.08] rounded text-zinc-500"
                        >
                          {name}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-[10px] text-zinc-700">
                Source: Anthropic, 2025
              </p>
            </div>

            {/* Push Notifications + Auto SSL (wide) */}
            <div className="bg-zinc-950 border border-white/[0.08] rounded-xl p-8 hover:border-primary/20 transition-colors lg:col-span-2">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <div className="font-mono text-sm text-primary font-semibold tracking-wider uppercase mb-4">
                    Push Notifications
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Expo push notification support. Get alerts when deployments
                    finish, containers crash, or AI tasks complete. Never miss a
                    critical event.
                  </p>
                </div>
                <div className="flex-1">
                  <div className="font-mono text-sm text-primary font-semibold tracking-wider uppercase mb-4">
                    Auto SSL &amp; DNS
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Cloudflare DNS integration for automatic subdomain creation.
                    Let&apos;s Encrypt certificates provisioned and renewed
                    automatically.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      {/* ====== SECTION 5: ROADMAP ====== */}
      <section className="px-8 py-28">
        <div className="max-w-[1120px] mx-auto">
          <div className="mb-16 flex flex-col md:flex-row justify-between md:items-end gap-6">
            <div>
              <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase flex items-center gap-3 mb-4">
                <span className="w-5 h-px bg-primary" />
                Roadmap
              </span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
                Execution timeline
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-mono text-xs text-primary font-semibold">
                Phase 01 active
              </span>
            </div>
          </div>

          {/* Timeline Phases */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {[
              {
                time: "Months 1\u20133",
                phase: "Phase 01 \u2014 Foundation",
                title: "Foundation",
                color: "border-t-primary",
                items: [
                  "One-command server setup (dovi install)",
                  "PTY terminal via WebSocket",
                  "Docker container management",
                  "PIN-based mobile authentication",
                ],
              },
              {
                time: "Months 4\u20136",
                phase: "Phase 02 \u2014 Intelligence",
                title: "Intelligence",
                color: "border-t-blue-400",
                items: [
                  "Claude Code AI integration",
                  "File manager with git clone",
                  "Push notification system",
                  "Multi-device support",
                ],
              },
              {
                time: "Months 7\u201312",
                phase: "Phase 03 \u2014 Scale",
                title: "Scale",
                color: "border-t-yellow-400",
                items: [
                  "Team management and shared access",
                  "VM auto-provisioning via Proxmox",
                  "Custom app registry dashboard",
                  "Enterprise API access",
                ],
              },
            ].map((p) => (
              <div
                key={p.phase}
                className={`bg-zinc-950 border border-white/[0.08] ${p.color} border-t-2 rounded-xl p-8`}
              >
                <div className="text-[10px] font-mono text-zinc-600 mb-1 uppercase tracking-widest">
                  {p.time}
                </div>
                <div className="text-[11px] font-mono text-primary font-semibold mb-4 uppercase tracking-wider">
                  {p.phase}
                </div>
                <h3 className="font-bold text-lg mb-4">{p.title}</h3>
                <ul className="space-y-2.5 text-sm text-zinc-500">
                  {p.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-primary mt-0.5">&rsaquo;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Market context metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                label: "Cloud DevOps Market",
                value: "$40B",
                sub: "by 2028",
                bar: "w-[80%]",
                source: "Gartner",
              },
              {
                label: "Developer Population",
                value: "30M+",
                sub: "worldwide",
                bar: "w-[70%]",
                source: "GitHub",
              },
              {
                label: "Mobile Work Tasks",
                value: "65%",
                sub: "of devs",
                bar: "w-[55%]",
                source: "Stack Overflow",
              },
              {
                label: "AI Dev Tool Growth",
                value: "10x",
                sub: "YoY adoption",
                bar: "w-[90%]",
                source: "Anthropic",
              },
            ].map((m) => (
              <div
                key={m.label}
                className="bg-zinc-950 border border-white/[0.08] rounded-xl p-5"
              >
                <div className="text-[10px] text-zinc-600 uppercase tracking-wider mb-1">
                  {m.label}
                </div>
                <div className="font-mono text-lg font-bold">{m.value}</div>
                <div className="text-[10px] text-zinc-600 mb-3">{m.sub}</div>
                <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-primary rounded-full ${m.bar}`}
                  />
                </div>
                <div className="mt-2 text-[9px] text-zinc-700">
                  {m.source}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="border-0 h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      {/* ====== FOOTER ====== */}
      <Footer />
    </div>
  );
}

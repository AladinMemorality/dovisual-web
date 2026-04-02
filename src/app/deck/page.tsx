import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Strategic Plan 2026",
  description:
    "The Financial OS for Autonomous AI Commerce. Strategic Plan, March 2026.",
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
              The Financial OS
            </span>
            <br />
            for Autonomous
            <br />
            AI Commerce
          </h1>

          <p className="text-lg md:text-xl text-zinc-500 max-w-2xl leading-relaxed mb-16">
            Payment infrastructure for the agentic era. Cards, IBANs, credit
            lines, and crypto rails for autonomous AI agents.
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
                MCP-native payment rails for autonomous agents.
              </p>
            </div>
            <div className="bg-zinc-950 border border-white/[0.08] rounded-xl p-8">
              <div className="text-[11px] font-mono text-primary mb-4 tracking-widest uppercase">
                TAM &mdash; B2B Agent Commerce
              </div>
              <div className="text-xl font-bold tracking-tight">
                $15T by 2028
              </div>
              <p className="mt-4 text-xs text-zinc-600">
                90% of B2B purchases will be AI-agent intermediated.
              </p>
              <p className="mt-1 text-[10px] text-zinc-700">
                Source: Gartner, Oct 2025
              </p>
            </div>
            <div className="bg-zinc-950 border border-white/[0.08] rounded-xl p-8">
              <div className="text-[11px] font-mono text-primary mb-4 tracking-widest uppercase">
                US Agentic Commerce
              </div>
              <div className="text-xl font-bold tracking-tight">
                $500B by 2030
              </div>
              <p className="mt-4 text-xs text-zinc-600">
                15&ndash;25% of total US online retail sales.
              </p>
              <p className="mt-1 text-[10px] text-zinc-700">
                Source: Bain &amp; Company, Dec 2025
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
              AI agents are becoming{" "}
              <span className="bg-gradient-to-br from-white/90 to-zinc-500 bg-clip-text text-transparent italic">
                economic actors.
              </span>
            </h2>
            <p className="text-lg text-zinc-500 max-w-2xl leading-relaxed">
              The next era of commerce isn&apos;t human-to-machine. It&apos;s
              machine-to-machine.{" "}
              <span className="text-white font-semibold">DoVisual</span>{" "}
              provides the financial rail for the agentic economy, enabling
              autonomous agents to hold capital, negotiate, and execute
              transactions.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            <div className="bg-zinc-950 border border-white/[0.08] rounded-xl p-8">
              <div className="text-[11px] font-mono text-primary mb-10 tracking-widest uppercase">
                B2B Agent-Intermediated Purchases
              </div>
              <div className="text-5xl font-black tracking-tighter mb-3">
                $15T
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">
                By 2028, 90% of all B2B purchases will flow through AI agent
                exchanges, pushing over $15 trillion through agent-intermediated
                channels.
              </p>
              <p className="mt-3 text-[10px] text-zinc-700">
                Source: Gartner, Oct 2025
              </p>
              <div className="mt-6 h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full w-[90%]" />
              </div>
            </div>
            <div className="bg-zinc-950 border border-white/[0.08] rounded-xl p-8">
              <div className="text-[11px] font-mono text-primary mb-10 tracking-widest uppercase">
                US Agentic Commerce by 2030
              </div>
              <div className="text-5xl font-black tracking-tighter mb-3">
                $500B
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Agentic AI could account for 15&ndash;25% of US e-commerce
                sales by 2030, reaching $300B&ndash;$500B in annual volume.
              </p>
              <p className="mt-3 text-[10px] text-zinc-700">
                Source: Bain &amp; Company, Dec 2025
              </p>
              <div className="mt-6 h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full w-[60%]" />
              </div>
            </div>
            <div className="bg-zinc-950 border border-white/[0.08] rounded-xl p-8">
              <div className="text-[11px] font-mono text-primary mb-10 tracking-widest uppercase">
                Enterprise AI Agent Adoption
              </div>
              <div className="text-5xl font-black tracking-tighter mb-3">
                40%
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">
                Of enterprise apps will feature task-specific AI agents by 2026,
                up from less than 5% in 2025. An 8x increase in 12 months.
              </p>
              <p className="mt-3 text-[10px] text-zinc-700">
                Source: Gartner, Aug 2025
              </p>
              <div className="mt-6 h-1 w-full bg-zinc-900 rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full w-[40%]" />
              </div>
            </div>
          </div>

          {/* Infrastructure Lag */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-zinc-950 border border-white/[0.08] rounded-xl p-10">
              <h3 className="text-xl font-bold mb-4 text-primary">
                The Infrastructure Lag
              </h3>
              <p className="text-zinc-500 leading-relaxed mb-6 text-sm">
                AI agents are ready to transact. Financial systems are not.
                Current infrastructure requires human identity and manual
                verification. Agents cannot open bank accounts, hold credit
                cards, or settle payments autonomously.
              </p>
              <div className="flex flex-col gap-4">
                {[
                  ["No KYC path for agents", "Identity systems assume human principals. No framework exists for agent-level financial identity."],
                  ["Legacy rail latency", "Traditional payment settlement takes days. Agents operate in milliseconds."],
                  ["No trust layer", "No standard for verifying agent authorization, spending limits, or principal delegation."],
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
              <button className="w-full bg-primary text-white py-5 px-10 font-bold rounded-xl flex items-center justify-between hover:brightness-110 transition-all text-sm">
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
                OpenClaw is the OS for personal AI. Every agent running on it
                needs secure payment rails. That&apos;s aiPay.
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
                Agents joining the workforce means agents making purchases,
                paying invoices, and managing budgets.
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
                Constellations of agents need constellations of cards, IBANs,
                and spending policies. Managed from one stack.
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
                In September 2025, <span className="text-white font-semibold">Stripe and OpenAI</span> co-developed
                the Agentic Commerce Protocol (ACP) &mdash; an open standard
                enabling AI agents to complete purchases. Stripe introduced a
                Shared Payment Token letting agents initiate payments without
                exposing buyer credentials.
              </p>
              <p className="mt-2 text-[10px] text-zinc-700">
                Source: Stripe Blog, Sep 2025
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
                Seven capabilities.
                <br />
                One unified stack.
              </h2>
              <p className="text-zinc-500 text-sm leading-relaxed">
                DoVisual abstracts the complexity of corporate treasury into a
                unified, programmable interface. Designed for precision, speed,
                and infinite scalability.
              </p>
            </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                title: "Virtual Cards",
                desc: "Instantly issue multi-currency virtual Mastercard cards (GBP, EUR, USD) with dynamic spending limits and merchant lock-in. Single-use or persistent.",
              },
              {
                title: "Spend Controls",
                desc: "Granular, rule-based policies: per-transaction limits, daily caps, MCC restrictions, time windows. Policies stack. Most restrictive wins.",
              },
              {
                title: "Virtual IBANs",
                desc: "Each agent gets its own bank account. Receive SEPA, Faster Payments, or wire transfers. Transfer between agents instantly.",
              },
              {
                title: "Credit Lines",
                desc: "Business credit with 90-day interest-free terms. Agents create credit-backed cards. No need to pre-fund every transaction.",
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

            {/* MCP Native (tall) */}
            <div className="bg-zinc-950 border border-white/[0.08] rounded-xl p-8 hover:border-primary/20 transition-colors lg:row-span-2 flex flex-col">
              <div className="font-mono text-sm text-primary font-semibold tracking-wider uppercase mb-4">
                MCP Native
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                Built on the Model Context Protocol &mdash; now governed by the
                Linux Foundation&apos;s Agentic AI Foundation. 25+ tools
                registered. Every CLI command is also an MCP tool and a REST API
                endpoint.
              </p>
              <div className="flex-1 min-h-[120px] bg-black rounded-lg p-5 flex flex-col gap-4 border border-white/[0.08]">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-2xl font-black tracking-tighter">
                      97M+
                    </div>
                    <div className="text-[10px] text-zinc-600 mt-0.5">
                      Monthly SDK downloads
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-black tracking-tighter">
                      10K+
                    </div>
                    <div className="text-[10px] text-zinc-600 mt-0.5">
                      Active MCP servers
                    </div>
                  </div>
                </div>
                <div className="mt-auto">
                  <div className="text-[10px] text-zinc-700 mb-2">
                    AAIF Platinum Members
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {["AWS", "Anthropic", "Google", "Microsoft", "OpenAI", "Block"].map(
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
                Source: Anthropic / Linux Foundation, Dec 2025
              </p>
            </div>

            {/* Accounting + Crypto (wide) */}
            <div className="bg-zinc-950 border border-white/[0.08] rounded-xl p-8 hover:border-primary/20 transition-colors lg:col-span-2">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <div className="font-mono text-sm text-primary font-semibold tracking-wider uppercase mb-4">
                    Crypto On/Off Ramp
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Fund agent cards from USDC or USDT. Real-time exchange rate
                    shown before confirmation. Settle agent-to-agent payments
                    on-chain.
                  </p>
                </div>
                <div className="flex-1">
                  <div className="font-mono text-sm text-primary font-semibold tracking-wider uppercase mb-4">
                    Accounting Integrations
                  </div>
                  <p className="text-sm text-zinc-500 leading-relaxed">
                    Bi-directional sync with NetSuite, SAP, QuickBooks, and Xero
                    for zero-touch reconciliation. Full audit trail exportable as
                    CSV or JSON.
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
                title: "Core Infrastructure",
                color: "border-t-primary",
                items: [
                  "Virtual card issuance (GBP, EUR, USD)",
                  "MCP server with 25+ tools",
                  "CLI + REST API launch",
                  "KYA agent registry",
                ],
              },
              {
                time: "Months 4\u20136",
                phase: "Phase 02 \u2014 Credit & IBANs",
                title: "Financial Products",
                color: "border-t-blue-400",
                items: [
                  "Virtual IBAN provisioning",
                  "Credit line underwriting engine",
                  "Programmable policy engine",
                  "Governance dashboard",
                ],
              },
              {
                time: "Months 7\u201312",
                phase: "Phase 03 \u2014 Scale",
                title: "Global Expansion",
                color: "border-t-yellow-400",
                items: [
                  "Crypto on/off ramp (USDC, USDT)",
                  "Accounting integrations (NetSuite, SAP, Xero)",
                  "Agent-to-agent payment mesh",
                  "Enterprise SDK v2.0",
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
                label: "MCP SDK Downloads",
                value: "97M+",
                sub: "monthly",
                bar: "w-[90%]",
                source: "Linux Foundation",
              },
              {
                label: "Active MCP Servers",
                value: "10K+",
                sub: "public",
                bar: "w-[70%]",
                source: "Anthropic",
              },
              {
                label: "Virtual Card Market",
                value: "$60B",
                sub: "by 2030",
                bar: "w-[55%]",
                source: "Grand View Research",
              },
              {
                label: "Agents Per Employee",
                value: "100:1",
                sub: "Nvidia vision",
                bar: "w-[45%]",
                source: "Jensen Huang, GTC 2026",
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

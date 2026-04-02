import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { SectionLabel } from "@/components/SectionLabel";
import { Divider } from "@/components/Divider";

export const metadata: Metadata = {
  title: "About",
  description:
    "DoVisual is building payment infrastructure for the agentic economy. Cards, IBANs, credit, and crypto rails for autonomous AI agents.",
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
            Building financial infrastructure
            <br />
            <span className="bg-gradient-to-br from-white/90 to-zinc-500 bg-clip-text text-transparent">
              for the agentic era.
            </span>
          </h1>
          <p className="text-zinc-500 max-w-2xl text-base leading-relaxed">
            AI agents are becoming economic actors. They negotiate, purchase, and
            settle. But financial infrastructure wasn&apos;t built for non-human
            principals. DoVisual provides the financial rail for the agentic
            economy.
          </p>
        </div>
      </section>

      <Divider />

      {/* Mission */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <div className="max-w-3xl">
          <SectionLabel>Mission</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-8">
            AI agents are becoming{" "}
            <span className="bg-gradient-to-br from-white/90 to-zinc-500 bg-clip-text text-transparent italic">
              economic actors.
            </span>
          </h2>
          <div className="space-y-4 text-zinc-400 leading-relaxed">
            <p>
              The next era of commerce isn&apos;t human-to-machine. It&apos;s
              machine-to-machine. By 2028, 90% of B2B purchases will flow
              through AI agent exchanges, pushing over $15 trillion through
              agent-intermediated channels.
            </p>
            <p>
              AI agents are ready to transact. Financial systems are not. Current
              infrastructure requires human identity and manual verification.
              Agents cannot open bank accounts, hold credit cards, or settle
              payments autonomously.
            </p>
            <p>
              <span className="text-white font-semibold">DoVisual</span> bridges
              this gap. We provide the financial operating system for autonomous
              AI agents &mdash; cards, IBANs, credit lines, and crypto rails in
              one unified, programmable stack.
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
              title: "Virtual Cards",
              desc: "Mastercard-backed virtual cards in GBP, EUR, and USD. Single-use or persistent. Issued in seconds. Spend anywhere Mastercard is accepted globally.",
            },
            {
              title: "Virtual IBANs",
              desc: "Per-agent bank accounts. Receive SEPA, Faster Payments, and wire transfers. Transfer between agents instantly. Full balance and transaction visibility.",
            },
            {
              title: "Credit Lines",
              desc: "Business credit with 90-day interest-free terms. AI-powered underwriting engine. Agents create credit-backed cards without pre-funding.",
            },
            {
              title: "Crypto Rails",
              desc: "Fund agent cards from USDC or USDT. Real-time exchange rates. Settle agent-to-agent payments on-chain. Emerging market rails included.",
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
            { value: "$15T", label: "B2B agent commerce by 2028", source: "Gartner" },
            { value: "25+", label: "MCP tools registered", source: "DoVisual" },
            { value: "v1.0.4", label: "Current stable release", source: "DoVisual" },
            { value: "99.99%", label: "Platform uptime", source: "DoVisual" },
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
            className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:brightness-110 transition-all text-sm relative z-10"
          >
            hello@dovisual.com
          </a>
        </div>
      </section>
    </PageLayout>
  );
}

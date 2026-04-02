import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { SectionLabel } from "@/components/SectionLabel";
import { Divider } from "@/components/Divider";

export const metadata: Metadata = {
  title: "Governance Dashboard",
  description:
    "Real-time visibility and control over your AI agent fleet. Policies, approvals, audit trails, and spending analytics.",
};

const features = [
  {
    title: "Policy Engine",
    desc: "Define per-transaction limits, daily caps, MCC restrictions, time windows, and auto-approval thresholds. Policies stack and compose. The most restrictive rule always wins.",
  },
  {
    title: "Human-in-the-Loop Approvals",
    desc: "Every card creation and payment requires your approval by default. Set thresholds for auto-approval on routine, low-value transactions. Agents propose, you decide.",
  },
  {
    title: "Real-time Audit Trail",
    desc: "Every action logged with timestamp, actor, agent, and context. Stream live or query historically. Export as CSV or JSON for compliance reporting.",
  },
  {
    title: "Agent Fleet Overview",
    desc: "See all registered agents, their status, assigned cards, IBANs, credit allocations, and recent activity at a glance. Filter by framework or purpose.",
  },
  {
    title: "Spending Analytics",
    desc: "Track burn rates, spending by agent, department, and merchant category. Identify anomalies and optimize agent fleet efficiency in real time.",
  },
  {
    title: "Alert System",
    desc: "Get notified on anomalous transactions, policy violations, credit threshold breaches, and agent registration events. Configure per-channel (email, webhook, Slack).",
  },
];

export default function GovernancePage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="max-w-[1120px] mx-auto px-8 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.04)_0%,transparent_65%)] -top-[200px] left-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="relative z-10">
          <SectionLabel>Governance Dashboard</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
            Full visibility.
            <br />
            Total control.
          </h1>
          <p className="text-zinc-500 max-w-xl text-base leading-relaxed">
            Manage your entire AI agent fleet from a single dashboard. Set
            policies, approve transactions, track spending, and maintain full
            compliance visibility.
          </p>
        </div>
      </section>

      <Divider />

      {/* Features */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <SectionLabel>Features</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          Everything you need to govern.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="bg-zinc-950 border border-white/[0.08] rounded-xl p-6 hover:border-primary/20 transition-colors"
            >
              <div className="text-xs font-mono text-zinc-600 mb-2">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h4 className="font-bold text-sm mb-1.5">{f.title}</h4>
              <p className="text-sm text-zinc-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* How Policies Work */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <SectionLabel>How Policies Work</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          Policies stack. Most restrictive wins.
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-zinc-950 border border-white/[0.08] rounded-xl p-8">
            <div className="font-mono text-sm text-primary font-semibold mb-3">
              Organization Policy
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed mb-4">
              Global limits that apply to all agents. Set maximum transaction
              amounts, daily spending caps, and blocked merchant categories
              org-wide.
            </p>
            <div className="space-y-1.5">
              <div className="font-mono text-[11px] px-2 py-1 rounded bg-zinc-900 border border-white/[0.08] text-zinc-400">
                max-txn: $5,000
              </div>
              <div className="font-mono text-[11px] px-2 py-1 rounded bg-zinc-900 border border-white/[0.08] text-zinc-400">
                daily-limit: $25,000
              </div>
            </div>
          </div>
          <div className="bg-zinc-950 border border-white/[0.08] rounded-xl p-8">
            <div className="font-mono text-sm text-primary font-semibold mb-3">
              Agent Policy
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed mb-4">
              Per-agent overrides that further restrict the org policy. Tailor
              spending rules to each agent&apos;s purpose and risk profile.
            </p>
            <div className="space-y-1.5">
              <div className="font-mono text-[11px] px-2 py-1 rounded bg-zinc-900 border border-white/[0.08] text-zinc-400">
                max-txn: $500
              </div>
              <div className="font-mono text-[11px] px-2 py-1 rounded bg-zinc-900 border border-white/[0.08] text-zinc-400">
                allowed-mcc: 5411, 5812
              </div>
            </div>
          </div>
          <div className="bg-zinc-950 border border-primary/20 rounded-xl p-8">
            <div className="font-mono text-sm text-primary font-semibold mb-3">
              Effective Policy
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed mb-4">
              The intersection of all applicable policies. The most restrictive
              rule from each layer takes precedence.
            </p>
            <div className="space-y-1.5">
              <div className="font-mono text-[11px] px-2 py-1 rounded bg-primary/10 border border-primary/20 text-primary">
                max-txn: $500
              </div>
              <div className="font-mono text-[11px] px-2 py-1 rounded bg-primary/10 border border-primary/20 text-primary">
                daily-limit: $25,000
              </div>
              <div className="font-mono text-[11px] px-2 py-1 rounded bg-primary/10 border border-primary/20 text-primary">
                allowed-mcc: 5411, 5812
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* CTA */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <div className="relative bg-zinc-950 border border-white/[0.08] rounded-[20px] p-16 text-center overflow-hidden">
          <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.06)_0%,transparent_65%)] -top-[200px] left-1/2 -translate-x-1/2 pointer-events-none" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight relative z-10">
            Take control of your agent fleet.
          </h2>
          <p className="text-zinc-500 mt-4 mb-8 max-w-md mx-auto text-sm relative z-10">
            Governance Dashboard is included with the Pro plan.
          </p>
          <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:brightness-110 transition-all text-sm relative z-10">
            Upgrade to Pro
          </button>
        </div>
      </section>
    </PageLayout>
  );
}

import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { SectionLabel } from "@/components/SectionLabel";
import { Divider } from "@/components/Divider";

export const metadata: Metadata = {
  title: "Security",
  description:
    "Security architecture for the DoVisual platform. AES-256-GCM encryption, scoped agent credentials, and full audit logging.",
};

const securityFeatures = [
  {
    label: "Card data at rest",
    value: "AES-256-GCM",
    desc: "PAN and CVV are encrypted with AES-256-GCM using a random initialization vector per field. Card data is never stored in plaintext. Decryption occurs only on your explicit request through the CLI, MCP, or API. Encryption keys are rotated on a regular schedule.",
  },
  {
    label: "Authentication",
    value: "Magic links + API keys",
    desc: "Authentication uses 32-byte cryptographically random tokens delivered via magic link. Tokens are single-use with a 15-minute expiry. No passwords are stored. API keys are generated with sufficient entropy and scoped to your organization.",
  },
  {
    label: "Session tokens",
    value: "JWT HS256",
    desc: "Session tokens are signed with a 256-bit secret using HMAC-SHA256. Tokens are stored locally with file permissions restricted to mode 0600 (owner read/write only). Sessions expire after 30 days and can be revoked manually.",
  },
  {
    label: "MCP access",
    value: "Per-request JWT",
    desc: "Every MCP request is authenticated with your JWT. No shared credentials between users or agents. Destructive actions (card creation, payments) require human approval. Read-only actions execute without prompting.",
  },
  {
    label: "Agent isolation",
    value: "Scoped credentials",
    desc: "Each registered agent receives its own API key with scoped permissions. One compromised agent cannot access another agent's cards, IBANs, or funds. Agent credentials can be rotated independently without affecting other agents.",
  },
  {
    label: "Audit trail",
    value: "Full compliance log",
    desc: "Every action is logged with timestamp, actor (user or agent), resource affected, and context. Audit logs are immutable and retained for 7+ years. Exportable as CSV or JSON. Stream live with the audit log command.",
  },
];

const compliance = [
  {
    title: "PCI DSS",
    desc: "Card data handling follows PCI DSS requirements. Encryption at rest, tokenization in transit, and strict access controls.",
    status: "Compliant",
  },
  {
    title: "GDPR",
    desc: "Full compliance with EU data protection regulations. Data minimization, right to erasure, and data portability supported.",
    status: "Compliant",
  },
  {
    title: "SOC 2 Type II",
    desc: "Security, availability, and confidentiality controls independently audited. Comprehensive controls for financial data handling.",
    status: "In progress",
  },
];

export default function SecurityPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="max-w-[1120px] mx-auto px-8 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.04)_0%,transparent_65%)] -top-[200px] left-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="relative z-10">
          <SectionLabel>Security</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
            Security is not a feature.
            <br />
            It&apos;s the foundation.
          </h1>
          <p className="text-zinc-500 max-w-xl text-base leading-relaxed">
            Financial data demands the highest standard of protection. Every
            layer of DoVisual is designed with security as the default, not an
            afterthought.
          </p>
        </div>
      </section>

      <Divider />

      {/* Security Architecture */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <SectionLabel>Security Architecture</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          Six layers of protection.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {securityFeatures.map((item) => (
            <div
              key={item.label}
              className="bg-zinc-950 border border-white/[0.08] rounded-xl p-8 hover:border-primary/20 transition-colors"
            >
              <div className="text-[11px] text-zinc-600 uppercase tracking-wider mb-1">
                {item.label}
              </div>
              <div className="font-mono text-sm text-primary font-semibold mb-3">
                {item.value}
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* Compliance */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <SectionLabel>Compliance</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          Standards and certifications.
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {compliance.map((item) => (
            <div
              key={item.title}
              className="bg-zinc-950 border border-white/[0.08] rounded-xl p-8"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="font-bold text-base">{item.title}</div>
                <span
                  className={`text-[10px] font-mono px-2 py-0.5 rounded uppercase tracking-wider ${
                    item.status === "Compliant"
                      ? "bg-primary/10 border border-primary/20 text-primary"
                      : "bg-yellow-400/10 border border-yellow-400/20 text-yellow-400"
                  }`}
                >
                  {item.status}
                </span>
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* Responsible Disclosure */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <div className="relative bg-zinc-950 border border-white/[0.08] rounded-[20px] p-16 overflow-hidden">
          <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.06)_0%,transparent_65%)] -top-[200px] left-1/2 -translate-x-1/2 pointer-events-none" />
          <div className="relative z-10 max-w-2xl">
            <SectionLabel>Responsible Disclosure</SectionLabel>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              Found a vulnerability?
            </h2>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              We take security reports seriously. If you&apos;ve found a
              vulnerability in our platform, please report it responsibly. We
              commit to acknowledging reports within 24 hours and providing a
              resolution timeline within 72 hours.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:security@dovisual.com"
                className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:brightness-110 transition-all text-sm"
              >
                security@dovisual.com
              </a>
              <a
                href="/privacy"
                className="px-6 py-3 border border-white/[0.08] text-zinc-500 font-semibold rounded-lg hover:border-white/[0.15] hover:text-white transition-all text-sm"
              >
                Read Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

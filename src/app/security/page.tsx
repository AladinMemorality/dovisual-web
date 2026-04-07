import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { SectionLabel } from "@/components/SectionLabel";
import { Divider } from "@/components/Divider";

export const metadata: Metadata = {
  title: "Security",
  description:
    "Security architecture for DoVisual. PIN authentication, JWT tokens, encrypted connections, and device isolation.",
};

const securityFeatures = [
  {
    label: "Credentials at rest",
    value: "Hashed + encrypted",
    desc: "PIN codes are hashed before storage. JWT secrets use 256-bit keys. Server configuration is stored with restricted file permissions (mode 0600). No plaintext credentials.",
  },
  {
    label: "Authentication",
    value: "PIN + JWT",
    desc: "6-digit PIN for initial authentication. JWT tokens issued per device with configurable expiry (default 7 days). No passwords — PIN-based auth is simpler and more secure for mobile.",
  },
  {
    label: "Transport security",
    value: "TLS 1.3 + WSS",
    desc: "All API calls over HTTPS with TLS 1.3. Terminal sessions over secure WebSocket (WSS). nginx handles SSL termination with Let's Encrypt certificates.",
  },
  {
    label: "AI permissions",
    value: "Human-in-the-loop",
    desc: "Every destructive AI action requires your explicit approval via the mobile app. Read-only operations execute instantly. You control what Claude Code can do.",
  },
  {
    label: "Device isolation",
    value: "Per-device tokens",
    desc: "Each connected device receives its own JWT with a unique device ID. Compromised devices can be revoked independently without affecting other sessions.",
  },
  {
    label: "Access logging",
    value: "Full audit trail",
    desc: "Every API request is authenticated and logged. Device tracking records last active time. Token revocation is immediate and permanent.",
  },
];

const compliance = [
  {
    title: "SOC 2 Type II",
    desc: "Security, availability, and confidentiality controls independently audited. Comprehensive controls for infrastructure management platforms.",
    status: "In progress",
  },
  {
    title: "GDPR",
    desc: "Full compliance with EU data protection regulations. Data minimization, right to erasure, and data portability supported.",
    status: "Compliant",
  },
  {
    title: "ISO 27001",
    desc: "Information security management system certification for infrastructure management platforms.",
    status: "Planned",
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
            Infrastructure management demands the highest standard of
            protection. Every layer of DoVisual is designed with security as the
            default, not an afterthought.
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
                className="px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:brightness-110 transition-all text-sm"
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

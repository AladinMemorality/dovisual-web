import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { SectionLabel } from "@/components/SectionLabel";
import { Divider } from "@/components/Divider";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "Release notes and version history for the DoVisual platform.",
};

const releases = [
  {
    version: "v1.0.4",
    date: "March 2026",
    tag: "Latest",
    changes: [
      "MCP tool count expanded to 25+ (added policy management, crypto rates, audit streaming)",
      "Crypto on/off ramp stabilized for USDC and USDT",
      "Added real-time exchange rate preview before crypto conversion",
      "Improved audit log streaming with --follow flag",
      "Bug fix: card cancellation now releases hold immediately",
    ],
  },
  {
    version: "v1.0.3",
    date: "February 2026",
    changes: [
      "Programmable policy engine launched (per-txn limits, daily caps, MCC restrictions)",
      "Added MCC restriction support for merchant category filtering",
      "Policy stacking: most restrictive rule wins across org and agent layers",
      "Improved audit log export (CSV and JSON formats)",
      "Bug fix: IBAN balance query now reflects pending transactions",
    ],
  },
  {
    version: "v1.0.2",
    date: "January 2026",
    changes: [
      "Multi-currency IBAN support: GBP, EUR, and USD",
      "Credit allocation per agent with configurable limits",
      "Inter-agent fund transfers between IBANs",
      "Added --single-use flag for one-time virtual cards",
      "Performance: card issuance latency reduced to under 2 seconds",
    ],
  },
  {
    version: "v1.0.1",
    date: "December 2025",
    changes: [
      "Python SDK beta release with Pydantic models",
      "Node.js SDK updated with full TypeScript types",
      "LangChain integration recipe published",
      "Added agent framework detection on registration",
      "Bug fix: JWT refresh now handled automatically in SDKs",
    ],
  },
  {
    version: "v1.0.0",
    date: "November 2025",
    tag: "Initial Release",
    changes: [
      "CLI launch with 8 resource group commands",
      "MCP server integration (11 initial tools)",
      "Virtual card issuance (GBP single-currency)",
      "KYA agent registration and identity layer",
      "Magic link authentication with 15-minute expiry tokens",
      "AES-256-GCM encryption for card data at rest",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="max-w-[1120px] mx-auto px-8 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.04)_0%,transparent_65%)] -top-[200px] left-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="relative z-10">
          <SectionLabel>Changelog</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
            What&apos;s new.
          </h1>
          <p className="text-zinc-500 max-w-xl text-base leading-relaxed">
            Release notes and version history for the DoVisual platform.
          </p>
        </div>
      </section>

      <Divider />

      {/* Timeline */}
      <section className="max-w-[860px] mx-auto px-8 py-28">
        <div className="space-y-12">
          {releases.map((release, i) => (
            <div key={release.version} className="relative">
              {/* Vertical connector */}
              {i < releases.length - 1 && (
                <div className="absolute left-[7px] top-[32px] bottom-[-48px] w-px bg-zinc-800" />
              )}

              <div className="flex items-start gap-6">
                {/* Timeline dot */}
                <div className="mt-1.5 shrink-0">
                  <div
                    className={`w-[15px] h-[15px] rounded-full border-2 ${
                      i === 0
                        ? "border-primary bg-primary/20"
                        : "border-white/[0.10] bg-zinc-900"
                    }`}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-mono text-lg font-bold text-white">
                      {release.version}
                    </span>
                    {release.tag && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary uppercase tracking-wider">
                        {release.tag}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-zinc-600 mb-4">
                    {release.date}
                  </div>
                  <ul className="space-y-2">
                    {release.changes.map((change) => (
                      <li
                        key={change}
                        className="flex items-start gap-2.5 text-sm text-zinc-400"
                      >
                        <span className="text-primary mt-0.5 shrink-0">
                          &rsaquo;
                        </span>
                        {change}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}

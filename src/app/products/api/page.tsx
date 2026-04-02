import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { SectionLabel } from "@/components/SectionLabel";
import { Divider } from "@/components/Divider";
import { Terminal } from "@/components/Terminal";

export const metadata: Metadata = {
  title: "REST API",
  description:
    "RESTful API for programmatic access to cards, IBANs, credit, payments, and agent management.",
};

const endpoints = [
  {
    group: "/agents",
    methods: "POST GET",
    desc: "Register agents, list agents, retrieve agent details and credentials.",
  },
  {
    group: "/cards",
    methods: "POST GET DELETE",
    desc: "Issue virtual cards, retrieve PAN/CVV, freeze, cancel, and list transactions.",
  },
  {
    group: "/ibans",
    methods: "POST GET",
    desc: "Provision virtual IBANs, check balances, transfer funds between accounts.",
  },
  {
    group: "/credit",
    methods: "POST GET",
    desc: "View credit line status, allocate credit to agents, check repayment schedule.",
  },
  {
    group: "/policies",
    methods: "POST GET DELETE",
    desc: "Create spending policies, list active rules, remove policies by ID.",
  },
  {
    group: "/invoices",
    methods: "POST GET",
    desc: "List pending invoices, trigger payment, track settlement status.",
  },
  {
    group: "/crypto",
    methods: "POST GET",
    desc: "Get exchange rates, fund cards from USDC/USDT, retrieve deposit addresses.",
  },
  {
    group: "/audit",
    methods: "GET",
    desc: "Query audit log with filters for agent, type, date range. Export as CSV or JSON.",
  },
  {
    group: "/auth",
    methods: "POST GET",
    desc: "Send magic links, verify tokens, check session status, and validate API keys.",
  },
];

export default function ApiPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="max-w-[1120px] mx-auto px-8 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.04)_0%,transparent_65%)] -top-[200px] left-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="relative z-10">
          <SectionLabel>REST API</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
            Programmatic access
            <br />
            to every capability.
          </h1>
          <p className="text-zinc-500 max-w-xl text-base leading-relaxed">
            Every CLI command maps to a REST endpoint. Authenticate with API
            keys, manage agents, cards, IBANs, credit, and payments
            programmatically. Available on the Pro plan.
          </p>
        </div>
      </section>

      <Divider />

      {/* Authentication */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <SectionLabel>Authentication</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          API key authentication.
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-zinc-950 border border-white/[0.08] rounded-xl p-8">
            <div className="font-mono text-sm text-primary font-semibold mb-3">
              Bearer Token
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed mb-4">
              Login via the CLI, then use{" "}
              <span className="font-mono text-zinc-300">dovi auth token</span>{" "}
              to get your bearer token. Include it in the Authorization header
              for all API requests.
            </p>
            <div className="font-mono text-[13px] bg-black rounded-lg p-4 border border-white/[0.08] text-zinc-400 space-y-0.5">
              <div>
                <span className="text-primary">$ </span>dovi auth
              </div>
              <div>
                <span className="text-primary">$ </span>dovi auth token
              </div>
              <div className="text-zinc-600">eyJhbG...</div>
            </div>
          </div>
          <div className="bg-zinc-950 border border-white/[0.08] rounded-xl p-8">
            <div className="font-mono text-sm text-primary font-semibold mb-3">
              Per-Agent Scoping
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed mb-4">
              Optionally scope API calls to a specific agent by including the
              agent ID in the header. This ensures agent-level isolation and
              audit trail attribution.
            </p>
            <div className="font-mono text-[13px] bg-black rounded-lg p-4 border border-white/[0.08] text-zinc-400">
              X-Agent-Id: agent_procurement_bot
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Endpoints */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <SectionLabel>Endpoints</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-3">
          Nine resource groups.
        </h2>
        <p className="text-zinc-500 max-w-xl mb-12 text-sm">
          Base URL:{" "}
          <span className="font-mono text-primary">
            https://api.dovisual.com/v1
          </span>
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {endpoints.map((ep) => (
            <div
              key={ep.group}
              className="bg-zinc-950 border border-white/[0.08] rounded-xl p-6 hover:border-primary/20 transition-colors"
            >
              <div className="font-mono text-sm font-semibold text-primary mb-1">
                {ep.group}
              </div>
              <div className="flex gap-1.5 mb-2">
                {ep.methods.split(" ").map((m) => (
                  <span
                    key={m}
                    className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-zinc-900 border border-white/[0.08] text-yellow-400"
                  >
                    {m}
                  </span>
                ))}
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {ep.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* Example */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <div className="bg-zinc-950 border border-white/[0.08] rounded-2xl p-10 grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
          <div className="space-y-3">
            <SectionLabel>Example</SectionLabel>
            <h3 className="text-2xl font-bold tracking-tight leading-tight">
              Create a card
              <br />
              in one request.
            </h3>
            <p className="text-zinc-500 text-sm">
              POST to /v1/cards with amount, currency, and agent ID. Get back a
              full card object with PAN, CVV, and expiry.
            </p>
          </div>
          <Terminal label="curl">
            <div className="space-y-0">
              <div>
                <span className="text-primary">$ </span>
                <span className="text-zinc-300">curl -X POST \</span>
              </div>
              <div>
                <span className="text-zinc-300">
                  &nbsp; https://api.dovisual.com/v1/cards \
                </span>
              </div>
              <div>
                <span className="text-zinc-300">
                  &nbsp; -H{" "}
                </span>
                <span className="text-yellow-400">
                  &quot;Authorization: Bearer eyJhbG...&quot;
                </span>
                <span className="text-zinc-300"> \</span>
              </div>
              <div>
                <span className="text-zinc-300">
                  &nbsp; -d{" "}
                </span>
                <span className="text-blue-400">
                  {
                    '\'{"amount":200,"currency":"eur","agent":"procurement-bot"}\''
                  }
                </span>
              </div>
              <div>&nbsp;</div>
              <div className="text-zinc-600">
                {"// Response"}
              </div>
              <div className="text-zinc-400">
                {"{"}&nbsp;
                <span className="text-primary">&quot;id&quot;</span>:{" "}
                <span className="text-blue-400">
                  &quot;card_eur_3kf9a&quot;
                </span>
                ,
              </div>
              <div className="text-zinc-400">
                &nbsp;&nbsp;
                <span className="text-primary">&quot;last4&quot;</span>:{" "}
                <span className="text-blue-400">&quot;8391&quot;</span>,
              </div>
              <div className="text-zinc-400">
                &nbsp;&nbsp;
                <span className="text-primary">&quot;balance&quot;</span>:{" "}
                <span className="text-blue-400">200.00</span>,
              </div>
              <div className="text-zinc-400">
                &nbsp;&nbsp;
                <span className="text-primary">&quot;currency&quot;</span>:{" "}
                <span className="text-blue-400">&quot;eur&quot;</span>,
              </div>
              <div className="text-zinc-400">
                &nbsp;&nbsp;
                <span className="text-primary">&quot;status&quot;</span>:{" "}
                <span className="text-blue-400">&quot;active&quot;</span>
                {" }"}
              </div>
            </div>
          </Terminal>
        </div>
      </section>

      <Divider />

      {/* Rate Limits */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <SectionLabel>Rate Limits &amp; Versioning</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          Built for scale.
        </h2>

        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-zinc-950 border border-white/[0.08] rounded-xl p-6">
            <div className="text-[11px] text-zinc-600 uppercase tracking-wider mb-1">
              Rate limit
            </div>
            <div className="font-mono text-sm text-primary font-semibold mb-1.5">
              1,000 req/min
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Per API key. Burst up to 100 concurrent requests. Higher limits
              available on Enterprise.
            </p>
          </div>
          <div className="bg-zinc-950 border border-white/[0.08] rounded-xl p-6">
            <div className="text-[11px] text-zinc-600 uppercase tracking-wider mb-1">
              API version
            </div>
            <div className="font-mono text-sm text-primary font-semibold mb-1.5">
              v1 (stable)
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              Versioned via URL path. Breaking changes ship in new versions.
              Old versions supported for 12 months.
            </p>
          </div>
          <div className="bg-zinc-950 border border-white/[0.08] rounded-xl p-6">
            <div className="text-[11px] text-zinc-600 uppercase tracking-wider mb-1">
              Pagination
            </div>
            <div className="font-mono text-sm text-primary font-semibold mb-1.5">
              Cursor-based
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              All list endpoints support cursor pagination. Default page size:
              50. Max: 200.
            </p>
          </div>
        </div>
      </section>

      <Divider />

      {/* CTA */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <div className="relative bg-zinc-950 border border-white/[0.08] rounded-[20px] p-16 text-center overflow-hidden">
          <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.06)_0%,transparent_65%)] -top-[200px] left-1/2 -translate-x-1/2 pointer-events-none" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight relative z-10">
            Start building with the API.
          </h2>
          <p className="text-zinc-500 mt-4 mb-8 max-w-md mx-auto text-sm relative z-10">
            Full REST API access included with the Pro plan.
          </p>
          <div className="flex justify-center gap-3 relative z-10">
            <a
              href="/docs"
              className="px-6 py-3 border border-white/[0.08] text-zinc-500 font-semibold rounded-lg hover:border-white/[0.15] hover:text-white transition-all text-sm"
            >
              Read the docs
            </a>
            <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:brightness-110 transition-all text-sm">
              Upgrade to Pro
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

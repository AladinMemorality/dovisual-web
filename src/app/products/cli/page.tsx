import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { SectionLabel } from "@/components/SectionLabel";
import { Divider } from "@/components/Divider";
import { Terminal } from "@/components/Terminal";
import { GetStartedButton } from "@/components/InstallModal";

export const metadata: Metadata = {
  title: "CLI & MCP",
  description:
    "Command-line interface and Model Context Protocol integration for AI agent payments. 8 resource groups, 25+ MCP tools.",
};

const commands = [
  {
    name: "dovi agents register",
    desc: "Register an AI agent with KYA identity. Returns scoped credentials. Required before any financial activity.",
    flags: ["--name", "--framework", "--purpose"],
  },
  {
    name: "dovi cards create",
    desc: "Issue a virtual Mastercard. Single-use or persistent. Multi-currency. Funded from balance, credit, or stablecoins.",
    flags: ["--amount", "--currency", "--agent", "--single-use"],
  },
  {
    name: "dovi ibans create",
    desc: "Provision a virtual IBAN for an agent. Receive SEPA, Faster Payments, or wire transfers directly.",
    flags: ["--currency", "--agent", "--label"],
  },
  {
    name: "dovi credit allocate",
    desc: "Distribute your business credit line to an agent. The agent creates credit-backed cards up to the allocated amount.",
    flags: ["--agent", "--amount", "--currency"],
  },
  {
    name: "dovi crypto fund",
    desc: "Convert USDC or USDT to fiat and deposit into a card or IBAN. Real-time exchange rate shown before confirmation.",
    flags: ["--to", "--amount", "--token"],
  },
  {
    name: "dovi policies create",
    desc: "Define a programmable spending policy: per-txn limits, daily caps, merchant restrictions, approval thresholds.",
    flags: ["--max-txn", "--daily-limit", "--allowed-mcc"],
  },
  {
    name: "dovi invoices pay",
    desc: "Trigger payment for a verified invoice. Supports multi-currency and extended 90-day interest-free terms.",
    flags: ["--source", "--agent"],
  },
  {
    name: "dovi audit log --follow",
    desc: "Stream the live audit log. Every transaction, card creation, policy change, and anomaly alert in real time.",
    flags: ["--agent", "--since", "--type"],
  },
];

const mcpTools = [
  ["create_card", "Issue a virtual card for an agent"],
  ["create_iban", "Provision a virtual IBAN"],
  ["get_card_details", "Retrieve PAN, CVV, expiry on demand"],
  ["check_balance", "Query card or IBAN balance"],
  ["freeze_card", "Instant freeze / unfreeze a card"],
  ["transfer_funds", "Move funds between IBANs"],
  ["credit_status", "View credit line details"],
  ["allocate_credit", "Assign credit to an agent"],
  ["fund_from_crypto", "Convert stablecoin to fiat"],
  ["pay_invoice", "Trigger supplier payment"],
  ["list_transactions", "View transaction history"],
  ["register_agent", "Register a new AI agent (KYA)"],
  ["list_agents", "List all registered agents"],
  ["get_agent", "Get details of a specific agent"],
  ["create_policy", "Create a spending policy"],
  ["list_policies", "List all active policies"],
  ["delete_policy", "Remove a spending policy"],
  ["list_cards", "List all active cards"],
  ["cancel_card", "Cancel a virtual card"],
  ["list_ibans", "List all virtual IBANs"],
  ["get_iban", "Get IBAN details and balance"],
  ["list_invoices", "List pending invoices"],
  ["get_audit_log", "Retrieve audit log entries"],
  ["crypto_rates", "Get real-time exchange rates"],
  ["crypto_deposit_address", "Get deposit address for funding"],
];

export default function CliPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="max-w-[1120px] mx-auto px-8 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.04)_0%,transparent_65%)] -top-[200px] left-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="relative z-10">
          <SectionLabel>CLI &amp; MCP</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
            One interface for
            <br />
            humans and agents.
          </h1>
          <p className="text-zinc-500 max-w-xl text-base leading-relaxed">
            Every CLI command is also an MCP tool and a REST API endpoint. The
            CLI is your interface. The MCP server is the agent&apos;s interface.
            Same backend.
          </p>
        </div>
      </section>

      <Divider />

      {/* Install */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <div className="bg-zinc-950 border border-white/[0.08] rounded-2xl p-10 grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
          <div className="space-y-3">
            <SectionLabel>Get started</SectionLabel>
            <h3 className="text-2xl font-bold tracking-tight leading-tight">
              Up and running
              <br />
              in three commands
            </h3>
            <p className="text-zinc-500 text-sm">
              Install the CLI, authenticate, connect to your AI agent.
              Everything after that is handled by your agent.
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
                <span className="text-zinc-500">
                  &nbsp; Enter your email{" "}
                </span>
                <span className="text-blue-400">&rarr;</span>
                <span className="text-zinc-500"> click the magic link </span>
                <span className="text-blue-400">&rarr;</span>
                <span className="text-primary"> authenticated</span>
              </div>
              <div>
                <span className="text-primary">$ </span>
                <span className="text-zinc-300">dovi setup-mcp</span>
              </div>
              <div className="text-primary">
                &nbsp; &#10003; MCP config written
              </div>
              <div className="text-primary">
                &nbsp; &#10003; 35 tools registered
              </div>
              <div className="text-primary">
                &nbsp; &#10003; Ready to connect to Claude
              </div>
            </div>
          </Terminal>
        </div>
      </section>

      <Divider />

      {/* CLI Commands */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <SectionLabel>CLI Commands</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-3">
          Eight resource groups.
          <br />
          One unified interface.
        </h2>
        <p className="text-zinc-500 max-w-xl mb-12 text-sm">
          Manage agents, cards, IBANs, credit, crypto, policies, invoices, and
          audit logs from a single CLI.
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {commands.map((cmd) => (
            <div
              key={cmd.name}
              className="bg-zinc-950 border border-white/[0.08] rounded-xl p-6 hover:border-primary/20 transition-colors"
            >
              <div className="font-mono text-sm font-semibold text-primary mb-1.5">
                {cmd.name}
              </div>
              <div className="text-sm text-zinc-500 leading-relaxed mb-2.5">
                {cmd.desc}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cmd.flags.map((flag) => (
                  <span
                    key={flag}
                    className="font-mono text-[11px] px-2 py-0.5 rounded bg-zinc-900 border border-white/[0.08] text-yellow-400"
                  >
                    {flag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* MCP Tools */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <div className="bg-zinc-950 border border-white/[0.08] rounded-2xl p-10 grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
          <div className="space-y-3">
            <SectionLabel>MCP Integration</SectionLabel>
            <h3 className="text-2xl font-bold tracking-tight leading-tight">
              35 tools for Claude.
              <br />
              Zero configuration.
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Run <span className="font-mono text-primary">dovi setup-mcp</span>{" "}
              and Claude gets direct access to every capability. Destructive
              actions require your approval. Read-only actions execute instantly.
            </p>
          </div>
          <Terminal label="registered MCP tools">
            <div className="space-y-0">
              {mcpTools.map(([name, desc]) => (
                <div key={name} className="flex">
                  <span className="text-primary inline-block min-w-[26ch]">
                    &nbsp; {name}
                  </span>
                  <span className="text-zinc-500">{desc}</span>
                </div>
              ))}
            </div>
          </Terminal>
        </div>
      </section>

      <Divider />

      {/* CTA */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <div className="relative bg-zinc-950 border border-white/[0.08] rounded-[20px] p-16 text-center overflow-hidden">
          <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.06)_0%,transparent_65%)] -top-[200px] left-1/2 -translate-x-1/2 pointer-events-none" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight relative z-10">
            Install the CLI. Connect your agent.
          </h2>
          <p className="text-zinc-500 mt-4 mb-8 max-w-md mx-auto text-sm relative z-10">
            Three commands. No credit card required.
          </p>
          <GetStartedButton className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:brightness-110 transition-all text-sm relative z-10">
            Get started free
          </GetStartedButton>
        </div>
      </section>
    </PageLayout>
  );
}

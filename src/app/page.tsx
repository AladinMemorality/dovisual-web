import type { Metadata } from "next";
import { Logo } from "@/components/Logo";
import { Terminal } from "@/components/Terminal";
import { HeroTerminal } from "@/components/HeroTerminal";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Divider } from "@/components/Divider";
import { FaqItem } from "@/components/FaqItem";
import { HowItWorks } from "@/components/HowItWorks";
import { GetStartedButton, ConnectClaudeButton } from "@/components/InstallModal";

export const metadata: Metadata = {
  title: {
    absolute: "DoVisual — Payment infrastructure for AI agents",
  },
  description:
    "Cards, IBANs, credit lines, and crypto rails for autonomous AI agents. Issue a card in seconds, hand the details to any agent, spend anywhere Mastercard is accepted.",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DoVisual",
    url: "https://dovisual.com",
    logo: "https://dovisual.com/og.png",
    description:
      "Payment infrastructure for autonomous AI agents.",
    sameAs: [],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Nav */}
      <Nav />

      <main className="pt-[57px]">
        {/* Marquee */}
        <div className="bg-zinc-950 border-b border-white/[0.06] overflow-hidden whitespace-nowrap py-2.5">
          <div className="flex animate-marquee">
            {[0, 1].map((i) => (
              <div
                key={i}
                className="flex items-center gap-10 px-4 font-mono text-[11px] tracking-wide"
              >
                <span className="text-primary font-medium">
                  Free tier available
                </span>
                <span className="text-zinc-700">/</span>
                <span className="text-zinc-600">
                  Cards + IBANs + Credit + Crypto
                </span>
                <span className="text-zinc-700">/</span>
                <span className="text-primary font-medium">
                  MCP integration included
                </span>
                <span className="text-zinc-700">/</span>
                <span className="text-zinc-600">
                  Multi-currency: GBP, EUR, USD
                </span>
                <span className="text-zinc-700">/</span>
                <span className="text-primary font-medium">25+ MCP tools</span>
                <span className="text-zinc-700">/</span>
                <span className="text-zinc-600">API access on Pro</span>
                <span className="text-zinc-700">/</span>
                <span className="text-primary font-medium">
                  KYA agent registry
                </span>
                <span className="text-zinc-700">/</span>
                <span className="text-zinc-600">
                  90-day interest-free credit
                </span>
                <span className="text-zinc-700">/</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero */}
        <section className="max-w-[1120px] mx-auto px-8 pt-32 pb-20 relative overflow-visible">
          <div className="absolute w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.05)_0%,transparent_65%)] -top-[200px] left-1/2 -translate-x-1/2 pointer-events-none" />
          <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[11px] tracking-widest uppercase font-medium">
                <span className="w-[5px] h-[5px] rounded-full bg-primary animate-pulse" />
                Now in beta
              </div>
              <h1 className="font-black font-headline tracking-tighter leading-[1.08] text-white text-4xl md:text-5xl lg:text-[clamp(2.4rem,6vw,4.2rem)]">
                Your AI agent
                <br />
                <span className="bg-gradient-to-br from-white/90 to-zinc-500 bg-clip-text text-transparent">
                  can pay for anything
                </span>
                <span className="text-primary">.</span>
              </h1>
              <p className="text-base md:text-lg text-zinc-500 max-w-[520px] leading-relaxed">
                Cards, IBANs, credit lines, and crypto rails for autonomous AI
                agents. Issue a card in seconds, hand the details to any agent,
                spend anywhere Mastercard is accepted.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <GetStartedButton className="px-5 py-2.5 bg-primary text-white font-semibold rounded-lg hover:brightness-110 transition-all text-sm">
                  Get started free
                </GetStartedButton>
                <ConnectClaudeButton className="px-5 py-2.5 border border-white/[0.08] text-zinc-500 font-semibold rounded-lg hover:border-white/[0.15] hover:text-white transition-all text-sm">
                  Connect to Claude
                </ConnectClaudeButton>
              </div>
            </div>
            <HeroTerminal />
          </div>
        </section>

        <Divider />

        {/* Install */}
        <section className="max-w-[1120px] mx-auto px-8 py-28">
          <div className="bg-zinc-950 border border-white/[0.08] rounded-2xl p-10 grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
            <div className="space-y-3">
              <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase flex items-center gap-3">
                <span className="w-5 h-px bg-primary" />
                Get started
              </span>
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
                  <span className="text-zinc-500">
                    {" "}
                    click the magic link{" "}
                  </span>
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
        <section id="commands" className="max-w-[1120px] mx-auto px-8 py-28">
          <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase flex items-center gap-3 mb-3">
            <span className="w-5 h-px bg-primary" />
            CLI &amp; MCP
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-3">
            Seven resource groups.
            <br />
            One unified interface.
          </h2>
          <p className="text-zinc-500 max-w-xl mb-12 text-sm">
            Every CLI command is also an MCP tool and a REST API endpoint. The
            CLI is your interface. The MCP server is the agent&apos;s interface.
            Same backend.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
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
            ].map((cmd) => (
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

        {/* MCP Integration */}
        <section className="max-w-[1120px] mx-auto px-8 py-28">
          <div className="bg-zinc-950 border border-white/[0.08] rounded-2xl p-10 grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
            <div className="space-y-3">
              <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase flex items-center gap-3">
                <span className="w-5 h-px bg-primary" />
                MCP Integration
              </span>
              <h3 className="text-2xl font-bold tracking-tight leading-tight">
                Connect to Claude.
                <br />
                One command.
              </h3>
              <p className="text-zinc-500 text-sm">
                Give Claude direct access to cards, IBANs, credit, and payments.
                25+ tools registered. Destructive actions require your approval.
                Read-only actions execute instantly.
              </p>
            </div>
            <Terminal label="what Claude sees">
              <div className="space-y-0">
                {[
                  ["create_card", "Issue a virtual card"],
                  ["create_iban", "Provision a virtual IBAN"],
                  ["get_card_details", "PAN, CVV, expiry on demand"],
                  ["check_balance", "Card or IBAN balance"],
                  ["freeze_card", "Instant freeze / unfreeze"],
                  ["transfer_funds", "Move funds between IBANs"],
                  ["credit_status", "View credit line details"],
                  ["allocate_credit", "Assign credit to an agent"],
                  ["fund_from_crypto", "Stablecoin to fiat"],
                  ["pay_invoice", "Trigger supplier payment"],
                  ["list_transactions", "View transaction history"],
                ].map(([name, desc]) => (
                  <div key={name} className="flex">
                    <span className="text-primary inline-block min-w-[22ch]">
                      &nbsp; {name}
                    </span>
                    <span className="text-zinc-500">{desc}</span>
                  </div>
                ))}
                <div className="text-zinc-700">&nbsp; ... +14 more tools</div>
              </div>
            </Terminal>
          </div>
        </section>

        <Divider />

        {/* How it works */}
        <HowItWorks />

        <Divider />

        {/* Why aiPay */}
        <section className="max-w-[1120px] mx-auto px-8 py-28">
          <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase flex items-center gap-3 mb-3">
            <span className="w-5 h-px bg-primary" />
            Why DoVisual
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-12">
            Not just cards.
            <br />A full financial stack.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                n: "01",
                title: "Instant issuance",
                desc: "Virtual cards ready in seconds. No waiting, no manual approval queues, no delays. Fund and issue in one command.",
              },
              {
                n: "02",
                title: "Multi-currency native",
                desc: "Issue cards and IBANs in GBP, EUR, and USD. Spend in any currency globally. FX conversion built in.",
              },
              {
                n: "03",
                title: "Credit lines, not just pre-funding",
                desc: "Business credit with 90-day interest-free terms. Agents spend on credit. No need to pre-fund every card from your bank account.",
              },
              {
                n: "04",
                title: "Virtual IBANs per agent",
                desc: "Each agent gets its own bank account. Receive payments, settlements, and refunds. Transfer between agents instantly.",
              },
              {
                n: "05",
                title: "Programmable policies",
                desc: "MCC restrictions, amount thresholds, time windows, auto-approval rules. Policies stack. Most restrictive wins.",
              },
              {
                n: "06",
                title: "Crypto on/off ramp",
                desc: "Fund agent cards from USDC or USDT. Settle agent-to-agent payments on-chain. Emerging market rails included.",
              },
              {
                n: "07",
                title: "Human in the loop",
                desc: "You authorize every card creation and every payment. Agents propose, you approve. Below-threshold actions auto-execute.",
              },
              {
                n: "08",
                title: "Built for every agent",
                desc: "MCP integration for Claude, Cursor, and any MCP runtime. REST API and SDKs for LangChain, CrewAI, AutoGen, and custom agents.",
              },
            ].map((item) => (
              <div
                key={item.n}
                className="bg-zinc-950 border border-white/[0.08] rounded-xl p-6 hover:border-primary/20 transition-colors"
              >
                <div className="text-xs font-mono text-zinc-600 mb-2">
                  {item.n}
                </div>
                <h4 className="font-bold text-sm mb-1.5">{item.title}</h4>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* Security */}
        <section className="max-w-[1120px] mx-auto px-8 py-28">
          <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase flex items-center gap-3 mb-3">
            <span className="w-5 h-px bg-primary" />
            Security
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            Your data, your rules.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                label: "Card data at rest",
                value: "AES-256-GCM",
                desc: "PAN and CVV encrypted with a random IV per field. Decrypted only on your explicit request.",
              },
              {
                label: "Authentication",
                value: "Magic links + API keys",
                desc: "32-byte cryptographically random tokens. One-use, 15-minute expiry. No passwords stored.",
              },
              {
                label: "Session tokens",
                value: "JWT HS256",
                desc: "Signed with a 256-bit secret. Stored locally at mode 0600. 30-day expiry.",
              },
              {
                label: "MCP access",
                value: "Per-request JWT",
                desc: "Every MCP request is authenticated with your JWT. No shared credentials between users or agents.",
              },
              {
                label: "Agent isolation",
                value: "Scoped credentials",
                desc: "Each agent gets its own API key. One compromised agent cannot access another agent's cards or funds.",
              },
              {
                label: "Audit trail",
                value: "Full compliance log",
                desc: "Every action logged with timestamp, actor, and context. Exportable as CSV or JSON for compliance.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-zinc-950 border border-white/[0.08] rounded-xl p-5"
              >
                <div className="text-[11px] text-zinc-600 uppercase tracking-wider mb-1">
                  {item.label}
                </div>
                <div className="font-mono text-sm text-primary font-semibold mb-1.5">
                  {item.value}
                </div>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Divider />

        {/* Pricing */}
        <section id="pricing" className="max-w-[1120px] mx-auto px-8 py-28">
          <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase flex items-center gap-3 mb-3">
            <span className="w-5 h-px bg-primary" />
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            Start free. Scale when ready.
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
            {/* Free */}
            <div className="bg-zinc-950 border border-white/[0.08] rounded-2xl p-10">
              <div className="text-sm font-semibold text-zinc-500 mb-1">
                Free
              </div>
              <div className="text-5xl font-black tracking-tight">
                $0
                <span className="text-lg font-normal text-zinc-600">/mo</span>
              </div>
              <div className="text-sm text-zinc-600 mb-6">forever</div>
              <ul className="space-y-2 text-sm mb-8">
                {[
                  [true, "5 virtual cards / month"],
                  [true, "1 virtual IBAN"],
                  [true, "1 registered agent"],
                  [true, "MCP integration included"],
                  [true, "Human-in-the-loop approvals"],
                  [true, "AES-256-GCM encryption"],
                  [false, "API access"],
                  [false, "Credit lines"],
                  [false, "Crypto bridge"],
                ].map(([enabled, text], i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-2.5 ${enabled ? "text-zinc-300" : "text-zinc-600"}`}
                  >
                    <span
                      className={`w-[5px] h-[5px] rounded-full flex-shrink-0 ${enabled ? "bg-primary" : "bg-zinc-700"}`}
                    />
                    {text as string}
                  </li>
                ))}
              </ul>
              <GetStartedButton className="w-full py-2.5 border border-white/[0.08] text-zinc-500 font-semibold rounded-lg hover:border-white/[0.15] hover:text-white transition-all text-sm">
                Get started free
              </GetStartedButton>
            </div>

            {/* Pro */}
            <div className="bg-zinc-950 border border-primary/20 rounded-2xl p-10">
              <div className="text-sm font-semibold text-zinc-500 mb-1">
                Pro
              </div>
              <div className="text-5xl font-black tracking-tight">
                $49
                <span className="text-lg font-normal text-zinc-600">/mo</span>
              </div>
              <div className="text-sm text-zinc-600 mb-6">
                per organization
              </div>
              <ul className="space-y-2 text-sm mb-8">
                {[
                  "Unlimited virtual cards",
                  "Unlimited virtual IBANs",
                  "Unlimited agents",
                  "MCP integration included",
                  "Full REST API access",
                  "Programmable policy engine",
                  "Credit lines (subject to approval)",
                  "Crypto on/off ramp",
                  "Accounting integrations",
                  "Priority support",
                ].map((text, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2.5 text-zinc-300"
                  >
                    <span className="w-[5px] h-[5px] rounded-full bg-primary flex-shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
              <button className="w-full py-2.5 bg-primary text-white font-semibold rounded-lg hover:brightness-110 transition-all text-sm">
                Upgrade to Pro
              </button>
            </div>
          </div>
        </section>

        <Divider />

        {/* FAQ */}
        <section className="max-w-[860px] mx-auto px-8 py-28">
          <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase flex items-center gap-3 mb-3">
            <span className="w-5 h-px bg-primary" />
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
            Common questions.
          </h2>

          <FaqItem
            question="How does payment work?"
            answer="You fund your account via card, bank transfer, credit line, or stablecoins. When an agent creates a virtual card, funds are allocated from your balance or credit line. You're only charged for the actual transaction amount. Unused funds are released automatically."
            defaultOpen
          />
          <FaqItem
            question="Does the agent spend money without my permission?"
            answer="No. You authorize every card creation and payment before it happens. The agent proposes an action, and you approve or deny it in real time. You can set auto-approval thresholds for low-value, routine transactions."
          />
          <FaqItem
            question="What currencies are supported?"
            answer="Cards and IBANs can be issued in GBP, EUR, and USD. Agents can spend in any currency globally via Mastercard acceptance. FX conversion is handled automatically. Stablecoin funding supports USDC and USDT."
          />
          <FaqItem
            question="Which AI agents can use it?"
            answer="Any MCP-compatible agent (Claude, Cursor, any MCP runtime) connects with one command. The REST API and SDKs (Node.js, Python) support LangChain, CrewAI, AutoGen, and any custom agent framework."
          />
          <FaqItem
            question="How do credit lines work?"
            answer="Your business applies for a credit line (subject to approval via our AI credit engine). Once approved, you can allocate credit across your agent fleet. Agents create credit-backed cards. You get up to 90 days interest-free. Repay on your terms."
          />
          <FaqItem
            question="What is KYA (Know Your Agent)?"
            answer="KYA is our agent identity layer. Every AI agent must be registered before it can transact. Registration records the agent's name, framework, purpose, and assigns scoped credentials. This creates an auditable chain from agent action to human principal."
          />
          <FaqItem
            question="How is my card data protected?"
            answer="Card details are encrypted with AES-256-GCM at rest and only decrypted on your explicit request. Each agent gets isolated credentials. Full audit logging tracks every access. No raw card numbers are ever stored."
          />
        </section>

        <Divider />

        {/* CTA Banner */}
        <section className="max-w-[1120px] mx-auto px-8 py-28">
          <div className="relative bg-zinc-950 border border-white/[0.08] rounded-[20px] p-16 text-center overflow-hidden">
            <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.06)_0%,transparent_65%)] -top-[200px] left-1/2 -translate-x-1/2 pointer-events-none" />
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight relative z-10">
              Your agents are ready to transact.
              <br />
              Give them the infrastructure.
            </h2>
            <p className="text-zinc-500 mt-4 mb-8 max-w-md mx-auto text-sm relative z-10">
              Free to start. No credit card required. Three commands and your AI
              agent has its own financial stack.
            </p>
            <GetStartedButton className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:brightness-110 transition-all text-sm relative z-10">
              Get started free
            </GetStartedButton>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

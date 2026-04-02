import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { SectionLabel } from "@/components/SectionLabel";
import { Divider } from "@/components/Divider";
import { Terminal } from "@/components/Terminal";
import { GetStartedButton } from "@/components/InstallModal";

export const metadata: Metadata = {
  title: "Integrate",
  description:
    "Integrate AI agent payments via REST API, the dovisual npm package, or 35 MCP tools for Claude and other agent runtimes.",
};

const integrations = [
  {
    label: "REST API",
    title: "api.dovisual.com/v1",
    desc: "Call the API directly from any language. Bearer token auth, JSON request/response, 9 resource groups. Works with Python, Go, Ruby, Java — anything that speaks HTTP.",
    install: "curl -X POST https://api.dovisual.com/v1/cards",
    features: [
      "Bearer token authentication",
      "JSON request and response",
      "Works from any language or framework",
      "9 resource groups, 40+ endpoints",
    ],
  },
  {
    label: "npm Package",
    title: "dovisual",
    desc: "Install the CLI globally for terminal access, or use it to start the MCP server programmatically. Authenticate once, then script everything.",
    install: "npm install -g dovisual",
    features: [
      "8 CLI command groups",
      "MCP server built in",
      "Magic link or API key auth",
      "Node.js 18+ and Bun supported",
    ],
  },
  {
    label: "MCP Tools",
    title: "dovi setup-mcp",
    desc: "One command connects 35 tools to Claude Code, Claude Desktop, or any MCP-compatible agent. Zero-code integration — the agent uses tools directly.",
    install: "dovi setup-mcp",
    features: [
      "35 tools across 8 categories",
      "Works with Claude Code and Desktop",
      "Destructive actions require approval",
      "Read-only actions execute instantly",
    ],
  },
];

export default function SdksPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="max-w-[1120px] mx-auto px-8 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.04)_0%,transparent_65%)] -top-[200px] left-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="relative z-10">
          <SectionLabel>Integrate</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
            Integrate with
            <br />
            any stack.
          </h1>
          <p className="text-zinc-500 max-w-xl text-base leading-relaxed">
            Use the REST API directly, the{" "}
            <span className="font-mono text-zinc-300">dovisual</span> npm
            package, or connect via MCP. No SDK wrapper needed — the API is the
            SDK.
          </p>
        </div>
      </section>

      <Divider />

      {/* Integration Methods */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <SectionLabel>Three Ways In</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          Choose your interface.
        </h2>

        <div className="grid lg:grid-cols-3 gap-4">
          {integrations.map((int) => (
            <div
              key={int.label}
              className="bg-zinc-950 border border-white/[0.08] rounded-2xl p-8 flex flex-col"
            >
              <div className="text-[11px] uppercase tracking-[0.15em] text-zinc-600 font-semibold mb-2">
                {int.label}
              </div>
              <div className="font-mono text-sm text-primary font-semibold mb-3">
                {int.title}
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed mb-5">
                {int.desc}
              </p>
              <div className="font-mono text-[12px] bg-black rounded-lg px-4 py-3 border border-white/[0.08] text-zinc-400 mb-5">
                <span className="text-primary">$ </span>
                {int.install}
              </div>
              <ul className="mt-auto space-y-2 text-sm text-zinc-500">
                {int.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5">
                    <span className="w-[5px] h-[5px] rounded-full bg-primary flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* Quick Start — REST API */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <div className="bg-zinc-950 border border-white/[0.08] rounded-2xl p-10 grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
          <div className="space-y-3">
            <SectionLabel>Quick Start</SectionLabel>
            <h3 className="text-2xl font-bold tracking-tight leading-tight">
              Create a card
              <br />
              with one request.
            </h3>
            <p className="text-zinc-500 text-sm">
              Authenticate with a Bearer token, POST to{" "}
              <span className="font-mono text-primary">/v1/cards</span>, and get
              back a live virtual Mastercard. Works from any language.
            </p>
          </div>
          <Terminal label="app.ts">
            <div className="space-y-0">
              <div className="text-zinc-600">
                {"// Authenticate first: dovi auth token"}
              </div>
              <div>
                <span className="text-blue-400">const</span>
                <span className="text-zinc-300"> res = </span>
                <span className="text-blue-400">await</span>
                <span className="text-zinc-300">
                  {" fetch("}
                </span>
              </div>
              <div>
                <span className="text-yellow-400">
                  {"  'https://api.dovisual.com/v1/cards'"}
                </span>
                <span className="text-zinc-300">,</span>
              </div>
              <div>
                <span className="text-zinc-300">{"  {"}</span>
              </div>
              <div>
                <span className="text-zinc-300">{"    method: "}</span>
                <span className="text-yellow-400">{"'POST'"}</span>
                <span className="text-zinc-300">,</span>
              </div>
              <div>
                <span className="text-zinc-300">{"    headers: {"}</span>
              </div>
              <div>
                <span className="text-yellow-400">
                  {"      'Authorization'"}
                </span>
                <span className="text-zinc-300">: </span>
                <span className="text-yellow-400">
                  {"`Bearer ${token}`"}
                </span>
                <span className="text-zinc-300">,</span>
              </div>
              <div>
                <span className="text-yellow-400">
                  {"      'Content-Type'"}
                </span>
                <span className="text-zinc-300">: </span>
                <span className="text-yellow-400">
                  {"'application/json'"}
                </span>
              </div>
              <div>
                <span className="text-zinc-300">{"    },"}</span>
              </div>
              <div>
                <span className="text-zinc-300">
                  {"    body: JSON.stringify({"}
                </span>
              </div>
              <div>
                <span className="text-zinc-300">{"      amount: "}</span>
                <span className="text-blue-400">200</span>
                <span className="text-zinc-300">,</span>
              </div>
              <div>
                <span className="text-zinc-300">{"      currency: "}</span>
                <span className="text-yellow-400">{"'eur'"}</span>
                <span className="text-zinc-300">,</span>
              </div>
              <div>
                <span className="text-zinc-300">{"      agent: "}</span>
                <span className="text-yellow-400">
                  {"'procurement-bot'"}
                </span>
              </div>
              <div>
                <span className="text-zinc-300">{"    })"}</span>
              </div>
              <div>
                <span className="text-zinc-300">{"  }"}</span>
              </div>
              <div>
                <span className="text-zinc-300">{");"}</span>
              </div>
              <div>&nbsp;</div>
              <div>
                <span className="text-blue-400">const</span>
                <span className="text-zinc-300"> card = </span>
                <span className="text-blue-400">await</span>
                <span className="text-zinc-300"> res.json();</span>
              </div>
              <div className="text-zinc-600">
                {"// → { id, last_four, pan, cvv, status: 'active' }"}
              </div>
            </div>
          </Terminal>
        </div>
      </section>

      <Divider />

      {/* Framework Integration */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <SectionLabel>Framework Integration</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          Works with your agent framework.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              name: "LangChain",
              desc: "Use MCP tools directly or wrap REST API calls as custom LangChain tools for agent financial access.",
            },
            {
              name: "CrewAI",
              desc: "Connect via MCP to give your crew autonomous spending. Each agent gets its own card and budget policy.",
            },
            {
              name: "AutoGen",
              desc: "Function calling via MCP tools or direct REST API integration for multi-agent financial workflows.",
            },
            {
              name: "Any Language",
              desc: "The REST API works from Python, Go, Ruby, Java, or any HTTP client. No SDK dependency required.",
            },
          ].map((fw) => (
            <div
              key={fw.name}
              className="bg-zinc-950 border border-white/[0.08] rounded-xl p-6 hover:border-primary/20 transition-colors"
            >
              <div className="font-mono text-sm text-primary font-semibold mb-2">
                {fw.name}
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">
                {fw.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* CTA */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <div className="relative bg-zinc-950 border border-white/[0.08] rounded-[20px] p-16 text-center overflow-hidden">
          <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.06)_0%,transparent_65%)] -top-[200px] left-1/2 -translate-x-1/2 pointer-events-none" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight relative z-10">
            Start integrating today.
          </h2>
          <p className="text-zinc-500 mt-4 mb-8 max-w-md mx-auto text-sm relative z-10">
            REST API, CLI, or MCP — pick your path and ship in minutes.
          </p>
          <div className="flex justify-center gap-3 relative z-10">
            <a
              href="/docs"
              className="px-6 py-3 border border-white/[0.08] text-zinc-500 font-semibold rounded-lg hover:border-white/[0.15] hover:text-white transition-all text-sm"
            >
              Read the docs
            </a>
            <GetStartedButton className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:brightness-110 transition-all text-sm">
              Get started free
            </GetStartedButton>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

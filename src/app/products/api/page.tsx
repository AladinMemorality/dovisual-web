import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { SectionLabel } from "@/components/SectionLabel";
import { Divider } from "@/components/Divider";
import { Terminal } from "@/components/Terminal";

export const metadata: Metadata = {
  title: "REST API",
  description:
    "REST API for programmatic access to terminals, containers, files, AI sessions, and system monitoring.",
};

const endpoints = [
  {
    group: "/api/auth/*",
    methods: "POST GET",
    desc: "PIN-based authentication, JWT token generation, device registration, and session management.",
  },
  {
    group: "/api/stats",
    methods: "GET",
    desc: "Real-time system monitoring: CPU, memory, disk, network usage, Docker containers, and top processes.",
  },
  {
    group: "/api/files/*",
    methods: "GET POST PUT DELETE",
    desc: "List directories, read files, search content, create folders, upload files, delete entries, and git-clone repositories.",
  },
  {
    group: "/api/docker/containers",
    methods: "GET POST",
    desc: "List containers, start, stop, restart, rebuild, and stream container logs in real time.",
  },
  {
    group: "/api/sessions",
    methods: "GET POST PUT DELETE",
    desc: "Create, list, update, and delete terminal sessions. WebSocket support for live terminal streaming.",
  },
  {
    group: "/api/ai/*",
    methods: "GET POST",
    desc: "Manage Claude Code AI sessions, run setup, handle OAuth authentication for AI integrations.",
  },
  {
    group: "/api/sites",
    methods: "GET",
    desc: "Discover nginx-configured sites on your server. Returns domains, SSL status, and proxy targets.",
  },
  {
    group: "/api/apps",
    methods: "GET POST PUT DELETE",
    desc: "Register and manage deployed applications. Custom labels, badges, and quick-access links for the dashboard.",
  },
  {
    group: "/api/notify/*",
    methods: "POST GET",
    desc: "Register Expo push tokens, manage notification preferences, and trigger push alerts to connected devices.",
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
            Every feature is a REST endpoint. Authenticate with JWT tokens,
            manage terminals, containers, files, and AI sessions
            programmatically.
          </p>
        </div>
      </section>

      <Divider />

      {/* Authentication */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <SectionLabel>Authentication</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          PIN-based authentication.
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-zinc-950 border border-white/[0.08] rounded-xl p-8">
            <div className="font-mono text-sm text-primary font-semibold mb-3">
              Get Your PIN
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed mb-4">
              Run{" "}
              <span className="font-mono text-zinc-300">dovi pin</span>{" "}
              on your server to display your authentication PIN. Use this PIN
              to authenticate from the mobile app or any API client.
            </p>
            <div className="font-mono text-[13px] bg-black rounded-lg p-4 border border-white/[0.08] text-zinc-400 space-y-0.5">
              <div>
                <span className="text-primary">$ </span>dovi pin
              </div>
              <div className="text-zinc-600">PIN: 847291</div>
            </div>
          </div>
          <div className="bg-zinc-950 border border-white/[0.08] rounded-xl p-8">
            <div className="font-mono text-sm text-primary font-semibold mb-3">
              JWT Bearer Token
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed mb-4">
              POST the PIN to{" "}
              <span className="font-mono text-zinc-300">/api/auth/callback</span>{" "}
              to receive a JWT bearer token. Include this token in the
              Authorization header for all subsequent API requests.
            </p>
            <div className="font-mono text-[13px] bg-black rounded-lg p-4 border border-white/[0.08] text-zinc-400">
              Authorization: Bearer eyJhbG...
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* Endpoints */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <SectionLabel>Endpoints</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-3">
          Nine endpoint groups.
        </h2>
        <p className="text-zinc-500 max-w-xl mb-12 text-sm">
          Base URL:{" "}
          <span className="font-mono text-primary">
            {"https://<your-domain>/api"}
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
              Get system stats
              <br />
              in one request.
            </h3>
            <p className="text-zinc-500 text-sm">
              GET /api/stats with your JWT token. Returns real-time CPU, memory,
              disk, network, and Docker container stats in a single response.
            </p>
          </div>
          <Terminal label="curl">
            <div className="space-y-0">
              <div>
                <span className="text-primary">$ </span>
                <span className="text-zinc-300">curl -X GET \</span>
              </div>
              <div>
                <span className="text-zinc-300">
                  &nbsp; {"https://<your-domain>/api/stats"} \
                </span>
              </div>
              <div>
                <span className="text-zinc-300">
                  &nbsp; -H{" "}
                </span>
                <span className="text-yellow-400">
                  &quot;Authorization: Bearer eyJhbG...&quot;
                </span>
              </div>
              <div>&nbsp;</div>
              <div className="text-zinc-600">
                {"// Response"}
              </div>
              <div className="text-zinc-400">
                {"{"}&nbsp;
                <span className="text-primary">&quot;cpu&quot;</span>:{" "}
                <span className="text-blue-400">12.4</span>
                ,
              </div>
              <div className="text-zinc-400">
                &nbsp;&nbsp;
                <span className="text-primary">&quot;memory&quot;</span>:{" "}
                <span className="text-blue-400">
                  {"{ \"used\": 1842, \"total\": 4096 }"}
                </span>,
              </div>
              <div className="text-zinc-400">
                &nbsp;&nbsp;
                <span className="text-primary">&quot;disk&quot;</span>:{" "}
                <span className="text-blue-400">
                  {"{ \"used\": 24.1, \"total\": 80.0 }"}
                </span>,
              </div>
              <div className="text-zinc-400">
                &nbsp;&nbsp;
                <span className="text-primary">&quot;docker&quot;</span>:{" "}
                <span className="text-blue-400">
                  {"{ \"running\": 5, \"stopped\": 2 }"}
                </span>,
              </div>
              <div className="text-zinc-400">
                &nbsp;&nbsp;
                <span className="text-primary">&quot;network&quot;</span>:{" "}
                <span className="text-blue-400">
                  {"{ \"rx\": 142, \"tx\": 87 }"}
                </span>
                {" }"}
              </div>
            </div>
          </Terminal>
        </div>
      </section>

      <Divider />

      {/* Rate Limits */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <SectionLabel>Rate Limits &amp; Format</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          Built for reliability.
        </h2>

        <div className="grid sm:grid-cols-3 gap-4">
          <div className="bg-zinc-950 border border-white/[0.08] rounded-xl p-6">
            <div className="text-[11px] text-zinc-600 uppercase tracking-wider mb-1">
              Authentication
            </div>
            <div className="font-mono text-sm text-primary font-semibold mb-1.5">
              JWT Bearer Token
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              PIN-based auth returns a JWT token. Include it in the
              Authorization header. Tokens are scoped per device.
            </p>
          </div>
          <div className="bg-zinc-950 border border-white/[0.08] rounded-xl p-6">
            <div className="text-[11px] text-zinc-600 uppercase tracking-wider mb-1">
              Response format
            </div>
            <div className="font-mono text-sm text-primary font-semibold mb-1.5">
              JSON
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              All endpoints return JSON. Terminal sessions use WebSocket for
              real-time streaming. File uploads accept multipart/form-data.
            </p>
          </div>
          <div className="bg-zinc-950 border border-white/[0.08] rounded-xl p-6">
            <div className="text-[11px] text-zinc-600 uppercase tracking-wider mb-1">
              Transport
            </div>
            <div className="font-mono text-sm text-primary font-semibold mb-1.5">
              HTTPS + WSS
            </div>
            <p className="text-xs text-zinc-500 leading-relaxed">
              All traffic encrypted via SSL. REST over HTTPS for commands.
              WebSocket over WSS for terminal sessions.
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
            Full REST API access included with every DoVisual server.
          </p>
          <div className="flex justify-center gap-3 relative z-10">
            <a
              href="/docs"
              className="px-6 py-3 border border-white/[0.08] text-zinc-500 font-semibold rounded-lg hover:border-white/[0.15] hover:text-white transition-all text-sm"
            >
              Read the docs
            </a>
            <button className="px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:brightness-110 transition-all text-sm">
              Get started
            </button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}

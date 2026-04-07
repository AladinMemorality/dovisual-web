import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { SectionLabel } from "@/components/SectionLabel";
import { Divider } from "@/components/Divider";
import { Terminal } from "@/components/Terminal";
import { GetStartedButton } from "@/components/InstallModal";

export const metadata: Metadata = {
  title: "CLI & Server Setup",
  description:
    "Command-line tool for setting up and managing DoVisual on your VPS. One command installs everything.",
};

const commands = [
  {
    name: "dovi install",
    desc: "Set up DoVisual on your VPS. Configures systemd, nginx, SSL, and the API server. Production-ready in 90 seconds.",
    flags: ["--domain", "--port", "--ssl"],
  },
  {
    name: "dovi config set",
    desc: "Update server configuration values. Set your domain, port, SSL mode, or any other runtime option.",
    flags: ["--key", "--value"],
  },
  {
    name: "dovi start",
    desc: "Start the DoVisual API server. Launches the systemd service and begins accepting connections.",
    flags: ["--foreground"],
  },
  {
    name: "dovi status",
    desc: "Check the current state of the DoVisual service. Shows uptime, port, domain, and connection status.",
    flags: ["--json"],
  },
  {
    name: "dovi pin",
    desc: "Display or generate your authentication PIN. Used to pair the mobile app and obtain JWT tokens.",
    flags: ["--reset"],
  },
  {
    name: "dovi update",
    desc: "Update DoVisual to the latest version. Downloads the newest release and restarts the service automatically.",
    flags: ["--force"],
  },
  {
    name: "dovi restart",
    desc: "Restart the DoVisual API server. Applies any pending configuration changes and refreshes the service.",
    flags: ["--graceful"],
  },
  {
    name: "dovi config",
    desc: "View the current server configuration. Shows domain, port, SSL status, and all active settings.",
    flags: ["--json"],
  },
];

const apiEndpoints = [
  ["/api/auth/*", "PIN auth, JWT tokens, device management"],
  ["/api/stats", "CPU, memory, disk, network, Docker, processes"],
  ["/api/files/*", "List, read, search, mkdir, upload, delete, git-clone"],
  ["/api/docker/containers", "List, start, stop, restart, rebuild, logs"],
  ["/api/sessions", "Terminal sessions (CRUD + WebSocket)"],
  ["/api/ai/*", "Claude Code sessions, setup, OAuth"],
  ["/api/sites", "Nginx site discovery"],
  ["/api/apps", "App manifest management"],
  ["/api/notify/*", "Push notification registration"],
];

export default function CliPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="max-w-[1120px] mx-auto px-8 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.04)_0%,transparent_65%)] -top-[200px] left-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="relative z-10">
          <SectionLabel>CLI &amp; Server Setup</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
            One command to
            <br />
            set up your server.
          </h1>
          <p className="text-zinc-500 max-w-xl text-base leading-relaxed">
            The Dovi CLI configures systemd, nginx, SSL, and the API on any
            Ubuntu VPS. Your server is production-ready in 90 seconds.
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
              Install the CLI, run the installer, check the status.
              Your server is ready.
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
                <span className="text-zinc-300">dovi install</span>
              </div>
              <div>
                <span className="text-zinc-500">
                  &nbsp; Configuring systemd{" "}
                </span>
                <span className="text-blue-400">&rarr;</span>
                <span className="text-zinc-500"> setting up nginx </span>
                <span className="text-blue-400">&rarr;</span>
                <span className="text-primary"> SSL provisioned</span>
              </div>
              <div>
                <span className="text-primary">$ </span>
                <span className="text-zinc-300">dovi status</span>
              </div>
              <div className="text-primary">
                &nbsp; &#10003; DoVisual running on port 3000
              </div>
              <div className="text-primary">
                &nbsp; &#10003; Nginx configured with SSL
              </div>
              <div className="text-primary">
                &nbsp; &#10003; API ready at https://your-domain.com
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
          Eight essential commands.
          <br />
          Complete server control.
        </h2>
        <p className="text-zinc-500 max-w-xl mb-12 text-sm">
          Install, configure, start, stop, restart, monitor, update, and
          authenticate your DoVisual server from a single CLI.
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

      {/* REST API */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <div className="bg-zinc-950 border border-white/[0.08] rounded-2xl p-10 grid lg:grid-cols-[1fr_1.2fr] gap-10 items-start">
          <div className="space-y-3">
            <SectionLabel>REST API</SectionLabel>
            <h3 className="text-2xl font-bold tracking-tight leading-tight">
              Full programmatic access.
              <br />
              Every capability exposed.
            </h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Every feature in DoVisual is backed by a REST endpoint.
              Authenticate with a JWT token and control your server
              programmatically from any language or tool.
            </p>
          </div>
          <Terminal label="API endpoints">
            <div className="space-y-0">
              {apiEndpoints.map(([name, desc]) => (
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
            Install the CLI. Set up your server.
          </h2>
          <p className="text-zinc-500 mt-4 mb-8 max-w-md mx-auto text-sm relative z-10">
            Three commands. Production-ready in 90 seconds.
          </p>
          <GetStartedButton className="px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:brightness-110 transition-all text-sm relative z-10">
            Get started free
          </GetStartedButton>
        </div>
      </section>
    </PageLayout>
  );
}

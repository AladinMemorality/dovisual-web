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
    absolute: "DoVisual — Mobile-first cloud platform for developers",
  },
  description:
    "Deploy apps, manage containers, and code with AI from your phone. Terminal, Docker, Claude Code — one app, zero friction.",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "DoVisual",
    url: "https://dovisual.com",
    logo: "https://dovisual.com/og.png",
    description:
      "Mobile-first cloud platform for developers.",
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
                  Terminal + Docker + AI + Files
                </span>
                <span className="text-zinc-700">/</span>
                <span className="text-primary font-medium">
                  Claude Code built in
                </span>
                <span className="text-zinc-700">/</span>
                <span className="text-zinc-600">
                  Full Linux terminal from mobile
                </span>
                <span className="text-zinc-700">/</span>
                <span className="text-primary font-medium">Docker management</span>
                <span className="text-zinc-700">/</span>
                <span className="text-zinc-600">Push notifications</span>
                <span className="text-zinc-700">/</span>
                <span className="text-primary font-medium">
                  Auto SSL &amp; domains
                </span>
                <span className="text-zinc-700">/</span>
                <span className="text-zinc-600">
                  System monitoring
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
                Your cloud
                <br />
                <span className="bg-gradient-to-br from-white/90 to-zinc-500 bg-clip-text text-transparent">
                  Your command
                </span>
                <span className="text-primary">.</span>
              </h1>
              <p className="text-base md:text-lg text-zinc-500 max-w-[520px] leading-relaxed">
                Terminal, containers, files, and AI — managed from your phone.
                Set up a VPS in 90 seconds, deploy from anywhere.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <GetStartedButton className="px-5 py-2.5 bg-primary text-black font-semibold rounded-lg hover:brightness-110 transition-all text-sm">
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
                Install the CLI, set up your server, connect from your phone.
                Everything after that is at your fingertips.
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
                <div className="text-primary">
                  &nbsp; &#10003; Server configured
                </div>
                <div className="text-primary">
                  &nbsp; &#10003; SSL issued
                </div>
                <div className="text-primary">
                  &nbsp; &#10003; Ready — open the DoVisual app
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
            CLI &amp; API
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-3">
            Eight capabilities.
            <br />
            One unified platform.
          </h2>
          <p className="text-zinc-500 max-w-xl mb-12 text-sm">
            Every feature is accessible via CLI, REST API, and the mobile app.
            The CLI sets up your server. The app is your daily interface.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                name: "dovi install",
                desc: "Set up Dovi on any VPS. Installs systemd service, nginx reverse proxy, and SSL certificates. One command, full stack.",
                flags: ["--domain", "--email", "--name"],
              },
              {
                name: "dovi config set",
                desc: "Configure your server: domain, port, shell, AI credentials. All settings stored in /etc/dovi/config.json.",
                flags: ["--port", "--domain", "--shell"],
              },
              {
                name: "dovi start",
                desc: "Start the Dovi server. Launches the API, terminal multiplexer, and WebSocket connections.",
                flags: ["--port", "--host"],
              },
              {
                name: "dovi status",
                desc: "Check service health: uptime, CPU, memory, disk, running containers, and active terminal sessions.",
                flags: [],
              },
              {
                name: "dovi pin",
                desc: "View or reset your 6-digit authentication PIN. PIN-based auth keeps your server secure from mobile.",
                flags: ["reset"],
              },
              {
                name: "dovi update",
                desc: "Download the latest Dovi binary and restart the service. Zero-downtime upgrades.",
                flags: [],
              },
              {
                name: "dovi restart",
                desc: "Restart the Dovi service. Preserves terminal sessions and container state.",
                flags: [],
              },
              {
                name: "dovi config",
                desc: "Show current configuration: domain, port, shell, AI setup status, and active devices.",
                flags: [],
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
                API Capabilities
              </span>
              <h3 className="text-2xl font-bold tracking-tight leading-tight">
                Full server control.
                <br />
                From any device.
              </h3>
              <p className="text-zinc-500 text-sm">
                The DoVisual API exposes every capability. Terminal sessions,
                container management, file operations, system monitoring, and
                AI — all via REST.
              </p>
            </div>
            <Terminal label="API endpoints">
              <div className="space-y-0">
                {[
                  ["GET /api/stats", "CPU, memory, disk, network"],
                  ["GET /api/docker/containers", "List all Docker containers"],
                  ["POST /api/sessions", "Create terminal session"],
                  ["GET /api/files/list", "Browse server filesystem"],
                  ["GET /api/files/read", "Read file contents"],
                  ["POST /api/docker/.../start", "Start a container"],
                  ["POST /api/docker/.../stop", "Stop a container"],
                  ["POST /api/ai/sessions", "Start Claude Code session"],
                  ["GET /api/sites", "List nginx sites"],
                  ["POST /api/files/upload-to", "Upload files to server"],
                  ["WS /ws/:sessionId", "Live terminal WebSocket"],
                ].map(([name, desc]) => (
                  <div key={name} className="flex">
                    <span className="text-primary inline-block min-w-[22ch]">
                      &nbsp; {name}
                    </span>
                    <span className="text-zinc-500">{desc}</span>
                  </div>
                ))}
                <div className="text-zinc-700">&nbsp; ... +8 more endpoints</div>
              </div>
            </Terminal>
          </div>
        </section>

        <Divider />

        {/* How it works */}
        <HowItWorks />

        <Divider />

        {/* Why DoVisual */}
        <section className="max-w-[1120px] mx-auto px-8 py-28">
          <span className="text-[11px] font-bold tracking-[0.2em] text-primary uppercase flex items-center gap-3 mb-3">
            <span className="w-5 h-px bg-primary" />
            Why DoVisual
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-tight mb-12">
            Not just a terminal.
            <br />A full server stack.
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                n: "01",
                title: "Full terminal from mobile",
                desc: "PTY terminal sessions via WebSocket. Tab completion, colors, scroll buffer. No SSH app needed.",
              },
              {
                n: "02",
                title: "Docker dashboard",
                desc: "List, start, stop, restart, and rebuild containers. View logs, inspect configs, manage compose projects.",
              },
              {
                n: "03",
                title: "Claude Code built in",
                desc: "AI assistant with full server access. Deploy apps, fix configs, write code — conversationally from your phone.",
              },
              {
                n: "04",
                title: "File manager",
                desc: "Browse, read, edit, upload, and delete files. Git clone repos directly. Search by name across your server.",
              },
              {
                n: "05",
                title: "System monitoring",
                desc: "Real-time CPU, memory, disk, and network stats. Process list, port scanning, Docker container status.",
              },
              {
                n: "06",
                title: "Auto SSL & domains",
                desc: "Cloudflare DNS integration. Automatic subdomain creation and Let's Encrypt certificate provisioning.",
              },
              {
                n: "07",
                title: "Push notifications",
                desc: "Get alerts when deployments finish, containers crash, or AI tasks complete. Never miss a critical event.",
              },
              {
                n: "08",
                title: "One-command setup",
                desc: "Run dovi install on any Ubuntu VPS. Systemd, nginx, SSL — everything configured automatically in under 90 seconds.",
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
                label: "Credentials at rest",
                value: "PIN + JWT",
                desc: "6-digit PIN for mobile auth. JWT tokens signed with HS256. Device-scoped, revocable, configurable expiry.",
              },
              {
                label: "Authentication",
                value: "PIN-based auth",
                desc: "No passwords stored. 6-digit PIN verified on device. JWT tokens issued per device with configurable expiry.",
              },
              {
                label: "Transport",
                value: "TLS 1.3 + WSS",
                desc: "All API calls over HTTPS. Terminal sessions over secure WebSocket. No plaintext connections.",
              },
              {
                label: "AI permissions",
                value: "Human-in-the-loop",
                desc: "Every destructive AI action requires your approval. Claude Code proposes, you decide. Read-only actions execute instantly.",
              },
              {
                label: "Device isolation",
                value: "Per-device tokens",
                desc: "Each connected device gets its own JWT. One compromised device can be revoked without affecting others.",
              },
              {
                label: "API security",
                value: "Bearer tokens",
                desc: "All API endpoints require authentication. Tokens expire after configurable duration. Device tracking and last-active logging.",
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
                  [true, "1 VPS connection"],
                  [true, "Full terminal access"],
                  [true, "Docker management"],
                  [true, "File browser & editor"],
                  [true, "Claude Code integration"],
                  [true, "Push notifications"],
                  [false, "Multiple servers"],
                  [false, "API access"],
                  [false, "Team features"],
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
                $29
                <span className="text-lg font-normal text-zinc-600">/mo</span>
              </div>
              <div className="text-sm text-zinc-600 mb-6">
                per server
              </div>
              <ul className="space-y-2 text-sm mb-8">
                {[
                  "Unlimited VPS connections",
                  "Full terminal access",
                  "Docker management",
                  "File browser & editor",
                  "Claude Code integration",
                  "Push notifications",
                  "Full REST API access",
                  "Team management",
                  "Multiple devices",
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
              <button className="w-full py-2.5 bg-primary text-black font-semibold rounded-lg hover:brightness-110 transition-all text-sm">
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
            question="How does it work?"
            answer="Install the dovi CLI on any Ubuntu VPS, run dovi install, and your server is configured with systemd, nginx, and SSL in under 90 seconds. Open the DoVisual app on your phone, enter your PIN, and you have full terminal, Docker, file, and AI access."
            defaultOpen
          />
          <FaqItem
            question="Do I need a laptop?"
            answer="No. DoVisual is designed for mobile-first server management. Terminal sessions, Docker controls, file editing, and AI chat all work from your phone. For complex coding sessions, you can also use the web interface."
          />
          <FaqItem
            question="Which VPS providers work?"
            answer="Any provider running Ubuntu 24.04 — Hetzner, DigitalOcean, Linode, AWS, Vultr, or any other. You can also let DoVisual provision a server for you automatically."
          />
          <FaqItem
            question="How does AI integration work?"
            answer="Claude Code runs directly on your server. You chat with it from the DoVisual app, and it can execute commands, edit files, manage containers, and deploy applications. Destructive actions always require your approval."
          />
          <FaqItem
            question="Is it secure?"
            answer="Yes. Authentication uses a 6-digit PIN with JWT tokens. All connections are encrypted via TLS 1.3. Each device gets its own token that can be revoked independently. AI actions require human approval for anything destructive."
          />
          <FaqItem
            question="Can I manage Docker containers?"
            answer="Yes. Full container lifecycle management — list, start, stop, restart, rebuild, view logs, and inspect configurations. Docker Compose projects are detected automatically."
          />
          <FaqItem
            question="What about my existing server?"
            answer="Run dovi install on any existing Ubuntu VPS. It sets up alongside your existing services without interfering. Your existing Docker containers, files, and configurations remain untouched."
          />
        </section>

        <Divider />

        {/* CTA Banner */}
        <section className="max-w-[1120px] mx-auto px-8 py-28">
          <div className="relative bg-zinc-950 border border-white/[0.08] rounded-[20px] p-16 text-center overflow-hidden">
            <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.06)_0%,transparent_65%)] -top-[200px] left-1/2 -translate-x-1/2 pointer-events-none" />
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight relative z-10">
              Your server is waiting.
              <br />
              Manage it from anywhere.
            </h2>
            <p className="text-zinc-500 mt-4 mb-8 max-w-md mx-auto text-sm relative z-10">
              Free to start. No credit card required. One command and your VPS
              has a mobile-first control plane.
            </p>
            <GetStartedButton className="px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:brightness-110 transition-all text-sm relative z-10">
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

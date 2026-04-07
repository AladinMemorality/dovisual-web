import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { SectionLabel } from "@/components/SectionLabel";
import { Divider } from "@/components/Divider";

export const metadata: Metadata = {
  title: "Monitoring & Control",
  description:
    "Real-time visibility into your server fleet. System stats, container status, terminal sessions, and push notifications.",
};

const features = [
  {
    title: "System Dashboard",
    desc: "Real-time CPU, memory, disk, and network stats. Process list with top consumers. Port scan for active services.",
  },
  {
    title: "Container Health",
    desc: "Docker container status at a glance. Running, stopped, and errored containers. Restart or rebuild with one tap.",
  },
  {
    title: "Terminal Sessions",
    desc: "See all active terminal sessions. Pin important sessions, manage titles, and pick up where you left off.",
  },
  {
    title: "Push Notifications",
    desc: "Get alerts when deployments finish, containers crash, or AI tasks complete. Expo push notification support.",
  },
  {
    title: "App Registry",
    desc: "Register and manage deployed applications. Custom labels, badges, and quick-access links from the mobile dashboard.",
  },
  {
    title: "Device Management",
    desc: "Track connected devices, last active times, and JWT token status. Revoke access to any device instantly.",
  },
];

export default function GovernancePage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="max-w-[1120px] mx-auto px-8 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.04)_0%,transparent_65%)] -top-[200px] left-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="relative z-10">
          <SectionLabel>Monitoring &amp; Control</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
            Full visibility.
            <br />
            Total control.
          </h1>
          <p className="text-zinc-500 max-w-xl text-base leading-relaxed">
            Monitor your servers from a single dashboard. System stats,
            container health, terminal sessions, and instant push notifications.
          </p>
        </div>
      </section>

      <Divider />

      {/* Features */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <SectionLabel>Features</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          Everything you need to monitor.
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="bg-zinc-950 border border-white/[0.08] rounded-xl p-6 hover:border-primary/20 transition-colors"
            >
              <div className="text-xs font-mono text-zinc-600 mb-2">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h4 className="font-bold text-sm mb-1.5">{f.title}</h4>
              <p className="text-sm text-zinc-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* How Monitoring Works */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <SectionLabel>How Monitoring Works</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          Collect. Report. Alert.
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-zinc-950 border border-white/[0.08] rounded-xl p-8">
            <div className="font-mono text-sm text-primary font-semibold mb-3">
              System Stats
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed mb-4">
              CPU, memory, disk, and network usage collected on every request.
              Process list with top consumers. Port scan for active services.
            </p>
            <div className="space-y-1.5">
              <div className="font-mono text-[11px] px-2 py-1 rounded bg-zinc-900 border border-white/[0.08] text-zinc-400">
                GET /api/stats
              </div>
              <div className="font-mono text-[11px] px-2 py-1 rounded bg-zinc-900 border border-white/[0.08] text-zinc-400">
                cpu, memory, disk, network
              </div>
            </div>
          </div>
          <div className="bg-zinc-950 border border-white/[0.08] rounded-xl p-8">
            <div className="font-mono text-sm text-primary font-semibold mb-3">
              Container Watch
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed mb-4">
              Docker container state polled and reported. See running, stopped,
              and errored containers. One-tap restart or rebuild.
            </p>
            <div className="space-y-1.5">
              <div className="font-mono text-[11px] px-2 py-1 rounded bg-zinc-900 border border-white/[0.08] text-zinc-400">
                GET /api/docker/containers
              </div>
              <div className="font-mono text-[11px] px-2 py-1 rounded bg-zinc-900 border border-white/[0.08] text-zinc-400">
                status, image, ports, logs
              </div>
            </div>
          </div>
          <div className="bg-zinc-950 border border-primary/20 rounded-xl p-8">
            <div className="font-mono text-sm text-primary font-semibold mb-3">
              Push Alerts
            </div>
            <p className="text-sm text-zinc-500 leading-relaxed mb-4">
              Expo push tokens registered per device. Events like container
              crashes, deployment completions, and AI task results trigger
              instant notifications.
            </p>
            <div className="space-y-1.5">
              <div className="font-mono text-[11px] px-2 py-1 rounded bg-primary/10 border border-primary/20 text-primary">
                POST /api/notify/register
              </div>
              <div className="font-mono text-[11px] px-2 py-1 rounded bg-primary/10 border border-primary/20 text-primary">
                deploy, crash, ai-complete
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* CTA */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <div className="relative bg-zinc-950 border border-white/[0.08] rounded-[20px] p-16 text-center overflow-hidden">
          <div className="absolute w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.06)_0%,transparent_65%)] -top-[200px] left-1/2 -translate-x-1/2 pointer-events-none" />
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight relative z-10">
            Start monitoring your servers.
          </h2>
          <p className="text-zinc-500 mt-4 mb-8 max-w-md mx-auto text-sm relative z-10">
            Monitoring included with every plan.
          </p>
          <button className="px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:brightness-110 transition-all text-sm relative z-10">
            Get started
          </button>
        </div>
      </section>
    </PageLayout>
  );
}

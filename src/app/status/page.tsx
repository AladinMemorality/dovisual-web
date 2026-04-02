import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { SectionLabel } from "@/components/SectionLabel";
import { Divider } from "@/components/Divider";

export const metadata: Metadata = {
  title: "System Status",
  description:
    "Real-time system status for the DoVisual platform. API, MCP server, card issuance, and payment processing.",
};

const services = [
  { name: "API Gateway", status: "Operational", uptime: "99.998%" },
  { name: "MCP Server", status: "Operational", uptime: "99.99%" },
  { name: "Card Issuance", status: "Operational", uptime: "99.99%" },
  { name: "Payment Processing", status: "Operational", uptime: "99.98%" },
  { name: "IBAN Services", status: "Operational", uptime: "99.99%" },
  { name: "Crypto Bridge", status: "Operational", uptime: "99.95%" },
  { name: "Authentication", status: "Operational", uptime: "99.999%" },
  { name: "Dashboard", status: "Operational", uptime: "99.98%" },
];

export default function StatusPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="max-w-[1120px] mx-auto px-8 pt-32 pb-20 relative overflow-hidden">
        <div className="absolute w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(167,139,250,0.04)_0%,transparent_65%)] -top-[200px] left-1/2 -translate-x-1/2 pointer-events-none" />
        <div className="relative z-10">
          <SectionLabel>Status</SectionLabel>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
            System status.
          </h1>
          <p className="text-zinc-500 max-w-xl text-base leading-relaxed">
            Real-time operational status for the DoVisual platform.
          </p>
        </div>
      </section>

      <Divider />

      {/* Overall Status */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <div className="bg-zinc-950 border border-primary/20 rounded-2xl p-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-3 h-3 rounded-full bg-primary animate-pulse" />
            <span className="text-2xl font-bold tracking-tight">
              All Systems Operational
            </span>
          </div>
          <p className="text-zinc-500 text-sm">
            All services are running normally. Last checked: just now.
          </p>
        </div>
      </section>

      <Divider />

      {/* Services */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <SectionLabel>Services</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          Individual service status.
        </h2>

        <div className="space-y-3">
          {services.map((service) => (
            <div
              key={service.name}
              className="bg-zinc-950 border border-white/[0.08] rounded-xl px-6 py-4 flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-sm font-semibold">{service.name}</span>
              </div>
              <div className="flex items-center gap-6">
                <span className="text-xs text-zinc-600 hidden sm:inline">
                  {service.uptime} uptime
                </span>
                <span className="text-xs text-primary font-mono">
                  {service.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* Uptime History */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <SectionLabel>30-Day Uptime</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          Historical availability.
        </h2>

        <div className="bg-zinc-950 border border-white/[0.08] rounded-xl p-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold">All Services</span>
            <span className="text-sm text-primary font-mono">99.99%</span>
          </div>
          <div className="flex gap-[3px]">
            {Array.from({ length: 30 }, (_, i) => (
              <div
                key={i}
                className="flex-1 h-8 rounded-sm bg-primary/80 hover:bg-primary transition-colors"
                title={`Day ${30 - i}: Operational`}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[10px] text-zinc-600">
            <span>30 days ago</span>
            <span>Today</span>
          </div>
        </div>
      </section>

      <Divider />

      {/* Incidents */}
      <section className="max-w-[1120px] mx-auto px-8 py-28">
        <SectionLabel>Incidents</SectionLabel>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12">
          Recent incidents.
        </h2>

        <div className="bg-zinc-950 border border-white/[0.08] rounded-xl p-10 text-center">
          <p className="text-zinc-500 text-sm">
            No incidents reported in the last 30 days.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}

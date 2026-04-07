import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { SectionLabel } from "@/components/SectionLabel";
import { Divider } from "@/components/Divider";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for the DoVisual platform.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using DoVisual (the \"Service\"), you agree to be bound by these Terms of Service. If you are using the Service on behalf of an organization, you represent that you have authority to bind that organization to these terms.",
  },
  {
    title: "2. Description of Service",
    content:
      "DoVisual provides cloud infrastructure management tools, including terminal access, Docker container management, file browsing, AI-assisted development via Claude Code, system monitoring, domain and SSL management, and push notifications. The Service is accessed via CLI, REST API, and mobile application.",
  },
  {
    title: "3. User Accounts",
    content:
      "You must provide a valid email address to create an account. Authentication is performed via PIN-based login. You are responsible for maintaining the security of your PIN, JWT tokens, and connected devices.",
  },
  {
    title: "4. Server Connections",
    content:
      "You are responsible for all actions taken on servers connected to your account. Server connections are authenticated via PIN and JWT tokens. You must ensure authorized access to connected servers.",
  },
  {
    title: "5. Payment Terms",
    content:
      "The Free tier provides access to one server at no cost. The Pro tier is billed monthly. You authorize us to charge your payment method on file.",
  },
  {
    title: "6. Server Access",
    content:
      "You are responsible for maintaining appropriate access controls on connected servers. DoVisual provides management tools but does not guarantee server security beyond our platform's authentication layer.",
  },
  {
    title: "7. Prohibited Uses",
    content:
      "You may not use the Service for illegal activities, unauthorized access to systems, denial of service attacks, or any purpose that violates applicable law. You must have authorization to manage any server connected to DoVisual.",
  },
  {
    title: "8. Data & Privacy",
    content:
      "Your use of the Service is also governed by our Privacy Policy. Server credentials and authentication tokens are encrypted at rest. We do not sell your data to third parties. See our Privacy Policy for full details on data collection, use, and retention.",
  },
  {
    title: "9. Limitation of Liability",
    content:
      "To the maximum extent permitted by law, DoVisual shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities. Our total liability shall not exceed the amount paid by you in the 12 months preceding the claim.",
  },
  {
    title: "10. Termination",
    content:
      "Either party may terminate this agreement at any time. Upon termination, all server connections will be removed and authentication tokens revoked. Your data will be retained for the period required by applicable regulations.",
  },
  {
    title: "11. Governing Law",
    content:
      "These terms are governed by the laws of England and Wales. Any disputes shall be resolved in the courts of England and Wales. If any provision of these terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.",
  },
];

export default function TermsPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="max-w-[860px] mx-auto px-8 pt-32 pb-20">
        <SectionLabel>Legal</SectionLabel>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
          Terms of Service
        </h1>
        <p className="text-zinc-500 text-sm">Last updated: March 2026</p>
      </section>

      <Divider />

      {/* Content */}
      <section className="max-w-[860px] mx-auto px-8 py-28">
        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-bold mb-3">{section.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  );
}

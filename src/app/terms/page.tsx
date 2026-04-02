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
      "DoVisual provides payment infrastructure for AI agents, including virtual card issuance, virtual IBAN provisioning, credit line allocation, cryptocurrency on/off ramp, programmable spending policies, and audit logging. The Service is accessed via CLI, MCP integration, REST API, and SDKs.",
  },
  {
    title: "3. User Accounts",
    content:
      "You must provide a valid email address to create an account. Authentication is performed via magic link tokens. You are responsible for maintaining the security of your account credentials, API keys, and JWT tokens. You must notify us immediately of any unauthorized access.",
  },
  {
    title: "4. Agent Accounts & KYA",
    content:
      "Each AI agent must be registered through our Know Your Agent (KYA) process before it can perform financial transactions. You are responsible for all actions taken by agents registered under your account. Agent registration records the agent's name, framework, purpose, and assigns scoped credentials.",
  },
  {
    title: "5. Payment Terms",
    content:
      "The Free tier provides limited access at no cost. The Pro tier is billed monthly at the then-current rate. You authorize us to charge your payment method on file. Unused card balances from pre-funded transactions are released automatically. Transaction fees, if applicable, are disclosed before confirmation.",
  },
  {
    title: "6. Credit Lines",
    content:
      "Credit lines are subject to approval via our underwriting process. Approved credit must be repaid within the agreed terms (up to 90 days interest-free). Failure to repay may result in suspension of credit privileges and collection action. Credit allocation to agents is your responsibility.",
  },
  {
    title: "7. Prohibited Uses",
    content:
      "You may not use the Service for illegal activities, money laundering, terrorist financing, sanctions evasion, or any purpose that violates applicable law. You may not attempt to circumvent spending policies, create fraudulent agent identities, or exploit the system to obtain unauthorized credit.",
  },
  {
    title: "8. Data & Privacy",
    content:
      "Your use of the Service is also governed by our Privacy Policy. Card data is encrypted with AES-256-GCM at rest. We do not sell your data to third parties. See our Privacy Policy for full details on data collection, use, and retention.",
  },
  {
    title: "9. Limitation of Liability",
    content:
      "To the maximum extent permitted by law, DoVisual shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities. Our total liability shall not exceed the amount paid by you in the 12 months preceding the claim.",
  },
  {
    title: "10. Termination",
    content:
      "Either party may terminate this agreement at any time. Upon termination, all active cards will be cancelled, IBAN services will be suspended, and outstanding credit must be repaid. Your data will be retained for the period required by applicable financial regulations.",
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

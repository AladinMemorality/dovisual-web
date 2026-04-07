import type { Metadata } from "next";
import { PageLayout } from "@/components/PageLayout";
import { SectionLabel } from "@/components/SectionLabel";
import { Divider } from "@/components/Divider";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the DoVisual platform.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content:
      "We collect information you provide when creating an account (email address), server connection data (hostname, IP address), terminal session data, container management logs, file access logs, AI chat history, and API usage data. We also collect authentication events and audit log entries for security purposes.",
  },
  {
    title: "2. How We Use Information",
    content:
      "We use your information to provide and maintain the Service, manage server connections, process terminal sessions, authenticate devices, detect and prevent unauthorized access, and improve our platform. We do not use your data for advertising.",
  },
  {
    title: "3. Data Encryption",
    content:
      "Server credentials and authentication tokens are encrypted at rest. JWT tokens are signed with HS256. All data in transit is encrypted via TLS 1.3. PIN codes are hashed and never stored in plaintext.",
  },
  {
    title: "4. Server Data",
    content:
      "Terminal session content is ephemeral and not permanently stored. File operations are logged for audit purposes. Docker container management actions are logged. AI chat sessions are stored for session continuity.",
  },
  {
    title: "5. Data Retention",
    content:
      "Account data is retained for the lifetime of your account. Audit logs are retained for a minimum of 7 years as required by applicable regulations. Upon account termination, personal data is deleted within 30 days, except where retention is required by law.",
  },
  {
    title: "6. Third Parties",
    content:
      "We share data with infrastructure providers as necessary. We do not sell your personal data. We use industry-standard subprocessors for hosting and monitoring.",
  },
  {
    title: "7. Your Rights",
    content:
      "You have the right to access, correct, and delete your personal data. You can export your data at any time. To exercise these rights, contact us at privacy@dovisual.com. We will respond to requests within 30 days.",
  },
  {
    title: "8. Cookies & Analytics",
    content:
      "We use essential cookies for authentication and session management. We do not use third-party advertising cookies. We may use privacy-respecting analytics to understand platform usage patterns. You can disable non-essential cookies in your browser settings.",
  },
  {
    title: "9. International Transfers",
    content:
      "Your data may be processed in the United Kingdom and European Economic Area. We ensure appropriate safeguards are in place for any international data transfers, including Standard Contractual Clauses where required by GDPR.",
  },
  {
    title: "10. Changes to This Policy",
    content:
      "We may update this Privacy Policy from time to time. We will notify you of material changes via email or a prominent notice on our website. Your continued use of the Service after changes constitutes acceptance of the updated policy.",
  },
  {
    title: "11. Contact",
    content:
      "For questions about this Privacy Policy or to exercise your data rights, contact us at privacy@dovisual.com. For security-related concerns, see our Security page or contact security@dovisual.com.",
  },
];

export default function PrivacyPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="max-w-[860px] mx-auto px-8 pt-32 pb-20">
        <SectionLabel>Legal</SectionLabel>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight mb-4">
          Privacy Policy
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

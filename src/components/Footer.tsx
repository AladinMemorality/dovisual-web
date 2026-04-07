import { Logo } from "./Logo";

const footerLinks = {
  products: [
    { label: "CLI & MCP", href: "/products/cli" },
    { label: "REST API", href: "/products/api" },
    { label: "SDKs", href: "/products/sdks" },
    { label: "Governance Dashboard", href: "/products/governance" },
  ],
  resources: [
    { label: "Documentation", href: "/docs" },
    { label: "Blog", href: "/blog" },
    { label: "Changelog", href: "/changelog" },
    { label: "Status", href: "/status" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Terms", href: "/terms" },
    { label: "Privacy", href: "/privacy" },
    { label: "Security", href: "/security" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-12">
      <div className="max-w-[1120px] mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10">
          <div className="col-span-2 md:col-span-1 space-y-2">
            <a
              href="/"
              className="text-sm font-bold tracking-tight flex items-center gap-2"
            >
              <Logo />
              DoVisual
            </a>
            <p className="text-xs text-zinc-600 max-w-[260px]">
              Mobile-first cloud platform for developers. Terminal, containers,
              AI — from your phone.
            </p>
          </div>
          <div className="space-y-3">
            <h5 className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-600">
              Products
            </h5>
            <div className="flex flex-col gap-1 text-sm text-zinc-500">
              {footerLinks.products.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <h5 className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-600">
              Resources
            </h5>
            <div className="flex flex-col gap-1 text-sm text-zinc-500">
              {footerLinks.resources.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <h5 className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-600">
              Company
            </h5>
            <div className="flex flex-col gap-1 text-sm text-zinc-500">
              {footerLinks.company.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/[0.06] flex justify-between items-center text-xs text-zinc-600">
          <span>&copy; 2026 DoVisual. All rights reserved.</span>
          <span>Your cloud. Your command.</span>
        </div>
      </div>
    </footer>
  );
}

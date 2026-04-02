"use client";

import { useState, useEffect, useRef } from "react";
import { Logo } from "./Logo";
import { GetStartedButton } from "./InstallModal";

const productLinks = [
  { label: "CLI & MCP", href: "/products/cli" },
  { label: "REST API", href: "/products/api" },
  { label: "SDKs", href: "/products/sdks" },
  { label: "Governance", href: "/products/governance" },
];

const resourceLinks = [
  { label: "Documentation", href: "/docs" },
  { label: "Blog", href: "/blog" },
  { label: "Changelog", href: "/changelog" },
  { label: "Status", href: "/status" },
];

const linkClass =
  "text-[13px] text-zinc-500 hover:text-white transition-colors";

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      className={className}
    >
      <path
        d="M2.5 3.75L5 6.25L7.5 3.75"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProductsDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [open]);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className={`${linkClass} flex items-center gap-1`}
        onClick={() => setOpen((o) => !o)}
      >
        Products
        <ChevronDown
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="absolute top-full left-0 pt-2 z-50">
          <div className="bg-[#131315] border border-white/[0.08] rounded-lg py-2 min-w-[180px] shadow-xl">
            {productLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-[13px] text-zinc-500 hover:text-white hover:bg-white/[0.04] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Hamburger({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="md:hidden p-2 -mr-2 text-zinc-400 hover:text-white transition-colors"
      aria-label={open ? "Close menu" : "Open menu"}
    >
      {open ? (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M5 5l10 10M15 5L5 15"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path
            d="M3 6h14M3 10h14M3 14h14"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      )}
    </button>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="md:hidden border-t border-white/[0.06] bg-black/95 backdrop-blur-xl">
      <div className="px-6 py-4 space-y-5">
        {/* Products */}
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-600 mb-2">
            Products
          </div>
          <div className="flex flex-col gap-1">
            {productLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="text-sm text-zinc-500 hover:text-white transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-600 mb-2">
            Resources
          </div>
          <div className="flex flex-col gap-1">
            {resourceLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="text-sm text-zinc-500 hover:text-white transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Landing page anchors */}
        <div>
          <div className="text-[11px] font-bold uppercase tracking-[0.12em] text-zinc-600 mb-2">
            Overview
          </div>
          <div className="flex flex-col gap-1">
            <a href="/#how" onClick={onClose} className="text-sm text-zinc-500 hover:text-white transition-colors py-1">
              How it works
            </a>
            <a href="/agents.txt" onClick={onClose} className="text-sm text-zinc-500 hover:text-white transition-colors py-1 italic">
              Are you an agent?
            </a>
            <a href="/#pricing" onClick={onClose} className="text-sm text-zinc-500 hover:text-white transition-colors py-1">
              Pricing
            </a>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-2 pt-2 border-t border-white/[0.06]">
          <a
            href="/deck"
            onClick={onClose}
            className="text-center text-[13px] font-semibold text-zinc-500 border border-white/[0.08] px-4 py-2.5 rounded-lg hover:border-white/[0.15] hover:text-white transition-all"
          >
            Deck
          </a>
          <GetStartedButton className="text-center bg-primary text-white px-4 py-2.5 rounded-lg text-[13px] font-semibold hover:brightness-110 transition-all">
            Get started
          </GetStartedButton>
        </div>
      </div>
    </div>
  );
}

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/[0.06]">
      <div className="flex justify-between items-center w-full px-6 py-3 max-w-[1120px] mx-auto">
        {/* Left: Logo + links */}
        <div className="flex items-center gap-6">
          <a
            href="/"
            className="text-sm font-bold tracking-tight flex items-center gap-2"
          >
            <Logo />
            aiPay<span className="text-primary">.</span>sh
          </a>
          <div className="hidden md:flex items-center gap-5">
            <ProductsDropdown />
            <a className={linkClass} href="/docs">
              Docs
            </a>
            <a className={linkClass} href="/#pricing">
              Pricing
            </a>
          </div>
        </div>

        {/* Right: links + CTAs (desktop) */}
        <div className="hidden md:flex items-center gap-5">
          <a className={linkClass} href="/blog">
            Blog
          </a>
          <a className={linkClass} href="/changelog">
            Changelog
          </a>
          <a className={`${linkClass} italic`} href="/agents.txt">
            Are you an agent?
          </a>
          <a
            className="text-[13px] font-semibold text-zinc-500 border border-white/[0.08] px-4 py-1.5 rounded-lg hover:border-white/[0.15] hover:text-white transition-all"
            href="/deck"
          >
            Deck
          </a>
          <GetStartedButton className="bg-primary text-white px-4 py-1.5 rounded-lg text-[13px] font-semibold hover:brightness-110 transition-all">
            Get started
          </GetStartedButton>
        </div>

        {/* Mobile hamburger */}
        <Hamburger
          open={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
        />
      </div>

      {/* Mobile menu */}
      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </nav>
  );
}

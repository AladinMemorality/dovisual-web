"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { getAdminKey, clearAdminKey } from "@/lib/adminAuth";

const NAV_ITEMS = [
  { label: "Apps", href: "/admin/apps" },
];

export default function AdminShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!getAdminKey()) {
      router.replace("/admin/login");
    } else {
      setReady(true);
    }
  }, [router]);

  function handleLogout() {
    clearAdminKey();
    router.replace("/admin/login");
  }

  if (!ready) return null;

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="hidden w-56 flex-shrink-0 border-r border-outline-variant bg-surface md:flex md:flex-col">
        <div className="flex h-14 items-center gap-2 border-b border-outline-variant px-5">
          <span className="text-sm font-semibold text-primary font-label">
            DoVisual
          </span>
          <span className="text-xs text-on-surface-variant">Admin</span>
        </div>
        <nav className="flex-1 px-3 py-4">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center rounded-lg px-3 py-2 text-sm transition-colors ${
                pathname.startsWith(item.href)
                  ? "bg-surface-container text-foreground"
                  : "text-on-surface-variant hover:bg-surface-container hover:text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Main */}
      <div className="flex flex-1 flex-col">
        <header className="flex h-14 items-center justify-between border-b border-outline-variant px-6">
          <div className="flex items-center gap-2 md:hidden">
            <span className="text-sm font-semibold text-primary font-label">
              DoVisual
            </span>
            <span className="text-xs text-on-surface-variant">Admin</span>
          </div>
          <div className="hidden md:block" />
          <button
            onClick={handleLogout}
            className="text-sm text-on-surface-variant transition-colors hover:text-foreground"
          >
            Logout
          </button>
        </header>
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}

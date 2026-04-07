"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import AdminShell from "@/components/admin/AdminShell";
import { listApps, deleteApp, type AppData } from "@/lib/adminApi";

export default function AppsListPage() {
  const router = useRouter();
  const [apps, setApps] = useState<AppData[]>([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState<string | null>(null);

  async function load() {
    try {
      const data = await listApps();
      setApps(data);
    } catch {
      // auth redirect handled by adminFetch
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function handleDelete(id: string) {
    if (!confirm(`Delete app "${id}"?`)) return;
    setDeleting(id);
    try {
      await deleteApp(id);
      setApps((prev) => prev.filter((a) => a.id !== id));
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : "Delete failed");
    } finally {
      setDeleting(null);
    }
  }

  return (
    <AdminShell>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-lg font-semibold text-foreground">Apps</h1>
        <Link
          href="/admin/apps/new"
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-black transition-opacity hover:opacity-90"
        >
          + New App
        </Link>
      </div>

      {loading ? (
        <p className="text-sm text-on-surface-variant">Loading...</p>
      ) : apps.length === 0 ? (
        <p className="text-sm text-on-surface-variant">No apps found.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-outline-variant">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-outline-variant bg-surface">
                <th className="px-4 py-3 text-left font-medium text-on-surface-variant">
                  ID
                </th>
                <th className="px-4 py-3 text-left font-medium text-on-surface-variant">
                  Label
                </th>
                <th className="px-4 py-3 text-left font-medium text-on-surface-variant">
                  Type
                </th>
                <th className="px-4 py-3 text-left font-medium text-on-surface-variant">
                  Order
                </th>
                <th className="px-4 py-3 text-center font-medium text-on-surface-variant">
                  Enabled
                </th>
                <th className="px-4 py-3 text-right font-medium text-on-surface-variant">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {apps.map((app) => (
                <tr
                  key={app.id}
                  className="border-b border-outline-variant last:border-0 hover:bg-surface-container/50"
                >
                  <td className="px-4 py-3 font-mono text-xs text-foreground">
                    {app.id}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span
                        className="inline-block h-3 w-3 rounded-full"
                        style={{ backgroundColor: app.badgeColor }}
                      />
                      <span className="text-foreground">{app.label}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-on-surface-variant">
                    {app.appType}
                  </td>
                  <td className="px-4 py-3 text-on-surface-variant">
                    {app.order}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`inline-block h-2.5 w-2.5 rounded-full ${
                        app.enabled ? "bg-green-500" : "bg-red-500"
                      }`}
                    />
                  </td>
                  <td className="px-4 py-3 text-right">
                    <button
                      onClick={() => router.push(`/admin/apps/${app.id}`)}
                      className="mr-3 text-on-surface-variant transition-colors hover:text-foreground"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(app.id)}
                      disabled={deleting === app.id}
                      className="text-red-400 transition-colors hover:text-red-300 disabled:opacity-50"
                    >
                      {deleting === app.id ? "..." : "Delete"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </AdminShell>
  );
}

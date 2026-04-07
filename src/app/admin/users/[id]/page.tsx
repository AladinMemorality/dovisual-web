"use client";

import { useEffect, useState, use } from "react";
import AdminShell from "@/components/admin/AdminShell";
import ProvisionForm from "@/components/admin/ProvisionForm";
import {
  getUser,
  adminDeprovision,
  adminDeleteDnsRecord,
  type UserDetail,
} from "@/lib/adminApi";

const STATUS_COLORS: Record<string, string> = {
  active: "bg-green-500/20 text-green-400",
  provisioning: "bg-yellow-500/20 text-yellow-400",
  destroying: "bg-red-500/20 text-red-400",
  destroyed: "bg-zinc-500/20 text-zinc-500",
  manual: "bg-zinc-500/20 text-zinc-400",
  failed: "bg-red-500/20 text-red-400",
};

export default function UserDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const userId = parseInt(id);
  const [user, setUser] = useState<UserDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [showProvision, setShowProvision] = useState(false);
  const [deleting, setDeleting] = useState<number | null>(null);
  const [deletingDns, setDeletingDns] = useState<number | null>(null);

  async function load() {
    try {
      setUser(await getUser(userId));
    } catch {
      // handled by adminFetch
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, [userId]);

  async function handleDeprovision(serverId: number) {
    if (!confirm("Destroy this server? This cannot be undone.")) return;
    setDeleting(serverId);
    try {
      await adminDeprovision(serverId);
      load();
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : "Deprovision failed");
    } finally {
      setDeleting(null);
    }
  }

  async function handleDeleteDns(recordId: number) {
    if (!confirm("Delete this DNS record? This will remove it from Cloudflare.")) return;
    setDeletingDns(recordId);
    try {
      await adminDeleteDnsRecord(recordId);
      load();
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : "Failed to delete DNS record");
    } finally {
      setDeletingDns(null);
    }
  }

  function formatDate(iso: string | null) {
    if (!iso) return "—";
    return new Date(iso).toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <AdminShell>
      {loading ? (
        <p className="text-sm text-on-surface-variant">Loading...</p>
      ) : !user ? (
        <p className="text-sm text-red-400">User not found.</p>
      ) : (
        <>
          {/* User info */}
          <div className="mb-6 rounded-lg border border-outline-variant bg-surface p-5">
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-lg font-semibold text-foreground">
                {user.email}
              </h1>
              <span
                className={`inline-block h-2.5 w-2.5 rounded-full ${
                  user.verified ? "bg-green-500" : "bg-red-500"
                }`}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm sm:grid-cols-4">
              <div>
                <p className="text-on-surface-variant">ID</p>
                <p className="text-foreground">{user.id}</p>
              </div>
              <div>
                <p className="text-on-surface-variant">Verified</p>
                <p className="text-foreground">
                  {user.verified ? "Yes" : "No"}
                </p>
              </div>
              <div>
                <p className="text-on-surface-variant">Created</p>
                <p className="text-foreground">
                  {formatDate(user.created_at)}
                </p>
              </div>
              <div>
                <p className="text-on-surface-variant">Verified at</p>
                <p className="text-foreground">
                  {formatDate(user.verified_at)}
                </p>
              </div>
            </div>
          </div>

          {/* Servers */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-foreground">
              Servers ({user.servers.length})
            </h2>
            <button
              onClick={() => setShowProvision(!showProvision)}
              className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-black transition-opacity hover:opacity-90"
            >
              {showProvision ? "Close" : "Provision VM"}
            </button>
          </div>

          {showProvision && (
            <div className="mb-4 rounded-lg border border-outline-variant bg-surface p-5">
              <ProvisionForm
                email={user.email}
                onSuccess={() => {
                  setShowProvision(false);
                  load();
                }}
              />
            </div>
          )}

          {user.servers.length === 0 ? (
            <p className="text-sm text-on-surface-variant">
              No servers for this user.
            </p>
          ) : (
            <div className="overflow-x-auto rounded-lg border border-outline-variant">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-outline-variant bg-surface">
                    <th className="px-4 py-3 text-left font-medium text-on-surface-variant">
                      Name
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-on-surface-variant">
                      Domain
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-on-surface-variant">
                      Status
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-on-surface-variant">
                      VMID
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-on-surface-variant">
                      IPv6
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-on-surface-variant">
                      Specs
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-on-surface-variant">
                      Created
                    </th>
                    <th className="px-4 py-3 text-right font-medium text-on-surface-variant">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {user.servers.map((s) => (
                    <tr
                      key={s.id}
                      className="border-b border-outline-variant last:border-0"
                    >
                      <td className="px-4 py-3 text-foreground">{s.name || "—"}</td>
                      <td className="px-4 py-3 font-mono text-xs text-on-surface-variant">
                        {s.domain || "—"}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-medium ${
                            STATUS_COLORS[s.status] || STATUS_COLORS.manual
                          }`}
                        >
                          {s.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-on-surface-variant">
                        {s.vmid ?? "—"}
                      </td>
                      <td className="px-4 py-3 font-mono text-xs text-on-surface-variant">
                        {s.ipv6 || "—"}
                      </td>
                      <td className="px-4 py-3 text-on-surface-variant">
                        {s.vmid
                          ? `${s.cores}c / ${(s.memory_mb / 1024).toFixed(0)}G / ${s.disk_gb}G`
                          : "—"}
                      </td>
                      <td className="px-4 py-3 text-on-surface-variant">
                        {formatDate(s.created_at)}
                      </td>
                      <td className="px-4 py-3 text-right">
                        {s.status !== "destroyed" && s.status !== "failed" && (
                          <button
                            onClick={() => handleDeprovision(s.id)}
                            disabled={deleting === s.id}
                            className="text-red-400 transition-colors hover:text-red-300 disabled:opacity-50"
                          >
                            {deleting === s.id ? "..." : "Destroy"}
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Subdomains */}
          <h2 className="mt-8 mb-4 text-base font-semibold text-foreground">
            Subdomains ({user.dns_records?.length || 0})
          </h2>

          {!user.dns_records || user.dns_records.length === 0 ? (
            <p className="text-sm text-on-surface-variant">
              No subdomains for this user.
            </p>
          ) : (
            <div className="overflow-x-auto rounded-lg border border-outline-variant">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-outline-variant bg-surface">
                    <th className="px-4 py-3 text-left font-medium text-on-surface-variant">
                      Domain
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-on-surface-variant">
                      Type
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-on-surface-variant">
                      IP
                    </th>
                    <th className="px-4 py-3 text-center font-medium text-on-surface-variant">
                      Proxied
                    </th>
                    <th className="px-4 py-3 text-left font-medium text-on-surface-variant">
                      Created
                    </th>
                    <th className="px-4 py-3 text-right font-medium text-on-surface-variant">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {user.dns_records.map((r) => (
                    <tr
                      key={r.id}
                      className="border-b border-outline-variant last:border-0"
                    >
                      <td className="px-4 py-3">
                        <a
                          href={`https://${r.domain}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs text-primary hover:underline"
                        >
                          {r.domain}
                        </a>
                      </td>
                      <td className="px-4 py-3 text-on-surface-variant">
                        {r.record_type}
                      </td>
                      <td className="px-4 py-3 font-mono text-xs text-on-surface-variant">
                        {r.ip}
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span
                          className={`inline-block h-2.5 w-2.5 rounded-full ${
                            r.proxied ? "bg-green-500" : "bg-zinc-500"
                          }`}
                        />
                      </td>
                      <td className="px-4 py-3 text-on-surface-variant">
                        {formatDate(r.created_at)}
                      </td>
                      <td className="px-4 py-3 text-right">
                        <button
                          onClick={() => handleDeleteDns(r.id)}
                          disabled={deletingDns === r.id}
                          className="text-red-400 transition-colors hover:text-red-300 disabled:opacity-50"
                        >
                          {deletingDns === r.id ? "..." : "Delete"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </>
      )}
    </AdminShell>
  );
}

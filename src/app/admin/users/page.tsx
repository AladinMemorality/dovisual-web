"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminShell from "@/components/admin/AdminShell";
import ProvisionForm from "@/components/admin/ProvisionForm";
import { listUsers, type UserSummary } from "@/lib/adminApi";

export default function UsersListPage() {
  const router = useRouter();
  const [users, setUsers] = useState<UserSummary[]>([]);
  const [loading, setLoading] = useState(true);
  const [showProvision, setShowProvision] = useState(false);

  async function load() {
    try {
      setUsers(await listUsers());
    } catch {
      // auth redirect handled by adminFetch
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  function formatDate(iso: string) {
    if (!iso) return "—";
    return new Date(iso).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  }

  return (
    <AdminShell>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-lg font-semibold text-foreground">Users</h1>
        <button
          onClick={() => setShowProvision(!showProvision)}
          className="rounded-lg bg-primary px-4 py-2 text-sm font-medium text-black transition-opacity hover:opacity-90"
        >
          {showProvision ? "Close" : "Provision VM"}
        </button>
      </div>

      {showProvision && (
        <div className="mb-6 rounded-lg border border-outline-variant bg-surface p-5">
          <ProvisionForm
            onSuccess={() => {
              setShowProvision(false);
              load();
            }}
          />
        </div>
      )}

      {loading ? (
        <p className="text-sm text-on-surface-variant">Loading...</p>
      ) : users.length === 0 ? (
        <p className="text-sm text-on-surface-variant">No users found.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-outline-variant">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-outline-variant bg-surface">
                <th className="px-4 py-3 text-left font-medium text-on-surface-variant">
                  Email
                </th>
                <th className="px-4 py-3 text-center font-medium text-on-surface-variant">
                  Verified
                </th>
                <th className="px-4 py-3 text-center font-medium text-on-surface-variant">
                  Servers
                </th>
                <th className="px-4 py-3 text-center font-medium text-on-surface-variant">
                  VMs
                </th>
                <th className="px-4 py-3 text-left font-medium text-on-surface-variant">
                  Created
                </th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  onClick={() => router.push(`/admin/users/${user.id}`)}
                  className="border-b border-outline-variant last:border-0 cursor-pointer hover:bg-surface-container/50"
                >
                  <td className="px-4 py-3 text-foreground">{user.email}</td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`inline-block h-2.5 w-2.5 rounded-full ${
                        user.verified ? "bg-green-500" : "bg-red-500"
                      }`}
                    />
                  </td>
                  <td className="px-4 py-3 text-center text-on-surface-variant">
                    {user.server_count}
                  </td>
                  <td className="px-4 py-3 text-center text-on-surface-variant">
                    {user.vm_count}
                  </td>
                  <td className="px-4 py-3 text-on-surface-variant">
                    {formatDate(user.created_at)}
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

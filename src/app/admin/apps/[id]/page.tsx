"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import AdminShell from "@/components/admin/AdminShell";
import AppForm, { type AppFormData } from "@/components/admin/AppForm";
import { getApp, updateApp } from "@/lib/adminApi";

export default function EditAppPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  const router = useRouter();
  const [initial, setInitial] = useState<Partial<AppFormData> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const app = await getApp(id);
        setInitial({
          id: app.id,
          label: app.label,
          subtitle: app.subtitle,
          badge_color: app.badgeColor,
          badge_text: app.badgeText || "",
          icon_type: app.icon?.type || "",
          icon_name: app.icon?.type === "image"
            ? (app.icon?.url || app.icon?.name || "")
            : (app.icon?.name || ""),
          app_type: app.appType,
          target: app.target,
          sort_order: app.order,
          enabled: app.enabled,
          category: app.category || "",
          description: app.description || "",
          install_cmd: app.installCmd || "",
          uninstall_cmd: app.uninstallCmd || "",
          check_cmd: app.checkCmd || "",
          mcp_url: app.mcpUrl || "",
          instructions_url: app.instructionsUrl || "",
          instructions_archive_url: app.instructionsArchiveUrl || "",
        });
      } catch {
        // handled by adminFetch
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [id]);

  async function handleSubmit(data: AppFormData) {
    const payload: Record<string, unknown> = {
      label: data.label,
      subtitle: data.subtitle,
      badge_color: data.badge_color,
      badge_text: data.badge_text || null,
      icon_type: data.icon_type || null,
      icon_name: data.icon_name || null,
      app_type: data.app_type,
      target: data.target,
      sort_order: data.sort_order,
      enabled: data.enabled,
      category: data.category || null,
      description: data.description || null,
      install_cmd: data.install_cmd || null,
      uninstall_cmd: data.uninstall_cmd || null,
      check_cmd: data.check_cmd || null,
      mcp_url: data.mcp_url || null,
      instructions_url: data.instructions_url || null,
      instructions_archive_url: data.instructions_archive_url || null,
    };
    await updateApp(id, payload);
    router.push("/admin/apps");
  }

  return (
    <AdminShell>
      <h1 className="mb-6 text-lg font-semibold text-foreground">
        Edit App: {id}
      </h1>
      {loading ? (
        <p className="text-sm text-on-surface-variant">Loading...</p>
      ) : initial ? (
        <AppForm initial={initial} isEdit onSubmit={handleSubmit} />
      ) : (
        <p className="text-sm text-red-400">App not found.</p>
      )}
    </AdminShell>
  );
}

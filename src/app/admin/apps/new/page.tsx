"use client";

import { useRouter } from "next/navigation";
import AdminShell from "@/components/admin/AdminShell";
import AppForm, { type AppFormData } from "@/components/admin/AppForm";
import { createApp } from "@/lib/adminApi";

export default function NewAppPage() {
  const router = useRouter();

  async function handleSubmit(data: AppFormData) {
    const payload: Record<string, unknown> = {
      id: data.id,
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
      instructions_url: data.instructions_url || null,
      instructions_archive_url: data.instructions_archive_url || null,
    };
    await createApp(payload);
    router.push("/admin/apps");
  }

  return (
    <AdminShell>
      <h1 className="mb-6 text-lg font-semibold text-foreground">New App</h1>
      <AppForm onSubmit={handleSubmit} />
    </AdminShell>
  );
}

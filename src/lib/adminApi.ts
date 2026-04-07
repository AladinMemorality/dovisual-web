import { getAdminKey, clearAdminKey } from "./adminAuth";

const API_BASE = "https://api.dovisual.com/api/v1";

async function adminFetch(path: string, options: RequestInit = {}): Promise<Response> {
  const key = getAdminKey();
  if (!key) throw new Error("Not authenticated");

  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      "X-Admin-Key": key,
      ...options.headers,
    },
  });

  if (res.status === 403) {
    clearAdminKey();
    if (typeof window !== "undefined") {
      window.location.href = "/admin/login";
    }
    throw new Error("Forbidden");
  }

  return res;
}

export async function adminLogin(key: string): Promise<boolean> {
  const res = await fetch(`${API_BASE}/admin/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Admin-Key": key,
    },
  });
  return res.ok;
}

export interface AppData {
  id: string;
  label: string;
  subtitle: string;
  badgeColor: string;
  badgeText: string | null;
  icon: { type: string; name: string } | null;
  appType: string;
  target: string;
  order: number;
  enabled: boolean;
  installCmd: string | null;
  uninstallCmd: string | null;
  checkCmd: string | null;
  instructionsUrl: string | null;
  instructionsArchiveUrl: string | null;
}

export async function listApps(): Promise<AppData[]> {
  const res = await adminFetch("/admin/apps");
  const data = await res.json();
  return data.apps;
}

export async function getApp(id: string): Promise<AppData> {
  const res = await adminFetch(`/admin/apps/${id}`);
  if (!res.ok) throw new Error("App not found");
  return res.json();
}

export async function createApp(app: Record<string, unknown>): Promise<void> {
  const res = await adminFetch("/admin/apps", {
    method: "POST",
    body: JSON.stringify(app),
  });
  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.detail || "Failed to create app");
  }
}

export async function updateApp(
  id: string,
  data: Record<string, unknown>,
): Promise<void> {
  const res = await adminFetch(`/admin/apps/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.detail || "Failed to update app");
  }
}

export async function deleteApp(id: string): Promise<void> {
  const res = await adminFetch(`/admin/apps/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) {
    const err = await res.json();
    throw new Error(err.detail || "Failed to delete app");
  }
}

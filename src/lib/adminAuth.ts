const STORAGE_KEY = "dovi-admin-key";

export function getAdminKey(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(STORAGE_KEY);
}

export function setAdminKey(key: string): void {
  localStorage.setItem(STORAGE_KEY, key);
}

export function clearAdminKey(): void {
  localStorage.removeItem(STORAGE_KEY);
}

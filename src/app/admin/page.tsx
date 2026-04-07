"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAdminKey } from "@/lib/adminAuth";

export default function AdminIndex() {
  const router = useRouter();

  useEffect(() => {
    if (getAdminKey()) {
      router.replace("/admin/apps");
    } else {
      router.replace("/admin/login");
    }
  }, [router]);

  return null;
}

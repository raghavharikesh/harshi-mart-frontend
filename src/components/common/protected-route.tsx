"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import { useAppSelector } from "@/hooks/redux";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const { isAuthenticated } =
    useAppSelector(
      (state) => state.auth
    );

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  return children;
}
"use client";
import useCurrentUser from "@/store/use-current-user";
import { useRouter, usePathname } from "next/navigation";
import { useEffect } from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const currentUser = useCurrentUser((state) => state.currentUser);
  useEffect(() => {
    if (pathname.startsWith("/auth") || currentUser) return;
    if (!currentUser) {
      router.push("/auth/login");
    }
  }, [pathname, currentUser, router]);

  return <main className="min-h-screen">{children}</main>;
};

export default MainLayout;

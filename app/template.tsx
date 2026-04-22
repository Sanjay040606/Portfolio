import type { ReactNode } from "react";
import PageTransition from "@/components/page-transition";
import SiteShell from "@/components/site-shell";

export default function Template({ children }: { children: ReactNode }) {
  return (
    <SiteShell>
      <PageTransition>{children}</PageTransition>
    </SiteShell>
  );
}

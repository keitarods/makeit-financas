"use client";

import { track } from "@vercel/analytics";
import { ArrowUpRight } from "lucide-react";
import { BUDGET_APP_URL } from "@/lib/site";

export default function BudgetAppLink({ placement, className, children = "Acessar o aplicativo" }: { placement: string; className?: string; children?: React.ReactNode }) {
  return <a href={BUDGET_APP_URL} className={className} onClick={() => track("budget_app_open", { placement })}>{children}<ArrowUpRight size={18} aria-hidden="true" /></a>;
}

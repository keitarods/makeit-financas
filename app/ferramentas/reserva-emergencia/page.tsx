"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ShieldCheck } from "lucide-react";

function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
  }).format(value || 0);
}

function parseLocaleNumber(value: string) {
  if (!value) return 0;

  const cleaned = value.trim().replace(/\s/g, "").replace(/[^\d,.-]/g, "");
  const hasComma = cleaned.includes(",");
  const hasDot = cleaned.includes(".");

  if (hasComma && hasDot) {
    const lastComma = cleaned.lastIndexOf(",");
    const lastDot = cleaned.lastIndexOf(".");

    if (lastComma > lastDot) {
      return Number(cleaned.replace(/\./g, "").replace(",", ".")) || 0;
    }

    return Number(cleaned.replace(/,/g, "")) || 0;
  }

  if (hasComma) {
    return Number(cleaned.replace(",", ".")) || 0;
  }

  return Number(cleaned) || 0;
}

const monthsByProfile = {
  CLT: 6,
  PJ: 12,
  PUBLICO: 3,
};

export default function ReservaEmergenciaPage() {
  const [profile, setProfile] = useState<"CLT" | "PJ" | "PUBLICO">("CLT");
  const [fixedExpense, setFixedExpense] = useState("3000");

  const result = useMemo(() => {
    const expense = parseLocaleNumber(fixedExpense);
    const months = monthsByProfile[profile];
    return {
      months,
      reserveValue: expense * months,
    };
  }, [profile, fixedExpense]);

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <div className="mb-8">
        <Link href="/ferramentas" className="text-sm font-medium text-slate-900 underline">
          Voltar para Ferramentas
        </Link>
      </div>

      <Card className="rounded-3xl border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <ShieldCheck className="h-6 w-6 text-[#526649]" />
            Calculadora de Reserva de Emergência
          </CardTitle>
          <CardDescription>
            Descubra uma estimativa de reserva com base no seu perfil de trabalho e no seu gasto mensal fixo.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-8">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Tipo de trabalho</label>
              <select
                value={profile}
                onChange={(e) => setProfile(e.target.value as "CLT" | "PJ" | "PUBLICO")}
                className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm"
              >
                <option value="CLT">CLT</option>
                <option value="PJ">PJ</option>
                <option value="PUBLICO">Funcionário público</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Gasto mensal fixo</label>
              <Input
                type="text"
                inputMode="decimal"
                value={fixedExpense}
                onChange={(e) => setFixedExpense(e.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="rounded-2xl bg-slate-50">
              <CardContent className="p-5">
                <p className="text-sm text-slate-500">Meses sugeridos</p>
                <p className="mt-2 text-2xl font-semibold">{result.months} meses</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl bg-slate-50">
              <CardContent className="p-5">
                <p className="text-sm text-slate-500">Valor estimado da reserva</p>
                <p className="mt-2 text-2xl font-semibold">{formatCurrency(result.reserveValue)}</p>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6 text-sm leading-7 text-slate-700">
            <p className="font-semibold">Nota sobre a lógica da reserva</p>

            <p className="mt-3">
              A reserva de emergência existe para reduzir atrito, proteger a família e impedir que
              uma crise pontual vire uma bola de neve.
            </p>

            <p className="mt-3">Ela te ajuda a:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>não depender de cheque especial/cartão quando algo dá errado;</li>
              <li>manter o padrão de vida enquanto resolve o problema;</li>
              <li>tomar decisões com calma, inclusive profissionais;</li>
              <li>preservar seus investimentos de longo prazo, sem resgatar na pior hora.</li>
            </ul>

            <p className="mt-4">
              Uma pessoa CLT, devido à maior estabilidade e alguns benefícios, costuma ter como
              referência algo em torno de 6 meses. Uma pessoa PJ, por não ter esses benefícios em
              um momento de dificuldade, tende a seguir a lógica de 12 meses.
            </p>

            <p className="mt-4">
              Já o funcionário público, pela segurança maior do vínculo, pode trabalhar com algo em
              torno de 3 meses. Ainda assim, dependendo do conservadorismo da pessoa, ela pode
              preferir manter 6 meses de reserva.
            </p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
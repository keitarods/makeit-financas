"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Calculator } from "lucide-react";

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

function monthlyRateFromInput(rateValue: number, rateType: "mensal" | "anual") {
  if (rateType === "mensal") return rateValue / 100;
  return Math.pow(1 + rateValue / 100, 1 / 12) - 1;
}

export default function JurosCompostosPage() {
  const [initialAmount, setInitialAmount] = useState("1000");
  const [monthlyContribution, setMonthlyContribution] = useState("500");
  const [rateValue, setRateValue] = useState("12");
  const [rateType, setRateType] = useState<"mensal" | "anual">("anual");
  const [termValue, setTermValue] = useState("10");

  const termType = rateType === "anual" ? "anos" : "meses";
  const prazoLabel = rateType === "anual" ? "Prazo (anos)" : "Prazo (meses)";
  const taxaLabel = rateType === "anual" ? "Taxa anual (%)" : "Taxa mensal (%)";

  const result = useMemo(() => {
    const principal = parseLocaleNumber(initialAmount);
    const contribution = parseLocaleNumber(monthlyContribution);
    const rate = parseLocaleNumber(rateValue);

    const totalMonths =
      rateType === "anual"
        ? Math.max(0, Math.round(parseLocaleNumber(termValue) * 12))
        : Math.max(0, Math.round(parseLocaleNumber(termValue)));

    const monthlyRate = monthlyRateFromInput(rate, rateType);

    let balance = principal;
    let invested = principal;
    const history: {
      periodo: number;
      patrimonio: number;
      investido: number;
      juros: number;
    }[] = [];

    for (let month = 1; month <= totalMonths; month += 1) {
      balance = balance * (1 + monthlyRate) + contribution;
      invested += contribution;

      history.push({
        periodo: month,
        patrimonio: balance,
        investido: invested,
        juros: balance - invested,
      });
    }

    return {
      totalMonths,
      invested,
      balance,
      earnings: balance - invested,
      history,
    };
  }, [initialAmount, monthlyContribution, rateValue, rateType, termValue]);

  const maxPatrimonio =
    result.history.length > 0 ? Math.max(...result.history.map((item) => item.patrimonio)) : 0;

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8">
        <Link href="/ferramentas" className="text-sm font-medium text-slate-900 underline">
          Voltar para Ferramentas
        </Link>
      </div>

      <Card className="rounded-3xl border-slate-200 shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Calculator className="h-6 w-6 text-[#526649]" />
            Calculadora de Juros Compostos
          </CardTitle>
          <CardDescription>
            Simule o crescimento do seu patrimônio com taxa mensal ou anual e acompanhe a evolução
            no gráfico.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Valor inicial</label>
              <Input
                type="text"
                inputMode="decimal"
                value={initialAmount}
                onChange={(e) => setInitialAmount(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Aporte mensal</label>
              <Input
                type="text"
                inputMode="decimal"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Tipo da taxa</label>
              <select
                value={rateType}
                onChange={(e) => setRateType(e.target.value as "mensal" | "anual")}
                className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm"
              >
                <option value="mensal">Mensal</option>
                <option value="anual">Anual</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">{taxaLabel}</label>
              <Input
                type="text"
                inputMode="decimal"
                value={rateValue}
                onChange={(e) => setRateValue(e.target.value)}
              />
            </div>

            <div className="space-y-2 lg:col-span-2">
              <label className="text-sm font-medium text-slate-700">{prazoLabel}</label>
              <Input
                type="text"
                inputMode="decimal"
                value={termValue}
                onChange={(e) => setTermValue(e.target.value)}
              />
            </div>

            <div className="space-y-2 lg:col-span-2">
              <label className="text-sm font-medium text-slate-700">Base do prazo</label>
              <div className="flex h-10 items-center rounded-md border border-slate-200 bg-slate-50 px-3 text-sm text-slate-600">
                {termType === "anos"
                  ? "Prazo vinculado à taxa anual"
                  : "Prazo vinculado à taxa mensal"}
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <Card className="rounded-2xl bg-slate-50">
              <CardContent className="p-5">
                <p className="text-sm text-slate-500">Total investido</p>
                <p className="mt-2 text-2xl font-semibold">{formatCurrency(result.invested)}</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl bg-slate-50">
              <CardContent className="p-5">
                <p className="text-sm text-slate-500">Juros acumulados</p>
                <p className="mt-2 text-2xl font-semibold">{formatCurrency(result.earnings)}</p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl bg-slate-50">
              <CardContent className="p-5">
                <p className="text-sm text-slate-500">Patrimônio final</p>
                <p className="mt-2 text-2xl font-semibold">{formatCurrency(result.balance)}</p>
              </CardContent>
            </Card>
          </div>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg">Evolução do patrimônio ao longo do tempo</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[340px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={result.history}
                    margin={{ top: 20, right: 20, left: 20, bottom: 10 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="periodo" />
                    <YAxis
                      width={95}
                      domain={[0, Math.ceil(maxPatrimonio * 1.08)]}
                      tickFormatter={(v) => `R$ ${Number(v).toLocaleString("pt-BR")}`}
                    />
                    <Tooltip
                      formatter={(value: number) => formatCurrency(Number(value))}
                      labelFormatter={(label) =>
                        `${termType === "anos" ? "Mês acumulado" : "Mês"} ${label}`
                      }
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="patrimonio"
                      name="Patrimônio"
                      dot={false}
                      strokeWidth={2.5}
                      stroke="#526649"
                    />
                    <Line
                      type="monotone"
                      dataKey="investido"
                      name="Investido"
                      dot={false}
                      strokeWidth={2.5}
                      stroke="#7fa470"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="overflow-hidden rounded-2xl border border-slate-200">
            <div className="max-h-[420px] overflow-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="sticky top-0 bg-slate-50 text-slate-600">
                  <tr>
                    <th className="px-4 py-3 font-medium">Período</th>
                    <th className="px-4 py-3 font-medium">Investido</th>
                    <th className="px-4 py-3 font-medium">Juros</th>
                    <th className="px-4 py-3 font-medium">Patrimônio</th>
                  </tr>
                </thead>
                <tbody>
                  {result.history.map((row) => (
                    <tr key={row.periodo} className="border-t border-slate-100">
                      <td className="px-4 py-3">{row.periodo}</td>
                      <td className="px-4 py-3">{formatCurrency(row.investido)}</td>
                      <td className="px-4 py-3">{formatCurrency(row.juros)}</td>
                      <td className="px-4 py-3">{formatCurrency(row.patrimonio)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-50 p-5 text-sm leading-7 text-slate-700">
            Quanto maior o prazo e a consistência dos aportes, maior tende a ser o efeito dos juros
            compostos no patrimônio final.
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
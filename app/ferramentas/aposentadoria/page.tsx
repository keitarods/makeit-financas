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
import { Wallet, Info } from "lucide-react";

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

function periodicRateFromInput(rateValue: number, rateType: "mensal" | "anual") {
  if (rateType === "mensal") return rateValue / 100;
  return Math.pow(1 + rateValue / 100, 1 / 12) - 1;
}

export default function AposentadoriaPage() {
  const [currentAge, setCurrentAge] = useState("30");
  const [retirementAge, setRetirementAge] = useState("65");
  const [currentPatrimony, setCurrentPatrimony] = useState("0");
  const [rateType, setRateType] = useState<"mensal" | "anual">("anual");
  const [rateValue, setRateValue] = useState("8");
  const [targetValue, setTargetValue] = useState("1000000");

  const periodLabel =
    rateType === "anual" ? "Prazo até aposentadoria (anos)" : "Prazo até aposentadoria (meses)";
  const rateLabel = rateType === "anual" ? "Taxa anual (%)" : "Taxa mensal (%)";

  const result = useMemo(() => {
    const ageNow = parseLocaleNumber(currentAge);
    const ageRetire = parseLocaleNumber(retirementAge);
    const initialPatrimony = parseLocaleNumber(currentPatrimony);
    const target = parseLocaleNumber(targetValue);
    const monthlyRate = periodicRateFromInput(parseLocaleNumber(rateValue), rateType);

    const totalMonths = Math.max(0, Math.round((ageRetire - ageNow) * 12));

    let monthlyContribution = 0;

    if (totalMonths > 0 && target > 0) {
      const futureValueOfCurrentPatrimony =
        initialPatrimony * Math.pow(1 + monthlyRate, totalMonths);
      const remainingGoal = Math.max(0, target - futureValueOfCurrentPatrimony);

      if (remainingGoal === 0) {
        monthlyContribution = 0;
      } else if (monthlyRate === 0) {
        monthlyContribution = remainingGoal / totalMonths;
      } else {
        monthlyContribution =
          remainingGoal / ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);
      }
    }

    let balance = initialPatrimony;
    let invested = initialPatrimony;
    let contributionAccumulated = 0;
    let initialPatrimonyProjected = initialPatrimony;

    const history: {
      periodo: number;
      patrimonio: number;
      investido: number;
      juros: number;
      aportesAcumulados: number;
      patrimonioInicialProjetado: number;
    }[] = [];

    for (let month = 1; month <= totalMonths; month += 1) {
      initialPatrimonyProjected = initialPatrimonyProjected * (1 + monthlyRate);
      contributionAccumulated += monthlyContribution;

      balance = balance * (1 + monthlyRate) + monthlyContribution;
      invested += monthlyContribution;

      history.push({
        periodo: month,
        patrimonio: balance,
        investido: invested,
        juros: balance - invested,
        aportesAcumulados: contributionAccumulated,
        patrimonioInicialProjetado: initialPatrimonyProjected,
      });
    }

    return {
      totalMonths,
      totalYears: totalMonths / 12,
      monthlyContribution,
      finalBalance: balance,
      invested,
      earnings: balance - invested,
      history,
    };
  }, [currentAge, retirementAge, currentPatrimony, rateType, rateValue, targetValue]);

  const maxPatrimonio =
    result.history.length > 0
      ? Math.max(
          ...result.history.map((item) =>
            Math.max(
              item.patrimonio,
              item.aportesAcumulados,
              item.patrimonioInicialProjetado
            )
          )
        )
      : 0;

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
            <Wallet className="h-6 w-6 text-[#526649]" />
            Calculadora de Aposentadoria
          </CardTitle>
          <CardDescription>
            Estime o aporte mensal necessário para atingir um patrimônio desejado até a idade de
            aposentadoria.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Idade atual</label>
              <Input
                type="text"
                inputMode="decimal"
                value={currentAge}
                onChange={(e) => setCurrentAge(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Idade que deseja se aposentar
              </label>
              <Input
                type="text"
                inputMode="decimal"
                value={retirementAge}
                onChange={(e) => setRetirementAge(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Patrimônio já acumulado</label>
              <Input
                type="text"
                inputMode="decimal"
                value={currentPatrimony}
                onChange={(e) => setCurrentPatrimony(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Patrimônio desejado na aposentadoria
              </label>
              <Input
                type="text"
                inputMode="decimal"
                value={targetValue}
                onChange={(e) => setTargetValue(e.target.value)}
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
              <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                {rateLabel}
                <span
                  className="inline-flex cursor-help items-center text-slate-500"
                  title="Taxa real é a rentabilidade estimada acima da inflação. Ao considerar 8% ao ano como taxa real, a simulação assume crescimento do patrimônio já descontando a perda do poder de compra ao longo do tempo."
                >
                  <Info className="h-4 w-4" />
                </span>
              </label>
              <Input
                type="text"
                inputMode="decimal"
                value={rateValue}
                onChange={(e) => setRateValue(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">{periodLabel}</label>
              <div className="flex h-10 items-center rounded-md border border-slate-200 bg-slate-50 px-3 text-sm text-slate-600">
                {rateType === "anual"
                  ? `${result.totalYears.toFixed(1).replace(".", ",")} anos`
                  : `${result.totalMonths} meses`}
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-4">
            <Card className="rounded-2xl bg-slate-50">
              <CardContent className="p-5">
                <p className="text-sm text-slate-500">Aporte mensal necessário</p>
                <p className="mt-2 text-2xl font-semibold">
                  {formatCurrency(result.monthlyContribution)}
                </p>
              </CardContent>
            </Card>

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
                <p className="text-sm text-slate-500">Patrimônio projetado</p>
                <p className="mt-2 text-2xl font-semibold">
                  {formatCurrency(result.finalBalance)}
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg">
                Evolução do patrimônio e progressão dos aportes
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[360px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={result.history}
                    margin={{ top: 20, right: 20, left: 20, bottom: 10 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="periodo" />
                    <YAxis
                      width={110}
                      domain={[0, Math.ceil(maxPatrimonio * 1.08)]}
                      tickFormatter={(v) => `R$ ${Number(v).toLocaleString("pt-BR")}`}
                    />
                    <Tooltip
                      formatter={(value: number) => formatCurrency(Number(value))}
                      labelFormatter={(label) => `Período ${label}`}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="patrimonio"
                      name="Patrimônio total"
                      dot={false}
                      strokeWidth={2.5}
                      stroke="#526649"
                    />
                    <Line
                      type="monotone"
                      dataKey="aportesAcumulados"
                      name="Aportes acumulados"
                      dot={false}
                      strokeWidth={2.5}
                      stroke="#7fa470"
                    />
                    <Line
                      type="monotone"
                      dataKey="patrimonioInicialProjetado"
                      name="Patrimônio inicial projetado"
                      dot={false}
                      strokeWidth={2}
                      stroke="#a3b892"
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
                    <th className="px-4 py-3 font-medium">Aportes acumulados</th>
                    <th className="px-4 py-3 font-medium">Investido</th>
                    <th className="px-4 py-3 font-medium">Juros</th>
                    <th className="px-4 py-3 font-medium">Patrimônio</th>
                  </tr>
                </thead>
                <tbody>
                  {result.history.map((row) => (
                    <tr key={row.periodo} className="border-t border-slate-100">
                      <td className="px-4 py-3">{row.periodo}</td>
                      <td className="px-4 py-3">{formatCurrency(row.aportesAcumulados)}</td>
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
            Esta simulação estima o aporte mensal necessário para alcançar um patrimônio desejado
            até a aposentadoria, considerando o patrimônio que você já possui e uma taxa constante
            ao longo do tempo. O gráfico agora separa a evolução do patrimônio total, a progressão
            dos aportes acumulados e a projeção do patrimônio inicial ao longo do período.
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  CartesianGrid,
  Legend,
  LineChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Landmark } from "lucide-react";

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

function monthlyRateFromCET(rateValue: number, rateType: "mensal" | "anual") {
  if (rateType === "mensal") return rateValue / 100;
  return Math.pow(1 + rateValue / 100, 1 / 12) - 1;
}

export default function FinanciamentoPage() {
  const [loanAmount, setLoanAmount] = useState("200000");
  const [installments, setInstallments] = useState("36");
  const [cetValue, setCetValue] = useState("14");
  const [cetType, setCetType] = useState<"mensal" | "anual">("anual");

  const result = useMemo(() => {
    const pv = parseLocaleNumber(loanAmount);
    const n = Math.max(1, Math.round(parseLocaleNumber(installments) || 1));
    const rate = monthlyRateFromCET(parseLocaleNumber(cetValue), cetType);

    const priceRows: {
      parcela: number;
      prestacao: number;
      amortizacao: number;
      juros: number;
      saldoDevedor: number;
    }[] = [];

    const sacRows: typeof priceRows = [];

    const pricePayment =
      rate === 0 ? pv / n : (pv * rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1);

    let priceBalance = pv;
    let sacBalance = pv;
    const sacAmort = pv / n;

    for (let i = 1; i <= n; i += 1) {
      const priceInterest = priceBalance * rate;
      const priceAmort = pricePayment - priceInterest;
      priceBalance = Math.max(0, priceBalance - priceAmort);

      priceRows.push({
        parcela: i,
        prestacao: pricePayment,
        amortizacao: priceAmort,
        juros: priceInterest,
        saldoDevedor: priceBalance,
      });

      const sacInterest = sacBalance * rate;
      const sacPayment = sacAmort + sacInterest;
      sacBalance = Math.max(0, sacBalance - sacAmort);

      sacRows.push({
        parcela: i,
        prestacao: sacPayment,
        amortizacao: sacAmort,
        juros: sacInterest,
        saldoDevedor: sacBalance,
      });
    }

    const chartData = priceRows.map((row, index) => ({
      parcela: row.parcela,
      pricePrestacao: row.prestacao,
      sacPrestacao: sacRows[index].prestacao,
      priceSaldo: row.saldoDevedor,
      sacSaldo: sacRows[index].saldoDevedor,
    }));

    const totalPrice = priceRows.reduce((acc, row) => acc + row.prestacao, 0);
    const totalSac = sacRows.reduce((acc, row) => acc + row.prestacao, 0);

    const totalPriceInterest = priceRows.reduce((acc, row) => acc + row.juros, 0);
    const totalSacInterest = sacRows.reduce((acc, row) => acc + row.juros, 0);

    const maxPrestacao = Math.max(
      ...chartData.map((item) => Math.max(item.pricePrestacao, item.sacPrestacao)),
      0
    );

    const maxSaldo = Math.max(
      ...chartData.map((item) => Math.max(item.priceSaldo, item.sacSaldo)),
      0
    );

    return {
      priceRows,
      sacRows,
      chartData,
      totalPrice,
      totalSac,
      totalPriceInterest,
      totalSacInterest,
      maxPrestacao,
      maxSaldo,
    };
  }, [loanAmount, installments, cetValue, cetType]);

  const tickInterval = Math.max(1, Math.floor(result.chartData.length / 12));

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
            <Landmark className="h-6 w-6 text-[#526649]" />
            Calculadora de Financiamento Price x SAC
          </CardTitle>
          <CardDescription>
            Compare parcelas, amortização, saldo devedor e juros pagos entre os sistemas Price e
            SAC.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Valor do financiamento</label>
              <Input
                type="text"
                inputMode="decimal"
                value={loanAmount}
                onChange={(e) => setLoanAmount(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">
                Quantidade de parcelas
              </label>
              <Input
                type="text"
                inputMode="decimal"
                value={installments}
                onChange={(e) => setInstallments(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">Tipo do CET</label>
              <select
                value={cetType}
                onChange={(e) => setCetType(e.target.value as "mensal" | "anual")}
                className="flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm"
              >
                <option value="mensal">Mensal</option>
                <option value="anual">Anual</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-slate-700">CET (%)</label>
              <Input
                type="text"
                inputMode="decimal"
                value={cetValue}
                onChange={(e) => setCetValue(e.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Card className="rounded-2xl bg-slate-50">
              <CardContent className="p-5">
                <p className="text-sm text-slate-500">Total pago - Price</p>
                <p className="mt-2 text-2xl font-semibold">{formatCurrency(result.totalPrice)}</p>
                <p className="mt-2 text-sm text-slate-600">
                  Juros totais: {formatCurrency(result.totalPriceInterest)}
                </p>
              </CardContent>
            </Card>

            <Card className="rounded-2xl bg-slate-50">
              <CardContent className="p-5">
                <p className="text-sm text-slate-500">Total pago - SAC</p>
                <p className="mt-2 text-2xl font-semibold">{formatCurrency(result.totalSac)}</p>
                <p className="mt-2 text-sm text-slate-600">
                  Juros totais: {formatCurrency(result.totalSacInterest)}
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg">Comparação das parcelas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[320px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={result.chartData}
                    margin={{ top: 20, right: 20, left: 20, bottom: 10 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="parcela" interval={tickInterval} />
                    <YAxis
                      width={95}
                      domain={[0, Math.ceil(result.maxPrestacao * 1.08)]}
                      tickFormatter={(v) => `R$ ${Number(v).toLocaleString("pt-BR")}`}
                    />
                    <Tooltip formatter={(value) => formatCurrency(Number(value ?? 0))} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="pricePrestacao"
                      name="Parcela Price"
                      dot={false}
                      strokeWidth={2.5}
                      stroke="#526649"
                    />
                    <Line
                      type="monotone"
                      dataKey="sacPrestacao"
                      name="Parcela SAC"
                      dot={false}
                      strokeWidth={2.5}
                      stroke="#7fa470"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-lg">Comparação do saldo devedor</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[320px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={result.chartData}
                    margin={{ top: 20, right: 20, left: 20, bottom: 10 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="parcela" interval={tickInterval} />
                    <YAxis
                      width={95}
                      domain={[0, Math.ceil(result.maxSaldo * 1.08)]}
                      tickFormatter={(v) => `R$ ${Number(v).toLocaleString("pt-BR")}`}
                    />
                    <Tooltip formatter={(value) => formatCurrency(Number(value ?? 0))} />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="priceSaldo"
                      name="Saldo Price"
                      dot={false}
                      strokeWidth={2.5}
                      stroke="#526649"
                    />
                    <Line
                      type="monotone"
                      dataKey="sacSaldo"
                      name="Saldo SAC"
                      dot={false}
                      strokeWidth={2.5}
                      stroke="#7fa470"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-xl font-semibold">Tabela - Price</h2>
              <div className="max-h-[420px] overflow-auto rounded-2xl border border-slate-200">
                <table className="min-w-full text-left text-sm">
                  <thead className="sticky top-0 bg-slate-50 text-slate-600">
                    <tr>
                      <th className="px-4 py-3 font-medium">Parcela</th>
                      <th className="px-4 py-3 font-medium">Prestação</th>
                      <th className="px-4 py-3 font-medium">Amortização</th>
                      <th className="px-4 py-3 font-medium">Juros</th>
                      <th className="px-4 py-3 font-medium">Saldo devedor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.priceRows.map((row) => (
                      <tr key={row.parcela} className="border-t border-slate-100">
                        <td className="px-4 py-3">{row.parcela}</td>
                        <td className="px-4 py-3">{formatCurrency(row.prestacao)}</td>
                        <td className="px-4 py-3">{formatCurrency(row.amortizacao)}</td>
                        <td className="px-4 py-3">{formatCurrency(row.juros)}</td>
                        <td className="px-4 py-3">{formatCurrency(row.saldoDevedor)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold">Tabela - SAC</h2>
              <div className="max-h-[420px] overflow-auto rounded-2xl border border-slate-200">
                <table className="min-w-full text-left text-sm">
                  <thead className="sticky top-0 bg-slate-50 text-slate-600">
                    <tr>
                      <th className="px-4 py-3 font-medium">Parcela</th>
                      <th className="px-4 py-3 font-medium">Prestação</th>
                      <th className="px-4 py-3 font-medium">Amortização</th>
                      <th className="px-4 py-3 font-medium">Juros</th>
                      <th className="px-4 py-3 font-medium">Saldo devedor</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.sacRows.map((row) => (
                      <tr key={row.parcela} className="border-t border-slate-100">
                        <td className="px-4 py-3">{row.parcela}</td>
                        <td className="px-4 py-3">{formatCurrency(row.prestacao)}</td>
                        <td className="px-4 py-3">{formatCurrency(row.amortizacao)}</td>
                        <td className="px-4 py-3">{formatCurrency(row.juros)}</td>
                        <td className="px-4 py-3">{formatCurrency(row.saldoDevedor)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6 text-sm leading-7 text-slate-700">
            <p className="font-semibold">Diferença entre Price e SAC</p>
            <p className="mt-3">
              No sistema Price, a parcela tende a ser constante ao longo do tempo. No começo, você
              paga mais juros e amortiza menos principal.
            </p>
            <p className="mt-3">
              No sistema SAC, a amortização é constante. Por isso, as parcelas começam mais altas e
              vão caindo com o tempo, enquanto o saldo devedor reduz mais rapidamente.
            </p>
            <p className="mt-3">
              Em muitos cenários, o SAC tende a ter menor custo total, enquanto o Price costuma
              oferecer parcelas iniciais mais suaves.
            </p>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
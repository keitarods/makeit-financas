"use client";

import { useState } from "react";
import {
  BarChart3,
  CircleDollarSign,
  LineChart,
  ReceiptText,
  Tags,
} from "lucide-react";

type PreviewTab = "Dashboard" | "Rendas" | "Despesas" | "Tipos" | "Gastos ideais";

const appTabs: PreviewTab[] = ["Dashboard", "Rendas", "Despesas", "Tipos", "Gastos ideais"];

const dashboardStats = [
  ["Renda total", "R$ 8.400", CircleDollarSign],
  ["Gastos totais", "R$ 5.920", ReceiptText],
  ["% comprometido", "70,5%", BarChart3],
];

const barHeights = [48, 62, 58, 72, 64, 76, 69, 82, 74, 68, 61, 66];

const categoryBars = [
  ["Custo fixo", "42%", "w-[42%]"],
  ["Conforto", "28%", "w-[28%]"],
  ["Prazeres", "18%", "w-[18%]"],
  ["Investimentos", "12%", "w-[12%]"],
];

const incomeRows = [
  ["05/05/2026", "Pessoa A", "CLT", "R$ 6.500"],
  ["10/05/2026", "Pessoa B", "PJ", "R$ 1.500"],
  ["18/05/2026", "Casa", "Extra", "R$ 400"],
];

const expenseRows = [
  ["06/05/2026", "Mercado", "Custo variável", "R$ 820"],
  ["08/05/2026", "Aluguel", "Custo fixo", "R$ 2.200"],
  ["12/05/2026", "Escola", "Conhecimento", "R$ 680"],
];

const typeRows = [
  ["Aluguel", "Custo fixo", "Padrão"],
  ["Mercado", "Custo variável", "Padrão"],
  ["Cursos", "Conhecimento", "Personalizado"],
  ["Viagem", "Prazeres", "Personalizado"],
];

const idealRows = [
  ["Custo fixo", "50%", "42%", "Dentro do plano"],
  ["Conforto", "20%", "28%", "Atenção"],
  ["Investimentos", "15%", "12%", "Ajustável"],
];

function ProgressRow({ label, value, width }: { label: string; value: string; width: string }) {
  return (
    <div>
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <span className="text-slate-500">{value}</span>
      </div>
      <div className="mt-2 h-2 rounded-full bg-slate-100">
        <div className={`h-2 rounded-full bg-[#526649] ${width}`} />
      </div>
    </div>
  );
}

function DataTable({
  headers,
  rows,
}: {
  headers: string[];
  rows: string[][];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-slate-100">
      <table className="min-w-full text-left text-sm">
        <thead className="bg-slate-50 text-[#526649]">
          <tr>
            {headers.map((header) => (
              <th key={header} className="px-4 py-3 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.join("-")} className="border-t border-slate-100">
              {row.map((cell) => (
                <td key={cell} className="px-4 py-3 text-slate-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function DashboardPreview() {
  return (
    <>
      <div className="mt-5 grid gap-3 md:grid-cols-3">
        {dashboardStats.map(([label, value, Icon]) => (
          <div key={String(label)} className="rounded-2xl bg-slate-50 p-4">
            <Icon className="h-5 w-5 text-[#526649]" />
            <p className="mt-4 text-sm text-slate-500">{String(label)}</p>
            <p className="mt-1 text-xl font-semibold">{String(value)}</p>
          </div>
        ))}
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-2xl border border-slate-100 p-5">
          <div className="flex items-center justify-between">
            <p className="font-semibold">Série temporal mensal</p>
            <LineChart className="h-5 w-5 text-[#526649]" />
          </div>
          <div className="mt-6 flex h-40 items-end gap-2">
            {barHeights.map((height, index) => (
              <div
                key={index}
                className="flex-1 rounded-t-lg bg-[#526649]"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-slate-100 p-5">
          <p className="font-semibold">Gastos por categoria</p>
          <div className="mt-5 space-y-4">
            {categoryBars.map(([label, value, width]) => (
              <ProgressRow key={label} label={label} value={value} width={width} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function RendasPreview() {
  return (
    <div className="mt-5 space-y-4">
      <div className="grid gap-3 md:grid-cols-3">
        {["Nome", "Fonte da renda", "Valor"].map((label) => (
          <div key={label} className="rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
            <p className="text-xs text-slate-500">{label}</p>
            <p className="mt-1 text-sm font-semibold text-slate-800">
              {label === "Valor" ? "R$ 0,00" : "Adicionar informação"}
            </p>
          </div>
        ))}
      </div>
      <DataTable headers={["Data", "Nome", "Fonte", "Valor"]} rows={incomeRows} />
    </div>
  );
}

function DespesasPreview() {
  return (
    <div className="mt-5 space-y-4">
      <div className="rounded-2xl border border-[#d8ded2] bg-[#f7f8f4] p-4">
        <p className="text-sm font-semibold text-slate-900">Nova despesa</p>
        <p className="mt-1 text-xs text-slate-500">
          O tipo selecionado preenche a categoria automaticamente no app real.
        </p>
      </div>
      <DataTable headers={["Data", "Tipo", "Categoria", "Valor"]} rows={expenseRows} />
    </div>
  );
}

function TiposPreview() {
  return (
    <div className="mt-5 space-y-4">
      <div className="grid gap-3 md:grid-cols-3">
        <div className="rounded-2xl bg-slate-50 p-4">
          <Tags className="h-5 w-5 text-[#526649]" />
          <p className="mt-3 text-sm text-slate-500">Tipos padrão</p>
          <p className="mt-1 text-xl font-semibold">Somente leitura</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <Tags className="h-5 w-5 text-[#526649]" />
          <p className="mt-3 text-sm text-slate-500">Tipos personalizados</p>
          <p className="mt-1 text-xl font-semibold">Editáveis</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <Tags className="h-5 w-5 text-[#526649]" />
          <p className="mt-3 text-sm text-slate-500">Categorias</p>
          <p className="mt-1 text-xl font-semibold">7 grupos</p>
        </div>
      </div>
      <DataTable headers={["Tipo", "Categoria", "Origem"]} rows={typeRows} />
    </div>
  );
}

function GastosIdeaisPreview() {
  return (
    <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="rounded-2xl border border-slate-100 p-5">
        <p className="font-semibold">Distribuição planejada</p>
        <div className="mt-5 space-y-4">
          <ProgressRow label="Custo fixo" value="50%" width="w-[50%]" />
          <ProgressRow label="Conforto" value="20%" width="w-[20%]" />
          <ProgressRow label="Investimentos" value="15%" width="w-[15%]" />
          <ProgressRow label="Prazeres" value="10%" width="w-[10%]" />
        </div>
      </div>
      <DataTable headers={["Categoria", "Ideal", "Real", "Status"]} rows={idealRows} />
    </div>
  );
}

function ImportBox({ activeTab }: { activeTab: PreviewTab }) {
  const copy =
    activeTab === "Dashboard"
      ? "Rendas, despesas e tipos validados antes de gravar."
      : activeTab === "Rendas"
      ? "Importe entradas por nome, fonte, data e valor."
      : activeTab === "Despesas"
      ? "Importe despesas e relacione automaticamente com tipos cadastrados."
      : activeTab === "Tipos"
      ? "Atualize categorias e classificações personalizadas."
      : "Compare percentuais ideais com o gasto real.";

  return (
    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#d8ded2] bg-[#f7f8f4] p-4">
      <div>
        <p className="text-sm font-semibold text-slate-900">Importação por planilha</p>
        <p className="mt-1 text-xs text-slate-500">{copy}</p>
      </div>
      <div className="rounded-2xl bg-white px-4 py-2 text-sm font-semibold text-[#526649] shadow-sm">
        Deseja importar dados?
      </div>
    </div>
  );
}

export default function OrcamentoAppPreview() {
  const [activeTab, setActiveTab] = useState<PreviewTab>("Dashboard");

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-slate-950 p-3 shadow-2xl">
      <div className="grid gap-4 rounded-[1.5rem] bg-white p-4 lg:grid-cols-[260px_1fr] lg:p-5">
        <aside className="rounded-[1.25rem] border border-slate-100 bg-slate-50 p-4">
          <div className="border-b border-slate-200 pb-4">
            <p className="text-sm font-semibold text-[#526649]">Ferramenta financeira</p>
            <p className="mt-1 text-2xl font-semibold leading-tight">Orçamento doméstico</p>
            <div className="mt-4 rounded-2xl border border-[#c8ddbd] bg-[#eef3ea] px-4 py-2 text-sm font-semibold text-[#526649]">
              Teste grátis ativo
            </div>
          </div>

          <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
            {appTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                aria-pressed={activeTab === tab}
                className={
                  activeTab === tab
                    ? "rounded-2xl bg-[#526649] px-4 py-2.5 text-left text-sm font-medium text-white"
                    : "rounded-2xl border border-[#d8ded2] bg-white px-4 py-2.5 text-left text-sm font-medium text-[#526649] transition hover:bg-[#eef3ea]"
                }
              >
                {tab}
              </button>
            ))}
          </div>

          <ImportBox activeTab={activeTab} />
        </aside>

        <div className="min-w-0 rounded-[1.25rem] border border-slate-100 bg-white p-4 lg:p-5">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                Aba demonstrativa
              </p>
              <h3 className="mt-1 text-2xl font-semibold">{activeTab}</h3>
            </div>
            <div className="rounded-2xl bg-slate-50 px-4 py-2 text-sm font-medium text-slate-600">
              Dados ilustrativos
            </div>
          </div>

          {activeTab === "Dashboard" ? <DashboardPreview /> : null}
          {activeTab === "Rendas" ? <RendasPreview /> : null}
          {activeTab === "Despesas" ? <DespesasPreview /> : null}
          {activeTab === "Tipos" ? <TiposPreview /> : null}
          {activeTab === "Gastos ideais" ? <GastosIdeaisPreview /> : null}
        </div>
      </div>
    </div>
  );
}

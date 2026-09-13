"use client";

import { useState } from "react";
import { Eye, EyeOff, LayoutDashboard, ShieldCheck } from "lucide-react";
import styles from "./orcamento-app-preview.module.css";

// Read-only illustration of the OMKF interface.
// All amounts are fictional; this component never reads or writes account data.
const tabs = ["Dashboard", "Rendas", "Despesas", "Contas a pagar", "Tipos de despesa", "Gastos ideais", "Reserva de emergência", "Estatísticas"] as const;
type Tab = typeof tabs[number];
const categoryRows = [
  { name: "Custo fixo", value: 3000, ideal: 40 },
  { name: "Conforto", value: 1400, ideal: 20 },
  { name: "Conhecimento", value: 820, ideal: 10 },
  { name: "Prazeres", value: 700, ideal: 10 },
];

function DataTable({ headings, rows }: { headings: string[]; rows: string[][] }) {
  return <div className={styles.tableWrap}><table><thead><tr>{headings.map(item => <th key={item} scope="col">{item}</th>)}</tr></thead><tbody>{rows.map((row, index) => <tr key={index}>{row.map((item, i) => <td key={i}>{item}</td>)}</tr>)}</tbody></table></div>;
}

export default function OrcamentoAppPreview() {
  const [active, setActive] = useState<Tab>("Dashboard");
  const [hidden, setHidden] = useState(false);
  const money = (value: number) => hidden ? "••••" : value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
  const stats = (items: [string, string][]) => <div className={styles.stats}>{items.map(([label, value]) => <div key={label}><p>{label}</p><strong>{value}</strong></div>)}</div>;
  return <div className={styles.app}>
    <div className={styles.windowBar}><span><i /><i /><i /></span><p>OMKF · Orçamento doméstico</p><span className={styles.demo}>DADOS ILUSTRATIVOS</span></div>
    <div className={styles.appBody}>
      <div className={styles.heading}><div><p>SEU CONTROLE FINANCEIRO</p><h3><LayoutDashboard size={23} /> Orçamento doméstico</h3></div><button type="button" onClick={() => setHidden(!hidden)} aria-pressed={hidden} aria-label={hidden ? "Mostrar valores demonstrativos" : "Ocultar valores demonstrativos"}>{hidden ? <EyeOff size={17} /> : <Eye size={17} />}<span>{hidden ? "Mostrar" : "Ocultar"} valores</span></button></div>
      <div className={styles.navigation}><p>Navegação · explore as áreas do aplicativo</p><div className={styles.tabs} role="group" aria-label="Áreas da demonstração">{tabs.map(tab => <button type="button" key={tab} aria-pressed={active === tab} aria-controls="budget-preview-panel" onClick={() => setActive(tab)}>{tab}</button>)}</div></div>
      <div className={styles.period}><span>Período demonstrativo</span><strong>Maio de 2026</strong><small>Prévia interativa · sem cadastro</small></div>
      <section id="budget-preview-panel" aria-label={`Demonstração: ${active}`} className={styles.panel}>
        <h4 className={styles.panelTitle}>{active}</h4>
        {active === "Dashboard" && <>
          {stats([["Renda do período", money(8400)], ["Gastos do período", money(5920)], ["Investimentos", money(1000)], ["Saldo líquido", money(1480)]])}
          <div className={styles.charts}><div className={styles.card}><h4>Gastos por categoria</h4>{categoryRows.map(row => <div key={row.name} className={styles.category}><div><span>{row.name}</span><strong>{money(row.value)}</strong></div><div className={styles.track}><span style={{ width: `${row.value / 5920 * 100}%` }} /></div></div>)}</div><div className={styles.card}><h4>Seu mês em números</h4><div className={styles.donut} role="img" aria-label="70,5% da renda comprometida com gastos"><div><strong>70,5%</strong><span>da renda em gastos</span></div></div><p className={styles.chartNote}>Gastos: {money(5920)} · Renda: {money(8400)}</p></div></div>
        </>}
        {active === "Rendas" && <>{stats([["Renda total", money(8400)], ["Entradas registradas", "3"]])}<DataTable headings={["Data", "Nome", "Fonte", "Valor"]} rows={[["05/05/2026", "Pessoa A", "CLT", money(6500)], ["10/05/2026", "Pessoa B", "PJ", money(1500)], ["18/05/2026", "Pessoa A", "Extra", money(400)]]} /></>}
        {active === "Despesas" && <><p className={styles.panelDescription}>Exemplo de lançamentos com tipo, categoria e descrição.</p><DataTable headings={["Data", "Tipo", "Categoria", "Valor"]} rows={[["06/05/2026", "Mercado", "Custo fixo", money(800)], ["08/05/2026", "Aluguel", "Custo fixo", money(2200)], ["12/05/2026", "Curso", "Conhecimento", money(820)], ["15/05/2026", "Transporte", "Conforto", money(1400)], ["20/05/2026", "Passeios", "Prazeres", money(700)]]} /></>}
        {active === "Contas a pagar" && <><p className={styles.panelDescription}>Organize vencimentos, valores previstos e pagamentos.</p><DataTable headings={["Conta", "Vencimento", "Valor previsto", "Situação"]} rows={[["Aluguel", "08/05/2026", money(2200), "Pago"], ["Internet", "25/05/2026", money(120), "A pagar"], ["Energia", "28/05/2026", money(180), "A pagar"]]} /></>}
        {active === "Tipos de despesa" && <><p className={styles.panelDescription}>Os tipos de despesa ajudam a manter seus lançamentos organizados.</p><DataTable headings={["Tipo", "Categoria", "Classificação"]} rows={[["Aluguel", "Custo fixo", "Moradia"], ["Mercado", "Custo fixo", "Alimentação"], ["Curso", "Conhecimento", "Educação"], ["Passeios", "Prazeres", "Lazer"]]} /></>}
        {active === "Gastos ideais" && <><p className={styles.panelDescription}>Compare percentuais planejados com o uso da renda. Metas abaixo são apenas exemplos.</p><DataTable headings={["Categoria", "Planejado", "Realizado"]} rows={[...categoryRows.map(row => [row.name, `${row.ideal}%`, `${(row.value / 8400 * 100).toFixed(1).replace(".", ",")}%`]), ["Investimentos", "20%", "11,9%"]]} /></>}
        {active === "Reserva de emergência" && <>{stats([["Reserva acumulada", money(12000)], ["Meta demonstrativa", money(18000)], ["Falta para a meta", money(6000)]])}<div className={styles.card}><h4><ShieldCheck size={19} /> Construindo sua tranquilidade</h4><p className={styles.panelDescription}>Exemplo: gasto mensal de {money(3000)} e meta de 6 meses.</p><div className={styles.reserveTrack} role="img" aria-label="66,7% da meta de reserva atingida"><span /></div><p className={styles.chartNote}>66,7% da meta atingida</p><DataTable headings={["Movimentação", "Valor", "Observação"]} rows={[["Saldo inicial", money(11000), "Reserva já acumulada"], ["Aporte", money(1000), "Aporte de maio"]]} /></div></>}
        {active === "Estatísticas" && <><p className={styles.panelDescription}>Compare períodos e identifique padrões nos seus gastos.</p>{stats([["Média mensal de gastos", money(5973)], ["Meses no exemplo", "3"]])}<DataTable headings={["Mês", "Rendas", "Gastos", "Investimentos", "Saldo líquido"]} rows={[["Março", money(8400), money(6100), money(1000), money(1300)], ["Abril", money(8400), money(5900), money(1000), money(1500)], ["Maio", money(8400), money(5920), money(1000), money(1480)]]} /></>}
      </section>
      <p className={styles.disclaimer}>Demonstração simplificada da interface. Os dados são fictícios; cadastros, importações e alterações ficam disponíveis no aplicativo.</p>
    </div>
  </div>;
}

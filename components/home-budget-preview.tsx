"use client";

import { useState } from "react";
import { ArrowDownLeft, ArrowUpRight, ChevronLeft, ChevronRight, Wallet } from "lucide-react";
import styles from "@/app/home.module.css";

const months = [
  { label: "Abril", income: 8200, spent: 6100, categories: [2800, 1550, 1050, 700] },
  { label: "Maio", income: 8400, spent: 5920, categories: [2700, 1420, 1100, 700] },
  { label: "Junho", income: 8400, spent: 5600, categories: [2600, 1300, 1000, 700] },
];
const money = (value: number) => value.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
const categories = ["Casa e contas", "Alimentação", "Dia a dia", "Lazer"];

export default function HomeBudgetPreview() {
  const [index, setIndex] = useState(1);
  const month = months[index];
  return (
    <div className={styles.previewWrap}>
      <div className={styles.preview}>
        <div className={styles.previewHeader}>
          <span className={styles.previewBrand}><Wallet size={18} aria-hidden="true" /> Meu orçamento</span>
          <span className={styles.demoBadge}>DEMONSTRAÇÃO</span>
        </div>
        <div className={styles.previewBody}>
          <div className={styles.monthRow}>
            <span>Seu mês, em perspectiva.</span>
            <div className={styles.monthPicker}>
              <button aria-label="Mês anterior" disabled={index === 0} onClick={() => setIndex(index - 1)}><ChevronLeft size={16} /></button>
              <span>{month.label}</span>
              <button aria-label="Próximo mês" disabled={index === months.length - 1} onClick={() => setIndex(index + 1)}><ChevronRight size={16} /></button>
            </div>
          </div>
          <div aria-live="polite" aria-atomic="true">
            <p className={styles.balanceLabel}>Saldo disponível</p>
            <p className={styles.balance}>{money(month.income - month.spent)}<span>,00</span></p>
            <div className={styles.stats}>
              <div><span><ArrowDownLeft size={15} /> Entradas</span><strong>{money(month.income)}</strong></div>
              <div><span><ArrowUpRight size={15} /> Saídas</span><strong>{money(month.spent)}</strong></div>
            </div>
            <div className={styles.categoryHeading}><strong>Para onde vai seu dinheiro</strong><span>{month.label} / 2026</span></div>
            <div className={styles.categoryList}>
              {categories.map((label, i) => (
                <div key={label} className={styles.category}>
                  <div><span>{label}</span><strong>{money(month.categories[i])}</strong></div>
                  <div className={styles.track}><span style={{ width: `${month.categories[i] / month.spent * 100}%` }} /></div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.previewNote}><span aria-hidden="true" /> Um lugar para enxergar o todo.</div>
        </div>
      </div>
      <p className={styles.previewCaption}>Dados ilustrativos. Explore os meses pelas setas.</p>
    </div>
  );
}

import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Calculator, Check, LayoutDashboard } from "lucide-react";
import MarketingHeader from "./marketing-header";
import { calculators, type CalculatorSlug } from "@/lib/calculators";
import { SITE_URL } from "@/lib/site";
import home from "@/app/home.module.css";
import styles from "./calculator-shell.module.css";

export default function CalculatorShell({ slug, children }: { slug: CalculatorSlug; children: ReactNode }) {
  const calculator = calculators[slug];
  const breadcrumbs = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
    { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Calculadoras", item: `${SITE_URL}/ferramentas` },
    { "@type": "ListItem", position: 3, name: calculator.shortTitle, item: `${SITE_URL}/ferramentas/${slug}` },
  ] };
  return <div className={home.home}>
    <a className={home.skipLink} href="#simulador">Pular para a calculadora</a>
    <MarketingHeader />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs).replace(/</g, "\\u003c") }} />
    <div className={styles.workspace}>
      <aside className={styles.sidebar}>
        <Link href="/ferramentas" className={styles.workspaceTitle}><Calculator size={19} /> Suas ferramentas</Link>
        <p>PLANEJAR E SIMULAR</p>
        <nav aria-label="Calculadoras">{Object.entries(calculators).map(([key, item]) => <Link key={key} href={`/ferramentas/${key}`} aria-current={key === slug ? "page" : undefined}>{item.shortTitle}<ArrowUpRight size={14} /></Link>)}</nav>
        <div className={styles.sidebarApp}><LayoutDashboard size={24} /><h2>O plano encontra a rotina.</h2><p>Leve suas decisões para o orçamento doméstico.</p><Link href="/orcamento">Conhecer aplicativo <ArrowRight size={14} /></Link></div>
        <span className={styles.freeNote}><Check size={14} /> Calculadoras gratuitas</span>
      </aside>
      <main className={styles.main}>
        <nav aria-label="Caminho da página" className={styles.breadcrumb}><Link href="/">Início</Link><span>/</span><Link href="/ferramentas">Calculadoras</Link><span>/</span><span>{calculator.shortTitle}</span></nav>
        <div className={styles.heading}><p>SIMULE. COMPARE. DECIDA.</p><h1>{calculator.title}</h1><p>{calculator.intro}</p></div>
        <div id="simulador" className={styles.calculator}>{children}</div>
        <section className={styles.explanation}><div><p className={styles.kicker}>ENTENDA SUA SIMULAÇÃO</p><h2>Como usar esta calculadora</h2><ol>{calculator.steps.map(step => <li key={step}>{step}</li>)}</ol></div><div><h2>Como o resultado é calculado</h2><p>{calculator.explanation}</p><p>{calculator.assumptions}</p><Link href={calculator.guide}>Aprofundar o conceito <ArrowRight size={15} /></Link></div></section>
        <section className={styles.budgetCta}><LayoutDashboard size={31} /><div><p>DO CÁLCULO PARA A VIDA REAL</p><h2>{calculator.cta}</h2><p>{calculator.ctaDescription}</p></div><Link href="/orcamento">Conhecer orçamento <ArrowUpRight size={17} /></Link></section>
      </main>
    </div>
    
  </div>;
}

import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChartNoAxesCombined, House, ShieldCheck, Sprout, Wallet } from "lucide-react";
import MarketingHeader from "@/components/marketing-header";
import { calculators, type CalculatorSlug } from "@/lib/calculators";
import { pageMetadata } from "@/lib/site";
import styles from "@/app/home.module.css";

export const metadata = pageMetadata("Calculadoras financeiras gratuitas online", "Simule juros compostos, reserva de emergência, aposentadoria e financiamento SAC ou Price. Calculadoras financeiras gratuitas para planejar suas decisões.", "/ferramentas");
const icons = { "juros-compostos": ChartNoAxesCombined, "reserva-emergencia": ShieldCheck, "financiamento-price-sac": House, aposentadoria: Sprout };

export default function FerramentasPage() {
  return <div className={styles.home}><MarketingHeader /><main>
    <section className={styles.section}>
      <Link href="/" className={styles.textLink}>Início <ArrowRight size={14} /></Link>
      <div className={`${styles.sectionHeading} mt-10`}><div><p className={styles.eyebrow}>UM PRÓXIMO PASSO MAIS INFORMADO</p><h1 className="mt-5 max-w-3xl text-4xl font-medium tracking-tight sm:text-5xl">Calculadoras financeiras{" "}<br /><em>para suas decisões.</em></h1></div><p>Gratuitas. Sem cadastro.{" "}<br />Ajuste os valores e explore possibilidades.</p></div>
      <div className={styles.toolGrid}>{Object.entries(calculators).map(([slug, item]) => { const Icon = icons[slug as CalculatorSlug]; return <Link href={`/ferramentas/${slug}`} className={styles.toolCard} key={slug}><div className={styles.toolIcon}><Icon size={26} strokeWidth={1.5} /><ArrowUpRight size={18} /></div><h2 className="!text-xl !tracking-tight">{item.shortTitle}</h2><p className="mt-4">{item.intro}</p><span className={styles.toolAction}>Abrir calculadora <ArrowRight size={16} /></span></Link>; })}</div>
    </section>
    <section className={styles.journeySection}><div className={styles.journeyGrid}><div><p className={styles.eyebrow}>DEPOIS DA SIMULAÇÃO</p><h2>O plano ganha vida{" "}<br /><em>no seu orçamento.</em></h2><p className={styles.journeyIntro}>Registre rendas e despesas, acompanhe contas a pagar e veja sua reserva de emergência evoluir no aplicativo de orçamento doméstico.</p><Link href="/orcamento" className={styles.primaryButton}>Conhecer o aplicativo <ArrowUpRight size={18} /></Link></div><div className="flex flex-col justify-center gap-6"><Wallet size={36} strokeWidth={1.3} /><h3 className="text-2xl tracking-tight">Simular é o começo.{" "}<br />Acompanhar faz parte do caminho.</h3><p className="max-w-md text-sm leading-7 text-[#61695e]">As calculadoras projetam cenários. O orçamento reúne os números da sua rotina para você avaliar o que cabe no mês e ajustar o planejamento.</p><Link href="/orcamento#demonstracao" className={styles.textLink}>Explorar demonstração <ArrowRight size={16} /></Link></div></div></section>
    <section className={styles.section}><p className={styles.eyebrow}>CONHEÇA AS PREMISSAS</p><h2 className="mt-5">Números com contexto.</h2><p className="mt-5 max-w-3xl text-sm leading-8 text-[#61695e]">Cada calculadora explica como o resultado é obtido e quais hipóteses entram na simulação. Use os valores como referência para comparar cenários, considerando que taxas, custos e sua realidade podem mudar.</p><Link href="/conteudos" className={`${styles.textLink} mt-6`}>Entenda os conceitos por trás das ferramentas <ArrowRight size={16} /></Link></section>
  </main></div>;
}

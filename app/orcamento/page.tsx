import Link from "next/link";
import { ArrowDown, ArrowRight, CalendarDays, ChartNoAxesCombined, Check, FileSpreadsheet, ShieldCheck, Wallet } from "lucide-react";
import HeroVideoPlaylist from "@/components/hero-video-playlist";
import MarketingHeader from "@/components/marketing-header";
import OrcamentoAppPreview from "@/components/orcamento-app-preview";
import BudgetAppLink from "@/components/budget-app-link";
import { BUDGET_APP_URL, SITE_URL, pageMetadata } from "@/lib/site";
import home from "@/app/home.module.css";
import styles from "./orcamento.module.css";

export const metadata = pageMetadata(
  "Aplicativo de orçamento doméstico e controle financeiro",
  "Organize rendas, despesas e contas a pagar. Acompanhe gastos por categoria e sua reserva de emergência no aplicativo de orçamento doméstico OMKF.",
  "/orcamento",
);
const features = [
  { icon: Wallet, title: "Rendas e despesas no mesmo lugar", description: "Registre suas entradas, classifique os gastos e enxergue o saldo disponível para suas próximas decisões." },
  { icon: CalendarDays, title: "Contas a pagar, sem perder de vista", description: "Organize vencimentos, valores previstos e pagamentos para acompanhar os compromissos do mês." },
  { icon: ChartNoAxesCombined, title: "Seu planejamento encontra a realidade", description: "Compare gastos ideais e realizados por categoria. Explore estatísticas para entender os padrões da sua rotina." },
  { icon: ShieldCheck, title: "Uma reserva com direção", description: "Acompanhe sua meta de reserva de emergência, registre aportes e retiradas e veja onde os valores estão alocados." },
];
const faqs = [
  ["O que é um aplicativo de orçamento doméstico?", "É uma ferramenta para reunir rendas, despesas e compromissos financeiros. No OMKF, você acompanha categorias, compara gastos planejados com realizados e visualiza sua reserva de emergência em um só lugar."],
  ["Preciso instalar o aplicativo?", "Não. O acesso é pelo navegador, no computador ou no celular. Ao acessar o aplicativo, você pode entrar na sua conta ou escolher a opção de cadastro."],
  ["O aplicativo de orçamento é gratuito?", "O aplicativo tem acesso por licença e uma área de planos. Consulte no próprio aplicativo as condições de teste, os valores e os planos disponíveis antes de contratar. As calculadoras deste site são gratuitas e independentes da assinatura."],
  ["Posso importar minha planilha de gastos?", "Sim. O aplicativo oferece importação por Excel, com um modelo de planilha e validação dos dados. Use o formato indicado no importador para trazer os registros."],
  ["Consigo acompanhar minha reserva de emergência?", "Sim. A área de reserva permite configurar o perfil de trabalho, acompanhar a meta e registrar alocações, aportes e retiradas. Você também pode fazer uma estimativa inicial na calculadora gratuita do site."],
  ["O que aparece nesta demonstração?", "Uma versão simplificada e interativa da interface do aplicativo, com dados fictícios. Você pode alternar as áreas e ocultar valores. Para cadastrar, importar ou salvar seus próprios dados, acesse o aplicativo e entre na sua conta."],
];

export default function OrcamentoPage() {
  const structuredData = { "@context": "https://schema.org", "@type": "WebPage", name: "Aplicativo de orçamento doméstico OMKF", url: `${SITE_URL}/orcamento`, description: "Controle de rendas, despesas, contas a pagar e reserva de emergência.", mainEntity: { "@type": "WebApplication", name: "OMKF Orçamento Doméstico", url: BUDGET_APP_URL, applicationCategory: "FinanceApplication", operatingSystem: "Web", browserRequirements: "Navegador com JavaScript", inLanguage: "pt-BR", featureList: ["Rendas e despesas", "Contas a pagar", "Importação por Excel", "Gastos ideais", "Reserva de emergência", "Estatísticas"], creator: { "@type": "Person", name: "Matheus Keitaro" } } };
  return <div className={home.home}>
    <a href="#principal" className={home.skipLink}>Pular para o conteúdo</a>
    <MarketingHeader />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    <main id="principal">
      <div className={styles.heroStage}>
      <HeroVideoPlaylist poster="/images/orcamento-family-hero.png" />
      <section className={styles.hero}>
        <nav className={styles.breadcrumb} aria-label="Caminho da página"><Link href="/">Início</Link><span>/</span><span>Orçamento doméstico</span></nav>
        <p className={home.eyebrow}>OMKF · FINANÇAS NO DIA A DIA</p>
        <h1>Seu aplicativo de{" "}<br /><em>orçamento doméstico.</em></h1>
        <p className={styles.intro}>Menos contas espalhadas. Mais clareza sobre seu dinheiro. Organize rendas, despesas e compromissos para planejar o mês com uma visão completa.</p>
        <div className={styles.actions}><BudgetAppLink placement="budget_hero" className={home.primaryButton}>Começar no aplicativo</BudgetAppLink><a href="#demonstracao" className={home.textLink}>Explorar a demonstração <ArrowDown size={16} /></a></div>
        <div className={styles.benefits}><span><Check size={14} /> Acesso pelo navegador</span><span><Check size={14} /> Computador e celular</span><span><Check size={14} /> Dados organizados por período</span></div>
        <p className={styles.conditions}>Entre ou cadastre-se no aplicativo. Consulte as condições de acesso e os planos disponíveis.</p>
      </section>
      </div>
      <section id="demonstracao" className={styles.demoSection} aria-label="Demonstração do aplicativo de orçamento doméstico"><OrcamentoAppPreview /></section>
      <section className={home.section}>
        <div className={home.sectionHeading}><div><p className={home.eyebrow}>UMA ROTINA FINANCEIRA MAIS CLARA</p><h2>Não é só registrar.{" "}<br />É entender e acompanhar.</h2></div><p>Do primeiro lançamento ao plano para o futuro,{" "}<br />cada informação ajuda a compor o todo.</p></div>
        <div className={styles.features}>{features.map(({ icon: Icon, title, description }) => <article key={title}><Icon size={27} strokeWidth={1.5} /><h3>{title}</h3><p>{description}</p></article>)}</div>
      </section>
      <section className={styles.howSection}><div className={styles.howInner}><div><p className={home.eyebrow}>DA PLANILHA PARA UMA VISÃO COMPLETA</p><h2>Seu primeiro mês{" "}<br /><em>começa aqui.</em></h2><div className={styles.importNote}><FileSpreadsheet size={25} /><p>Já usa Excel? Utilize o modelo de importação do aplicativo para trazer seus registros.</p></div></div><ol>{[["Acesse sua conta", "Entre ou escolha a opção de cadastro e confira as condições de acesso."], ["Organize o que entra e o que sai", "Cadastre suas rendas e despesas ou importe pelo modelo de planilha."], ["Acompanhe e ajuste", "Consulte o dashboard, compare categorias e revise seus compromissos e sua reserva."]].map(([title, description], i) => <li key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol></div></section>
      <section className={styles.comparison}><div><p className={home.eyebrow}>DO CENÁRIO AO ACOMPANHAMENTO</p><h2>Simule uma decisão.{" "}<br />Organize sua rotina.</h2><p>As calculadoras ajudam a explorar possibilidades. O aplicativo ajuda a acompanhar as entradas, os gastos e os objetivos ao longo do tempo.</p></div><div><Link href="/ferramentas/reserva-emergencia"><ShieldCheck size={22} /><span>Quanto preciso guardar?<small>Calcule sua reserva de emergência</small></span><ArrowRight size={17} /></Link><Link href="/ferramentas/juros-compostos"><ChartNoAxesCombined size={22} /><span>Como meus aportes podem evoluir?<small>Simule juros compostos</small></span><ArrowRight size={17} /></Link></div></section>
      <section className={home.faqSection}><div><p className={home.eyebrow}>ANTES DE COMEÇAR</p><h2>Dúvidas sobre o{" "}<br />orçamento doméstico</h2></div><div>{faqs.map(([question, answer]) => <details className={home.faq} key={question}><summary>{question}<ArrowDown size={16} /></summary><p>{answer}</p></details>)}</div></section>
      <section className={home.finalCta}><div><p className={home.eyebrow}>MAIS CLAREZA, TODOS OS MESES</p><h2>Seu dinheiro merece{" "}<br /><em>um lugar para se organizar.</em></h2><p>Desenvolvido por Matheus Keitaro, engenheiro e educador financeiro.</p></div><div className={home.finalActions}><BudgetAppLink placement="budget_footer" className={home.lightButton}>Acessar o aplicativo</BudgetAppLink><a href="#demonstracao">Rever a demonstração <ArrowRight size={16} /></a></div></section>
    </main>
  </div>;
}

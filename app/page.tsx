import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, BookOpen, ChartNoAxesCombined, Check, ChevronDown, House, ShieldCheck, Sprout, Wallet } from "lucide-react";
import MarketingHeader from "@/components/marketing-header";
import { pageMetadata } from "@/lib/site";
import HomeBudgetPreview from "@/components/home-budget-preview";
import styles from "./home.module.css";

const tools = [
  { title: "Juros compostos", description: "Veja o que tempo e constância podem construir.", href: "/ferramentas/juros-compostos", icon: ChartNoAxesCombined, label: "FAÇA SEU DINHEIRO CRESCER" },
  { title: "Reserva de emergência", description: "Descubra o tamanho da sua tranquilidade.", href: "/ferramentas/reserva-emergencia", icon: ShieldCheck, label: "PREPARE O SEU AMANHÃ" },
  { title: "Financiamento", description: "Compare SAC e Price antes de decidir.", href: "/ferramentas/financiamento-price-sac", icon: House, label: "ESCOLHA COM CLAREZA" },
  { title: "Aposentadoria", description: "Dê um próximo passo pensando no futuro.", href: "/ferramentas/aposentadoria", icon: Sprout, label: "PLANEJE O LONGO PRAZO" },
];
const questions = [
  ["Por onde eu começo?", "Se você quer entender sua rotina financeira, conheça o orçamento doméstico. Para uma decisão específica, comece por uma calculadora: reserva de emergência, juros compostos, financiamento ou aposentadoria."],
  ["As calculadoras são gratuitas?", "Sim. As calculadoras disponíveis aqui são gratuitas e podem ser usadas diretamente no navegador. O orçamento doméstico é uma ferramenta separada; consulte as condições na página de apresentação."],
  ["Os valores da demonstração são meus dados?", "Não. A prévia desta página usa dados fictícios para ilustrar a organização de um orçamento. As setas permitem explorar três meses de exemplo."],
  ["Posso ter um acompanhamento individual?", "Sim. Na página de consultoria você encontra a proposta de acompanhamento e o caminho para conversar sobre sua situação e seus objetivos."],
];

export const metadata = pageMetadata("Calculadoras financeiras e orçamento doméstico", "Organize seu orçamento doméstico, simule juros compostos, reserva de emergência e financiamento. Ferramentas e educação financeira com Matheus Keitaro.", "/");

export default function Page() {
  return (
    <div className={styles.home}>
      <a href="#principal" className={styles.skipLink}>Pular para o conteúdo</a>
      <MarketingHeader />
      <main id="principal">
        <section className={styles.hero}>
          <div className={styles.heroGrid}>
            <div className={styles.heroCopy}>
              <p className={styles.eyebrow}><span /> MENOS INCERTEZA. MAIS DIREÇÃO.</p>
              <h1>Seu dinheiro.{" "}<br />Suas escolhas.{" "}<br /><em>Mais clareza.</em></h1>
              <p className={styles.heroDescription}>Organize o presente e planeje o que vem pela frente. Ferramentas práticas e conhecimento para você decidir com confiança.</p>
              <div className={styles.heroActions}><Link href="/orcamento" className={styles.primaryButton}>Conhecer meu orçamento <ArrowUpRight size={18} /></Link><Link href="/ferramentas" className={styles.textLink}>Explorar calculadoras <ArrowRight size={17} /></Link></div>
              <div className={styles.heroAuthor}><Image src="/images/matheus-hero.png" alt="" width={42} height={42} /><span>Por Matheus Keitaro<small>Educação financeira para a vida real.</small></span></div>
            </div>
            <HomeBudgetPreview />
          </div>
          <div className={styles.heroBottom}><span>BOAS DECISÕES COMEÇAM COM UMA VISÃO MAIS CLARA.</span><a href="#ferramentas">Encontre seu próximo passo <ArrowDown size={15} /></a></div>
        </section>

        <section id="ferramentas" className={styles.section}>
          <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>DA DÚVIDA À DECISÃO</p><h2>Um bom começo.{" "}<br />Para cada momento.</h2></div><p>Escolha o que faz sentido para você agora.{" "}<br />As calculadoras são gratuitas.</p></div>
          <div className={styles.toolGrid}>{tools.map(({ title, description, href, icon: Icon, label }) => <Link href={href} key={href} className={styles.toolCard}><div className={styles.toolIcon}><Icon size={24} strokeWidth={1.5} /><ArrowUpRight size={18} /></div><p className={styles.toolLabel}>{label}</p><h3>{title}</h3><p>{description}</p><span className={styles.toolAction}>Simular agora <ArrowRight size={16} /></span></Link>)}</div>
        </section>

        <section className={styles.journeySection} id="como-funciona">
          <div className={styles.journeyGrid}>
            <div><p className={styles.eyebrow}>UM PASSO DE CADA VEZ</p><h2>O futuro começa{" "}<br />no seu <em>dia a dia.</em></h2><p className={styles.journeyIntro}>Você não precisa resolver tudo hoje. Precisa enxergar onde está e saber qual passo dar a seguir.</p><Link href="/orcamento" className={styles.primaryButton}>Conhecer o orçamento <ArrowUpRight size={18} /></Link></div>
            <div className={styles.steps}>{[
              ["01", "Entenda seu mês", "Reúna suas entradas e despesas. Descubra para onde seu dinheiro está indo e o que pode ajustar.", Wallet],
              ["02", "Explore possibilidades", "Use as calculadoras para comparar cenários e transformar dúvidas em números.", ChartNoAxesCombined],
              ["03", "Decida com contexto", "Aprofunde os conceitos com conteúdo educativo e dê mais intenção às suas escolhas.", BookOpen],
            ].map(([number, title, description, Icon]) => { const StepIcon = Icon as typeof Wallet; return <div className={styles.step} key={String(number)}><span className={styles.stepNumber}>{String(number)}</span><div><h3>{String(title)}</h3><p>{String(description)}</p></div><StepIcon size={22} strokeWidth={1.5} aria-hidden="true" /></div>; })}</div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeading}><div><p className={styles.eyebrow}>CONHECIMENTO QUE FAZ DIFERENÇA</p><h2>Além dos números,{" "}<br />entenda o porquê.</h2></div><Link href="/conteudos" className={styles.textLink}>Explorar conteúdos <ArrowRight size={17} /></Link></div>
          <div className={styles.editorialGrid}>
            <Link href="/conteudos/sac-x-price" className={styles.featureArticle}>
              <div className={styles.articleArt} aria-hidden="true"><span>SAC</span><div className={styles.chartLines}><i /><i /><i /><i /><i /><i /><i /></div><span>PRICE</span><div className={styles.flatLines}><i /><i /><i /><i /><i /><i /><i /></div><small>DOIS CAMINHOS. UMA DECISÃO MAIS INFORMADA.</small></div>
              <div className={styles.articleCopy}><p className={styles.eyebrow}>GUIA · FINANCIAMENTO</p><h3>SAC ou Price: o que muda no seu financiamento?</h3><p>Entenda as parcelas, os juros e a lógica por trás de cada sistema.</p><span className={styles.textLink}>Ler o guia <ArrowUpRight size={18} /></span></div>
            </Link>
            <div className={styles.editorialAside}><Link href="/analises" className={styles.analysisCard}><ChartNoAxesCombined size={30} strokeWidth={1.3} /><p className={styles.eyebrow}>UM OLHAR MAIS PROFUNDO</p><h3>Espaço de análises</h3><p>Uma área dedicada a balanços, empresas e ativos. Novas publicações em breve.</p><span className={styles.textLink}>Conhecer a área <ArrowUpRight size={18} /></span></Link><Link href="/ebooks" className={styles.ebookCard}><BookOpen size={24} strokeWidth={1.5} /><div><h3>Conhecimento para levar</h3><p>Explore a biblioteca de e-books.</p></div><ArrowUpRight size={20} /></Link></div>
          </div>
        </section>

        <section id="sobre" className={styles.aboutSection}>
          <div className={styles.portrait}><Image src="/images/matheus-hero.png" alt="Matheus Keitaro" fill sizes="(max-width: 760px) 100vw, 440px" className={styles.portraitImage} /><span>FINANÇAS TAMBÉM SÃO SOBRE PESSOAS.</span></div>
          <div className={styles.aboutCopy}><p className={styles.eyebrow}>PRAZER, MATHEUS KEITARO</p><h2>Conhecimento técnico.{" "}<br /><em>Conversa de verdade.</em></h2><p>Sou engenheiro, pai de dois filhos e apaixonado por finanças. Como muita gente, comecei a vida adulta sem saber muito bem como cuidar do dinheiro.</p><p>Estudar mudou a minha relação com as finanças. Hoje, compartilho ferramentas e conhecimento para ajudar você a tomar decisões com mais autonomia, sem complicar o que pode ser simples.</p><div className={styles.aboutTags}><span><Check size={15} /> Engenheiro</span><span><Check size={15} /> MBA em Ciência de Dados</span></div><Link href="/consultoria" className={styles.textLink}>Conheça meu trabalho <ArrowRight size={17} /></Link></div>
        </section>

        <section className={styles.faqSection}><div><p className={styles.eyebrow}>ANTES DO PRIMEIRO PASSO</p><h2>Vamos esclarecer?</h2></div><div>{questions.map(([question, answer]) => <details className={styles.faq} key={question}><summary>{question}<ChevronDown size={18} /></summary><p>{answer}</p></details>)}</div></section>
        <section className={styles.finalCta}><div><p className={styles.eyebrow}>SEU PRÓXIMO CAPÍTULO</p><h2>Mais intenção hoje.{" "}<br /><em>Mais possibilidades amanhã.</em></h2><p>Comece com uma ferramenta. Avance no seu ritmo.</p></div><div className={styles.finalActions}><Link href="/ferramentas" className={styles.lightButton}>Encontrar minha ferramenta <ArrowUpRight size={18} /></Link><Link href="/consultoria">Quero um acompanhamento individual <ArrowRight size={16} /></Link></div></section>
      </main>
    </div>
  );
}

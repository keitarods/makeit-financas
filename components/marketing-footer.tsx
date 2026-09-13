import Image from "next/image";
import Link from "next/link";
import styles from "@/app/home.module.css";

export default function MarketingFooter() {
  return <div className={styles.home}><footer className={styles.footer}>
    <div className={styles.footerTop}>
      <Link href="/" aria-label="OMatheus Keitaro Finanças — início" className={styles.headerBrand}>
        <Image src="/images/logo-omatheus-keitaro.png" alt="OMatheus Keitaro Finanças" width={2048} height={684} sizes="(max-width: 380px) 205px, (max-width: 760px) 225px, 300px" loading="lazy" />
      </Link>
      <nav aria-label="Rodapé"><Link href="/ferramentas">Calculadoras</Link><Link href="/orcamento">Orçamento doméstico</Link><Link href="/conteudos">Conteúdos</Link><Link href="/analises">Análises</Link><Link href="/ebooks">E-books</Link><Link href="/livros">Livros</Link><Link href="/consultoria">Consultoria</Link></nav>
    </div>
    <div className={styles.footerBottom}><span>© {new Date().getFullYear()} Matheus Keitaro Finanças</span><span>Educação para decidir com mais autonomia.</span></div>
  </footer></div>;
}

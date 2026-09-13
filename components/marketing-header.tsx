import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import styles from "@/app/home.module.css";

const navigation = [["Calculadoras", "/ferramentas"], ["Orçamento", "/orcamento"], ["Análises", "/analises"], ["Sobre mim", "/#sobre"]];

export default function MarketingHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link href="/" aria-label="OMatheus Keitaro Finanças — início" className={styles.headerBrand}>
          <Image
            src="/images/logo-omatheus-keitaro.png"
            alt="OMatheus Keitaro Finanças"
            width={2048}
            height={684}
            sizes="(max-width: 380px) 205px, (max-width: 760px) 225px, 300px"
          />
        </Link>
        <nav aria-label="Navegação principal" className={styles.desktopNav}>
          {navigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </nav>
        <Link href="/orcamento" className={styles.headerCta}>Conhecer orçamento <ArrowUpRight size={16} /></Link>
        <details className={styles.mobileMenu}>
          <summary aria-label="Abrir navegação"><Menu size={23} /></summary>
          <nav aria-label="Navegação móvel">
            {navigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
            <Link href="/consultoria">Consultoria</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}

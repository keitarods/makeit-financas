import type { Metadata } from "next";

export const SITE_URL = "https://omatheuskeitarofinancas.com";
export const BUDGET_APP_URL = "https://orcamento.omatheuskeitarofinancas.com/";
export const SITE_NAME = "Matheus Keitaro Finanças";

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `${SITE_URL}${path}` },
    openGraph: {
      title, description, url: `${SITE_URL}${path}`, siteName: SITE_NAME,
      locale: "pt_BR", type: "website",
      images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: "Ferramentas financeiras e orçamento doméstico — Matheus Keitaro" }],
    },
    twitter: { card: "summary_large_image", title, description, images: [`${SITE_URL}/opengraph-image`] },
  };
}

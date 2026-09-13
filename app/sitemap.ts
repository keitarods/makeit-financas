import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Only published pages; the analyses page is still an empty collection.
  const paths = ["", "/orcamento", "/ferramentas", "/ferramentas/juros-compostos", "/ferramentas/reserva-emergencia", "/ferramentas/financiamento-price-sac", "/ferramentas/aposentadoria", "/conteudos", "/conteudos/juros-compostos", "/conteudos/reserva-de-emergencia", "/conteudos/sac-x-price", "/conteudos/aposentadoria", "/ebooks", "/livros", "/consultoria"];
  return paths.map(path => ({ url: `${SITE_URL}${path}` }));
}

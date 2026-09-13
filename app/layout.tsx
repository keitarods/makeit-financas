import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import MarketingFooter from "@/components/marketing-footer";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  authors: [{ name: "Matheus Keitaro" }],
  title: {
    default: "Matheus Keitaro Finanças",
    template: "%s | Matheus Keitaro Finanças",
  },
  description:
    "Educação financeira prática com ferramentas, conteúdos e recursos para investir melhor e construir patrimônio com mais clareza.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      {
        url: "/images/matheus-simbol.png",
        type: "image/png",
        sizes: "132x145",
      },
    ],
    shortcut: "/favicon.ico",
    apple: "/images/matheus-simbol.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
        <MarketingFooter />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

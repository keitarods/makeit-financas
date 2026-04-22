import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Matheus Keitaro Finanças",
    template: "%s | Matheus Keitaro Finanças",
  },
  description:
    "Educação financeira prática com ferramentas, conteúdos e recursos para investir melhor e construir patrimônio com mais clareza.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
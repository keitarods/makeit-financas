import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookMarked } from "lucide-react";

type Ebook = {
  title: string;
  subtitle: string;
  description: string;
  file: string;
};

const ebooks: Ebook[] = [
  {
    title: "Reserva de Emergência",
    subtitle: "A base da segurança financeira das famílias brasileiras",
    description:
      "Entenda por que a reserva de emergência é um dos pilares mais importantes da estabilidade financeira e como ela protege a família em momentos de imprevisto.",
    file: "/ebooks/ebook_reserva_emergencia.pdf",
  },
  {
    title: "Cartão de Crédito",
    subtitle: "Ferramenta financeira ou armadilha?",
    description:
      "Aprenda para que o cartão de crédito realmente serve, quais benefícios ele pode oferecer e quais cuidados são essenciais para evitar o descontrole financeiro.",
    file: "/ebooks/ebook_cartao_credito.pdf",
  },
  {
    title: "Renda Fixa no Brasil",
    subtitle: "Como funciona e para onde seu dinheiro vai",
    description:
      "Veja como funcionam os principais investimentos de renda fixa e entenda o destino do capital quando você aplica em produtos como Tesouro, CDB, LCI e LCA.",
    file: "/ebooks/ebook_renda_fixa_brasil.pdf",
  },
  {
    title: "Ações no Longo Prazo",
    subtitle: "Por que tendem a ser os ativos que mais se valorizam",
    description:
      "Uma explicação objetiva sobre o que sustenta a valorização das ações no tempo e por que empresas de qualidade podem multiplicar valor ao longo dos anos.",
    file: "/ebooks/ebook_acoes_longo_prazo.pdf",
  },
];

function EbookCard({ ebook }: { ebook: Ebook }) {
  return (
    <Card className="flex h-full flex-col rounded-3xl border-slate-200 shadow-sm">
      <CardHeader>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#526649] text-white">
          <BookMarked className="h-5 w-5" />
        </div>

        <div className="space-y-2">
          <CardTitle className="min-h-[56px] text-xl leading-7">{ebook.title}</CardTitle>
          <CardDescription className="text-sm font-semibold text-slate-500">
            {ebook.subtitle}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col">
        <p className="flex-1 text-sm leading-7 text-slate-600">{ebook.description}</p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <a
            href={ebook.file}
            target="_blank"
            rel="noopener noreferrer"
            className="block flex-1"
          >
            <Button className="w-full rounded-2xl bg-[#526649] hover:bg-[#44553c]">
              Ler e-book
            </Button>
          </a>

          <a href={ebook.file} download className="block flex-1">
            <Button
              variant="outline"
              className="w-full rounded-2xl border-[#526649] text-[#526649] hover:bg-[#526649] hover:text-white"
            >
              Baixar PDF
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

export default function EbooksPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8">
        <Link href="/" className="text-sm font-medium text-slate-900 underline">
          Voltar para a página inicial
        </Link>
      </div>

      <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
        E-books
      </p>

      <h1 className="mt-3 text-4xl font-bold tracking-tight">E-books disponíveis</h1>

      <p className="mt-4 max-w-2xl text-slate-600">
        Aqui você encontra materiais práticos sobre educação financeira, organização,
        investimentos e construção de patrimônio.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-2">
        {ebooks.map((ebook) => (
          <EbookCard key={ebook.title} ebook={ebook} />
        ))}
      </div>
    </main>
  );
}
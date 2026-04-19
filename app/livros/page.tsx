import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

type Book = {
  title: string;
  author: string;
  description: string;
  recommendation: string;
  amazonSearchLink: string;
};

const books: Book[] = [
  {
    title: "Pai Rico, Pai Pobre",
    author: "Robert T. Kiyosaki",
    description:
      "Um dos livros mais conhecidos sobre educação financeira, com foco em mentalidade, ativos, passivos e construção de riqueza no longo prazo.",
    recommendation:
      "É uma boa porta de entrada para quem ainda está começando a mudar a forma de pensar sobre dinheiro, trabalho e liberdade financeira.",
    amazonSearchLink:
      "https://www.amazon.com.br/s?k=Pai+Rico+Pai+Pobre+Robert+Kiyosaki",
  },
  {
    title: "Os Segredos da Mente Milionária",
    author: "T. Harv Eker",
    description:
      "Um livro voltado para comportamento financeiro, crenças sobre dinheiro e padrões mentais que influenciam os resultados de cada pessoa.",
    recommendation:
      "Recomendo para quem quer trabalhar não só a parte técnica, mas também a mentalidade e os hábitos ligados à construção de riqueza.",
    amazonSearchLink:
      "https://www.amazon.com.br/s?k=Os+Segredos+da+Mente+Milion%C3%A1ria+T+Harv+Eker",
  },
  {
    title: "O Homem Mais Rico da Babilônia",
    author: "George S. Clason",
    description:
      "Um clássico da educação financeira que usa parábolas simples e atemporais para ensinar princípios de disciplina, poupança e prosperidade.",
    recommendation:
      "É um livro excelente para quem quer aprender conceitos fundamentais de finanças de forma leve, clara e muito fácil de absorver.",
    amazonSearchLink:
      "https://www.amazon.com.br/s?k=O+Homem+Mais+Rico+da+Babil%C3%B4nia+George+S+Clason",
  },
];

function BookCard({ book }: { book: Book }) {
  return (
    <Card className="flex h-full flex-col rounded-3xl border-slate-200 shadow-sm">
      <CardHeader className="space-y-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#526649] text-white">
          <BookOpen className="h-5 w-5" />
        </div>

        <div className="space-y-2">
          <CardTitle className="min-h-[56px] text-xl leading-7">
            {book.title}
          </CardTitle>
          <CardDescription className="text-sm font-semibold text-slate-500">
          {book.author}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col space-y-4">
          <p className="min-h-[120px] text-sm leading-7 text-slate-600">
            {book.description}
          </p>

          <div className="min-h-[150px] rounded-2xl bg-slate-50 p-4">
            <p className="text-sm font-semibold text-slate-900">
              Qual o motivo da recomendação?
            </p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              {book.recommendation}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <a
            href={book.amazonSearchLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <Button className="w-full rounded-2xl bg-[#526649] hover:bg-[#44553c]">
              Link para compra
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}

export default function LivrosPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8">
        <Link href="/" className="text-sm font-medium text-slate-900 underline">
          Voltar para a página inicial
        </Link>
      </div>

      <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
        Livros
      </p>

      <h1 className="mt-3 text-4xl font-bold tracking-tight">
        Livros recomendados
      </h1>

      <p className="mt-4 max-w-2xl text-slate-600">
        Aqui compartilho alguns livros que considero valiosos para evolução
        financeira, mentalidade, disciplina e construção de patrimônio.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {books.map((book) => (
          <BookCard key={book.title} book={book} />
        ))}
      </div>
    </main>
  );
}
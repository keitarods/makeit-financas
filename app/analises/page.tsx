import Link from "next/link";

export default function AnalisesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <div className="mb-8">
        <Link href="/" className="text-sm font-medium text-slate-900 underline">
          Voltar para a página inicial
        </Link>
      </div>

      <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
        Análises
      </p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight">
        Análises realizadas e compartilhadas
      </h1>
      <p className="mt-4 max-w-2xl text-slate-600">
        Aqui ficarão suas análises publicadas sobre ativos, cenários, empresas e oportunidades.
      </p>
    </main>
  );
}
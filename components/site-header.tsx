import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Image
            src="/images/matheus-instagram.jpg"
            alt="Foto de Matheus Keitaro"
            width={44}
            height={44}
            className="h-11 w-11 rounded-full border border-slate-200 object-cover"
          />
          <div>
            <p className="text-lg font-semibold tracking-tight">Matheus Keitaro</p>
            <p className="text-sm text-slate-500">Educação financeira prática</p>
          </div>
        </div>

        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          <div className="group relative">
            <button className="flex items-center gap-1 hover:text-[#526649]">
              Ferramentas
              <span className="text-xs">▾</span>
            </button>

            <div className="invisible absolute left-0 top-full z-50 mt-3 w-80 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <Link
                href="/ferramentas"
                className="block rounded-xl px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#526649]"
              >
                <span className="block font-medium">Visão geral das ferramentas</span>
                <span className="mt-1 block text-xs text-slate-500">
                  Acesse todas as ferramentas disponíveis
                </span>
              </Link>

              <Link
                href="/ferramentas/juros-compostos"
                className="block rounded-xl px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#526649]"
              >
                <span className="block font-medium">Juros compostos</span>
                <span className="mt-1 block text-xs text-slate-500">
                  Simule aportes, patrimônio e evolução ao longo do tempo
                </span>
              </Link>

              <Link
                href="/ferramentas/reserva-emergencia"
                className="block rounded-xl px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#526649]"
              >
                <span className="block font-medium">Reserva de emergência</span>
                <span className="mt-1 block text-xs text-slate-500">
                  Estime sua reserva ideal conforme perfil profissional
                </span>
              </Link>

              <Link
                href="/ferramentas/financiamento-price-sac"
                className="block rounded-xl px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#526649]"
              >
                <span className="block font-medium">Financiamento Price x SAC</span>
                <span className="mt-1 block text-xs text-slate-500">
                  Compare parcelas, amortização, juros e saldo devedor
                </span>
              </Link>

              <Link
                href="/ferramentas/aposentadoria"
                className="block rounded-xl px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#526649]"
              >
                <span className="block font-medium">Aposentadoria</span>
                <span className="mt-1 block text-xs text-slate-500">
                  Estime o aporte mensal necessário até a aposentadoria
                </span>
              </Link>
            </div>
          </div>

          <div className="group relative">
            <button className="flex items-center gap-1 hover:text-[#526649]">
              Conteúdos
              <span className="text-xs">▾</span>
            </button>

            <div className="invisible absolute left-0 top-full z-50 mt-3 w-72 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <Link
                href="/analises"
                className="block rounded-xl px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#526649]"
              >
                <span className="block font-medium">Análises</span>
                <span className="mt-1 block text-xs text-slate-500">
                  Contém análises realizadas e compartilhadas
                </span>
              </Link>

              <Link
                href="/conteudos"
                className="block rounded-xl px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#526649]"
              >
                <span className="block font-medium">Conteúdo complementar</span>
                <span className="mt-1 block text-xs text-slate-500">
                  Materiais complementares e conteúdos educativos
                </span>
              </Link>

              <Link
                href="/ebooks"
                className="block rounded-xl px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#526649]"
              >
                <span className="block font-medium">E-books</span>
                <span className="mt-1 block text-xs text-slate-500">
                  Acesse os e-books disponíveis
                </span>
              </Link>

              <Link
                href="/livros"
                className="block rounded-xl px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-[#526649]"
              >
                <span className="block font-medium">Livros</span>
                <span className="mt-1 block text-xs text-slate-500">
                  Veja livros recomendados
                </span>
              </Link>
            </div>
          </div>

          <Link href="/consultoria" className="hover:text-[#526649]">
            Consultoria
          </Link>
        </nav>

        <details className="relative md:hidden">
          <summary className="flex cursor-pointer list-none items-center rounded-xl border border-slate-200 p-2 text-slate-700">
            <Menu className="h-5 w-5" />
          </summary>

          <div className="absolute right-0 top-full mt-3 w-72 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl">
            <div className="space-y-2">
              <p className="px-2 pt-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Ferramentas
              </p>

              <Link
                href="/ferramentas"
                className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                Visão geral das ferramentas
              </Link>
              <Link
                href="/ferramentas/juros-compostos"
                className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                Juros compostos
              </Link>
              <Link
                href="/ferramentas/reserva-emergencia"
                className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                Reserva de emergência
              </Link>
              <Link
                href="/ferramentas/financiamento-price-sac"
                className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                Financiamento Price x SAC
              </Link>
              <Link
                href="/ferramentas/aposentadoria"
                className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                Aposentadoria
              </Link>

              <div className="my-2 border-t border-slate-200" />

              <p className="px-2 pt-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Conteúdos
              </p>

              <Link
                href="/analises"
                className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                Análises
              </Link>
              <Link
                href="/conteudos"
                className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                Conteúdo complementar
              </Link>
              <Link
                href="/ebooks"
                className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                E-books
              </Link>
              <Link
                href="/livros"
                className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                Livros
              </Link>

              <div className="my-2 border-t border-slate-200" />

              <Link
                href="/consultoria"
                className="block rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                Consultoria
              </Link>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
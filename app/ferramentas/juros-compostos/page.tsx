import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Landmark, UserCircle2, BookOpen, Menu } from "lucide-react";

export default function Page() {
  const whatsappNumber: string = process.env.WHATSAPP_NUMBER ?? "";
  const whatsappMessage: string =
    process.env.WHATSAPP_MESSAGE ??
    "Olá, Matheus. Gostaria de agendar uma conversa e entender melhor como funciona seu atendimento.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div className="min-h-screen bg-white text-slate-900">
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

      <main>
        <section className="mx-auto max-w-7xl px-6 py-14 sm:py-16 md:py-24">
          <div className="grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
            <div className="flex flex-col justify-start pt-2 text-center lg:text-left">
              <span className="mx-auto mb-4 inline-flex w-fit rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 lg:mx-0">
                Ferramentas + conteúdo + consultoria
              </span>

              <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:mx-0 lg:max-w-2xl">
                Organize sua vida financeira e invista melhor com clareza.
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg lg:mx-0 lg:max-w-xl">
                Aqui você encontra um mini ecossistema que te auxilia a sair do conteúdo raso e
                partir para decisões financeiras mais práticas, seguras e inteligentes.
              </p>
            </div>

            <Card className="rounded-[2rem] border-slate-200 shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Seu ecossistema financeiro</CardTitle>
                <CardDescription>
                  Valide a primeira versão com ferramentas úteis, conteúdos estratégicos e um canal
                  de consultoria.
                </CardDescription>
              </CardHeader>

              <CardContent className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-slate-50 p-5">
                  <TrendingUp className="h-5 w-5 text-[#526649]" />
                  <p className="mt-3 font-semibold">Ferramentas práticas</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Simuladores para progressão de patrimônio, comparador de renda fixa,
                    aposentadoria, financiamentos e muito mais.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <BookOpen className="h-5 w-5 text-[#526649]" />
                  <p className="mt-3 font-semibold">Conteúdos complementares</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Aqui compartilho materiais para quem quer se aprofundar mais dentro do contexto
                    do mercado financeiro e economia.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <UserCircle2 className="h-5 w-5 text-[#526649]" />
                  <p className="mt-3 font-semibold">O que você vai aprender?</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Aprender a se educar financeiramente, um dos pilares mais importantes dentro de
                    uma família, mas muito pouco levado a sério.
                  </p>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <Landmark className="h-5 w-5 text-[#526649]" />
                  <p className="mt-3 font-semibold">Como eu posso te ajudar?</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Consultoria, ferramentas práticas e conteúdo objetivo.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-6">
          <div className="grid items-center gap-8 rounded-[2rem] bg-[#526649] px-6 py-8 text-white shadow-xl sm:px-8 sm:py-10 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-200">Quem sou eu</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Uma jornada real de aprendizado financeiro
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-100">
                <p>
                  Sou o Matheus Keitaro, pai da Maria e do José e marido da Mary Anne. Assim como a
                  grande maioria da nossa população, não tive conhecimento sobre educação financeira
                  e investimentos durante boa parte da minha vida.
                </p>

                <p>
                  Esse jogo mudou só depois de adulto, quando decidi que não bastava ficar apenas
                  dependendo do meu trabalho. Estudar sobre o mercado e ver que sim, podemos
                  alcançar nossa liberdade financeira, me trouxe uma verdadeira virada de chave.
                </p>

                <p>
                  Por fim, sou um engenheiro na luta, com MBA em Ciência de Dados e certificado
                  pela ANBIMA como Especialista em Investimentos CEA. Mas isso são apenas títulos e
                  não querem dizer nada sozinhos. A ideia é democratizar o conhecimento para que
                  todos possam alcançar seus objetivos.
                </p>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative w-full max-w-[380px] overflow-hidden rounded-[2rem] border border-white/10 bg-[#44553c] shadow-2xl">
                <Image
                  src="/images/matheus-hero.png"
                  alt="Matheus Keitaro"
                  width={900}
                  height={1200}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 shadow-sm md:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
              Explore a plataforma
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Escolha por onde você quer começar
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Navegue pelas ferramentas financeiras, aprofunde-se nos conteúdos e conheça melhor a
              consultoria.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/ferramentas">
                <Button className="rounded-2xl bg-[#526649] px-6 hover:bg-[#44553c]">
                  Ir para Ferramentas
                </Button>
              </Link>

              <Link href="/conteudos">
                <Button
                  variant="outline"
                  className="rounded-2xl border-[#526649] px-6 text-[#526649] hover:bg-[#526649] hover:text-white"
                >
                  Ir para Conteúdos
                </Button>
              </Link>

              <Link href="/consultoria">
                <Button
                  variant="outline"
                  className="rounded-2xl border-[#526649] px-6 text-[#526649] hover:bg-[#526649] hover:text-white"
                >
                  Ir para Consultoria
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
              Consultoria
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Agende uma conversa
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Caso queira entender melhor como posso te ajudar, você pode entrar em contato
              diretamente pelo WhatsApp.
            </p>

            <div className="mt-8">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button className="rounded-2xl bg-[#526649] px-6 hover:bg-[#44553c]">
                  Agendar conversa
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
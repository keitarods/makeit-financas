import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Landmark, UserCircle2, BookOpen, LayoutDashboard } from "lucide-react";
import SiteHeader from "@/components/site-header";
import { getWhatsAppLink } from "@/lib/contact";

export default function Page() {
  const whatsappLink = getWhatsAppLink();

  return (
    <div className="min-h-screen bg-[#f7f6f3] text-slate-900">
      <SiteHeader />

      <main>
        {/* ── Hero — fundo verde escuro premium ── */}
        <section className="relative bg-[#1a2e18]">
          <div className="relative mx-auto max-w-7xl overflow-hidden px-6 py-14 sm:py-16 md:py-24">
            {/* Dot pattern claro sobre fundo escuro */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.09]"
              style={{
                backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                backgroundSize: "28px 28px",
                maskImage:
                  "radial-gradient(ellipse 80% 60% at 20% 30%, black 30%, transparent 80%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 80% 60% at 20% 30%, black 30%, transparent 80%)",
              }}
            />

            <div className="relative grid items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
              <div className="flex flex-col justify-start pt-2 text-center lg:text-left">
                {/* Badge animado */}
                <span className="mx-auto mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-slate-200 lg:mx-0">
                  <span className="relative flex h-2 w-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-70" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
                  </span>
                  Educação financeira que gera resultado
                </span>

                <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:mx-0 lg:max-w-2xl">
                  Tome o controle do seu dinheiro e construa patrimônio com{" "}
                  <span className="text-green-400">estratégia.</span>
                </h1>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0 lg:max-w-xl">
                  Ferramentas práticas, conteúdo aprofundado e consultoria especializada — tudo o
                  que você precisa para sair das dúvidas e tomar decisões financeiras com confiança.
                </p>
              </div>

              <Card className="rounded-[2rem] border-white/10 bg-white shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-2xl">O que você encontra aqui</CardTitle>
                  <CardDescription>
                    Ferramentas gratuitas, conteúdos aprofundados e consultoria personalizada para
                    quem quer resultados reais com o próprio dinheiro.
                  </CardDescription>
                </CardHeader>

                <CardContent className="grid gap-4 sm:grid-cols-2">
                  {/* Card Orçamento — destaque de novidade */}
                  <div className="group relative rounded-2xl bg-slate-50 p-5 transition-all duration-200 hover:scale-[1.02] hover:shadow-md">
                    <span className="absolute right-3 top-3 rounded-full bg-[#526649]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[#526649]">
                      Novo
                    </span>
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#526649]/10">
                      <LayoutDashboard className="h-5 w-5 text-[#526649]" />
                    </div>
                    <p className="mt-3 font-semibold">Orçamento Doméstico</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Visualize para onde vai cada real, controle categorias e identifique onde você
                      pode economizar mais todo mês.
                    </p>
                    <Link
                      href="/orcamento"
                      className="mt-3 inline-block text-sm font-semibold text-[#526649] hover:underline"
                    >
                      Conhecer ferramenta
                    </Link>
                  </div>

                  <div className="group rounded-2xl bg-slate-50 p-5 transition-all duration-200 hover:scale-[1.02] hover:shadow-md">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#526649]/10">
                      <BookOpen className="h-5 w-5 text-[#526649]" />
                    </div>
                    <p className="mt-3 font-semibold">Conteúdo aprofundado</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Análises, artigos e guias sobre investimentos, renda fixa, previdência e
                      planejamento patrimonial — sem enrolação.
                    </p>
                  </div>

                  <div className="group rounded-2xl bg-slate-50 p-5 transition-all duration-200 hover:scale-[1.02] hover:shadow-md">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#526649]/10">
                      <UserCircle2 className="h-5 w-5 text-[#526649]" />
                    </div>
                    <p className="mt-3 font-semibold">Educação financeira de verdade</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Entenda como o dinheiro funciona, construa hábitos sólidos e pare de tomar
                      decisões no escuro — na prática, não na teoria.
                    </p>
                  </div>

                  <div className="group rounded-2xl bg-slate-50 p-5 transition-all duration-200 hover:scale-[1.02] hover:shadow-md">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#526649]/10">
                      <Landmark className="h-5 w-5 text-[#526649]" />
                    </div>
                    <p className="mt-3 font-semibold">Consultoria personalizada</p>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      Análise da sua situação real, com um plano claro de onde investir, quanto
                      guardar e quais erros evitar.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* ── Barra de credenciais ── */}
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-7">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {[
                { value: "5+", label: "Ferramentas gratuitas" },
                { value: "CEA", label: "Especialista em Investimentos ANBIMA" },
                { value: "MBA", label: "Ciência de Dados" },
                { value: "0", label: "Custo para começar" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <p className="text-2xl font-bold text-[#526649]">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-500">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Quem sou eu ── */}
        <section className="mx-auto max-w-7xl px-6 pb-6 pt-16">
          <div className="grid items-center gap-8 rounded-[2rem] bg-[#526649] px-6 py-8 text-white shadow-xl sm:px-8 sm:py-10 md:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-200">Quem sou eu</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                De zero em finanças a especialista certificado
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-slate-100">
                <p>
                  Sou o Matheus Keitaro, engenheiro, pai de dois filhos e apaixonado por finanças.
                  Como a maioria das pessoas, cresci sem nenhuma educação financeira — e paguei o
                  preço por isso.
                </p>

                <p>
                  A virada veio quando decidi estudar o mercado a fundo e entender como o dinheiro
                  realmente funciona. Percebi que liberdade financeira não é privilégio de poucos —
                  é resultado de conhecimento aplicado.
                </p>

                <p>
                  Hoje sou MBA em Ciência de Dados e certificado pela ANBIMA como Especialista em
                  Investimentos CEA. Mas o que me move não são os títulos — é ajudar pessoas
                  comuns a tomarem decisões financeiras mais inteligentes, com clareza e sem jargão.
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

        {/* ── Explore a plataforma — com imagem de fundo ── */}
        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="relative overflow-hidden rounded-[2rem] shadow-sm">
            {/* Imagem opaca de fundo */}
            <div className="absolute inset-0">
              <Image
                src="/images/Investimento-opaco.png"
                alt=""
                fill
                className="object-cover"
                aria-hidden="true"
              />
            </div>
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#f7f6f3]/92 backdrop-blur-[2px]" />

            <div className="relative rounded-[2rem] border border-slate-200 p-8 md:p-10">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                Explore a plataforma
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Escolha por onde começar — tudo é gratuito
              </h2>
              <p className="mt-4 max-w-2xl leading-7 text-slate-600">
                Ferramentas prontas para usar, conteúdo para aprofundar e consultoria para quem
                quer avançar mais rápido com acompanhamento personalizado.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild className="rounded-2xl bg-[#526649] px-6 hover:bg-[#44553c]">
                  <Link href="/ferramentas">Ir para Ferramentas</Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="rounded-2xl border-[#526649] px-6 text-[#526649] hover:bg-[#526649] hover:text-white"
                >
                  <Link href="/orcamento">Orçamento Doméstico</Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="rounded-2xl border-[#526649] px-6 text-[#526649] hover:bg-[#526649] hover:text-white"
                >
                  <Link href="/conteudos">Ir para Conteúdos</Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="rounded-2xl border-[#526649] px-6 text-[#526649] hover:bg-[#526649] hover:text-white"
                >
                  <Link href="/consultoria">Ir para Consultoria</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── Consultoria ── */}
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#526649] to-[#3a4d31] p-8 text-white shadow-xl md:p-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/5" />
            <div className="pointer-events-none absolute -bottom-12 -left-12 h-56 w-56 rounded-full bg-white/5" />

            <div className="relative grid items-center gap-8 md:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-green-200">Consultoria</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  Pronto para ter um plano financeiro de verdade?
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-slate-200">
                  Na consultoria analisamos sua situação real e saímos com um caminho claro: onde
                  investir, quanto guardar e como chegar nos seus objetivos mais rápido.
                </p>
              </div>

              {whatsappLink ? (
                <div className="flex shrink-0 items-center">
                  <Button
                    asChild
                    className="rounded-2xl bg-white px-8 py-6 text-base font-semibold text-[#526649] shadow-lg hover:bg-slate-100"
                  >
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      Falar no WhatsApp
                    </a>
                  </Button>
                </div>
              ) : null}
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer — espelha o hero ── */}
      <footer className="bg-[#3c5634]">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <Link href="/">
              <Image
                src="/images/matheus-logo.png"
                alt="Matheus Keitaro"
                width={2182}
                height={721}
                className="h-12 w-auto"
              />
            </Link>

            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
              <Link href="/ferramentas" className="text-white transition-colors hover:text-slate-200">
                Ferramentas
              </Link>
              <Link href="/conteudos" className="text-white transition-colors hover:text-slate-200">
                Conteúdos
              </Link>
              <Link href="/analises" className="text-white transition-colors hover:text-slate-200">
                Análises
              </Link>
              <Link href="/ebooks" className="text-white transition-colors hover:text-slate-200">
                E-books
              </Link>
              <Link href="/livros" className="text-white transition-colors hover:text-slate-200">
                Livros
              </Link>
              <Link href="/consultoria" className="text-white transition-colors hover:text-slate-200">
                Consultoria
              </Link>
            </nav>

            <p className="text-sm text-white">© 2026 Matheus Keitaro Finanças</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

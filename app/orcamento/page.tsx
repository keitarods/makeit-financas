import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowRight,
  BarChart3,
  CalendarClock,
  CheckCircle2,
  FileSpreadsheet,
  HelpCircle,
  LineChart,
  PieChart,
  ReceiptText,
  ShieldCheck,
  Tags,
  Upload,
  WalletCards,
} from "lucide-react";
import SiteHeader from "@/components/site-header";
import HeroVideoPlaylist from "@/components/hero-video-playlist";
import OrcamentoAppPreview from "@/components/orcamento-app-preview";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Orçamento Doméstico",
  description:
    "Organize renda, gastos, categorias, importações e evolução mensal da sua família em uma ferramenta visual de orçamento doméstico.",
};

const benefits = [
  "Clareza sobre renda e gastos",
  "Categorias organizadas",
  "Evolução mensal",
  "Importação por Excel",
  "Dashboard visual",
];

const features = [
  {
    title: "Dashboard",
    icon: WalletCards,
    description: "Indicadores de renda, gastos, saldo e percentual comprometido.",
  },
  {
    title: "Rendas e despesas",
    icon: ReceiptText,
    description: "Cadastro de entradas, saídas, datas, fontes e descrições.",
  },
  {
    title: "Tipos de despesa",
    icon: Tags,
    description: "Categorias padrão e tipos personalizados para sua rotina.",
  },
  {
    title: "Gastos ideais",
    icon: BarChart3,
    description: "Comparação entre orçamento real e distribuição planejada.",
  },
  {
    title: "Importação",
    icon: FileSpreadsheet,
    description: "Carga por Excel com validações e prevenção de inconsistências.",
  },
  {
    title: "Planos mensal/anual",
    icon: CalendarClock,
    description: "Controle de teste grátis, pagamento pendente e licença ativa.",
  },
];

const steps = [
  {
    title: "Importe ou cadastre",
    description: "Comece com Excel ou registre rendas e despesas manualmente.",
    icon: Upload,
  },
  {
    title: "Classifique por categoria",
    description: "Separe moradia, mercado, transporte, lazer e outras despesas.",
    icon: Tags,
  },
  {
    title: "Acompanhe a evolução",
    description: "Veja saldo, gastos por grupo e comparação mensal em gráficos.",
    icon: LineChart,
  },
];

const overviewStats = [
  {
    title: "Dashboard interativo",
    description: "Resumo visual da saúde financeira.",
  },
  {
    title: "Lançamento fácil",
    description: "Cadastro rápido de despesas.",
  },
  {
    title: "Visão multinível",
    description: "Categorias e detalhes personalizados.",
  },
];

const faqs = [
  {
    question: "Preciso instalar algo?",
    answer:
      "Não. A proposta é funcionar direto pelo navegador, sem instalação no computador ou celular.",
  },
  {
    question: "Funciona no celular?",
    answer:
      "Sim. A ferramenta está sendo pensada para uso no celular e no computador, com visual simples para acompanhar a rotina da família.",
  },
  {
    question: "Tem período de teste?",
    answer:
      "A ideia é permitir que você conheça a ferramenta antes de decidir o melhor plano para sua realidade.",
  },
  {
    question: "Consigo importar dados?",
    answer:
      "Sim. A ferramenta prevê importação por Excel para acelerar o cadastro de despesas, rendas e histórico mensal.",
  },
  {
    question: "Meus dados ficam salvos?",
    answer:
      "Sim. A proposta é manter seus dados salvos com segurança para acompanhar evolução, categorias e comparativos ao longo do tempo.",
  },
];

function StartCta({ variant = "primary" }: { variant?: "primary" | "secondary" }) {
  return (
    <Button
      asChild
      className={
        variant === "primary"
          ? "rounded-2xl bg-white px-6 py-6 text-slate-950 hover:bg-white"
          : "rounded-2xl bg-[#526649] px-6 py-6 text-white hover:bg-[#526649]"
      }
    >
      <a
        href="https://orcamento.omatheuskeitarofinancas.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Começar agora
        <ArrowRight className="h-4 w-4" />
      </a>
    </Button>
  );
}

export default function OrcamentoPage() {
  return (
    <div className="min-h-screen bg-[#f7f6f3] text-slate-900">
      <SiteHeader />

      <main>
        <section className="relative isolate min-h-[calc(100vh-77px)] overflow-hidden bg-slate-950">
          <div className="absolute inset-0">
            <Image
              src="/images/orcamento-family-hero.png"
              alt="Família conversando sobre orçamento doméstico em casa"
              fill
              priority
              className="hero-media-pan object-cover"
              sizes="100vw"
            />
            <HeroVideoPlaylist poster="/images/orcamento-family-hero.png" />
          </div>
          <div className="absolute inset-0 bg-slate-950/65" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_42%,rgba(82,102,73,0.22),transparent_34%),linear-gradient(90deg,rgba(2,6,23,0.92)_0%,rgba(2,6,23,0.72)_42%,rgba(2,6,23,0.28)_100%)]" />

          <div className="relative mx-auto grid min-h-[calc(100vh-77px)] max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="max-w-3xl text-white">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Organize o orçamento da sua família com clareza
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">
                Rendas, despesas, categorias, importação por Excel e dashboard visual em um só
                lugar para transformar conversa financeira em decisão prática.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <StartCta />
              </div>

              <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
                {overviewStats.map((item) => (
                  <div
                    key={item.title}
                    className="min-h-[116px] rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur"
                  >
                    <p className="text-lg font-semibold leading-snug text-white">
                      {item.title}
                    </p>
                    <p className="mt-2 text-xs leading-5 text-slate-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden justify-end lg:flex">
              <div className="relative ml-auto w-full max-w-[360px] rounded-[2.75rem] border border-white/20 bg-slate-950 p-3 shadow-2xl shadow-black/40">
                <div className="absolute left-1/2 top-2 z-10 h-1.5 w-20 -translate-x-1/2 rounded-full bg-white/20" />
                <div className="overflow-hidden rounded-[2.1rem] bg-white p-4 text-slate-900 shadow-xl">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                    <div>
                      <p className="text-xs text-slate-500">Resumo familiar</p>
                      <p className="mt-1 text-xl font-semibold">Maio</p>
                    </div>
                    <PieChart className="h-7 w-7 text-[#526649]" />
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {[
                      ["Rendas", "R$ 8.400"],
                      ["Gastos", "R$ 5.920"],
                      ["Saldo", "R$ 2.480"],
                    ].map(([label, value]) => (
                      <div key={label} className="rounded-2xl bg-slate-50 p-3">
                        <p className="text-xs text-slate-500">{label}</p>
                        <p className="mt-2 text-base font-semibold leading-tight">{value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 space-y-3">
                    {[
                      ["Moradia", "42%", "w-[42%]"],
                      ["Mercado", "28%", "w-[28%]"],
                      ["Transporte", "18%", "w-[18%]"],
                    ].map(([label, value, width]) => (
                      <div key={label}>
                        <div className="flex justify-between text-sm">
                          <span>{label}</span>
                          <span className="text-slate-500">{value}</span>
                        </div>
                        <div className="mt-2 h-2 rounded-full bg-slate-100">
                          <div className={`h-2 rounded-full bg-[#526649] ${width}`} />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 rounded-2xl border border-slate-100 p-4">
                    <div className="flex items-center gap-2 text-sm font-medium">
                      <LineChart className="h-4 w-4 text-[#526649]" />
                      Evolução mensal
                    </div>
                    <div className="mt-4 flex h-24 items-end gap-2">
                      {[35, 55, 42, 68, 60, 78, 72].map((height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-md bg-[#526649]/80"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                Problema
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Você sabe para onde seu dinheiro vai todo mês?
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-slate-600">
              Quando as despesas ficam espalhadas entre cartão, conta corrente, Pix e anotações
              soltas, a família perde clareza. A ferramenta nasce para organizar essa visão em um
              lugar só, com leitura rápida e rotina simples.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div>
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                  Prévia do app
                </p>
                <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
                  Uma prévia inspirada no aplicativo real
                </h2>
              </div>
              <p className="max-w-xl leading-8 text-slate-600">
                O app já trabalha com ambiente interno, status de licença, importação por planilha,
                navegação por abas e indicadores do orçamento doméstico.
              </p>
            </div>

            <div className="mt-10">
              <OrcamentoAppPreview />
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                Benefícios
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Mais contexto para decidir melhor em família
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-[#526649]" />
                  <p className="font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
              Como funciona
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
              Um fluxo simples para manter o orçamento vivo
            </h2>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {steps.map(({ title, description, icon: Icon }, index) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#526649] text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-semibold text-slate-400">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mt-6 text-lg font-semibold">{title}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#d8e7cc]">
              Recursos
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
              Tudo que você precisa para acompanhar o orçamento
            </h2>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {features.map(({ title, description, icon: Icon }) => (
                <Card key={title} className="rounded-2xl border-white/10 bg-white/10 text-white">
                  <CardContent className="p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#d8e7cc] text-[#526649]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="mt-5 text-lg font-semibold">{title}</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">{description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 md:grid-cols-[auto_1fr] md:p-10">
            <ShieldCheck className="h-10 w-10 text-[#526649]" />
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                Prova e autoridade
              </p>
              <p className="mt-3 max-w-4xl text-2xl font-semibold leading-9">
                Desenvolvido por Matheus Keitaro, engenheiro, investidor e criador de conteúdos de
                educação financeira.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-50">
          <div className="mx-auto max-w-5xl px-6 py-16">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">FAQ</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Dúvidas frequentes
            </h2>

            <div className="mt-8 space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <summary className="flex cursor-pointer list-none items-center gap-3 font-semibold">
                    <HelpCircle className="h-5 w-5 text-[#526649]" />
                    {faq.question}
                  </summary>
                  <p className="mt-4 leading-7 text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>

            <div className="mt-10">
              <StartCta variant="secondary" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

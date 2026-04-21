import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import SiteHeader from "@/components/site-header";

export default function JurosCompostosConteudoPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-8 flex flex-wrap gap-4 text-sm">
          <Link href="/conteudos" className="font-medium text-slate-900 underline">
            Voltar para Conteúdos
          </Link>
          <Link href="/ferramentas/juros-compostos" className="font-medium text-[#526649] underline">
            Ir para a ferramenta
          </Link>
        </div>

        <Card className="rounded-3xl border-slate-200 shadow-sm">
          <CardHeader>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#526649] text-white">
              <TrendingUp className="h-5 w-5" />
            </div>
            <CardTitle className="text-3xl">Juros compostos</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6 text-slate-700 leading-8">
            <p>
              Juros compostos são a base de praticamente toda construção patrimonial de longo prazo.
              Diferente dos juros simples, eles fazem com que o patrimônio cresça não apenas sobre
              o capital inicial, mas também sobre os juros acumulados ao longo do tempo.
            </p>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="font-semibold text-slate-900">Fórmula clássica</p>
              <p className="mt-3 font-mono text-sm text-slate-700">M = C × (1 + i)^n</p>
              <div className="mt-3 space-y-2 text-sm">
                <p><strong>M</strong> = montante final</p>
                <p><strong>C</strong> = capital inicial</p>
                <p><strong>i</strong> = taxa de juros do período</p>
                <p><strong>n</strong> = número de períodos</p>
              </div>
            </div>

            <p>
              Na prática, o conceito fica ainda mais poderoso quando existem aportes recorrentes.
              Isso porque o investidor não depende apenas da rentabilidade do capital inicial, mas
              também da disciplina de continuar investindo ao longo do tempo.
            </p>

            <p>
              Por isso, juros compostos importam tanto: eles mostram que o tempo é uma variável
              decisiva. Começar cedo normalmente gera mais efeito do que tentar compensar muito
              tarde com aportes maiores.
            </p>

            <p>
              Em termos comportamentais, essa lógica reforça três pontos:
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>começar é mais importante do que esperar o cenário perfeito;</li>
              <li>consistência tende a ser mais poderosa do que intensidade pontual;</li>
              <li>o longo prazo favorece quem respeita o processo.</li>
            </ul>

            <p>
              A ferramenta de juros compostos do site existe justamente para transformar esse
              conceito em algo visual, permitindo que a pessoa veja como aportes, taxa e prazo
              impactam o patrimônio final.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
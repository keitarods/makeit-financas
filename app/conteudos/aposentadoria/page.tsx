import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wallet } from "lucide-react";
import SiteHeader from "@/components/site-header";

export default function AposentadoriaConteudoPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-8 flex flex-wrap gap-4 text-sm">
          <Link href="/conteudos" className="font-medium text-slate-900 underline">
            Voltar para Conteúdos
          </Link>
          <Link href="/ferramentas/aposentadoria" className="font-medium text-[#526649] underline">
            Ir para a ferramenta
          </Link>
        </div>

        <Card className="rounded-3xl border-slate-200 shadow-sm">
          <CardHeader>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#526649] text-white">
              <Wallet className="h-5 w-5" />
            </div>
            <CardTitle className="text-3xl">Aposentadoria</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6 text-slate-700 leading-8">
            <p>
              Pensar em aposentadoria é pensar em liberdade, dignidade e qualidade de vida no longo
              prazo. Um dos maiores erros financeiros é acreditar que a previdência pública, sozinha,
              será suficiente para sustentar o padrão de vida desejado no futuro.
            </p>

            <p>
              A previdência pública tem limitações estruturais: regras podem mudar, benefícios têm
              teto e a pessoa pode descobrir tarde demais que precisaria de uma renda maior para
              viver com conforto.
            </p>

            <p>
              Por isso, investir para a própria aposentadoria não é luxo. É planejamento.
            </p>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="font-semibold text-slate-900">Vantagens de construir a própria aposentadoria</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>mais autonomia financeira no futuro;</li>
                <li>menor dependência de mudanças no sistema público;</li>
                <li>mais previsibilidade sobre renda futura;</li>
                <li>maior chance de manter padrão de vida e liberdade de escolha.</li>
              </ul>
            </div>

            <p>
              A lógica da ferramenta é simples: transformar um objetivo distante em um número
              concreto de aporte mensal. Isso ajuda a pessoa a entender quanto tempo tem, quanto já
              acumulou e quanto precisa investir para chegar ao patrimônio desejado.
            </p>

            <p>
              Em resumo, aposentadoria de qualidade costuma ser consequência de três fatores:
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>começar cedo;</li>
              <li>investir com constância;</li>
              <li>ter clareza do patrimônio necessário para o futuro.</li>
            </ul>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
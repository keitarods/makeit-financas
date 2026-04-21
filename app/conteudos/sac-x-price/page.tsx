import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Landmark } from "lucide-react";
import SiteHeader from "@/components/site-header";

export default function SacPriceConteudoPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-8 flex flex-wrap gap-4 text-sm">
          <Link href="/conteudos" className="font-medium text-slate-900 underline">
            Voltar para Conteúdos
          </Link>
          <Link
            href="/ferramentas/financiamento-price-sac"
            className="font-medium text-[#526649] underline"
          >
            Ir para a ferramenta
          </Link>
        </div>

        <Card className="rounded-3xl border-slate-200 shadow-sm">
          <CardHeader>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#526649] text-white">
              <Landmark className="h-5 w-5" />
            </div>
            <CardTitle className="text-3xl">SAC x Price</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6 text-slate-700 leading-8">
            <p>
              Quando uma pessoa financia um imóvel, carro ou outro bem, ela normalmente encontra
              dois sistemas mais conhecidos: SAC e Price. Entender essa diferença é fundamental,
              porque isso afeta o valor das parcelas, o ritmo de amortização e o custo total pago.
            </p>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="font-semibold text-slate-900">Sistema Price</p>
              <p className="mt-2">
                No sistema Price, a parcela tende a permanecer constante. No início do contrato,
                grande parte da parcela é composta por juros, enquanto a amortização do saldo
                devedor é menor. Com o passar do tempo, essa proporção se inverte.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="font-semibold text-slate-900">Sistema SAC</p>
              <p className="mt-2">
                No SAC, a amortização é constante. Isso faz com que as parcelas comecem mais altas,
                mas diminuam ao longo do tempo, porque os juros incidem sobre um saldo devedor que
                cai mais rapidamente.
              </p>
            </div>

            <p>
              Em termos práticos:
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>o Price costuma parecer mais confortável no início;</li>
              <li>o SAC tende a reduzir o saldo devedor mais rápido;</li>
              <li>em muitos cenários, o SAC gera menor custo total.</li>
            </ul>

            <p>
              Então qual faz sentido para cada público?
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                <strong>Price:</strong> pode fazer sentido para quem precisa de parcelas iniciais
                mais previsíveis e mais suaves.
              </li>
              <li>
                <strong>SAC:</strong> tende a ser interessante para quem suporta parcelas iniciais
                maiores e quer reduzir o custo total da dívida.
              </li>
            </ul>

            <p>
              A ferramenta do site ajuda justamente a transformar essa comparação em números
              concretos, mostrando parcela, juros, amortização e saldo devedor ao longo do tempo.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
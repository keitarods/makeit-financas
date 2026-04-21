import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShieldCheck } from "lucide-react";
import SiteHeader from "@/components/site-header";

export default function ReservaEmergenciaConteudoPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <main className="mx-auto max-w-5xl px-6 py-16">
        <div className="mb-8 flex flex-wrap gap-4 text-sm">
          <Link href="/conteudos" className="font-medium text-slate-900 underline">
            Voltar para Conteúdos
          </Link>
          <Link
            href="/ferramentas/reserva-emergencia"
            className="font-medium text-[#526649] underline"
          >
            Ir para a ferramenta
          </Link>
        </div>

        <Card className="rounded-3xl border-slate-200 shadow-sm">
          <CardHeader>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#526649] text-white">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <CardTitle className="text-3xl">Reserva de emergência</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6 text-slate-700 leading-8">
            <p>
              Reserva de emergência é um dos pilares mais importantes das finanças pessoais. Antes
              de pensar em investir para objetivos maiores, a pessoa precisa ter uma base de
              segurança para lidar com imprevistos.
            </p>

            <p>
              Muitas famílias entram em problemas financeiros não porque ganham pouco
              necessariamente, mas porque não possuem reserva. Quando surge uma urgência, acabam
              recorrendo a cartão de crédito, cheque especial ou empréstimos caros, criando uma
              bola de neve.
            </p>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="font-semibold text-slate-900">Por que ela vem antes de investir?</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>evita resgatar investimentos em momento ruim;</li>
                <li>reduz a dependência de dívidas caras;</li>
                <li>protege o padrão de vida da família;</li>
                <li>permite tomar decisões com mais calma.</li>
              </ul>
            </div>

            <p>
              Em termos práticos, a reserva não precisa necessariamente ser gigantesca no primeiro
              mês. O importante é entender que ela deve ser construída de forma intencional.
            </p>

            <p>
              Como referência:
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>CLT: normalmente algo em torno de 6 meses de custo fixo;</li>
              <li>PJ: normalmente algo em torno de 12 meses;</li>
              <li>funcionário público: em muitos casos, 3 meses já podem ser referência.</li>
            </ul>

            <p>
              Aprender a investir sem antes construir reserva é como tentar acelerar um carro sem
              freio de segurança. Por isso, esse costuma ser um dos primeiros passos de qualquer
              jornada financeira saudável.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
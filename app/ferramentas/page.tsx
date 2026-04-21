import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, ShieldCheck, Landmark, Wallet } from "lucide-react";
import SiteHeader from "@/components/site-header";

function ToolCard({
  href,
  title,
  description,
  icon: Icon,
}: {
  href: string;
  title: string;
  description: string;
  icon: React.ElementType;
}) {
  return (
    <Card className="flex h-full flex-col rounded-3xl border-slate-200 shadow-sm">
      <CardHeader>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#526649] text-white">
          <Icon className="h-5 w-5" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-sm leading-6">{description}</CardDescription>
      </CardHeader>

      <CardContent className="mt-auto">
        <Link href={href}>
          <Button className="w-full rounded-2xl bg-[#526649] hover:bg-[#44553c]">
            Abrir ferramenta
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}

export default function FerramentasPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8">
          <Link href="/" className="text-sm font-medium text-slate-900 underline">
            Voltar para a página inicial
          </Link>
        </div>

        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
          Ferramentas
        </p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          Escolha a ferramenta que deseja usar
        </h1>
        <p className="mt-4 max-w-2xl text-slate-600">
          Aqui você encontra simuladores práticos para apoiar decisões financeiras do dia a dia.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <ToolCard
            href="/ferramentas/juros-compostos"
            title="Juros compostos"
            description="Simule crescimento patrimonial com aportes, taxa mensal ou anual e gráfico ao longo do tempo."
            icon={Calculator}
          />
          <ToolCard
            href="/ferramentas/reserva-emergencia"
            title="Reserva de emergência"
            description="Calcule uma reserva sugerida com base no seu perfil de trabalho e gasto mensal fixo."
            icon={ShieldCheck}
          />
          <ToolCard
            href="/ferramentas/financiamento-price-sac"
            title="Financiamento Price x SAC"
            description="Compare parcelas, amortização, saldo devedor e juros pagos entre os dois sistemas."
            icon={Landmark}
          />
          <ToolCard
            href="/ferramentas/aposentadoria"
            title="Aposentadoria"
            description="Projete o aporte mensal necessário para alcançar um patrimônio desejado até a aposentadoria."
            icon={Wallet}
          />
        </div>
      </main>
    </div>
  );
}
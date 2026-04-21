import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Landmark, TrendingUp, ShieldCheck, Wallet } from "lucide-react";
import SiteHeader from "@/components/site-header";

function ContentCard({
  href,
  icon: Icon,
  title,
  description,
}: {
  href: string;
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <Link href={href} className="block h-full">
      <Card className="h-full rounded-3xl border-slate-200 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
        <CardHeader>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#526649] text-white">
            <Icon className="h-5 w-5" />
          </div>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription className="text-sm leading-6">{description}</CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-sm font-medium text-[#526649]">Clique para ler o conteúdo</p>
        </CardContent>
      </Card>
    </Link>
  );
}

export default function ConteudosPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8">
          <Link href="/" className="text-sm font-medium text-slate-900 underline">
            Voltar para a página inicial
          </Link>
        </div>

        <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Conteúdos</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight">
          Conteúdos para aprofundar o uso das ferramentas
        </h1>

        <p className="mt-4 max-w-3xl text-slate-600 leading-7">
          Aqui você encontra conteúdos complementares para entender melhor os conceitos por trás
          das ferramentas do site. A ideia é não apenas simular, mas também compreender a lógica,
          os fundamentos técnicos e a importância prática de cada tema.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <ContentCard
            href="/conteudos/juros-compostos"
            icon={TrendingUp}
            title="Juros compostos"
            description="Entenda a fórmula, o impacto do tempo, a importância da constância e por que esse conceito é central na construção de patrimônio."
          />

          <ContentCard
            href="/conteudos/sac-x-price"
            icon={Landmark}
            title="SAC x Price"
            description="Veja no que cada sistema é baseado, como as parcelas são calculadas e qual tende a fazer mais sentido para cada perfil."
          />

          <ContentCard
            href="/conteudos/aposentadoria"
            icon={Wallet}
            title="Aposentadoria"
            description="Entenda por que depender apenas da previdência pública pode ser arriscado e como investir para buscar uma aposentadoria melhor."
          />

          <ContentCard
            href="/conteudos/reserva-de-emergencia"
            icon={ShieldCheck}
            title="Reserva de emergência"
            description="Um dos pilares mais importantes das finanças pessoais e o motivo pelo qual ela vem antes de aprender a investir."
          />
        </div>
      </main>
    </div>
  );
}
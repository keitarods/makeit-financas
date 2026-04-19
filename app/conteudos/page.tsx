import Link from "next/link";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Landmark, TrendingUp } from "lucide-react";

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <Card className="h-full rounded-3xl border-slate-200 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
      <CardHeader>
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-900 text-white">
          <Icon className="h-5 w-5" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-sm leading-6">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}

export default function ConteudosPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Conteúdo</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight">
        Transforme seus posts em ativos duradouros
      </h1>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        <FeatureCard
          icon={BookOpen}
          title="Como montar sua reserva de emergência"
          description="Um conteúdo de entrada perfeito para o público que ainda está começando."
        />
        <FeatureCard
          icon={TrendingUp}
          title="Juros compostos na prática"
          description="Explique por que o tempo e a constância fazem tanta diferença no patrimônio."
        />
        <FeatureCard
          icon={Landmark}
          title="Caixinha, CDB ou Tesouro?"
          description="Conteúdo com alta intenção de busca e muito potencial de compartilhamento."
        />
      </div>

      <div className="mt-8">
        <Link href="/" className="text-sm font-medium text-slate-900 underline">
          Voltar para a página inicial
        </Link>
      </div>
    </main>
  );
}
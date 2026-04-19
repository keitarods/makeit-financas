import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export default function ConsultoriaPage() {
  const whatsappNumber: string = process.env.WHATSAPP_NUMBER ?? "";
  const whatsappMessage: string =
    process.env.WHATSAPP_MESSAGE ??
    "Olá, Matheus. Gostaria de agendar uma conversa e entender melhor como funciona seu atendimento.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <main className="mx-auto max-w-7xl px-6 py-16">
      <Card className="rounded-[2rem] border-slate-200 bg-[#526649] text-white shadow-xl">
        <CardContent className="p-8 md:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-slate-200">Consultoria</p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
              Atendimento para quem quer mais clareza financeira
            </h1>
            <p className="mt-6 text-base leading-8 text-slate-100">
              Um espaço para orientação prática, organização financeira e apoio para quem deseja
              investir melhor.
            </p>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
              <p className="text-lg font-semibold">Como posso te ajudar</p>
              <p className="mt-3 text-sm leading-7 text-slate-100">
                Direcionamento para organização financeira, construção de patrimônio, entendimento
                de investimentos e tomada de decisões com mais clareza e segurança.
              </p>
            </div>

            <div className="mt-10 flex justify-center">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="secondary"
                  className="flex items-center gap-2 rounded-2xl px-6 py-6 text-slate-950"
                >
                  <MessageCircle className="h-4 w-4" />
                  Agendar conversa
                </Button>
              </a>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8">
        <Link href="/" className="text-sm font-medium text-slate-900 underline">
          Voltar para a página inicial
        </Link>
      </div>
    </main>
  );
}
import Calculator from "@/components/calculators/reserva-emergencia";
import CalculatorShell from "@/components/calculator-shell";
import { calculators } from "@/lib/calculators";
import { pageMetadata } from "@/lib/site";

const calculator = calculators["reserva-emergencia"];
export const metadata = pageMetadata(calculator.title, calculator.description, "/ferramentas/reserva-emergencia");

export default function Page() {
  return <CalculatorShell slug="reserva-emergencia"><Calculator /></CalculatorShell>;
}

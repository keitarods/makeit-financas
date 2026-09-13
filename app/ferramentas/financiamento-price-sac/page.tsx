import Calculator from "@/components/calculators/financiamento-price-sac";
import CalculatorShell from "@/components/calculator-shell";
import { calculators } from "@/lib/calculators";
import { pageMetadata } from "@/lib/site";

const calculator = calculators["financiamento-price-sac"];
export const metadata = pageMetadata(calculator.title, calculator.description, "/ferramentas/financiamento-price-sac");

export default function Page() {
  return <CalculatorShell slug="financiamento-price-sac"><Calculator /></CalculatorShell>;
}

import Calculator from "@/components/calculators/aposentadoria";
import CalculatorShell from "@/components/calculator-shell";
import { calculators } from "@/lib/calculators";
import { pageMetadata } from "@/lib/site";

const calculator = calculators["aposentadoria"];
export const metadata = pageMetadata(calculator.title, calculator.description, "/ferramentas/aposentadoria");

export default function Page() {
  return <CalculatorShell slug="aposentadoria"><Calculator /></CalculatorShell>;
}

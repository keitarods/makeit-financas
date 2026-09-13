import Calculator from "@/components/calculators/juros-compostos";
import CalculatorShell from "@/components/calculator-shell";
import { calculators } from "@/lib/calculators";
import { pageMetadata } from "@/lib/site";

const calculator = calculators["juros-compostos"];
export const metadata = pageMetadata(calculator.title, calculator.description, "/ferramentas/juros-compostos");

export default function Page() {
  return <CalculatorShell slug="juros-compostos"><Calculator /></CalculatorShell>;
}

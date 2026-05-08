export function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 2,
  }).format(Number.isFinite(value) ? value : 0);
}

export function parseLocaleNumber(value: string) {
  if (!value) return 0;

  const cleaned = value.trim().replace(/\s/g, "").replace(/[^\d,.-]/g, "");
  const hasComma = cleaned.includes(",");
  const hasDot = cleaned.includes(".");

  if (hasComma && hasDot) {
    const lastComma = cleaned.lastIndexOf(",");
    const lastDot = cleaned.lastIndexOf(".");

    if (lastComma > lastDot) {
      return Number(cleaned.replace(/\./g, "").replace(",", ".")) || 0;
    }

    return Number(cleaned.replace(/,/g, "")) || 0;
  }

  if (hasComma) {
    return Number(cleaned.replace(",", ".")) || 0;
  }

  return Number(cleaned) || 0;
}

export function monthlyRateFromAnnualRate(annualRatePercent: number) {
  return Math.pow(1 + annualRatePercent / 100, 1 / 12) - 1;
}

export function periodicRateFromInput(rateValue: number, rateType: "mensal" | "anual") {
  if (rateType === "mensal") return rateValue / 100;
  return monthlyRateFromAnnualRate(rateValue);
}

export function calculateCompoundInterest({
  principal,
  contribution,
  monthlyRate,
  totalMonths,
}: {
  principal: number;
  contribution: number;
  monthlyRate: number;
  totalMonths: number;
}) {
  let balance = principal;
  let invested = principal;

  const history: {
    periodo: number;
    patrimonio: number;
    investido: number;
    juros: number;
  }[] = [];

  for (let month = 1; month <= totalMonths; month += 1) {
    balance = balance * (1 + monthlyRate) + contribution;
    invested += contribution;

    history.push({
      periodo: month,
      patrimonio: balance,
      investido: invested,
      juros: balance - invested,
    });
  }

  return {
    invested,
    balance,
    earnings: balance - invested,
    history,
  };
}

export function calculateFinancing({
  loanAmount,
  installments,
  monthlyRate,
}: {
  loanAmount: number;
  installments: number;
  monthlyRate: number;
}) {
  const n = Math.max(1, Math.round(installments || 1));
  const priceRows: {
    parcela: number;
    prestacao: number;
    amortizacao: number;
    juros: number;
    saldoDevedor: number;
  }[] = [];

  const sacRows: typeof priceRows = [];
  const pricePayment =
    monthlyRate === 0
      ? loanAmount / n
      : (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, n)) /
        (Math.pow(1 + monthlyRate, n) - 1);

  let priceBalance = loanAmount;
  let sacBalance = loanAmount;
  const sacAmort = loanAmount / n;

  for (let i = 1; i <= n; i += 1) {
    const priceInterest = priceBalance * monthlyRate;
    const priceAmort = pricePayment - priceInterest;
    priceBalance = Math.max(0, priceBalance - priceAmort);

    priceRows.push({
      parcela: i,
      prestacao: pricePayment,
      amortizacao: priceAmort,
      juros: priceInterest,
      saldoDevedor: priceBalance,
    });

    const sacInterest = sacBalance * monthlyRate;
    const sacPayment = sacAmort + sacInterest;
    sacBalance = Math.max(0, sacBalance - sacAmort);

    sacRows.push({
      parcela: i,
      prestacao: sacPayment,
      amortizacao: sacAmort,
      juros: sacInterest,
      saldoDevedor: sacBalance,
    });
  }

  return {
    priceRows,
    sacRows,
    totalPrice: priceRows.reduce((acc, row) => acc + row.prestacao, 0),
    totalSac: sacRows.reduce((acc, row) => acc + row.prestacao, 0),
    totalPriceInterest: priceRows.reduce((acc, row) => acc + row.juros, 0),
    totalSacInterest: sacRows.reduce((acc, row) => acc + row.juros, 0),
  };
}

export function calculateEmergencyReserve(expense: number, months: number) {
  return expense * months;
}

export function calculateRequiredRetirementContribution({
  currentPatrimony,
  target,
  monthlyRate,
  totalMonths,
}: {
  currentPatrimony: number;
  target: number;
  monthlyRate: number;
  totalMonths: number;
}) {
  if (totalMonths <= 0 || target <= 0) return 0;

  const futureValueOfCurrentPatrimony =
    currentPatrimony * Math.pow(1 + monthlyRate, totalMonths);
  const remainingGoal = Math.max(0, target - futureValueOfCurrentPatrimony);

  if (remainingGoal === 0) return 0;
  if (monthlyRate === 0) return remainingGoal / totalMonths;

  return remainingGoal / ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);
}

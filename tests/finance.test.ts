import assert from "node:assert/strict";
import test from "node:test";
import {
  calculateCompoundInterest,
  calculateEmergencyReserve,
  calculateFinancing,
  calculateRequiredRetirementContribution,
  monthlyRateFromAnnualRate,
  parseLocaleNumber,
} from "../lib/finance";

const round = (value: number) => Math.round(value * 100) / 100;

test("parseLocaleNumber accepts Brazilian and US number formats", () => {
  assert.equal(parseLocaleNumber("1.234,56"), 1234.56);
  assert.equal(parseLocaleNumber("1,234.56"), 1234.56);
  assert.equal(parseLocaleNumber("R$ 2.500,10"), 2500.1);
});

test("calculateCompoundInterest handles zero interest", () => {
  const result = calculateCompoundInterest({
    principal: 1000,
    contribution: 100,
    monthlyRate: 0,
    totalMonths: 3,
  });

  assert.equal(result.balance, 1300);
  assert.equal(result.invested, 1300);
  assert.equal(result.earnings, 0);
});

test("calculateFinancing produces expected zero-rate Price and SAC totals", () => {
  const result = calculateFinancing({
    loanAmount: 1200,
    installments: 12,
    monthlyRate: 0,
  });

  assert.equal(result.totalPrice, 1200);
  assert.equal(result.totalSac, 1200);
  assert.equal(result.totalPriceInterest, 0);
  assert.equal(result.totalSacInterest, 0);
});

test("calculateFinancing keeps SAC interest below Price for the same nominal rate", () => {
  const result = calculateFinancing({
    loanAmount: 200000,
    installments: 360,
    monthlyRate: monthlyRateFromAnnualRate(12),
  });

  assert.ok(result.totalSacInterest < result.totalPriceInterest);
});

test("calculateEmergencyReserve multiplies monthly expense by suggested months", () => {
  assert.equal(calculateEmergencyReserve(3000, 6), 18000);
});

test("calculateRequiredRetirementContribution handles zero-rate target", () => {
  const contribution = calculateRequiredRetirementContribution({
    currentPatrimony: 10000,
    target: 70000,
    monthlyRate: 0,
    totalMonths: 60,
  });

  assert.equal(round(contribution), 1000);
});

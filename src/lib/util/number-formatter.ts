import { AppConfig } from "../config";

export function formatMoney(amount: number): string {
  const formattedAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: AppConfig.currency,
    maximumFractionDigits: 2,
  }).format(amount);

  return formattedAmount.replace(/\.00$/, '').replaceAll(',', '.');
}

export function suffixedNumber(num: number, precision: number = 2) {
  const map = [
    { suffix: ' Trillion', threshold: 1e12 },
    { suffix: ' Billion', threshold: 1e9 },
    { suffix: ' Million', threshold: 1e6 },
    { suffix: ' Thousand', threshold: 1e3 },
    { suffix: '', threshold: 1 },
  ];

  const found = map.find((x) => Math.abs(num) >= x.threshold);
  if (found) {
    const formatted = (num / found.threshold).toFixed(precision) + found.suffix;
    return formatted;
  }

  return num;
}
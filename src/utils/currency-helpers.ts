export const currencyformatter = new Intl.NumberFormat();

export function safeToCurrencyLabel(value: number | string): string {
  if (Number.isNaN(+value)) {
    return value as string;
  }

  return currencyformatter.format(Number(value));
}

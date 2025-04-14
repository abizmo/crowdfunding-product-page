export const formatToCurrency = (value: number) =>
  value.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

export const formatToDecimal = (value: number) =>
  value.toLocaleString("en-US", {
    style: "decimal",
    maximumFractionDigits: 0,
  });

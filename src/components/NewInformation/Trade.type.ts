export const trade = [
  'Direct',
  'Delivery',
  'Both',
] as const;

export type Trade = typeof trade[number];

export const TradeExplanation = {
  Direct:'직거래',
  Delivery:'택배거래',
  Both:'둘다',
} as const;

export type TradeType = typeof TradeExplanation[keyof typeof TradeExplanation];

export const auction = [
  'Realtime',
  'General',
] as const;

export type Auction = typeof auction[number];

export const AuctionExplanation = {
  Realtime: '실시간 경매',
  General: '일반 경매',
} as const;

export type AuctionType = typeof AuctionExplanation[keyof typeof AuctionExplanation];

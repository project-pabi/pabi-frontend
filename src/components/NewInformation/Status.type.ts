export const status = [
  'ItsNew',
  'Clean',
  'NoScratches',
  'IHaveAReceipt',
  'IHaveBoxAndWarranty',
] as const;

export const StatusMap = {
  ItsNew: '새거에요',
  Clean: '깨끗해요',
  NoScratches: '흠집 없어요',
  IHaveAReceipt: '영수증 있어요',
  IHaveBoxAndWarranty: '박스•보증서 있어요',
} as const;

export type StatusType = typeof StatusMap[keyof typeof StatusMap];
export type StatusKey = keyof typeof StatusMap;
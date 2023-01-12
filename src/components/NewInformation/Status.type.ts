export const statusType = {
  ItsNew: '새거에요',
  Clean: '깨끗해요',
  NoScratches: '흠집 없어요',
  IHaveAReceipt: '영수증 있어요',
  IHaveBoxAndWarranty: '박스•보증서 있어요',
} as const;

type StatusType = typeof statusType[keyof typeof statusType];

export const Status: Array<StatusType> = ['새거에요', '깨끗해요', '흠집 없어요', '영수증 있어요', '박스•보증서 있어요'];

export default StatusType;

type ItsNew = "새거에요";
type Clean = "깨끗해요";
type NoScratches = "흠집 없어요";
type IHaveAReceipt = "영수증 있어요";
type IHaveBoxAndWarranty = "박스•보증서 있어요";

export type StatusType =
  | ItsNew
  | Clean
  | NoScratches
  | IHaveAReceipt
  | IHaveBoxAndWarranty;

export const Status: Array<StatusType> = [
  "새거에요",
  "깨끗해요",
  "흠집 없어요",
  "영수증 있어요",
  "박스•보증서 있어요",
];

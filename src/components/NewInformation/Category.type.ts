type WomensClothingAndGoods = "여성의류/잡화";
type MensClothingAndGoods = "남성의류/잡화";
type Beauty = "뷰티/미용";
type DigitalDevice = "디지털기기";

export type CategoryType =
  | WomensClothingAndGoods
  | MensClothingAndGoods
  | Beauty
  | DigitalDevice;

export const Categorys: Array<CategoryType> = [
  "여성의류/잡화",
  "남성의류/잡화",
  "뷰티/미용",
  "디지털기기",
];

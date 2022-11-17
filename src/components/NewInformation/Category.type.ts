export const categorys = ['WomensClothingAndGoods', 'MensClothingAndGoods', 'Beauty', 'DigitalDevice'] as const;
type Categorys = typeof categorys[number];

export const Category = {
  WomensClothingAndGoods: '여성의류/잡화',
  MensClothingAndGoods: '남성의류/잡화',
  Beauty: '뷰티/미용',
  DigitalDevice: '디지털기기',
} as const;

export type CategoryType = typeof Category[keyof typeof Category];

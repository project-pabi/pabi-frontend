export const categorys = [
  'WomensClothingAndGoods',
  'MensClothingAndGoods',
  'Beauty',
  'DigitalDevice',
  'HouseholdAppliances',
  'FurnitureInterior',
  'LivingKitchen',
  'Children',
  'HobbiesRecordsBooks',
  'TicketVoucher',
  'SportsLeisure',
  'processedFood',
  'PetSupplies',
  'Plant',
  'Etc',
] as const;
type Categorys = typeof categorys[number];

export const Category = {
  WomensClothingAndGoods: '여성의류/잡화',
  MensClothingAndGoods: '남성의류/잡화',
  Beauty: '뷰티/미용',
  DigitalDevice: '디지털기기',
  HouseholdAppliances:'생활가전',
  FurnitureInterior:'가구/인테리어',
  LivingKitchen:'생활/주방',
  Children:'유아동',
  HobbiesRecordsBooks:'취미/음반/도서',
  TicketVoucher:'티켓/교환권',
  SportsLeisure:'스포츠/레저',
  processedFood:'가공식품',
  PetSupplies:'반려동물용품',
  Plant:'식물',
  Etc:'기타',
} as const;

export type CategoryType = typeof Category[keyof typeof Category];

import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import CategoryType from "../components/Auction/CategoryData";

type CategoryTypes = typeof CategoryType;

interface CategoryState {
  checkedList: CategoryTypes;
  priceRange: number[];

  setCheckedList: (checkedList: CategoryTypes) => void;
  setPriceRange: (priceRange: number[]) => void;
}

const store = (set: any) => ({
  checkedList: CategoryType,
  priceRange: [10000, 30000],

  setCheckedList: (checkedList: CategoryTypes): void => set({ checkedList }),
  setPriceRange: (priceRange: number[]): void => set({ priceRange }),
});

export const useCategoryStore = create<CategoryState>()(devtools(store));

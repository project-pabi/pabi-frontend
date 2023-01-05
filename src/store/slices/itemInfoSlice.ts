import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';
import { RootState } from '@/store/config';

interface ItemInfoState {
  name: string;
  category: any;
  state: any;
  photo: any;
  explan: any;
  type: any;
  price: number;
  tradeType: any;
}

const initialState: ItemInfoState = {
  name: '',
  category: '',
  state: '',
  photo: '',
  explan: '',
  type: '',
  price: 10,
  tradeType: '',
};

export const itemInfoSlice = createSlice({
  name: 'itemInfo',
  initialState,
  reducers: {
    setName(state: ItemInfoState, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setCategory(state: ItemInfoState, action: PayloadAction<any>) {
      state.category = action.payload;
    },
    setState(state: ItemInfoState, action: PayloadAction<any>) {
      state.state = action.payload??[];
    },
    setPhoto(state: ItemInfoState, action: PayloadAction<any>) {
      state.photo = action.payload;
    },
    setExplan(state: ItemInfoState, action: PayloadAction<any>) {
      state.explan = action.payload;
    },
    setType(state: ItemInfoState, action: PayloadAction<any>) {
      state.type = action.payload;
    },
    setPrice(state: ItemInfoState, action: PayloadAction<number>) {
      state.price = action.payload;
    },
    setTradeType(state: ItemInfoState, action: PayloadAction<any>) {
      state.tradeType = action.payload;
    },
  },
});

export const { setName, setCategory, setState, setPhoto, setExplan, setType, setPrice, setTradeType } = itemInfoSlice.actions;

export default itemInfoSlice;

const isNameComplite = (state: RootState): boolean => {
  return !!state.itemInfo.name;
};
const isCategoryComplite = (state: RootState): boolean => {
  return isNameComplite(state) && !!state.itemInfo.category;
};
const isStateComplite = (state: RootState): boolean => {
  return isCategoryComplite(state) && !!state.itemInfo.state;
};
const isPhotoComplite = (state: RootState): boolean => {
  return isStateComplite(state) && !!state.itemInfo.photo;
};
const isExplanComplite = (state: RootState): boolean => {
  return isPhotoComplite(state) && !!state.itemInfo.explan;
};
const isTypeComplite = (state: RootState): boolean => {
  return isExplanComplite(state) && !!state.itemInfo.type;
};
const isPriceComplite = (state: RootState): boolean => {
  return isTypeComplite(state) && !!state.itemInfo.price;
};
const isTradeTypeComplite = (state: RootState): boolean => {
  return isPriceComplite(state) && !!state.itemInfo.tradeType;
};

const isCompliteSelector = createSelector(
  isNameComplite,
  isCategoryComplite,
  isStateComplite,
  isPhotoComplite,
  isExplanComplite,
  isTypeComplite,
  isPriceComplite,
  isTradeTypeComplite,
  (
    isNameComplite:  boolean,
    isCategoryComplite: boolean,
    isStateComplite: boolean,
    isPhotoComplite: boolean,
    isExplanComplite: boolean,
    isTypeComplite: boolean,
    isPriceComplite: boolean,
    isTradeTypeComplite: boolean
  ) => ({
    isNameComplite,
    isCategoryComplite,
    isStateComplite,
    isPhotoComplite,
    isExplanComplite,
    isTypeComplite,
    isPriceComplite,
    isTradeTypeComplite,
  })
);

export { isCompliteSelector };

import { createSlice, PayloadAction, createSelector } from '@reduxjs/toolkit';

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
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setCategory(state, action: PayloadAction<any>) {
      state.category = action.payload;
    },
    setState(state, action: PayloadAction<any>) {
      state.state = action.payload;
    },
    setPhoto(state, action: PayloadAction<any>) {
      state.photo = action.payload;
    },
    setExplan(state, action: PayloadAction<any>) {
      state.explan = action.payload;
    },
    setType(state, action: PayloadAction<any>) {
      state.type = action.payload;
    },
    setPrice(state, action: PayloadAction<number>) {
      state.price = action.payload;
    },
    setTradeType(state, action: PayloadAction<any>) {
      state.tradeType = action.payload;
    },
  },
});

export const { setName, setCategory, setState, setPhoto, setExplan, setType, setPrice, setTradeType } = itemInfoSlice.actions;

export default itemInfoSlice;

const isNameComplite = (state: ItemInfoState): boolean => {
  return !!state.name;
};
const isCategoryComplite = (state: ItemInfoState): boolean => {
  return isNameComplite(state) && !!state.category;
};
const isStateComplite = (state: ItemInfoState): boolean => {
  return isCategoryComplite(state) && !!state.state;
};
const isPhotoComplite = (state: ItemInfoState): boolean => {
  return isStateComplite(state) && !!state.photo;
};
const isExplanComplite = (state: ItemInfoState): boolean => {
  return isPhotoComplite(state) && !!state.explan;
};
const isTypeComplite = (state: ItemInfoState): boolean => {
  return isExplanComplite(state) && !!state.type;
};
const isPriceComplite = (state: ItemInfoState): boolean => {
  return isTypeComplite(state) && !!state.price;
};
const isTradeTypeComplite = (state: ItemInfoState): boolean => {
  return isPriceComplite(state) && !!state.tradeType;
};

const isNameCompliteSelector = createSelector(
  (state: ItemInfoState): ItemInfoState => state,
  (state: ItemInfoState): boolean => {
    return isNameComplite(state);
  }
);
const isCategoryCompliteSelector = createSelector(
  (state: ItemInfoState): ItemInfoState => state,
  (state: ItemInfoState): boolean => {
    return isCategoryComplite(state);
  }
);
const isStateCompliteSelector = createSelector(
  (state: ItemInfoState): ItemInfoState => state,
  (state: ItemInfoState): boolean => {
    return isStateComplite(state);
  }
);
const isPhotoCompliteSelector = createSelector(
  (state: ItemInfoState): ItemInfoState => state,
  (state: ItemInfoState): boolean => {
    return isPhotoComplite(state);
  }
);
const isExplanCompliteSelector = createSelector(
  (state: ItemInfoState): ItemInfoState => state,
  (state: ItemInfoState): boolean => {
    return isExplanComplite(state);
  }
);
const isTypeCompliteSelector = createSelector(
  (state: ItemInfoState): ItemInfoState => state,
  (state: ItemInfoState): boolean => {
    return isTypeComplite(state);
  }
);
const isPriceCompliteSelector = createSelector(
  (state: ItemInfoState): ItemInfoState => state,
  (state: ItemInfoState): boolean => {
    return isPriceComplite(state);
  }
);
const isTradeTypeCompliteSelector = createSelector(
  (state: ItemInfoState): ItemInfoState => state,
  (state: ItemInfoState): boolean => {
    return isTradeTypeComplite(state);
  }
);

export {
  isNameCompliteSelector,
  isCategoryCompliteSelector,
  isStateCompliteSelector,
  isPhotoCompliteSelector,
  isExplanCompliteSelector,
  isTypeCompliteSelector,
  isPriceCompliteSelector,
  isTradeTypeCompliteSelector,
};

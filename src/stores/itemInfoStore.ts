import create from 'zustand'

interface ItemInfoState {
  name: string;
  category: any;
  state: any;
  photo: any;
  explan: any;
  type: any;
  price: number;
  tradeType: any;


  setName: (name: string): void => {
  set({name});
},
setCategory: (category: any): void => {
  set({category});
},
    setState: (state: any): void => {
  set({state});
},
    setPhoto: (photo: any): void => {
  set({photo})
},
    setExplan: (explan: any): void => {
  set({explan})
},
    setType: (type: any): void => {
  set({type})
},
    setPrice: (price: number): void => {
  set({price})
},
    setTradeType: (tradeType: any): void => {
  set({tradeType})
}

  isNameComplite: () => boolean,
  isCategoryComplite: () => boolean,
  isStateComplite: () => boolean,
  isPhotoComplite: () => boolean,
  isExplanComplite: () => boolean,
  isTypeComplite: () => boolean,
  isPriceComplite: () => boolean,
  isTradeTypeComplite: () => boolean,
}

const state = {
  name: '',
  category: '',
  state: '',
  photo: '',
  explan: '',
  type: '',
  price: 10,
  tradeType: '',
}

const action = (set) => ({
  setName: (name: string): void => {
    set({name});
  },
  setCategory: (category: any): void => {
    set({category});
  },
  setState: (state: any): void => {
    set({state});
  },
  setPhoto: (photo: any): void => {
    set({photo})
  },
  setExplan: (explan: any): void => {
    set({explan})
  },
  setType: (type: any): void => {
    set({type})
  },
  setPrice: (price: number): void => {
    set({price})
  },
  setTradeType: (tradeType: any): void => {
    set({tradeType})
  }
});

const getter = (get) => ({
  isNameComplite: (): boolean => {
    return !!get().name;
  },
  isCategoryComplite: (): boolean => {
    return get().isNameComplite() && !!get().category;
  },
  isStateComplite: (): boolean => {
    return get().isCategoryComplite() && !!get().state;
  },
  isPhotoComplite: (): boolean => {
    return get().isStateComplite() && !!get().photo;
  },
  isExplanComplite: (): boolean => {
    return get().isPhotoComplite() && !!get().explan;
  },
  isTypeComplite: (): boolean => {
    return get().isExplanComplite() && !!get().type;
  },
  isPriceComplite: (): boolean => {
    return get().isTypeComplite() && !!get().price;
  },
  isTradeTypeComplite: (): boolean => {
    return get().isPriceComplite() && !!get().tradeType;
  },
})

export const useItemInfoStore = create<ItemInfoState>()((set, get, _state) => ({
  ...state,
  ...action(set),
  ...getter(get),
}))
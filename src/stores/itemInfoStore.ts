import create from 'zustand';
import {persist, devtools} from 'zustand/middleware';
import {Auction} from "@component/NewInformation/Auction.type";
import {Trade} from "@component/NewInformation/Trade.type";
import axios from 'axios';
import {StatusKey} from "@component/NewInformation/Status.type";

export type Coordinate = {
  latitude: number,
  longitude: number
}

interface ItemInfoState {
  name: string;
  category: any;
  state: StatusKey[];
  photo: any;
  explainNote: string;
  explainTag: string[];
  type: Auction | undefined;
  price: number;
  tradeType: Trade | undefined;
  place: {
    address: string,
    coordinate: Coordinate | undefined;
  }

  setName: (name: string) => void;
  setCategory: (category: any) => void;
  setState: (state: StatusKey[]) => void;
  setPhoto: (photo: any) => void;
  setExplain: (explainNote: string, explainTag: string[]) => void;
  setExplainTag: (explainTag: string[]) => void;
  setType: (type: Auction) => void;
  setPrice: (price: number) => void;
  setTradeType: (tradeType: Trade) => void;
  setPlace: (address: string, coordinate: Coordinate) => void;
  clear: () => void;

  createProduct: () => Promise<object>;

  getState: () => ItemInfoState;
  isNameComplete: () => boolean;
  isCategoryComplete: () => boolean;
  isStateComplete: () => boolean;
  isPhotoComplete: () => boolean;
  isExplainComplete: () => boolean;
  isTypeComplete: () => boolean;
  isPriceComplete: () => boolean;
  isTradeTypeComplete: () => boolean;
}

const state = {
  name: '',
  category: '',
  state: [] as StatusKey[],
  photo: '',
  explainNote: '',
  explainTag: [] as string[],
  type: undefined as Auction | undefined,
  price: 10,
  tradeType: undefined as Trade | undefined,
  place: {
    address: '',
    coordinate: undefined as Coordinate | undefined
  }
};

const action = (set: any, get: any) => ({
  setName: (name: string): void => {
    set({name});
  },
  setCategory: (category: any): void => {
    set({category});
  },
  setState: (state: StatusKey[]): void => {
    set({state});
  },
  setPhoto: (photo: any): void => {
    set({photo});
  },
  setExplain: (explainNote: string, explainTag: string[]): void => {
    set({explainNote, explainTag});
  },
  setExplainTag: (explainTag: string[]): void => {
    set({explainTag});
  },
  setType: (type: Auction): void => {
    set({type});
  },
  setPrice: (price: number): void => {
    set({price});
  },
  setTradeType: (tradeType: Trade): void => {
    set({tradeType});
  },
  setPlace: (address: string, coordinate: Coordinate): void => {
    const place = {address, coordinate}
    set({place});
  },
  clear: (): void => {
    set(state)
  },

  async createProduct(): Promise<object> {
    // axios
    console.log(get())
    return {}
  }
});

const getter = (get: any) => ({
  getState: (): ItemInfoState => {
    return get();
  },
  isNameComplete: (): boolean => {
    return !!get().name;
  },
  isCategoryComplete: (): boolean => {
    return get().isNameComplete() && !!get().category;
  },
  isStateComplete: (): boolean => {
    return get().isCategoryComplete() && !!get().state;
  },
  isPhotoComplete: (): boolean => {
    return get().isStateComplete() && !!get().photo;
  },
  isExplainComplete: (): boolean => {
    return get().isPhotoComplete() && (!!get().explainTag?.length || !!get().explainNote);
  },
  isTypeComplete: (): boolean => {
    return get().isExplainComplete() && !!get().type;
  },
  isPriceComplete: (): boolean => {
    return get().isTypeComplete() && !!get().price;
  },
  isTradeTypeComplete: (): boolean => {
    if (get().tradeType === 'Delivery') {
      return get().isPriceComplete() && !!get().tradeType;
    }
    return get().isPriceComplete()
        && !!get().tradeType
        && !!get().place.address
        && !!get().place.coordinate;
  },
});

const store = (set: any, get: any, _state: any) => ({
  ...state,
  ...action(set, get),
  ...getter(get),
})

export const useItemInfoStore = create<ItemInfoState>()(
    devtools(persist(store, {name: 'ItemInfoStore'}))
);
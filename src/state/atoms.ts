import { atom } from "recoil";

import { IProduct } from "../types/types";

export const cartItemsState = atom({
  key: "cartItemsState",
  default: [] as IProduct[],
});

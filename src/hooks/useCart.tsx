import { useRecoilState } from "recoil";

// notistick
import { useSnackbar } from "notistack";

// atoms
import { cartItemsState } from "../state/atoms";

// interfaces
import { IProduct } from "../types/types";

// hooks
import { useWebToken } from "./useWebToken";

// utils
import { errorToast, successToast } from "../utils/utils";

export const useCart = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [items, setItems] = useRecoilState<IProduct[]>(cartItemsState);
  const { handleGetAuthStatus } = useWebToken();

  const handleAddProduct = (product: IProduct): void => {
    const isAuthenticated: string | null = handleGetAuthStatus();
    if (!isAuthenticated) {
      enqueueSnackbar("User must be authenticated", errorToast);
      return;
    }
    const productExists: boolean = items.some((item) => product.id === item.id);
    if (productExists) {
      enqueueSnackbar("Product is already in cart", errorToast);
      return;
    }
    let totalItems: IProduct[] = [...items, product];
    setItems(totalItems);
    enqueueSnackbar("Product added to cart", successToast);
  };

  const handleRemoveItem = (id: number): void => {
    const isAuthenticated: string | null = handleGetAuthStatus();
    if (!isAuthenticated) {
      enqueueSnackbar("User must be authenticated", errorToast);
      return;
    }
    const list: IProduct[] = items.filter((item) => item.id !== id);
    setItems(list);
    enqueueSnackbar("Product removed", errorToast);
  };

  return { items, handleAddProduct, handleRemoveItem };
};

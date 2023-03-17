import { useEffect, useState } from "react";

// services
import { getAllProducts } from "../services/products";

// inteface
import { IProduct } from "../types/types";

export const useProducts = () => {
  const [products, setProducts] = useState<IProduct[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const { data } = await getAllProducts();
      setProducts(data.products);
      setError(null);
    } catch (error) {
      setError("Error fetching products");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, error, isLoading };
};

import { useState, useEffect } from "react";

// services
import { getProductById } from "../services/products";

// interface
import { IProduct } from "../types/types";

export const useProductById = (id: string | undefined) => {
  const [product, setProduct] = useState<IProduct | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchProduct = async () => {
    setIsLoading(true);
    try {
      const { data } = await getProductById(id);
      setProduct(data);
      setError(null);
    } catch (error) {
      setError("Error fetching products");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return { product, isLoading, error };
};

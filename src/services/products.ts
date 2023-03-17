import { apiInstance } from "./api";

export const getAllProducts = (limit: number = 100) => {
  return apiInstance.get(`products?limit=${limit}`);
};

export const getProductById = (id: string | undefined) => {
  return apiInstance.get(`products/${id}`);
};

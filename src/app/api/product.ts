import { instance } from '.';
import type { Product } from '../models/product';

export const getProducts = async (): Promise<Product[]> => {
  try {
    const response = await instance.get('/products');

    if (response.data?.isSuccess && response.data.result) {
      return response.data.result.items;
    } else {
      throw new Error('Failed to fetch products');
    }
  } catch (error: any) {
    const errorMessage = error.response?.data?.message;
    throw new Error(errorMessage);
  }
};

import { instance } from '.';

export const login = async ({ email, password }: { email: string; password: string }) => {
  const body = { email, password };
  try {
    const response = await instance.post('/auth/login', body);
    return response.data;
  } catch (error: any) {
    const errorMessage = error.response?.data?.message;
    throw new Error(errorMessage);
  }
};

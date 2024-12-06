// import { instance } from '.';
// import type { Register } from '../models/register';

// export const register = async (payload: Register): Promise<APIResponse<{ userId?: string }>> => {
//   try {
//     const response = await instance.post('/auth/register', payload);
//     return new APIResponse(response.data.result, response.data.isSuccess, response.data.message);
//   } catch (error: any) {
//     const errorMessage = error.response?.data?.message || 'Đăng ký thất bại. Vui lòng thử lại.';
//     throw new Error(errorMessage);
//   }
// };

import { login } from "../api/auth";

export const Login = async (email: string, password: string) => {
  try {
    const data = await login({ email, password });
    return data.token; // Giả sử token là phần trả về từ API
  } catch (error) {
    throw new Error("Đăng nhập thất bại");
  }
};

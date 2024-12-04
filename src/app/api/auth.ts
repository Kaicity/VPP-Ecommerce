import { instance } from ".";

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const body = { email, password };
  try {
    const response = await instance.post("/auth/login", body);
    return response.data; // Giả sử API trả về thông tin người dùng và token
  } catch (error) {
    throw new Error("Đăng nhập thất bại");
  }
};

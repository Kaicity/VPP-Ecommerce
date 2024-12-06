export class Register {
  email: string;
  password: string;
  name: string;
  phone: string;

  constructor(email: string, password: string, name: string, phone: string) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.phone = phone;
  }
}

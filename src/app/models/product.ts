export class Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  stock: number;
  catalogId: number;
  isDeleted: boolean;
  catalogName: string;
  createDate: Date;
  updateDate: Date;

  constructor(
    id: number,
    name: string,
    price: number,
    description: string,
    imageUrl: string,
    stock: number,
    catalogId: number,
    isDeleted: boolean,
    catalogName: string,
    createDate: string,
    updateDate: string,
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
    this.stock = stock;
    this.catalogId = catalogId;
    this.isDeleted = isDeleted;
    this.catalogName = catalogName;
    this.createDate = new Date(createDate);
    this.updateDate = new Date(updateDate);
  }
}

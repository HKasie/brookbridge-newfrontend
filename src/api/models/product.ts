export interface CreateProductData {
  name: string;
  description: string;
  code: string;
  price: number;
  qty: number;
  veg: boolean;
}

export interface ProductData {
  id: number;
  name: string;
  description: string;
  code: string;
  price: number;
  qty: number;
  veg: boolean;
  dataAdded: string;
}

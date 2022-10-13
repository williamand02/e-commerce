export interface Product {
  id?: number | null | undefined;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail?: string;
  images?: [string];
}
export interface Products {
  limit: number;
  products: [Product];
  skip: number;
  total: number;
}

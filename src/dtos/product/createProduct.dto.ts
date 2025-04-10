export interface CreateProductDto {
  index: number;
  sku: string;
  name: string;
  brand: string;
  category: string;
  variant: string;
  price: number;
  quantity: number;
  couponCode: string;
  position: number;
  currencyCode: string;
}
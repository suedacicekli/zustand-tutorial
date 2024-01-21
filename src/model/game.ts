export interface Game {
  id: string;
  game: string;
  platforms: string[];
  price: number;
  newPrice: number;
  discount: string;
  realDiscount: number;
  type: string;
  mainImage: string;
  url: string;
}

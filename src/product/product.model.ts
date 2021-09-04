export class ProductModel {
  _id: string;
  image: string;
  title: string;
  price: number;
  prevPrice: number;
  credit: number;
  calculatedRating: number;
  description: string;
  advantages: string;
  disAdvantages: string;
  categorise: string[];
  tags: string;
  characteristics: {
  	[key: string]: string;
  };
}

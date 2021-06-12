export interface IProduct {
  slug: string;
  name: string;
  id: number;
  image: string;
  price: number;
  oldPrice: number;
}

export default class Product implements IProduct {
  public slug: string;
  public name: string;
  public id: number;
  public image: string;
  public price: number;
  public oldPrice: number;
  constructor({
    slug,
    name,
    id,
    image,
    price,
    oldPrice
  }: IProduct) {
    this.slug = slug
    this.name = name
    this.id = id
    this.image = image
    this.price = price
    this.oldPrice = oldPrice
  }
}

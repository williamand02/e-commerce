export default class Product {
  #id: number | null | undefined;
  #title: string;
  #description: string;
  #price: number;
  #discountPercentage: number;
  #rating: number;
  #stock: number;
  #brand: string;
  #category: string;

  constructor(
    id: number | null | undefined,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string
  ) {
    this.#id = id;
    this.#title = title;
    this.#description = description;
    this.#price = price;
    this.#discountPercentage = discountPercentage;
    this.#rating = rating;
    this.#stock = stock;
    this.#brand = brand;
    this.#category = category;
  }
  static empty() {
    return new Product(null, "", "", 0, 0, 0, 0, "", "");
  }
  get id() {
    return this.#id;
  }
  get title() {
    return this.#title;
  }
  get description() {
    return this.#description;
  }
  get price() {
    return this.#price;
  }
  get discountPercentage() {
    return this.#discountPercentage;
  }
  get rating() {
    return this.#rating;
  }
  get stock() {
    return this.#stock;
  }
  get brand() {
    return this.#brand;
  }
  get category() {
    return this.#category;
  }
}

"use strict";

class Dish {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getPrice() {
    let stringPrice = `£${this.price.toString()}`;
    return stringPrice;
  }
}

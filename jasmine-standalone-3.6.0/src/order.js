"use strict";

class Order {
  constructor(basket = []) {
    this.basket = basket;
  }

  addToOrder(dish) {
    this.basket.push(dish);
  }

  _totalPrice() {
    let total = 0;
    this.basket.forEach((dish) => {
      total += dish.price;
    });
    return `£${total}`;
  }
}

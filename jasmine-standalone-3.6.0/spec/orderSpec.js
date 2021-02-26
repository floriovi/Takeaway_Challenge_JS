"use strict";

describe("Order", () => {
  let order;

  let margherita = { item: "Margherita", price: 8.45 };
  let salsiccia = { item: "Salsiccia e Friarelli", price: 12.75 };
  let vitello = { item: "Vitello Milanese", price: 16.55 };

  beforeEach(() => {
    order = new Order();
  });

  it("contains an empty cart at the start", () => {
    expect(order.basket).toEqual([]);
  });

  it("can receive a dish", () => {
    order.addToOrder(margherita);
    expect(order.basket).toContain({
      item: "Margherita",
      price: 8.45,
    });
  });

  it("can receive multiple dishes", () => {
    order.addToOrder(margherita);
    order.addToOrder(salsiccia);
    order.addToOrder(vitello);
    expect(order.basket).toEqual([
      { item: "Margherita", price: 8.45 },
      { item: "Salsiccia e Friarelli", price: 12.75 },
      { item: "Vitello Milanese", price: 16.55 },
    ]);
  });

  it("can display an order", () => {
    order.addToOrder(margherita);
    order.addToOrder(salsiccia);
    expect(order.basket).toEqual([
      { item: "Margherita", price: 8.45 },
      { item: "Salsiccia e Friarelli", price: 12.75 },
    ]);
  });

  it("can calculate the total price of an order", () => {
    order.addToOrder(margherita);
    order.addToOrder(salsiccia);
    order.addToOrder(vitello);
    expect(order._totalPrice()).toEqual("£37.75");
  });
});

"use strict";

describe("Dish", () => {
  let dish;

  beforeEach(() => {
    dish = new Dish("Margherita", 8.45);
  });

  it("can list a dish name", () => {
    expect(dish.name).toBe("Margherita");
  });

  it("can list a dish price", () => {
    expect(dish.price).toBe(8.45);
  });

  describe("getPrice", () => {
    it("can convert the float price to a string", () => {
      expect(dish.getPrice()).toBe("£8.45");
    });
  });
});

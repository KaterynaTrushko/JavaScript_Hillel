//Option1

function Hamburger(option) {
  this.order = Array.of(option);
}

Hamburger.prototype.addTopping = function (argument) {
  this.addTop = Array.of(argument);
  this.order = this.order.concat(this.addTop);
  return this.order;
};

Hamburger.prototype.getPrice = function () {
  let arr = this.order;
  let sum = 0;
  this.order.forEach(function (obj) {
    sum += obj.price;
  });

  return sum;
};

Hamburger.prototype.getCallories = function () {
  let arr = this.order;
  let sum = 0;
  this.order.forEach(function (obj) {
    sum += obj.cal;
  });

  return sum;
};

Hamburger.SIZE_SMALL = {
  price: 50,
  cal: 20
};
Hamburger.SIZE_MEDIUM = {
  price: 75,
  cal: 30
};
Hamburger.SIZE_LARGE = {
  price: 100,
  cal: 40
};
Hamburger.TOPPING_MAYO = {
  price: 20,
  cal: 5
};
Hamburger.TOPPING_POTATO = {
  price: 15,
  cal: 10
};
Hamburger.TOPPING_CHEESE = {
  price: 10,
  cal: 20
};
Hamburger.TOPPING_SALAD = {
  price: 20,
  cal: 5
};
Hamburger.TOPPING_SPISE = {
  price: 15,
  cal: 0
};

const hamburger = new Hamburger(Hamburger.SIZE_SMALL);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);

console.log(hamburger.addTopping(Hamburger.TOPPING_POTATO));

console.log("Price with sauce: " + hamburger.getPrice() + " $");
console.log("Callories with sauce: " + hamburger.getCallories() + " cal");
console.log(hamburger);
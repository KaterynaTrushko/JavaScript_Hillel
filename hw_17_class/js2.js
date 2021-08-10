//Option1

class Hamburger {
  static SIZE_SMALL = {
    price: 50,
    cal: 20
  };
  static SIZE_MEDIUM = {
    price: 75,
    cal: 30
  };
  static SIZE_LARGE = {
    price: 100,
    cal: 40
  };
  static TOPPING_MAYO = {
    price: 20,
    cal: 5
  };
  static TOPPING_POTATO = {
    price: 15,
    cal: 10
  };
  static TOPPING_CHEESE = {
    price: 10,
    cal: 20
  };
  static TOPPING_SALAD = {
    price: 20,
    cal: 5
  };
  static TOPPING_SPISE = {
    price: 15,
    cal: 0
  };
  constructor(option) {
    this.order = Array.of(option)
  };

  addTopping = function(argument){
    this.addTop = Array.of(argument)
    this.order = this.order.concat(this.addTop);
    return this.order;
  
  };

  getCallories = function(){
    let arr = this.order;
    let sum = 0;
    this.order.forEach(function(obj){
      sum += obj.cal;
    });
     
     return sum;
  }

  getPrice = function(){
    let arr = this.order;
    let sum = 0;
    this.order.forEach(function(obj){
      sum += obj.price;
    });
  
   return sum;
  }

}


const hamburger = new Hamburger(Hamburger.SIZE_SMALL);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.TOPPING_POTATO);

console.log(hamburger.addTopping(Hamburger.TOPPING_POTATO));

console.log('Price with sauce: ' + hamburger.getPrice() + ' $');
console.log('Callories with sauce: ' + hamburger.getCallories() + " cal");
console.log(hamburger);
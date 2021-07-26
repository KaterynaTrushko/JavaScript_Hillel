/*const calc = createCalculator(10);

calc.sum(5); /// 15
calc.mult(10); // 150
calc.sub(40); // 110
calc.div(10); // 11
calc.set(100); // 100*/



function createCalculator(a) {

  return {
    sum: function (n) {
      a += n;
      return a;
    },
    mult: function (n) {
      a *= n;
      return a;
    },
    sub: function (n) {
      a -= n;
      return a;
    },
    div: function (n) {
      a = a / n;
      return a;
    },
    set: function (n){
      a = n;
      return a;
    }
  };
}

const calc = createCalculator(10);

console.log(calc.sum(5));
console.log(calc.mult(10));
console.log(calc.sub(40));
console.log(calc.div(10));
console.log(calc.set(100));*/


/*Задача: 
написать функцию которая создает 
функцию счетчик, с начальным значением 
счетчика (использовать замыкание)*/



function counter(){
  return function() {
    result = count++;
  }
}

let counter10 = counter(10);
counter10();



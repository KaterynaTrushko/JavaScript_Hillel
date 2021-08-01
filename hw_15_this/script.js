/*1) Дописать функцию, чтобы getFullName возвращала 
"Nikola Tesla" (т.н firstName и secondName через пробел)*/
const user = {
  firstName: 'Nickola',
  second: 'Tesla',
  getFullName: function() {
    return console.log(this.firstName + ' ' + this.second);
  }
}
user.getFullName();
/*2) вызвать функцию через call, с заданием в виде 
контекста другой обьект {firstName: "Steve", secondName: 
"Jobs"} */

let obj ={
  firstName: 'Steve',
  second: 'Jobs'
};

user.getFullName.call(obj);

/* вызвать функцию через apply, с заданием 
в виде контекста другой обьект {firstName: 
"Steve", secondName: "Wozniak "}*/

  obj = {
    firstName: 'Steve',
    second: 'Wozniak'
  };
  user.getFullName.apply(obj)

/*4) создать копию функции getFullName с помощью bind
и забайдить ее на обьект {firstName:
"Julia ", secondName: "Roberts"} */

    obj = {
    firstName: 'Julia',
    second: 'Roberts'
   }

   user.getFullName.bind(obj)();

/*5) создать функцию контруктор, которая будет создавать подобные обьекты.
Создать 3 примера разных обьектов с помощью этой фукнции контруктор.*/


function Castomer(name, telNam, email, region, v1, v2, v3,) {
  this.name = name;
  this.tel = telNam;
  this.email = email;
  this.region = region;
  this.lastPurchase = v1;
  this.previousPurchase = v2;
  this.currentPurchase = v3;
  this.averagePurchase = function (){
    result = (this.lastPurchase + this.previousPurchase + this.currentPurchase)/3;
    return result;
}
}

let castomer1 = new Castomer('Nick', 0676334561, 'nick@gmail.com', 'Dniro', 200, 300, 400);
console.log(castomer1);
console.log(castomer1.averagePurchase());

let castomer2 = new Castomer('Rick', 0676334562, 'Rick@gmail.com', 'Odessa', 600, 100, 500);
console.log(castomer2);
console.log(castomer2.averagePurchase());

let castomer3 = new Castomer('Stiv', 0676334563, 'stiv@gmail.com', 'Kiev', 900, 2000, 100);
console.log(castomer3);
console.log(castomer3.averagePurchase());

/*Задание 2:
const calc = new Calculator(10);
calc.sum(5); /// 15
calc.mult(10); // 150
calc.sub(40); // 110
calc.div(10); // 11
calc.set(100); //*/


function CreateCalculator(a) {

    this.sum = function (n) {
      a += n;
      return a;
    },
    this.mult = function (n) {
      a *= n;
      return a;
    },
    this.sub = function (n) {
      a -= n;
      return a;
    },
    this.div = function (n) {
      a = a / n;
      return a;
    },
    this.set = function (n){
      a = n;
      return a;
    }
}

let calc = new CreateCalculator(10);


console.log(calc.sum(5)); 
console.log(calc.mult(10)); 
console.log(calc.sub(40)); 
console.log(calc.div(10)); 
console.log(calc.set(100)); 

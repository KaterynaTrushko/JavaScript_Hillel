//Tasc_1
/*const personJohn = {
  name: "John",
  sayHello: function() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const sysAdmin = {
  name: "Bob",
  __proto__:personJohn
}

const clientNatalia = {
  name: "Natalia",
  __proto__:personJohn
}


console.log(clientNatalia.sayHello());
console.log(sysAdmin.sayHello());*/

//Tasc_2

function Person(name) {
  this.name = name;
  this.sayHello = function() {
  console.log(`Hello, I'm ${this.name}`);
   }
}

function Employee(name) {
 this.name = name;
}
Employee.prototype = new Person();

function Client(name) {
  this.name = name;
}
Client.prototype = new Person();


const personJohn = new Person("John");
const sysAdmin = new Employee("Bob");
const clientNatalia = new Client("Natalia");

console.log(personJohn.sayHello());
console.log(sysAdmin.sayHello());
console.log(clientNatalia.sayHello());


/*Задача3: Написать функцию конструктор Student, 
которую я смогу использовать вот так:
const students = [ 
  new Student('Student 1', [10,9,8,0,10]), // имя, оценки
  new Student('Student 12', [10,0,8,0,3,4])
 ];
У каждого студента должен быть метод
averageMark() - возвращает среднюю оценку*/

function Student(student, arr ) {
  this.NumStudent = student,
  this.mark = arr,
  this.averageMark = function(){
    let arr = this.mark;
    let a = arr.reduce(function(a, b) {
      return a + b;
    }, 0);
    let b = arr.length;
    let result = (a / b).toFixed(2);
    return result;
  }
}

const students = [ 
  new Student('Student 1', [10,9,8,0,10]), 
  new Student('Student 12', [10,0,8,0,3,4])
 ]

 console.log(students);
 console.log(students[0].averageMark());
 console.log(students[1].averageMark());



 
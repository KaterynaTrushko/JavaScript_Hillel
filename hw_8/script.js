/*Написать функцию которая будет делать полную (с учетом вложенностей) копию объекта.

Ожидается что использовать ее можно будет так:*/



const obj = {
  name: 'Alina',
  age: 23,
  adress: {
    country: 'UA',
    city: 'Kyiv'
  }
}

function copy(oldObj){
  let newObj = {};
  for (let key in oldObj){
    if ((typeof oldObj[key]) !== 'object') {
      newObj[key] = oldObj[key];
    } else {
      newObj[key] = copy(oldObj[key]);
    }
  }
  return newObj;
}

const objCopy = copy(obj);

obj.adress.country = 'Canada';
obj.adress.city = 'Toronto';

console.log(obj);
console.log(objCopy);




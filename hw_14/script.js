/*Difficulty:
Задача1:
Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями. 
Первым параметром функция принимает значение, которым заполнять массив, 
а вторым - сколько элементов должно быть в массиве. 
Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].*/

function arrayFill(value, num){
  let arr = [];
  for(let i = 0; i < num - 1; i++ ){
    arr[i] = value;
    arr.push(arr[i]);
  }
  return arr;
}

let myarr = arrayFill('x', 5);

/*Задача2:
Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. 
Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
Решить двумя способами: первый - с помощью циклов, второй - с помощью функций flat и reduce*/


let arr = [[1, 2, 3], [4, 5], [6]];
arr = arr.flat();
console.log(arr);
let totalSum = arr.reduce((a, b) => a += b );
console.log(totalSum);



let arr = [
  [1, 2, 3],
  [4, 5],
  [6]
];

function sumArr(){

let count = 0;
for(let i = 0; i < arr.length; i++) {
  for(let k = 0; k < arr[i].length; k++){
      count += arr[i][k];

  }
}
console.log(arr);
console.log(count);

}

sumArr(arr);

/*Задача3:

Решить стандартную задачу на создание счетчика через замыкание, 
но используя графический интерфейс. Интерфейс должен состоять как минимум из:
поле ввода (куда можем ввести начальное состояние счетчика)
кнопка создать счетчик, после ее нажатия - создается счетчик в памяти, 
и создается html элемент span (или див) под формой где отображается начальное значение, 
рядом с этим элементом находится кнопка Count
Пользователь может создать несколько счетчиков, 
при нажатии на кнопку Count этих счетчиков - должно изменяться значение 
только у соотвествующего счетчика и его поля вывода.

Грубый пример формы после нажатия кнопки Create counter:*/


const input = document.querySelector('.input');
const existingBlock = document.querySelector('form');
const btnCreateCount = document.querySelector('.btn');

function counterCreate(inputEl) {
  let num = + inputEl;
    return function (event) {
    event.preventDefault(event);
    num = num + 1;
    event.target.previousSibling.textContent = `Counter Value :  ${num}`;  
  };
}

function createBlock (event) {
  event.preventDefault(event);
  let div = document.createElement('div');
  div.className = 'block';
  existingBlock.after(div);
  let output = document.createElement('span');
  output.textContent = `Counter Value :  ${input.value}`;
  
  let button = document.createElement('button');
  button.className = 'btnCont';
  button.textContent = 'Next Value';
  div.append(output);
  div.append(button);
  const counter = counterCreate(input.value);
  button.onclick = counter;
  input.value = '';
  return div;
}

btnCreateCount.addEventListener('click', createBlock);

 /*В существующей HTML странице, необходимо дописать JS скрипт который будет решать несколько задач.
Задача 1: Найти дом узел в котором храниться год (2021) и поменять значение года на 2020. */



function taskOne() {
  const coll = document.querySelectorAll('#title', 'span');
  return coll.textContent = '2020';
}

console.log(taskOne());

//Задача 2: Найти дом узел (хтмл елемент) с аттрибутом my-attribute и удалить его (аттрибут из элемента).

function taskTwo(attribute) {
  let node = document.querySelector(attribute);
  node.removeAttribute(attribute);
  return console.log(node.innerHTML);
}

taskTwo("[my-attribute]");

//Задача 3: Ячейки, у которых есть аттрибут data-id подсветить зеленым цветом

function taskThree(attribute) {
  const nodes = document.querySelectorAll(attribute);
  for (let node of nodes){
  node.style.background = "lime";
  }
}

taskThree('[data-id]');

//Задача 4: Добавить строку в таблицу (в конец таблицы) с любыми значениями для Company, Contact и Revenue

function taskFour(company, contact, revenue) {
  const row = `
             <tr>
                <td>${company}</td>
                <td>${contact}</td>
               <td data-id="revenue-value">${revenue}</td>
             </tr>
             `;
  const nav =
    document.querySelector("table").lastElementChild.lastElementChild;

  nav.insertAdjacentHTML("beforebegin", row);
}

taskFour(["Software Development"], ["Trushko Kateryna"], ["10M"]);

//Задача 5: Удалить первую строку таблицы

function taskFive() {
  const row =
    document.querySelector("table").firstElementChild.firstElementChild
      .nextElementSibling;
  row.remove();
}

taskFive();



const elem1  = document.querySelector("span"),
      btn = document.getElementById('yearBtn');
btn.onclick = function(){
elem1.textContent = '2020';
}

function removeAttrBtn(){
  const elem2 = document.querySelector('[my-attribute]');
  elem2.removeAttribute('my-attribute');
}

function load(){

const btn2 = document.querySelector('#removeAttrBtn');
btn2.addEventListener('click',removeAttrBtn, false );


const btn3 = document.querySelector("#setGreenBtn");
btn3.addEventListener('click', function (e) {
  let elements = document.querySelectorAll("[data-id='revenue-value']");
  console.log(elements);
  for (let i = 0; i < elements.length; ++i ) {
    if (i == elements.length - 1) { 
      e.stopPropagation()
    } else {
      elements[i].style.background = 'rgb(53, 167, 110)'; }
   } 
},true);


const btn4 = document.querySelector("#addRowBtn");
btn4.addEventListener('click', function () {
  const table = document.querySelector('table');
  let tr = document.createElement('tr');
  tr.innerHTML = "<tr><td>1</td><td>2</td><td>3</td></tr>";
  table.lastElementChild.lastElementChild.insertAdjacentElement("beforebegin", tr);
  console.log(table.lastChild);
})

}


const btn5 = document.querySelector("#removeSecondRowBtn");
btn5.onclick = function(){
   const row =
    document.querySelector("table").firstElementChild.firstElementChild.nextElementSibling;
  row.remove();
}
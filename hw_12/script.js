

const btn = document.getElementById('mybtn');

btn.addEventListener('click', addElement);

function addElement(e){
  e.preventDefault();
  let li = document.createElement('li');
  li.className = 'mytask';
  let ul = document.getElementById('myul');
  let inp = document.getElementById('myinp');
  li.textContent = inp.value;
  ul.append(li);
  li.style.background = "yellow";
  inp.value = '';
  }

  let elem = document.querySelector('.mytask');
  elem.addEventListener('click', (e) =>{
      elem.style.background = 'green';
    });
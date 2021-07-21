

const btn = document.getElementById('mybtn');

btn.addEventListener('click', function(event) {

    event.preventDefault(event);
    let li = document.createElement('li'),
        ul = document.getElementById('myul'),
        inp = document.getElementById('myinp'),
        list = document.querySelectorAll('li');

    li.textContent = inp.value;
    ul.append(li);
    li.style.background = "yellow";
    inp.value = '';
    
      for( let i = 0; i< list.length; i++){
        list[i].addEventListener('click', function(event){
          list[i].classList.toggle('green');
          list[i].remove();
        })
      }
    });





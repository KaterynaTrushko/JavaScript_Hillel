// document.addEventListener("DOMContentLoaded", Autor)

// function Autor() {
//   if (localStorage.getItem('login')) {
//     document.querySelector('.username_form').className = "hidden";
//     document.querySelector('.welcome').textContent = `Welcome, ${localStorage.getItem('login')}!`;
//   } else {
//     document.querySelector('.welcome').className = "hidden";
//     document.querySelector('.username_form').removeAttribute('hidden');

//     document.querySelector('button').addEventListener('click', function () {

//       if (userName) {
//         let userName = document.querySelector('.userName').value;
//         localStorage.setItem('login', userName);
//         userName.value = "";
//         document.querySelector('.welcome').removeAttribute('hidden');
//         document.querySelector('.welcome').textContent = `Welcome, ${localStorage.getItem('login')}!`;
//         document.querySelector('.username_form').className = "hidden";
//       } else {
//         document.querySelector('.username_form').className = "hidden";
//         document.querySelector('.welcome').className = "hidden";
//         let error = document.createElement('p');
//         error.textContent = "Error! Try more!"
//         document.querySelector('body').append(error);
//       }

//     })
//   }
// }


function addLocalSt() {
  let valueUser = document.querySelector('.userName').value;
  if (valueUser) {
    localStorage.setItem('name', valueUser);
    document.querySelector('.username_form').className = 'hidden';
    document.querySelector('.welcome').textContent = 'Welcome, ' + valueUser + '!';
  } else {
    alert('Input Username!');
  }
}

const btn = document.querySelector('button');
btn.addEventListener('click', addLocalSt);

window.onload = function () {
  if (localStorage.getItem('name')) {
    let valueUser = localStorage.getItem('name');
    console.log(valueUser);
    document.querySelector('.welcome').textContent = 'Welcome, ' + valueUser + '!';
    document.querySelector('.username_form').className = 'hidden';
  } else {
    btn.addEventListener('click', addLocalSt());
  }
}
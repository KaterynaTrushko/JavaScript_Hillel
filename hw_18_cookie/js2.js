
function getCookies(str){
let arr = str.split(';');
let cookeiObj={};
arr.forEach(element => {
  let value = element.split("=");
  cookeiObj[value[0]] = value[1];
  });
return cookeiObj;
}

function addCookies(){
  let valueUser = document.querySelector('.userName').value;
  document.cookie = 'name=' + valueUser;
  document.querySelector('.userName').value = '';
  document.querySelector('.username_form').className = 'hidden';
  document.querySelector('.welcome').textContent ='Welcome,' + valueUser + '!';
}

window.onload = function() {
  let cookies = document.cookie;
  if(cookies.includes('name')){
    let cookiesObj = getCookies(cookies);
    console.log(cookiesObj);
    let valueUser = cookiesObj[1];
    document.querySelector('.welcome').textContent ='Welcome, ' + valueUser + '!';
    document.querySelector('.username_form').className = 'hidden';
  } else {
    let btn = document.querySelector('button');
    btn.addEventListener('click', addCookies())
  }
}






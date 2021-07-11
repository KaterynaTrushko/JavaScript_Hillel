let coll = document.querySelectorAll('[data-id="revenue-value"]');
console.log(coll);
let accum = 0;
for (let i = 1; i < coll.length; i++) {
  accum += getNum(coll[i].textContent);
}

console.log(accum);

function getNum (str) {
  str = str.trim();
  if (str[str.length -1] === 'M') {
    return parseInt(str) * 1000000;
  } else if(str[str.length -1] === 'B'){
    return  parseInt(str) * 1000000000;
  } else {
    return  parseInt(str);
  }
}

document.querySelector('#summ').innerHTML;
document.querySelector('#summ').innerHTML = "TOTAL:" + " " + accum/1000000 + "B";



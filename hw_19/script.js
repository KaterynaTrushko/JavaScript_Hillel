

function getClock() {

  let clock = document.getElementById('clock');
  let color = document.getElementById('color');
  let dateString = document.getElementById('dateString');


  let time = new Date();
  let h = time.getHours().toString();
  let m = time.getMinutes().toString();
  let s = time.getSeconds().toString();

  let d = time.getDate();
  let mon = time.getMonth() + 1;
  let y = time.getFullYear();

  if (h.length < 2) {
    h = "0" + h;
  }

  if (m.length < 2) {
    m = "0" + m;
  }

  if (s.length < 2) {
    s = "0" + s;
  }

  if (d.length < 2) {
    d = "0" + d; 
  }

  if (mon < 10) {
    mon = "0" + mon;
  }

  let String = d + '.' +  mon + '.' + y;
  let clockString = h +':' + m + ':' + s;
  let colorString = '#' + h + m + s;
  document.body.style.background = colorString;
  color.style.visibility = "hidden";

  clock.textContent = clockString;
  color.textContent = colorString;
  dateString.textContent = String;

}

getClock();
setInterval(getClock, 1000);

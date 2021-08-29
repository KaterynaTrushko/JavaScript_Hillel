
let but = document.querySelector(".but");
but.addEventListener('click', getWheathe);

function getWheathe(event) {
  event.preventDefault();
  let name = inp.value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${name}&appid=f8316557c8480e21bdfdd42d2a2d6af8`)
    .then(resp => resp.json())
    .then(function (date) {
      console.log(date);
      let deg = document.querySelector(".degry");
      deg.textContent = Math.round(convertKelvinToCelsius(date.main.temp));
      outName.textContent = date.name;
    })
 }

function convertKelvinToCelsius(kelv){
  let cel = kelv - 273;
  return cel;
} 
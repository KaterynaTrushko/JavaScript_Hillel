const TILES = [];
function initGame() {
  const tilesContainer = document.getElementById("tiles");
  tilesContainer.innerHTML = "";
  tilesContainer.addEventListener("click", onTileClick);
  TILES.length = 0; // clear all tiles in the array
  let tileIndex = 0;
  const randomIndex = getRandomIndex();
  for (let i = 0; i < 4; i++) {
    TILES[i] = [];
    for (let j = 0; j < 4; j++) {
      tileIndex = randomIndex();
      TILES[i].push(createTileEl(tileIndex));
    }
  }
  if (isGameValid(TILES)){
    renderTiles();
  } else {
    initGame()
  }
  document.querySelector('.number').innerHTML = 0;
}


function getRandomIndex() {
  let availableIdx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  return function () {
    const randomIndex = Math.floor(Math.random() * availableIdx.length);
    const val = availableIdx[randomIndex];
    availableIdx = availableIdx.filter((el) => el !== val);
    return val;
  };
}

function createTileEl(text) {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  tile.textContent = text;
  return tile;
}

function renderTiles() {
  const tilesContainer = document.getElementById("tiles");
  tilesContainer.innerHTML = "";
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      tilesContainer.append(TILES[i][j]);
    }
  }
}

function onTileClick(e) {
  if (e.target.classList.contains("tile")) {
    const id = +e.target.textContent;
    if (id) {
      swapTiles(id);
    }
  }
  renderTiles();
}

function swapTiles(id) {
  const [tileX, tileY] = findTileCoordById(id);
  const [emptyX, emptyY] = findEmptyTileCoords();

  // are they neibors
  if (
    (tileX === emptyX && Math.abs(tileY - emptyY) === 1) ||
    (tileY === emptyY && Math.abs(tileX - emptyX) === 1)
  ) {
    const temp = TILES[tileX][tileY];
    TILES[tileX][tileY] = TILES[emptyX][emptyY];
    TILES[emptyX][emptyY] = temp;
  }
  if(checkIfWin()){
    alert("You are winner!")
  }
  counter();
}

function findEmptyTileCoords() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (TILES[i][j].textContent === "") {
        return [i, j];
      }
    }
  }
}

function findTileCoordById(id) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (TILES[i][j].textContent == id) {
        return [i, j];
      }
    }
  }
}

function counter (){
  let num = document.querySelector('.number').innerHTML;
  num = +num + 1;
  document.querySelector('.number').innerHTML = num;
  
}

function checkIfWin(){
  const values = TILES.flat().map((el) => Number(el.textContent));
  if(values[values.length - 1] !== 0) {
    return false;
  }
return values
  .slice(0, values.length - 1)
  .sort((a, b) => a -b)
  .every((el, i, a) => el === values[i]);
}

function isGameValid(tiles){
  let count = 0;
  const values = tiles.flat().map((el) => Number(el.textContent));
  for (let i = 0; i < values.length; i++) {
    for (let j = i + 1; j < values.length; j++) {
      if (values[i] > values[j]) count++;
    }
  }
  return count % 2;
}






// const field = document.querySelector('.field');
// const cellSize = 100;
// const empty = {
//   top: 0,
//   left: 0
// };

// const cells = [];
// cells.push(empty);


// function move(index) {
//   const cell = cells[index];
//   const leftDiff = Math.abs(empty.left - cell.left);
//   const topDiff = Math.abs(empty.top - cell.top);

//   if (leftDiff + topDiff > 1) {
//     return;
//   }

//   cell.element.style.left = `${empty.left * cellSize}px`;
//   cell.element.style.top = `${empty.top * cellSize}px`;

//   const emtyLeft = empty.left;
//   const emtyTop = empty.top;

//   empty.left = cell.left;
//   empty.top = cell.top;

//   cell.left = emtyLeft;
//   cell.top = emtyTop;
// }


// const numbers = [...Array(15).keys()].sort(() => Math.random() - 0.5);

// for (let i = 1; i <= 15; i++) {
//   const cell = document.createElement("div");
//   cell.className = "cell";
//   cell.innerHTML = numbers[i - 1] + 1;

//   const left = i % 4;
//   const top = (i - left) / 4;

//   cells.push({
//     left: left,
//     top: top,
//     element: cell
//   })

//   cell.style.left = `${left * cellSize}px`
//   cell.style.top = `${top * cellSize}px`

//   field.append(cell);


//   cell.addEventListener('click', () => {
//     move(i);
//     let click = 0;
//     function onClick() {
//       click += 1;
//       document.querySelector('span').innerHTML= click;
//     }

//   })
// }
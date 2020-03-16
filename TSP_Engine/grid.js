console.log("det funkar");

var table = document.querySelector("table");

const width = 20; 
const height = 30;

class node {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const createGrid = () => {
  for (i = 0; i < width; i++) {
    var tr = document.createElement("tr");
    for (j = 0; j < height; j++) {
      var th = document.createElement("th");
      th.appendChild(document.createTextNode("+"));
      tr.appendChild(th);
    }
    table.appendChild(tr);
  }
}

const addNode = (event) => {
    var marked = event.target;
    var cell = marked.cellIndex;
    var row = marked.parentElement.rowIndex;
    marked.innerHTML = "\u2B24"
    marked.className = "marked"
    cities.push(new node(cell, row));

    console.log("cell is: " + cell);
    console.log("row is: " + row);
}

const nodeListen = () => {
    var cells = document.querySelectorAll("th");
    Array.from(cells).forEach(function(cell) { cell.addEventListener("click", addNode);});
}

var cities = [];
createGrid();
nodeListen();


var n = document.querySelectorAll("th");
var n1 = n[1];

var rect = n1.getBoundingClientRect();
var y1 = (rect.bottom + rect.top) / 2;
var x1 = (rect.right + rect.left) / 2;

console.log(y1, x1)




// 2. Make a distance matrix
// 2.1 (optional or later) MAKE ORDERED ADJENCENCY LISTS FOR EACH CITY
// 3. make a initial tour (gready or random)
// 4. Make tour improvement algorithms for example:
// 4.1 localRandom
// 4.2 Two opt
// 4.3 Two point Five opt
// 5. find a way to print the results


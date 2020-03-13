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

function createGrid() {
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

function nodeListen(){
    var cells = document.querySelectorAll("th");
    Array.from(cells).forEach(function(cell) {
      cell.addEventListener("click", function(event) {
        var marked = event.target;
        var cell = marked.cellIndex;
        var row = marked.parentElement.rowIndex;
        marked.innerHTML = "\u2B24"
        marked.className = "marked"
        cities.push(new node(cell, row));
    
        console.log("cell is: " + cell);
        console.log("row is: " + row);
      });
    });
}




var cities = [];
createGrid();
nodeListen();



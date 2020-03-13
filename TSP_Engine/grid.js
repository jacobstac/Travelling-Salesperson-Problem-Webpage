console.log("det funkar");


var table = document.querySelector("table");

const width = 20;
const height = 10;



function createGrid() {
    for(i = 0; i < width; i++) {
        var tr = document.createElement("tr");
        for(j = 0; j < height; j++) {
            var th = document.createElement("th");
            th.appendChild(document.createTextNode("+"));
            tr.appendChild(th);
        }
        table.appendChild(tr);
    }
}




createGrid();
/*
Initial plan: 
1. Make this file read the dataset
2. Make a distance matrix
2.1 (optional or later) MAKE ORDERED ADJENCENCY LISTS FOR EACH CITY
3. make a initial tour (gready or random)
4. Make tour improvement algorithms for example:
4.1 localRandom
4.2 Two opt
4.3 Two point Five opt
5. find a way to print the results

*/

var button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function(){
    console.log("clickeruu");
})

var add = document.getElementById("add");
var input = document.getElementById("uinput");
var ul = document.getElementById("ul2")


add.addEventListener("click", function() {
    if(input.value.length > 0) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value =""
    }
})
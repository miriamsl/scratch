var table = document.getElementById("board");
var bokstaver = ["", "A","B","C","D"];

var brett = new Array(10);

for (var i = 0; i < 10; i++) {
  brett[i] = new Array(4);
}

for (i = 0; i < 10; i++){
    for(j = 0; j < 4; j++){
        brett[i][j] = 1;
    }
}

for(i = 0; i<10; i++){

    brett[i][getRandomArbitrary(0,3)] = 3
}

console.log(brett)
function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

for (i = 0; i <= 10; i++){
    row = table.insertRow(i);
    for(j = 0; j <= 4; j++){
        var cell = row.insertCell(j);
        if(i===0){
        	cell.innerHTML = bokstaver[j];
        }
        else if(j===0){
        	cell.innerHTML = i;
        } else {
        	var celle = document.createElement("div");
			celle.classList.add("ikkeskrapet");
        	cell.appendChild(celle);

        }
    }
}
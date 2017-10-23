var table = document.getElementById("board");
var bokstaver = ["", "A","B","C","D"];

var brett = new Array(10);

for (var i = 0; i < 10; i++) {
  brett[i] = new Array(3);
}

for (i = 0; i < 10; i++){
    for(j = 0; j < 4; j++){
        brett[i][j] = 1;
    }
}

for(i = 0; i<10; i++){

    brett[i][getRandomArbitrary(1,3)] = 3
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
        	var celle = document.createElement("div");
        	var tekst = document.createTextNode(i + ".");
        	celle.classList.add("tekst");
        	celle.appendChild(tekst);
        	cell.appendChild(celle);

        } else {
        	var celle = document.createElement("button");
        	var num1 = i;
        	var num2 = j;
        	iden = num1.toString() + num2.toString();
        	celle.id = iden;
        	celle.setAttribute("onclick","scratch(this.id)");
			celle.classList.add("ikkeskrapet");
        	cell.appendChild(celle);

        }
    }
}

function scratch(id){
    console.log(id)
    document.getElementById(id).classList.remove("ikkeskrapet")
    var y = "";
    var x = "";
    if(id.length != 2){
        y = id.substring(0,2);
        x = id.substring(2,3);
    } else {
        var y = id.substring(0,1);
        var x = id.substring(1,2);
    }
    var xint = parseInt(x);
    var yint = parseInt(y);
    if(brett[y-1][x-1] === 3){
        document.getElementById(id).innerHTML = "*"
        document.getElementById(id).classList.add("funnet")    
    }
   
    document.getElementById(id).classList.add("skrapet")
}
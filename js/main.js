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
    var x = id.substring(0,1);
    var y = id.substring(1,2);
    var xint = parseInt(x);
    var yint = parseInt(y);
    if(brett[x][y] === 3){
        document.getElementById(id).innerHTML = "*"
        document.getElementById(id).classList.add("funnet")    
    }
   
    document.getElementById(id).classList.add("skrapet")
}
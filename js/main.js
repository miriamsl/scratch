//Deklareringer
var table = document.getElementById("board");
var bokstaver = ["", "A","B","C","D"];
var count = 0;
var brett = new Array(10);

//Opprett fasitbrettet
skapBrett();

//Opprett UI brettet
skapUI();

function skapBrett(){

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
}


function skapUI(){

    var celle;
    var tekst;

    for (i = 0; i <= 10; i++){
        row = table.insertRow(i);
        for(j = 0; j <= 4; j++){
            var cell = row.insertCell(j);
            if(i===0){
                celle = document.createElement("div");
                tekst = document.createTextNode(bokstaver[j]);
                celle.classList.add("tekst");
                celle.appendChild(tekst);
                cell.appendChild(celle);
            }
            else if(j===0){
                celle = document.createElement("div");
                tekst = document.createTextNode(i + ".");
                celle.classList.add("tekst");
                celle.appendChild(tekst);
                cell.appendChild(celle);

            } else {
                celle = document.createElement("button");
                iden = i.toString() + j.toString();
                celle.id = iden;
                celle.setAttribute("onclick","scratch(this.id)");
                celle.classList.add("ikkeskrapet");
                cell.appendChild(celle);
            }
        }
    }
}

function scratch(id){
    document.getElementById(id).classList.remove("ikkeskrapet")
    var y = "";
    var x = "";
    if(id.length != 2){
        y = id.substring(0,2);
        x = id.substring(2,3);
    } else {
        y = id.substring(0,1);
        x = id.substring(1,2);
    }
    var xint = parseInt(x);
    var yint = parseInt(y);
    if(brett[y-1][x-1] === 3){
        document.getElementById(id).innerHTML = "*"
        document.getElementById(id).classList.add("funnet")    
    }

    
    count += 1;
    document.getElementById(id).classList.add("skrapet");
    document.getElementById("score").innerHTML = "Score: " + count;
    document.getElementById(id).disabled = true;
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function reload(){
	window.location.reload(false);
}
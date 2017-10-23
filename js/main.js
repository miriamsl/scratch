var table = document.getElementById("board");
var bokstaver = ["", "A","B","C","D"];

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
        	cell.innerHTML = "yo";
        }
    }
}
let screen = document.getElementById("board");
let row;
let column;
let GRID_SIZE = 16;

/*for (let i = 0; i < GRID_SIZE; i++) {
    row = document.createElement("div");
    row.className = "flex-container";
    row.innerHTML = "";
    screen.appendChild(row);

    for (let j = 0; j < GRID_SIZE; j++) {
        column = document.createElement("div");
        column.className = "flex-boxes";
        column.classList.add = "rows";
        column.innerHTML = 'a';
        row.appendChild(column);
    }

}*/

for (i=0; i<GRID_SIZE; i++){
    row = document.createElement("div");
    row.className = 'rows';
    
    screen.appendChild(row);
    for (j=0; j<GRID_SIZE; j++) {
        column = document.createElement("div");
        column.className = 'columns';
        column.innerHTML = i+j;
        row.appendChild(column);
    }
}
    

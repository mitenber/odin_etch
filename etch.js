let screen = document.getElementById("board");
let button = document.querySelectorAll(".button")
let row;
let column;
let gridSize = 16;

for (i=0; i<gridSize; i++){
    row = document.createElement("div");
    row.className = 'columns';
    
    screen.appendChild(row);
    for (j=0; j<gridSize; j++) {
        column = document.createElement("div");
        column.className = 'items';
        column.innerHTML = (i+1) + (j*gridSize);
        row.appendChild(column);
    }
}
    
const boxes = document.querySelectorAll('.items')

boxes.forEach(column => {
    column.addEventListener('mouseover', () => {
        column.style.backgroundColor = 'red';
    });
});



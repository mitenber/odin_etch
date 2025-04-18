let screen = document.getElementById("board");
let button = document.querySelector(".button")
let row;
let column;
let gridSize = 16;

button.addEventListener('click', () => {
    console.log('Button clicked');
    gridSize = prompt('Enter number of squares per side (max 100)');
    if(gridSize > 100) {
        alert('Size cannot be more than 100');
        gridSize = 16
    }
    clearGrid();
    createGrid(gridSize);
})

function createGrid(size){
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
}

function clearGrid() {
    // Remove all child elements from the board
    while (screen.firstChild) {
        screen.removeChild(screen.firstChild);
    }
}

createGrid(gridSize)

let etchContainer = document.getElementById("etchContainer");
let etchSquareListener = document.getElementsByClassName('etchSquare')


//gridSize will be the variable that will change depending on user input. On window load, it becomes 16
let gridSize;







//this will start with a 16x16 grid on first open
function createGrid(totalGridSize){
    gridSize = totalGridSize;

    etchContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    etchContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    
    for (let i = 0; i < gridSize * gridSize; i++){
        let etchSquareDiv = document.createElement("div");
        etchSquareDiv.className = 'etchSquare';
        etchContainer.appendChild(etchSquareDiv);
    }    
}

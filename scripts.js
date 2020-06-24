let etchContainer = document.getElementById("etchContainer");
let clearButton = document.getElementById("clearBtn");
let resizeButton = document.getElementById("resizeBtn");

//gridSize will be the variable that will change depending on user input. On window load, it becomes 16
let gridSize = 16;


clearButton.onclick = function(){
    shakeScreen();
}

//this will start with a 16x16 grid on first open
function createGrid(){

    etchContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    etchContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    
    for (let i = 0; i < gridSize * gridSize; i++){
        let etchSquareDiv = document.createElement("div");
        etchSquareDiv.className = 'etchSquare';

        //add listener to change the color, for the sketching purposes
        etchSquareDiv.addEventListener("mouseenter", function(){
            etchSquareDiv.style.backgroundColor = 'black';
        })

        etchContainer.appendChild(etchSquareDiv);
    }    
}

function clearScreen(){
    while (etchContainer.hasChildNodes()){
        etchContainer.removeChild(etchContainer.firstChild);
    }
    createGrid(gridSize);
}

function shakeScreen(){
    etchContainer.classList.add('apply-shake');

    etchContainer.addEventListener("animationend", function(){
        etchContainer.classList.remove('apply-shake');
        clearScreen();
    })
}

resizeButton.onclick = function(){
    while (true){
        gridSize = prompt("What is the size of your square?");

        if (isNaN(gridSize)){
            alert("Please enter a number");
        }
        else if (gridSize < 0){
            alert("Please Enter a positive integer");
        }
        else{
            gridSize = Math.floor(gridSize);
            break;
        }
        continue;
    }
    clearScreen();
}

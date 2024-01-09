const body = document.querySelector("body");
const container = document.querySelector(".container");
const button = document.querySelector("#setTiles");

let answer = 16;

function creationDiv() {
    const newDiv = document.createElement("div");
    newDiv.className = "div";
    newDiv.addEventListener("mouseenter", changeColor);
    newDiv.style.width = (600 / answer) + "px";
    container.appendChild(newDiv);
}

function initialGrid() {
    for (let i = 0; i < (answer * answer); i++) {
        creationDiv(); 
    }
}
initialGrid();

function changeColor() {
    this.style.backgroundColor = "black";
}

button.addEventListener('click', askTiles);

function askTiles() {
    answer = prompt("How big do you want your grid to be? (1-100)");
    if (answer > 100 || /^[^0-9]/.test(answer)) {
        askTiles()
    } else {container.innerHTML = "";
    newGrid();
        
    }
}


function newGrid() {
    for (let i = 0; i < (answer * answer); i++) {
        creationDiv();
        
    }
}
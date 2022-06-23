let nbrOfCol = 9;
let nbrOfRow = 9;
const container = document.getElementById('container');
const resizeButton = document.getElementById('resizeButton');
const refreshButton = document.getElementById('refreshButton');

resizeButton.addEventListener('click', resize);
refreshButton.addEventListener('click', refresh);
drawGrid();

function drawGrid() {
    for (let iRow = 1; iRow <= nbrOfRow; iRow++) {
        let row = document.createElement('div')
        row.classList.add('row');

        for (let iCol = 1; iCol <= nbrOfCol; iCol++) {
            let col = document.createElement('div');
            col.classList.add('col');
            col.onmouseover = hovered;
            row.appendChild(col);
        }

        container.appendChild(row);
    }
}

function resize() {
    let input = 0;
    
    while (input < 9 || input > 250 || Number.isNaN(parseInt(input)) == true) {
        input = prompt('Enter the new size (a number between 9 and 250)');
        if (input == null) {
            break;
        }
    }
        
    if (input != null) {
        nbrOfCol = input;
        nbrOfRow = input;
        clearGrid();
        drawGrid();
    }
}

function clearGrid() {
    let nbrOfChild = container.childElementCount;
    for (let i = 1; i <= nbrOfChild; i++) {
        let child = container.firstChild;
        container.removeChild(child);
    }
}

function hovered() {
    this.classList.add('hovered');
}

function refresh() {
    let refreshList = Array.from(document.getElementsByClassName('hovered'));
    refreshList.forEach(function(element) {
        element.classList.remove('hovered');
    });
}

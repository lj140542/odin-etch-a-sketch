const nbrOfCol = 16;
const nbrOfRow = 16;
const container = document.getElementById('container');

for(let iRow = 1; iRow <= nbrOfRow; iRow++) {
    let row = document.createElement('div')
    row.classList.add('row');

    for(let iCol = 1; iCol <= nbrOfCol; iCol++) {
        let col = document.createElement('div');
        col.classList.add('col');
        col.onmouseover = hovered;
        row.appendChild(col);
    }

    container.appendChild(row);
}

function hovered() {
    this.classList.add('hovered');
}

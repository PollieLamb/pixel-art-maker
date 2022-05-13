/**
*  function makeGrid()
  *makeGrid takes the height & width input from the user and dynamically generate
  *using the inserRow & insertCell methods to add rows and cells to the table.
  */
function makeGrid() {
    // Your code goes here!
    // selecting inputs
    const gridHeight = document.getElementById('inputHeight').value;
    const gridWidth = document.getElementById('inputWidth').value;
    const pixelTable = document.getElementById('pixelCanvas');
    pixelTable.innerHTML = "";//clears the colors when function is called
    for (let rowHeight = 0; rowHeight < gridHeight; rowHeight++) {
        const gridRow = pixelTable.insertRow(-1); //uses the insertRow & insertCell methods to make a grid
        for (let rowWidth = 0; rowWidth < gridWidth; rowWidth++) {
            const gridCell = gridRow.insertCell(-1);
            gridCell.addEventListener('mousedown', function () {
                const cellColor = document.getElementById('colorPicker').value;
                gridCell.style.backgroundColor = cellColor; //for coloring each cell
            })
        }
    }

}
//calls makeGrid()
const submit = document.getElementById('sizePicker');
submit.addEventListener('submit', function (event) { //event for the submit button
    event.preventDefault();
    makeGrid();
});



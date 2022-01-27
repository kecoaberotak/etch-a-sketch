const grid = document.querySelector('.grid');
let squareSize = 16;

createGrid(squareSize);

function createDiv(divSize) {
	const div = document.createElement('div');
	div.classList.add('box');
	div.style.width = `${divSize}px`;
	div.style.height = `${divSize}px`;
}


function createGrid(gridSize) {
	for(let i = 0; i < gridSize; i++){
		for(let j = 0; j < gridSize; j++){
			grid.appendChild(createDiv(grid.client / gridSize));
		}
	}
}
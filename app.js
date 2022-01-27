const grid = document.querySelector('.grid');
let squareSize = 8;

createGrid(squareSize);

// membuat grid (div)
function createDiv(divSize){
	const div = document.createElement('div');
	div.classList.add('box');
	div.style.width = `${divSize}px`;
	div.style.height = `${divSize}px`;

	return div;
}

// membuat grid dan menyimpannya kedalam class grid
function createGrid(gridSize){
	for (let i = 0; i < gridSize; i++){
		for (let j = 0; j < gridSize; j++){
			grid.appendChild(createDiv(grid.clientWidth / gridSize));
		}
	}
}

// Used event delegation to target children of the grid
grid.addEventListener('mouseover', function (e) {
  // Add the "active" class to only divs with a "box" class
  if (e.target.matches('.box')) {
    e.target.classList.add('active');
  }
});

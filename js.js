var symbol = 'X';
var cells = document.getElementsByClassName('cell');
var radio = document.getElementsByName('gamer');
var count = 0;

arrOfX = new Array(9).fill(0);
arrOfO = new Array(9).fill(0);

function choiseDone() {
	for (let i = 0; i < 2; i++) {
		radio[i].disabled = true;
		if (radio[i].checked) {
			symbol = radio[i].getAttribute('value');
		}
	}
	for (let i = 0; i < cells.length; i++) {
		cells[i].addEventListener('click',clickOnCell);
	}
}

function clickOnCell() {
	this.innerHTML = symbol;
	data = this.getAttribute('data-cell');
	var checkArr;

	if (symbol == 'X') {
		arrOfX[data] = 1;
		checkArr = arrOfX;
		symbol = 'O';
		var winner = 'X';
	} else {
		arrOfO[data] = 1;
		checkArr = arrOfO;
		symbol = 'X';
		var winner = 'O';
	}

	this.removeEventListener('click',clickOnCell);
	count++;

	if (count > 4) {
		if (checkWinner(checkArr)) {
			alert(winner + " win! Press the 'Reset' button to restart.");

			for (let i = 0; i < cells.length; i++) {
				cells[i].removeEventListener('click',clickOnCell);
			}
		}
	}
	if (count == 9)  {
		alert("Draw! Press the 'Reset' button to restart.");
	}
}

function checkWinner(checkMas) {
	for (let i = 0; i < 9; i+=3) {
		if (checkMas[i] && checkMas[i+1] && checkMas[i+2]) {
			return true;
		}
	}

	for (let i = 0; i < 3; i++) {
		if (checkMas[i] && checkMas[i+3] && checkMas[i+6])
			return true;
	}

	if (checkMas[4] && (checkMas[0] && checkMas[8] || checkMas[2] && checkMas[6])) {
		return true;
	}
	return false;
}


function resetGame() {
	for (let i = 0; i < cells.length; i++) {
		cells[i].innerHTML = '';
	}

	for (let i = 0; i < 2; i++) {
		radio[i].removeAttribute("disabled");
		radio[i].checked = false;
	}

arrOfX = new Array(9).fill(0);
arrOfO = new Array(9).fill(0);
count = 0;
}
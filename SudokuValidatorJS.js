//Sudoku Solution Validator

function validSolution(board) {
	var section1 = [];
	var section2 = [];
	var section3 = [];
	section1.push(
		board.map(function(row) {
			return row.slice(0, 3);
		})
	);
	section2.push(
		board.map(function(row) {
			return row.slice(3, 6);
		})
	);
	section3.push(
		board.map(function(row) {
			return row.slice(6, 9);
		})
	);
	var squareBooleans = [];

	for (var i = 0; i < 3; i++) {
		var step = 0;

		squareBooleans.push(
			section1[0][0 + step].reduce((a, b) => a + b) +
				section1[0][1 + step].reduce((a, b) => a + b) +
				section1[0][2 + step].reduce((a, b) => a + b) ==
				45
		);

		squareBooleans.push(
			section2[0][0 + step].reduce((a, b) => a + b) +
				section2[0][1 + step].reduce((a, b) => a + b) +
				section2[0][2 + step].reduce((a, b) => a + b) ==
				45
		);

		squareBooleans.push(
			section3[0][0 + step].reduce((a, b) => a + b) +
				section3[0][1 + step].reduce((a, b) => a + b) +
				section3[0][2 + step].reduce((a, b) => a + b) ==
				45
		);

		step += 3;
	}
	var checkHorizontal = board.map(function(row) {
		return row.every(num => row.indexOf(num) === row.lastIndexOf(num));
	});

	var checkVerticaly = board
		.map((row, i) => board.map(row => row[i]))
		.map(function(row) {
			return row.every(num => row.indexOf(num) === row.lastIndexOf(num));
		});

	return (
		checkHorizontal.every(Boolean) &&
		checkVerticaly.every(Boolean) &&
		squareBooleans.every(Boolean)
	);
}


validSolution([
	[5, 3, 4, 6, 7, 8, 9, 1, 2],
	[6, 7, 2, 1, 9, 5, 3, 4, 8],
	[1, 9, 8, 3, 4, 2, 5, 6, 7],
	[8, 5, 9, 7, 6, 1, 4, 2, 3],
	[4, 2, 6, 8, 5, 3, 7, 9, 1],
	[7, 1, 3, 9, 2, 4, 8, 5, 6],
	[9, 6, 1, 5, 3, 7, 2, 8, 4],
	[2, 8, 7, 4, 1, 9, 6, 3, 5],
	[3, 4, 5, 2, 8, 6, 1, 7, 9],
]);

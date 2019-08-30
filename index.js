const rule30 = {
  0: 0,
  1: 0,
  2: 0,
  3: 1,
  4: 1,
  5: 0,
  6: 1,
  7: 0
}

let board = [];
const totalRows = 10;
const boardWidth = totalRows * 2 - 1;
let startConfig = [
  9, 1, 9
];
for (let i = 0; i < totalRows; i++) {
  board.push([]);
  for (let j = 0; j < boardWidth; j++) {
    board[i].push(0);
  }
}

const singularStart = () => {
  let center = Math.floor(boardWidth / 2);
  board[0][center] = 1;
}

singularStart()
 
for (let i in board) {
  let rowString = ""
  for (let j in board[i]) {
    rowString += board[i][j];
  }
  console.log(rowString)
}

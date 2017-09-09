// another option
//var board = [
//   ["","",""]
//   ["","",""]
//   ["","",""]
// ]

var row1 = ["","",""];
var row2 = ["","",""];
var row3 = ["","",""];

var board = [
  row1,
  row2,
  row3
]

var  isPlayerXTurn = true; //true is X, false is O

function valueAtPosition(rowIndex, columnIndex) {
  //a helper function, row is a number between 0 and 2
  //column is a number between 0 and 2
  var row = board[rowIndex];
  var value = row[columnIndex];
  return value;
}

console.log(valueAtPosition(2,0));


function printBoard() {
  console.log(board[0]);
  console.log(board[1]);
  console.log(board[2]);
}

printBoard();

//Another option to print board
// function printBoard(board) {
//   for (var i = 0; i < board.length; i++) {
//     console.log(board[i])
//   }
//
// }
//
// printBoard(board);

function setValueAtPosition(rowIndex, columnIndex, player) {
  if(isPlayerXTurn === true){
    board[rowIndex][columnIndex] = "X";
  } else {
    board[rowIndex][columnIndex] = "O";
  }

  }

setValueAtPosition(2,2);
printBoard();

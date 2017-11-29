var didWin = false

function play(square) {
  var index = square.id
  makeMove(square, index)
  didWin = gameOver()
  didWin ? endGame() : switchPlayer()
}

function addClickListener(element){
  element.addEventListener('click', function(){
    play(element)
    if (didWin) {
      this.classList.add('winning-square')
    }
  })
}

function switchPlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X"
  displayMessage()
}

function endGame(endFormation) {
  var endMessage = 'Game Over! Player ' + currentPlayer + ' Wins'
  changeMessage()
  displayMessage(endMessage)
}

var gameOver = function() {
  var winCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
  didWin = false
  winCombinations.forEach(function(winCombination) {
    if(allEqual(winCombination)){
      didWin = true
    }
  })
  return didWin
}

function allEqual(combos) {
  return (board[combos[0]] === board[combos[1]] ) && (board[combos[0]] === board[combos[2]]) && (board[combos[0]] !== "")
}

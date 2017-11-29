var currentPlayer = "X";
var board = ["", "", "", "", "", "", "", "", ""];
var gameboard = document.getElementById("gameboard")


function createGame(board) {
  for (var i = 0; i < board.length; i++) {
    var newDiv = document.createElement("div");
    newDiv.innerText = board[i];
    newDiv.classList.add("container");
    newDiv.id = i;
    gameboard.appendChild(newDiv);
    switch (i) {
      case 0:
      case 1:
      case 3:
      case 4: {
        newDiv.classList.add("r-border", "b-border")
      break;
      }
      case 2:
      case 5: {
        newDiv.classList.add("b-border")
        break;
      }
      case 6:
      case 7: {
        newDiv.classList.add("r-border")
        break;
      }
      default:
    }
    addClickListener(newDiv);
    gameboard.appendChild(newDiv);
  }
}

function displayMessage(string) {
  var message = document.querySelector(".message");
  if (string) {
    message.textContent = string;
  } else {
    message.textContent = "Current Player: " + currentPlayer;
  }
}

function changeMessage() {
  document.querySelector(".message").classList.add("end-message");
}

function endColor() {
  document.querySelector("newDiv").classList.add(".winning-square");
}

function makeMove(square, index) {
  board[index] = currentPlayer;
  square.textContent = currentPlayer;
}

createGame(board);

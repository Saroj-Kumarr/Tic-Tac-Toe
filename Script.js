let board = ["", "", "", "", "", "", "", "", ""];

let currentPlayer = "X";

let cells = document.querySelectorAll(".cell");

let resetButton = document.querySelector("#reset");

let messageElement = document.querySelector("#message");

let bdy = document.getElementById("bdy");

//Add event listeners to each cell
cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    if (board[index] === "" && !isGameOver()) {
      board[index] = currentPlayer;
      cell.classList.add(currentPlayer.toLowerCase());
      cell.innerHTML = currentPlayer;

      // check if the game is over after current move

      if (isGameOver()) {
        messageElement.innerHTML = currentPlayer + " Wins🏆";
        bdy.style.backgroundColor = " #008060";
        // cells.forEach = ((cell) => cell.removeEventListener("click", handleCellClick));
      } else if (!board.includes("")) {
        //Update the message if the game is over
        messageElement.innerHTML = "Draw📍";
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        messageElement.innerHTML = currentPlayer + " 's turn";
      }
    }
  });
});

resetButton.addEventListener("click", () => {
  board = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  cells.forEach((cell) => {
    cell.classList.remove("x", "o");
    cell.innerHTML = "";
  });

  messageElement.innerHTML = "X's turn";
  cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
});

// Check the game status and winner

function isGameOver() {
  //Define the possible winning combination

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winningCombos.some((combo) => {
    return (
      board[combo[0]] !== "" &&
      board[combo[0]] === board[combo[1]] &&
      board[combo[1]] === board[combo[2]]
    );
  });
}

function handleCellClick() {
  console.log("Cell clicked");
}

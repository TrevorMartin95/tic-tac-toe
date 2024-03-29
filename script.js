// X is even O is odd
let move = 0;
let won = false;
const turn = document.querySelector(".turn");

// Button to reset the board to have no Xs or Os placed
const resetBoardBtn = document.getElementById("reset");
resetBoardBtn.addEventListener("click", boardReset);

/* Make nodelist of tiles and add EventListener to each which 
   will place correct piece based on the move number and not 
   allow piece to be placed if there already is one on that tile*/
const tiles = document.querySelectorAll(".tile");

tiles.forEach(tile => {
    tile.addEventListener("click", function() {
        if (won)
        {
            return;
        }
        else if (move % 2 === 0 && tile.innerHTML === "") {
            tile.innerHTML = "X";
            turn.innerHTML = "O's turn";
            move++;
            check(move);
        }
        else if (move % 2 != 0 && tile.innerHTML === ""){
            tile.innerHTML = "O";
            turn.innerHTML = "X's turn";
            move++;
            check(move);
        }
    }
)});

//Changes the innerHTML to blank for every tile when clicked
function boardReset() {
    turn.innerHTML = "X's turn";
    move = 0;
    won = false;
    tiles.forEach(tile => {
        tile.innerHTML = "";
    })
};

// Check if either X or O has a 
function check(move) {
    if (  (tiles[0].innerHTML === "X" && tiles[1].innerHTML === "X" && tiles[2].innerHTML === "X")
            || (tiles[3].innerHTML === "X" && tiles[4].innerHTML === "X" && tiles[5].innerHTML === "X")
            || (tiles[6].innerHTML === "X" && tiles[7].innerHTML === "X" && tiles[8].innerHTML === "X")
            || (tiles[0].innerHTML === "X" && tiles[3].innerHTML === "X" && tiles[6].innerHTML === "X")
            || (tiles[1].innerHTML === "X" && tiles[4].innerHTML === "X" && tiles[7].innerHTML === "X")
            || (tiles[2].innerHTML === "X" && tiles[5].innerHTML === "X" && tiles[8].innerHTML === "X")
            || (tiles[0].innerHTML === "X" && tiles[4].innerHTML === "X" && tiles[8].innerHTML === "X")
            || (tiles[2].innerHTML === "X" && tiles[4].innerHTML === "X" && tiles[6].innerHTML === "X"))
    {
        turn.innerHTML = "X wins!";
        move = 10;
        won = true;
    }
    else if (  (tiles[0].innerHTML === "O" && tiles[1].innerHTML === "O" && tiles[2].innerHTML === "O")
            || (tiles[3].innerHTML === "O" && tiles[4].innerHTML === "O" && tiles[5].innerHTML === "O")
            || (tiles[6].innerHTML === "O" && tiles[7].innerHTML === "O" && tiles[8].innerHTML === "O")
            || (tiles[0].innerHTML === "O" && tiles[3].innerHTML === "O" && tiles[6].innerHTML === "O")
            || (tiles[1].innerHTML === "O" && tiles[4].innerHTML === "O" && tiles[7].innerHTML === "O")
            || (tiles[2].innerHTML === "O" && tiles[5].innerHTML === "O" && tiles[8].innerHTML === "O")
            || (tiles[0].innerHTML === "O" && tiles[4].innerHTML === "O" && tiles[8].innerHTML === "O")
            || (tiles[2].innerHTML === "O" && tiles[4].innerHTML === "O" && tiles[6].innerHTML === "O"))
    {
        turn.innerHTML = "O wins!";
        move = 10;
        won = true;
    }
    else if (move === 9) {
        turn.innerHTML = "Tie game";
    }
}

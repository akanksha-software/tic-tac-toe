let currentPlayer = "X";
let arr = Array(9).fill(null);
let gameOver = false;
const resetBtn = document.getElementById("reset-btn");



function resetGame() {
    arr = Array(9).fill(null);
    currentPlayer = "X";
    gameOver = false;

    document.querySelectorAll(".col").forEach(cell => {
        cell.innerText = "";
        cell.classList.remove("X", "O");
    });

    document.getElementById("status").innerText = "";
}

resetBtn.addEventListener("click", resetGame);

function checkWinner() {
    if (
      (arr[0] != null && arr[0] == arr[1] && arr[1] == arr[2]) ||
      (arr[3] != null && arr[3] == arr[4] && arr[4] == arr[5]) ||
      (arr[6] != null && arr[6] == arr[7] && arr[7] == arr[8]) ||
      (arr[0] != null && arr[0] == arr[3] && arr[3] == arr[6]) ||
      (arr[1] != null && arr[1] == arr[4] && arr[4] == arr[7]) ||
      (arr[2] != null && arr[2] == arr[5] && arr[5] == arr[8]) ||
      (arr[0] != null && arr[0] == arr[4] && arr[4] == arr[8]) ||
      (arr[2] != null && arr[2] == arr[4] && arr[4] == arr[6])
    ) {
        document.getElementById("status").innerText = `${currentPlayer} wins`
        gameOver = true;

        return true;    
    }
    if (!arr.some((e) => e === null)) {
        document.getElementById("status").innerText = "It's a draw";
        gameOver = true;
        return true;
    }
    return false;

}

function handleClick(el) {
    const id = Number(el.id);
    if (arr[id] != null || gameOver) return;
    arr[id] = currentPlayer;
    el.innerText = currentPlayer;
    el.classList.add(currentPlayer === "X" ? "X" : "O");
    if (checkWinner()) { 
        gameOver = true;
        return;
    } 
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    
}


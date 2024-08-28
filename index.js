let started = false;
const startButton = document.getElementById("new-game-button");
let Won = false;

function check_full_houses(matrix) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (matrix[i][j].innerHTML == "") {
        return false;
      }
    }
  }
  return true;
}
function setRandNum(matrix) {
  if (!check_full_houses(matrix)) {
    while (true) {
      let row = Math.floor(Math.random() * 4);
      let col = Math.floor(Math.random() * 4);
      if (matrix[row][col].innerHTML == "") {
        let random = Math.floor(Math.random() * 10);
        if (random == 7) {
          matrix[row][col].innerHTML = 4;
          matrix[row][col].style.backgroundColor='#eee1c9'
          matrix[row][col].style.color='#776e65'
        } else {
            matrix[row][col].textContent = 2;
            matrix[row][col].style.backgroundColor='#eee4da'
          matrix[row][col].style.color='#776e65'
        }
        return;
      }
    }
  }
}

startButton.addEventListener("click", () => {
  let Matrix = [[], [], [], []];
  if (!started) {
    started = true;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        Matrix[i][j] = document.getElementById(`house ${i * 4 + j + 1}`);
      }
    }
    setRandNum(Matrix);
    setRandNum(Matrix)
  } else location.reload();
});

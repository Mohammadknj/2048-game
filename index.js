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
          matrix[row][col].classList.add("number4");
        } else {
          matrix[row][col].textContent = 2;
          matrix[row][col].classList.add("number2");
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
    startButton.innerHTML = "New Game";
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        Matrix[i][j] = document.getElementById(`house ${i * 4 + j + 1}`);
      }
    }
    setRandNum(Matrix);
    setRandNum(Matrix);
  } else location.reload();
});

document.addEventListener("keydown", (key) => {
  if (started) {
    console.log(key)
    if (key.code == "ArrowUp") {
      console.log("up arrow");
    } else if (key.code == "ArrowDown") {
      console.log("down arrow");
    } else if (key.code == "ArrowLeft") {
      console.log("left arrow");
    } else if (key.code == "ArrowRight") {
      console.log("right arrow");
    }
  }
});

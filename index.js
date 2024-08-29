let started = false;
const startButton = document.getElementById("new-game-button");
let finished = false;
let score = document.getElementById("score");
let messageBox = document.getElementsByClassName("message")[0];
messageBox.style.display = "none";

function colorSetter() {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      Matrix[i][j].classList = "";
      Matrix[i][j].classList = `number${Matrix[i][j].innerHTML}`;
    }
  }
}
function Check_won(Matrix) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (Matrix[i][j].innerHTML == "2048") {
        colorSetter();
        finished = true;
        messageBox.innerHTML = "You Won :))";
        messageBox.style.display = "flex";
      }
    }
  }
  return false;
}
function check_full_houses(Matrix) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (Matrix[i][j].innerHTML == "") return;
    }
  }
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      if (Matrix[i][j].innerHTML == Matrix[i][j + 1].innerHTML) return;
    }
  }
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
      if (Matrix[i][j].innerHTML == Matrix[i + 1][j].innerHTML) return;
    }
  }
  finished = true;
  messageBox.innerHTML = "You Lost :(";
  messageBox.style.display = "flex";
}
function setRandNum(matrix) {
  while (true) {
    let row = Math.floor(Math.random() * 4);
    let col = Math.floor(Math.random() * 4);
    if (matrix[row][col].innerHTML == "") {
      let random = Math.floor(Math.random() * 10);
      if (random == 7 || random == 8 || random == 6 || random == 9) {
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

let Matrix = [[], [], [], []];
startButton.addEventListener("click", () => {
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
    setRandNum(Matrix);
    setRandNum(Matrix);
    setRandNum(Matrix);
    setRandNum(Matrix);
  } else location.reload();
});

function goUp() {
  for (let j = 0; j < 4; j++) {
    for (let i = 1; i < 4; i++) {
      for (let k = i; k >= 1; k--) {
        if (Matrix[k][j].innerHTML != "") {
          while (Matrix[k - 1][j].innerHTML == "") {
            Matrix[k - 1][j].innerHTML = Matrix[k][j].innerHTML;
            Matrix[k - 1][j].classList.add(`number${Matrix[k][j].innerHTML}`);
            Matrix[k][j].classList = "";
            Matrix[k][j].innerHTML = "";
          }
        }
      }
    }
  }
  for (let j = 0; j < 4; j++) {
    for (let i = 1; i < 4; i++) {
      if (
        Matrix[i][j].innerHTML == Matrix[i - 1][j].innerHTML &&
        Matrix[i - 1][j].innerHTML != ""
      ) {
        Matrix[i - 1][j].classList = "";
        Matrix[i - 1][j].innerHTML *= 2;
        let num = Number(Matrix[i - 1][j].innerHTML) + Number(score.innerHTML);
        score.innerHTML = num;
        Matrix[i - 1][j].classList.add(`number${Matrix[i - 1][j].innerHTML}`);
        Matrix[i][j].classList = "";
        Matrix[i][j].innerHTML = "";
        for (let k = i; k < 3; k++) {
          Matrix[k][j].innerHTML = Matrix[k + 1][j].innerHTML;
          Matrix[k + 1][j].innerHTML = "";
        }
        Check_won(Matrix);
      }
    }
  }
}
function goDown() {
  for (let j = 0; j < 4; j++) {
    for (let i = 2; i >= 0; i--) {
      for (let k = i; k <= 2; k++) {
        if (Matrix[k][j].innerHTML != "") {
          while (Matrix[k + 1][j].innerHTML == "") {
            Matrix[k + 1][j].innerHTML = Matrix[k][j].innerHTML;
            Matrix[k + 1][j].classList.add(`number${Matrix[k][j].innerHTML}`);
            Matrix[k][j].classList = "";
            Matrix[k][j].innerHTML = "";
          }
        }
      }
    }
  }
  for (let j = 0; j < 4; j++) {
    for (let i = 2; i >= 0; i--) {
      if (
        Matrix[i][j].innerHTML == Matrix[i + 1][j].innerHTML &&
        Matrix[i + 1][j].innerHTML != ""
      ) {
        Matrix[i + 1][j].classList = "";
        Matrix[i + 1][j].innerHTML *= 2;
        let num = Number(Matrix[i + 1][j].innerHTML) + Number(score.innerHTML);
        score.innerHTML = num;
        Matrix[i + 1][j].classList.add(`number${Matrix[i + 1][j].innerHTML}`);
        Matrix[i][j].classList = "";
        Matrix[i][j].innerHTML = "";
        for (let k = i; k >= 1; k--) {
          Matrix[k][j].innerHTML = Matrix[k - 1][j].innerHTML;
          Matrix[k - 1][j].innerHTML = "";
        }
        Check_won(Matrix);
      }
    }
  }
}
function goRight() {
  for (let i = 0; i < 4; i++) {
    for (let j = 2; j >= 0; j--) {
      for (let k = j; k <= 2; k++) {
        if (Matrix[i][k].innerHTML != "") {
          while (Matrix[i][k + 1].innerHTML == "") {
            Matrix[i][k + 1].innerHTML = Matrix[i][k].innerHTML;
            Matrix[i][k + 1].classList.add(`number${Matrix[i][k].innerHTML}`);
            Matrix[i][k].classList = "";
            Matrix[i][k].innerHTML = "";
          }
        }
      }
    }
  }
  for (let i = 0; i < 4; i++) {
    for (let j = 2; j >= 0; j--) {
      if (
        Matrix[i][j].innerHTML == Matrix[i][j + 1].innerHTML &&
        Matrix[i][j + 1].innerHTML != ""
      ) {
        Matrix[i][j + 1].classList = "";
        Matrix[i][j + 1].innerHTML *= 2;
        let num = Number(Matrix[i][j + 1].innerHTML) + Number(score.innerHTML);
        score.innerHTML = num;
        Matrix[i][j + 1].classList.add(`number${Matrix[i][j + 1].innerHTML}`);
        Matrix[i][j].classList = "";
        Matrix[i][j].innerHTML = "";
        for (let k = j; k >= 1; k--) {
          Matrix[i][k].innerHTML = Matrix[i][k - 1].innerHTML;
          Matrix[i][k - 1].innerHTML = "";
        }
        Check_won(Matrix);
      }
    }
  }
}
function goLeft() {
  for (let i = 0; i < 4; i++) {
    for (let j = 1; j < 4; j++) {
      for (let k = j; k > 0; k--) {
        if (Matrix[i][k].innerHTML != "") {
          while (Matrix[i][k - 1].innerHTML == "") {
            Matrix[i][k - 1].innerHTML = Matrix[i][k].innerHTML;
            Matrix[i][k - 1].classList.add(`number${Matrix[i][k].innerHTML}`);
            Matrix[i][k].classList = "";
            Matrix[i][k].innerHTML = "";
          }
        }
      }
    }
  }
  for (let i = 0; i < 4; i++) {
    for (let j = 1; j < 4; j++) {
      if (
        Matrix[i][j].innerHTML == Matrix[i][j - 1].innerHTML &&
        Matrix[i][j - 1].innerHTML != ""
      ) {
        Matrix[i][j - 1].classList = "";
        Matrix[i][j - 1].innerHTML *= 2;
        let num = Number(Matrix[i][j - 1].innerHTML) + Number(score.innerHTML);
        score.innerHTML = num;
        Matrix[i][j - 1].classList.add(`number${Matrix[i][j - 1].innerHTML}`);
        Matrix[i][j].classList = "";
        Matrix[i][j].innerHTML = "";
        for (let k = j; k < 3; k++) {
          Matrix[i][k].innerHTML = Matrix[i][k + 1].innerHTML;
          Matrix[i][k + 1].innerHTML = "";
        }
        Check_won(Matrix);
      }
    }
  }
}
document.addEventListener("keydown", (key) => {
  if (started && !finished) {
    if (key.code == "ArrowUp") {
      goUp();
    } else if (key.code == "ArrowDown") {
      goDown();
    } else if (key.code == "ArrowLeft") {
      goLeft();
    } else if (key.code == "ArrowRight") {
      goRight();
    }
    colorSetter();
    setRandNum(Matrix);
    check_full_houses(Matrix);
  }
});

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
  // if (!check_full_houses(matrix)) {
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
  // }
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
function colorSetter() {
  console.log("inside");
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (Matrix[i][j].innerHTML == "") {
        Matrix[i][j].classList = "";
        Matrix[i][j].style.backgroundColor = "#b49959";
      } else {
        Matrix[i][j].classList = "";
        Matrix[i][j].classList.add(`number${Matrix[i][j].innerHTML}`);
      }
      // Matrix[i][j].innerHTML
    }
  }
}
function goUp() {
  for (let j = 0; j < 4; j++) {
    for (let i = 1; i < 4; i++) {
      for (let k = i; k >= 1; k--) {
        if (Matrix[k][j].innerHTML != "") {
          while (Matrix[k - 1][j].innerHTML == "") {
            Matrix[k - 1][j].innerHTML = Matrix[k][j].innerHTML;
            Matrix[k - 1][j].classList.add(`number${Matrix[k][j].innerHTML}`);
            Matrix[k][j].classList.remove(`number${Matrix[k][j].innerHTML}`);
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
        Matrix[i - 1][j].classList.remove(
          `number${Matrix[i - 1][j].innerHTML}`
        );
        Matrix[i - 1][j].innerHTML *= 2;
        Matrix[i - 1][j].classList.add(`number${Matrix[i - 1][j].innerHTML}`);
        Matrix[i][j].classList.remove(`number${Matrix[i][j].innerHTML}`);
        Matrix[i][j].innerHTML = "";
        for (let k = i; k < 3; k++) {
          Matrix[k][j].innerHTML = Matrix[k + 1][j].innerHTML;
          Matrix[k + 1][j].innerHTML = "";
        }
      }
    }
  }
  console.log("upped");
}
function goDown() {
  for (let j = 0; j < 4; j++) {
    for (let i = 2; i >= 0; i--) {
      for (let k = i; k <= 2; k++) {
        if (Matrix[k][j].innerHTML != "") {
          while (Matrix[k + 1][j].innerHTML == "") {
            Matrix[k + 1][j].innerHTML = Matrix[k][j].innerHTML;
            Matrix[k + 1][j].classList.add(`number${Matrix[k][j].innerHTML}`);
            Matrix[k][j].classList.remove(`number${Matrix[k][j].innerHTML}`);
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
        Matrix[i + 1][j].classList.remove(
          `number${Matrix[i + 1][j].innerHTML}`
        );
        Matrix[i + 1][j].innerHTML *= 2;
        Matrix[i + 1][j].classList.add(`number${Matrix[i + 1][j].innerHTML}`);
        Matrix[i][j].classList.remove(`number${Matrix[i][j].innerHTML}`);
        Matrix[i][j].innerHTML = "";
        for (let k = i; k >= 1; k--) {
          Matrix[k][j].innerHTML = Matrix[k - 1][j].innerHTML;
          Matrix[k - 1][j].innerHTML = "";
        }
      }
    }
  }
  console.log("downed");
}
function goRight() {
  for (let i = 0; i < 4; i++) {
    for (let j = 2; j >= 0; j--) {
      for (let k = j; k <= 2; k++) {
        if (Matrix[i][k].innerHTML != "") {
          while (Matrix[i][k + 1].innerHTML == "") {
            Matrix[i][k + 1].innerHTML = Matrix[i][k].innerHTML;
            Matrix[i][k + 1].classList.add(`number${Matrix[i][k].innerHTML}`);
            Matrix[i][k].classList.remove(`number${Matrix[i][k].innerHTML}`);
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
        Matrix[i][j + 1].classList.remove(
          `number${Matrix[i][j + 1].innerHTML}`
        );
        Matrix[i][j + 1].innerHTML *= 2;
        Matrix[i][j + 1].classList.add(`number${Matrix[i][j + 1].innerHTML}`);
        Matrix[i][j].classList.remove(`number${Matrix[i][j].innerHTML}`);
        Matrix[i][j].innerHTML = "";
        for (let k = j; k >= 1; k--) {
          Matrix[i][k].innerHTML = Matrix[i][k - 1].innerHTML;
          Matrix[i][k - 1].innerHTML = "";
        }
      }
    }
  }
  console.log("righted");
}
function goLeft() {
  for (let i = 0; i < 4; i++) {
    for (let j = 1; j < 4; j++) {
      for (let k = j; k > 0; k--) {
        if (Matrix[i][k].innerHTML != "") {
          while (Matrix[i][k - 1].innerHTML == "") {
            Matrix[i][k - 1].innerHTML = Matrix[i][k].innerHTML;
            Matrix[i][k - 1].classList.add(`number${Matrix[i][k].innerHTML}`);
            Matrix[i][k].classList.remove(`number${Matrix[i][k].innerHTML}`);
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
        Matrix[i][j - 1].classList.remove(
          `number${Matrix[i][j - 1].innerHTML}`
        );
        Matrix[i][j - 1].innerHTML *= 2;
        Matrix[i][j - 1].classList.add(`number${Matrix[i][j - 1].innerHTML}`);
        Matrix[i][j].classList.remove(`number${Matrix[i][j].innerHTML}`);
        Matrix[i][j].innerHTML = "";
        for (let k = j; k < 3; k++) {
          Matrix[i][k].innerHTML = Matrix[i][k + 1].innerHTML;
          Matrix[i][k + 1].innerHTML = "";
        }
      }
    }
  }
  console.log("lefted");
}
document.addEventListener("keydown", (key) => {
  if (started) {
    console.log(key);
    if (key.code == "ArrowUp") {
      console.log("up arrow");
      goUp();
    } else if (key.code == "ArrowDown") {
      console.log("down arrow");
      goDown();
    } else if (key.code == "ArrowLeft") {
      console.log("left arrow");
      goLeft();
    } else if (key.code == "ArrowRight") {
      console.log("right arrow");
      goRight();
    }
    let nft = [[], [], [], []];
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        nft[i][j] =
          "inner: " +
          Matrix[i][j].innerHTML +
          " classes: " +
          Matrix[i][j].classList;
      }
    }
    console.log(nft);
    colorSetter();
  }
});

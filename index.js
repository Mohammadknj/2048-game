let started = false;
const startButton = document.getElementById("new-game-button");
let Won = false;

function check_full_houses(matrix) {
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (matrix[i][j].innerHTML == "") {
        console.log('found empty house')
        return false;
      }
    }
  }
  return true;
}
function setRandNum(matrix) {console.log('not checked')
console.log(matrix)
  if (!check_full_houses(matrix)) {console.log('checked true')
    while (true) {
      let row = Math.floor(Math.random() * 4);
      let col = Math.floor(Math.random() * 4);console.log('before 0 text')
      if (matrix[row][col].innerHTML == "") {
        console.log(matrix[row][col])
        console.log('after 0 text')
        let random = Math.floor(Math.random() * 10);
        if(random==7){
            matrix[row][col].innerHTML = 4
        }else matrix[row][col].textContent = 2
        console.log('wanna return')
        return;
      }
    }
  }
}
let Matrix = [[], [], [], []];
startButton.addEventListener("click", () => {
  if (!started) {
    started = true;
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        Matrix[i][j] = document.getElementById(`house ${i * 4 + j + 1}`);
      }
    }
    console.log(document.getElementById(`house ${1}`).textContent);
    console.log('start')
    setRandNum(Matrix);
    console.log('finish')
    
  } else //location.reload();
{
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if(Matrix[i][j].innerHTML!=''){
                for(let k=0;k<4;k++){
                    Matrix[i][k].style.backgroundColor='red'

                }                
                Matrix[i][3].textContent = Matrix[i][j].textContent
                Matrix[i][j].textContent=''
                break
            }
        }
    }
}
});

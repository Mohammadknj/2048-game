let started = false
const startButton = document.getElementById('new-game-button')
let Won = false

startButton.addEventListener('click',()=>{
    if(!started){
        let Matrix=[[],[],[],[]]
        for(let i=0;i<4;i++){
            for(let j=0;j<4;j++){
                Matrix[i][j]=document.getElementById(`house ${i*4+j+1}`)
            }
        }

    }
})
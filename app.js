let player1Score = 0
let player2Score = 0
let player1Turn = true

const player1Dice = document.getElementById('player1Dice')
const player2Dice = document.getElementById('player2Dice')
const player1Scoreboard = document.getElementById('player1Scoreboard')
const player2Scoreboard = document.getElementById('player2Scoreboard')
const message = document.getElementById('message')
const rollbtn = document.getElementById('rollBtn')
const resetBtn = document.getElementById('resetBtn')

rollbtn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * 6) + 1
    
    console.log(random)

    if(player1Turn){
        console.log(`Player 1 rolled ${random}`)
        player1Score+=  random
        player1Scoreboard.textContent = player1Score
        player1Dice.textContent = random
        player1Dice.classList.remove('active')
        player2Dice.classList.add('active')
        message.textContent = "Player 2 turn!"
    }else {
        player2Score += random
        player2Scoreboard.textContent = player2Score
        console.log(`Player 2 rolled ${random}`)
        player2Dice.textContent = random
        player2Dice.classList.remove('active')
        player1Dice.classList.add('active')
        message.textContent = "Player 1 turn!"
        
    }
    if(player1Turn){
        player1Turn = false
    }else (
        player1Turn = true
    )
    //player1Turn = !player1Turn
    score()
    
})
function score(){
    if(player1Score >= 20){
        console.log('Player 1 won a game!!')
        message.textContent = 'Player one won a game 🥳'
        showresetBtn()
        
    }else if(player2Score >= 20){
        message.textContent = 'Player two won a game 🥳'
        showresetBtn()
    }   
}
function showresetBtn(){
    rollbtn.style.display = 'none'
    resetBtn.style.display = 'block'
}
resetBtn.addEventListener('click', function(){
    reset()
})
function reset(){
    message.textContent = 'Player one turn!'
    player1Scoreboard.textContent = 0
    player2Scoreboard.textContent = 0
    player1Dice.textContent = '-'
    player2Dice.textContent = '-'
    player1Score = 0
    player2Score = 0
    player1Turn = true
    rollbtn.style.display = 'block'
    resetBtn.style.display = 'none'
    player2Dice.classList.remove('active')
    player1Dice.classList.add('active')
    console.log('Game reset')
}
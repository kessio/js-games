const startGame = document.querySelector('.start-game')
const liveGame = document.getElementById('live-game')
const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('.ans')
const scoreDisplay = document.getElementById('score')
const scoreComputerDisplay = document.getElementById('score-comp')
let counterDisplay
let userChoice
let computerChoice
let result
let timeleft = 30;
let totals = 0;
let compTotals = 0
startGame.addEventListener('click',function (){
    liveGame.style.display = "block"
    startGame.style.display = "none"

       const downloadTimer = setInterval(function(){
        if(timeleft <= 0){
          clearInterval(downloadTimer);
          document.getElementById("countdown").innerHTML = "Game Over";
          liveGame.style.display = "none"
          startGame.style.display = "block"
        } else {
          document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
          timeleft -= 1;
        }
       
      }, 1000);
        possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
        userChoice = e.target.id
        userChoiceDisplay.innerHTML = userChoice
        generateComputerChoice()
        getResults()
        resultsTotal()
    
    }))

    function generateComputerChoice () {
        const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1)  
        //console.log(randomNumber); 
        if(randomNumber === 1){
           computerChoice = 'rock'
           //console.log(computerChoice)
        }
        if(randomNumber === 2){
            computerChoice = 'paper'
         }
         if(randomNumber === 3){
            computerChoice = 'scissors'
         }
         computerChoiceDisplay.innerHTML = computerChoice 
    }
    
    function getResults () {
        if(computerChoice == userChoice){
            result = 'Its a draw'
        }
        if(computerChoice === 'rock' && userChoice === 'paper'){
            result = 'You lost'
        }
        if(computerChoice === 'paper' && userChoice === 'rock'){
            result = 'You win'
        }
        if(computerChoice === 'rock' && userChoice === 'scissors'){
            result = 'You lost'
        }
        if(computerChoice === 'scissors' && userChoice === 'rock'){
            result = 'You win'
        }
        if(computerChoice === 'scissors' && userChoice === 'paper'){
            result = 'You lost'
        }
        if(computerChoice === 'paper' && userChoice === 'scissors'){
            result = 'You win'
        }
        resultDisplay.innerHTML = result
    
    }
    function resultsTotal () {
        if(result === 'You win'){
            totals += 1;
        }
        if(result === 'You lost'){
            compTotals += 1;
        }
        scoreComputerDisplay.innerHTML = compTotals
        scoreDisplay.innerHTML = totals

    }


})



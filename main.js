let hiddenMessage = document.getElementById('battleMessage');
let cpuChoice = document.querySelector('.cpuRandomizer');
let player = document.querySelector('.playerChoice');
let cpu = document.querySelector('.cpuChoice');
let win = document.querySelector('.win');
let loss = document.querySelector('.loss');
let draw = document.querySelector('.draw');
let resetButton = document.querySelector('.button');
const rockImage = "files/rock123.png";
const paperImage = "files/palm123.png";
const scissorsImage = "files/scissors123.png";

let pickedRock = document.querySelector('.rock');
let pickedPaper = document.querySelector('.paper');
let pickedScissors = document.querySelector('.scissors');

let playerHand = 'Not selected';
let cpuHand = 'Not selected';
let playerNumber = 0;
let noOfWins = 0;
let noOfLosses = 0;
let noOfDraws = 0;

resetButton.addEventListener('mouseover', function(){
    resetButton.innerText = 'Are you sure?';
});

resetButton.addEventListener('mouseout', function(){
    this.innerText = 'Reset score';
});

resetButton.addEventListener('click', function(){
    noOfDraws = 0;
    noOfLosses = 0;
    noOfWins = 0;
    draw.innerText = 0;
    win.innerText = 0;
    loss.innerText = 0;
    hiddenMessage.style.display = 'none';
});

pickedRock.addEventListener('click', function(){
    playerNumber = 1;
    player.innerHTML = `<img src="${rockImage}">`;
    playGame();
});

pickedPaper.addEventListener('click', function(){
    playerNumber = 2;
    player.innerHTML = `<img src="${paperImage}">`;
    playGame();
});

pickedScissors.addEventListener('click', function(){
    playerNumber = 3;
    player.innerHTML = `<img src="${scissorsImage}">`;
    playGame();
});

let cpuNumber = 0;


function playGame(){
    cpuNumber = Math.floor(Math.random() * 3) + 1;
    hiddenMessage.style.display = 'contents';

    switch(cpuNumber){
        case 1: 
            cpu.innerHTML = `<img src="${rockImage}">`;
            break;
        case 2: 
            cpu.innerHTML = `<img src="${paperImage}">`;
            break;
        case 3:
            cpu.innerHTML = `<img src="${scissorsImage}">`;
            break;
    }

    if(playerNumber === cpuNumber)
    {
        noOfDraws++;
        console.log('Its a draw');
    }else if(playerNumber === 1  && cpuNumber == 3){
        noOfWins++;
        console.log('You won over Scissors');
    }else if(playerNumber === 2 && cpuNumber === 1){
        noOfWins++;
        console.log('You won over Rock');
    }else if(playerNumber === 3 && cpuNumber === 2){
        noOfWins++;
        console.log('You won over Paper');
    }else{
        noOfLosses++;
        console.log('You lost');
    }
    draw.innerText = noOfDraws;
    win.innerText = noOfWins;
    loss.innerText = noOfLosses;
}

/*Hacking letters*/
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖ ";

let interval = null;

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
    }
    
    iteration += 1 / 3;
  }, 30);
}
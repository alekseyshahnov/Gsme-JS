// const max = 100;
// const min = 0;
// const attemptsNumber = 10;
// const RANDOM_NUMBER = getRandomeNumber(); 
// const playerName = getPlayerName();   


const setings = {
    max: 100,
    min: 0,
    attemptsNumber: 10,
    RANDOM_NUMBER: getRandomeNumber(), 
    playerName: getPlayerName()
}

function getRandomeNumber() {
   const randomNumber = Math.round(Math.random() * 100)
   return randomNumber
}

function getPlayerName() {
   const playerName = prompt('Как тебя зовут?', '')
   return playerName
}

function superGame(max, min, attemptsNumber, RANDOM_NUMBER, playerName) {
   alert(`Привет ${playerName}! Я загадал число от ${min} до ${max}. У тебя ${attemptsNumber} попыток. Удачи!`)
   let playerAnswers = [];
   for (let attempt = 1; attempt <= attemptsNumber; attempt++) {
       const playerAnswer = prompt("Какое число я загадал?", "")
       if (playerAnswer > RANDOM_NUMBER) {
           alert(`Мое число меньше! У тебя осталось ${attemptsNumber - attempt} попыток`)
           playerAnswers.push(playerAnswer)
       }else if(playerAnswer < RANDOM_NUMBER) {
           alert(`Мое число больше! У тебя осталось ${attemptsNumber - attempt} попыток`)
           playerAnswers.push(playerAnswer)
       }else{
           alert(`Поздравляю! Ты разгадал мою тайну за ${attempt} попыток`)
           return
       }
   }
   alert(`Ты не справился за ${attemptsNumber} попыток. Я загодал ${RANDOM_NUMBER }. А твои ответы - ${playerAnswers}`)
}

const {
   max,
   min,
   attemptsNumber,
   RANDOM_NUMBER,
   playerName
} = setings
superGame(max, min, attemptsNumber, RANDOM_NUMBER, playerName)
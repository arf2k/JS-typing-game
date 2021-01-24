const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");

const words = [
     'sigh',
     'tense',
     'airplane',
     'ball',
     'pies',
     'juice',
     'warlike',
     'bad',
     'north',
     'dependent',
     'steer',
     'silver',
     'highfalutin',
     'superficial',
     'quince',
     'eight',
     'feeble',
     'admit',
     'drag',
     'loving'
]

// Initialize word 
let randomWord;

// Initial Score
let score = 0;

// Initial Time
let time = 10;

// generate rand word from Array
function getRandomWord() {
     return words[Math.floor(Math.random() * words.length)]
}

// add word to DOM
function addWordToDOM(){
     randomWord = getRandomWord();
     word.innerHTML = randomWord
}

addWordToDOM();

const updateScore = () {
     score++;
     scoreEl.innerHTML = score;
}

text.addEventListener('input', e => {
     const insertedText = e.target.value

     if(insertedText === randomWord) {
          addWordToDOM();
          updateScore()
          
          // clear
          e.target.value = ""
     }
})
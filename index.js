const word = document.getElementById("word");
const text = document.getElementById("text");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const endgameEl = document.getElementById("end-game-container");
const settingsBtn = document.getElementById("settings-btn");
const settings = document.getElementById("settings");
const settingsForm = document.getElementById("settings-form");
const difficultySelect = document.getElementById("difficulty");

const words = [
  "sigh",
  "tense",
  "airplane",
  "ball",
  "pies",
  "juice",
  "warlike",
  "bad",
  "north",
  "dependent",
  "steer",
  "silver",
  "highfalutin",
  "superficial",
  "quince",
  "eight",
  "feeble",
  "admit",
  "drag",
  "loving",
];




// Initialize word
let randomWord;

// Initial Score
let score = 0;

// Initial Time
let time = 10;

// generate rand word from Array
function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

// add word to DOM
function addWordToDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}

addWordToDOM();


// update time
const updateTime = () => {
     time--;
     timeEl.innerHTML = time + "s";

     if(time === 0) {
          clearInterval(timeInterval)
          // end game
          gameOver()
     }

   };

   // start count down- calls fn update time every 1sec
const timeInterval = setInterval(updateTime, 1000);


const updateScore = () => {
  score++;
  scoreEl.innerHTML = score;
};


const gameOver = () => {
     endgameEl.innerHTML = `
     <h1> Time ran out </h1>
     <p> Your final score is ${score} </p>
     <button onClick="location.reload()">Reload</button>`
     endgameEl.style.display = "flex"
}


// focus on text on start
text.focus();

text.addEventListener("input", (e) => {
  const insertedText = e.target.value;

  if (insertedText === randomWord) {
    addWordToDOM();
    updateScore();

    // clear
    e.target.value = "";

     // adds time every time get word right
    time += 5;

    updateTime()
  }
});

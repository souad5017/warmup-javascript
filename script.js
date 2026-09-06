let gameBoard = document.getElementById('gameBoard');

let firstCard = null;
let secondCard = null;

let Coups = 0;
let found = 0;
let lockBoard = false;
let time = 60;
let timer = null;

const images = [
  "/assets/bunny.png",
  "/assets/cat.png",
  "/assets/fox.png",
  "/assets/koala.png",
  "/assets/panda.png",
  "/assets/penguin.png",
  "/assets/frog.png",
  "/assets/lion.png",
];

let pairs = document.getElementById('pairs');
let moves = document.getElementById('moves');


let cards = [];
let numberOfPairs = 6;

const totalPairs = document.getElementById('totalPairs');
totalPairs.textContent = numberOfPairs
const pseudoInput = document.getElementById('pseudo');
const nameBtn = document.getElementById('nameBtn');

const nameStep = document.getElementById('nameStep');
const difficultyStep = document.getElementById('difficultyStep');

let pseudo;

nameBtn.addEventListener("click", () => {

  pseudo = pseudoInput.value.trim();

  if (pseudo === "") {
    alert("Veuillez entrer votre pseudo !");
    return;
  }

  nameStep.style.display = "none";
  difficultyStep.style.display = "flex";
});

const difficulties = document.querySelectorAll(".level-btn")

let selectedDifficulty;

difficulties.forEach(difficulty => {

  difficulty.addEventListener("click", () => {

    selectedDifficulty = difficulty.name;

    const gameContainer = document.querySelector('.game-container');
    const startScreen = document.querySelector('.start-screen');

    gameContainer.style.display = "flex";
    startScreen.style.display = "none";


    console.log(selectedDifficulty)

    if (selectedDifficulty === "easy") {
      createCards();
      showCardsAtStart();
    } else if (selectedDifficulty === "hard") {
      numberOfPairs = 8;
      totalPairs.textContent = numberOfPairs
      createCards();
    }
    startTimer()


  });

});

function startTimer() {

  timer = setInterval(() => {

    time--;

    document.getElementById("timer").textContent = time
    if (time === 0) {

      clearInterval(timer);

      const cards = document.querySelectorAll(".card");

      cards.forEach(card => {
        card.classList.add("show");
      });

      document.querySelector('.lose-message').style.display = "block";

    }

  }, 1000);

}
function showCardsAtStart() {
  const cards = document.querySelectorAll(".card");
  setTimeout(() => {
    cards.forEach(card => {
      card.classList.add("show");
    });
  }, 500);

  setTimeout(() => {
    cards.forEach(card => {
      card.classList.remove("show");
    });
  }, 3500);
}

function createCards() {

  const selectedImages = images.slice(0, numberOfPairs);

  cards = [...selectedImages, ...selectedImages];
  cards.sort(() => Math.random() - 0.5);

  cards.forEach(image => {

    let card = document.createElement('div');
    card.classList.add('card');

    let cardInner = document.createElement('div');
    cardInner.classList.add('card-inner');

    let cardBack = document.createElement('div');
    cardBack.classList.add('card-back');

    let cardFront = document.createElement('div');
    cardFront.classList.add('card-front');

    let img = document.createElement('img');
    img.src = image;
    img.alt = 'CardImage';

    cardFront.appendChild(img);

    cardInner.appendChild(cardBack);
    cardInner.appendChild(cardFront);

    card.appendChild(cardInner);

    gameBoard.appendChild(card);


    card.addEventListener("click", () => {

      if (lockBoard) return;

      if (card === firstCard) return;

      if (card.classList.contains("found")) return;


      card.classList.add("show");


      if (!firstCard) {

        firstCard = card;

      } else {

        secondCard = card;

        ++Coups;
        moves.textContent = Coups;

        sameImages(firstCard, secondCard);
      }

    });
  });
}


function sameImages(first, second) {

  const firstImg = first.querySelector('img');
  const secondImg = second.querySelector('img');


  if (firstImg.src === secondImg.src) {

    ++found;
    pairs.textContent = found;

    first.classList.add("found");
    second.classList.add("found");

    firstCard = null;
    secondCard = null;


    if (found === numberOfPairs) {
      document.querySelector('.win-message').style.display = "block";
      clearInterval(timer)
    }

  } else {

    lockBoard = true;

    setTimeout(() => {

      first.classList.remove('show');
      second.classList.remove('show');

      firstCard = null;
      secondCard = null;

      lockBoard = false;

    }, 1500);
  }
}


function recommencer() {

  clearInterval(timer);
  const cardsElements = document.querySelectorAll(".card");


  cardsElements.forEach(card => {

    card.classList.remove("show");
    card.classList.remove("found");

  });


  let cardsArray = Array.from(cardsElements);

  cardsArray.sort(() => Math.random() - 0.5);


  cardsArray.forEach(card => {
    gameBoard.appendChild(card);
  });
  found = 0;
  Coups = 0;

  firstCard = null;
  secondCard = null;

  lockBoard = false;


  pairs.textContent = found;
  moves.textContent = Coups;

  if (selectedDifficulty === "easy") {
    showCardsAtStart();
  }

  document.querySelector('.win-message').style.display = "none";
  document.querySelector('.lose-message').style.display = "none";
  time = 60;
  document.getElementById("timer").textContent = time;
  startTimer()
}


// createCards();
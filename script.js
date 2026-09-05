    let gameBoard = document.getElementById('gameBoard');

    let firstCard = null, secondCard = null
    let Coups = 0;
    let found = 0;
    const images = [
      "/assets/bunny.png",
      "/assets/cat.png",
      "/assets/fox.png",
      "/assets/koala.png",
      "/assets/panda.png",
      "/assets/penguin.png",
    ]


    let pairs = document.getElementById('pairs');
    let moves = document.getElementById('moves');


    let cards = [...images, ...images];

    function createCards(images) {
      cards.sort(() => Math.random() - 0.5);
      cards.forEach(images => {
        let card = document.createElement('div');
        card.classList.add('card');

        let cardInner = document.createElement('div');
        cardInner.classList.add('card-inner');

        let cardBack = document.createElement('div');
        cardBack.classList.add('card-back');

        let cardFront = document.createElement('div');
        cardFront.classList.add('card-front');

        let img = document.createElement('img');
        img.src = images;
        img.alt = 'CardImage';

        cardFront.appendChild(img);

        cardInner.appendChild(cardBack);
        cardInner.appendChild(cardFront);

        card.appendChild(cardInner);

        gameBoard.appendChild(card);

        card.addEventListener("click", () => {
          if (!card.classList.contains("show")) {
            console.log(firstCard, secondCard)
            if (!firstCard) {
              firstCard = card
              card.classList.add("show")
            } else if (!secondCard) {
              secondCard = card;
              card.classList.add("show")
              sameImages(firstCard, secondCard)
              console.log(firstCard, secondCard)
            }
          }
        });
      })
    }


    function recommencer() {
      const cards = document.querySelectorAll(".card");
      cards.forEach(card => {
        if (card.classList.contains("show")) {
          card.classList.remove("show")
        }
      })
      let cardsArray = Array.from(cards);

      cardsArray.sort(() => Math.random() - 0.5);

      cardsArray.forEach(card => {
        gameBoard.appendChild(card);
      })


      found = 0;
      Coups = 0;
      firstCard = null;
      secondCard = null;
      pairs.textContent = found;
      moves.textContent = Coups;

    }
    function sameImages(first, second) {
      //  console.log(first , second)
      const firstImg = firstCard.querySelector('img');
      const secondImg = secondCard.querySelector('img');

      if (firstImg.src === secondImg.src) {
        ++found
        pairs.textContent = found;
        firstCard = null;
        secondCard = null;
      } else {
        ++Coups
        moves.textContent = Coups;

        console.log(firstCard, secondCard)
        setTimeout(() => {
          first.classList.remove('show');
          second.classList.remove('show');

          firstCard = null;
          secondCard = null;

        }, 1500)
        console.log(firstCard, secondCard)
      }
    }


    createCards(images)
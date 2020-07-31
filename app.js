document.addEventListener("DOMContentLoaded", () => {
  // card options
  const CardArray = [
    {
      name: "banana1",
      img: "./images/banana1.png",
    },
    {
      name: "watermelon1",
      img: "./images/watermelon1.png",
    },
    {
      name: "brinjal2",
      img: "./images/brinjal2.jpg",
    },
    {
      name: "banana2",
      img: "./images/banana2.png",
    },
    {
      name: "peach2",
      img: "./images/peach2.png",
    },
    {
      name: "brinjal1",
      img: "./images/brinjal1.jpg",
    },
    {
      name: "banana2",
      img: "./images/banana2.png",
    },
    {
      name: "peach1",
      img: "./images/peach1.png",
    },
    {
      name: "brinjal2",
      img: "./images/brinjal2.jpg",
    },
    {
      name: "peach2",
      img: "./images/peach2.png",
    },

    {
      name: "watermelon1",
      img: "./images/watermelon1.png",
    },

    {
      name: "banana1",
      img: "./images/banana1.png",
    },
    {
      name: "watermelon2",
      img: "./images/watermelon2.png",
    },
    {
      name: "peach1",
      img: "./images/peach1.png",
    },

    {
      name: "brinjal1",
      img: "./images/brinjal1.jpg",
    },
    {
      name: "watermelon2",
      img: "./images/watermelon2.png",
    },
  ];

  const grid = document.querySelector(".grid");
  const score = document.querySelector("#score");
  const over = document.querySelector(".over");
  const container = document.querySelector(".container");
  var cardsChosenName = [];
  var cardsChosenId = [];
  var cardsWon = [];
  var cardCount = 0;

  // create board for memory game
  function createBoard() {
    for (let i = 0; i < CardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "./images/flower.jpg");
      card.addEventListener("click", flipcard);
      card.setAttribute("data-id", i);
      grid.appendChild(card);
    }
  }

  //   check if selected cards
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (optionOneId === optionTwoId) {
      alert("You cannot select the same image.Please try Again!");
      cards[optionOneId].setAttribute("src", "./images/flower.jpg");
      cards[optionTwoId].setAttribute("src", "./images/flower.jpg");
    } else if (cardsChosenName[0] === cardsChosenName[1]) {
      alert("You found a match!");
      cards[optionOneId].setAttribute("src", "./images/black.png");
      cards[optionTwoId].setAttribute("src", "./images/black.png");
      cardsWon.push(cardsChosenName[0]);
      cardsWon.push(cardsChosenName[1]);
      cardCount += 2;
    } else {
      alert("Wrong Match! Please Try Again");
      cards[optionOneId].setAttribute("src", "./images/flower.jpg");
      cards[optionTwoId].setAttribute("src", "./images/flower.jpg");
    }
    if (cardCount === CardArray.length) {
      container.innerHTML = "Game Over";
    }
    cardsChosenName = [];
    cardsChosenId = [];
    score.innerHTML = cardsWon.length;
  }

  createBoard();

  //   flip the card
  function flipcard() {
    var cardId = this.getAttribute("data-id");
    cardsChosenName.push(CardArray[cardId].name);
    console.log(cardsChosenName);
    cardsChosenId.push(cardId);
    console.log(cardsChosenId);
    this.setAttribute("src", CardArray[cardId].img);
    if (cardsChosenName.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }
});

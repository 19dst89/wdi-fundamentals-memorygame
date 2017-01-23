console.log("JS file is connected to HTML! Woo!")

// var cardOne = "queen";
// var cardTwo = "king";
// var cardThree = "queen";
// var cardFour = "king";

var cards = Array("queen", "king", "queen", "king");
var cardsInPlay = [];
var gBoard = document.getElementById('game-board');

function isMatch(cards) {
  if (cards[0] === cards[1]) {
    alert("You found a match!")
  } else {
    alert("Sorry Try again")
  }
}
// if (cardTwo === cardFour) {
//   alert("You found a match!");
// }
//   else {
//     alert("Sorry try again")
//   };

function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));

  if (this.getAttribute('data-card') === 'queen') {
    this.innerHTML = "img src='king.png'>";
  } else {
    this.innerHTML = "img src='queen.png'>";
  }

  if (cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }

}

function createBoard() {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('div');

    cardElement.className = 'card';
    cardElement.setAttribute('data-card', cards[i]);

    cardElement.addEventListener('click', isTwoCards);
    gBoard.appendChild(cardElement);
    gBoard.appendChild(cardElement);
  }
};

// var createCards = function(cards) {

//   var gBoard = document.getElementById('game-board');

//   for (var i = cards.length - 1; i >= 0; i--) {
//     var newDiv = document.createElement('div');
//     newDiv.textContent = cards[i];
//     gBoard.appendChild(newDiv).className = 'card';

//   }
// };

  // createCards(cards);
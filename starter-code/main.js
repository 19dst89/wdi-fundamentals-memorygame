console.log("JS file is connected to HTML! Woo!")

// var cardOne = "queen";
// var cardTwo = "king";
// var cardThree = "queen";
// var cardFour = "king";

var cards = Array("queen", "king", "queen", "king")

// if (cardTwo === cardFour) {
//   alert("You found a match!");
// }
//   else {
//     alert("Sorry try again")
//   };
var createCards = function(cards) {

  var gBoard = document.getElementById('game-board');

  for (var i = cards.length - 1; i >= 0; i--) {
    var newDiv = document.createElement('div');
    newDiv.textContent = cards[i];
    gBoard.appendChild(newDiv).className = 'card';

  }};

  createCards(cards);
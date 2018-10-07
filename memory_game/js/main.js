console.log("Up and running!");

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
var cardOne = cards[0] // Stores the FIRST item in the cards array in the variable cardOne.
cardsInPlay.push(cardOne) // Adds cardOne to the end of the cardsInPlay array.
var cardTwo = cards[1] // Stores the THIRD item in the cards array in the variable cardTwo.
cardsInPlay.push(cardTwo)

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!"); 
  } else {
		alert("Sorry, try again.");
  }	 // Checks to see if the legth of the cardsInPlay array is 2.
}

console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);

// card face rank, suit and image
var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png",
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png",
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png",
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png",
}
];
// cards that are in play once clicked
var cardsInPlay = [];

var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!"); 
  	} 	else {
		alert("Sorry, try again.");
  	}
}
// flips card to show face when clicked
var flipCard = function() {
	var cardId = this.getAttribute('data-id');
	cardsInPlay.push(cards[cardId].rank);
	console.log("User flipped " + cards[cardId].rank);
	console.log(cards[cardId].cardImage)
	console.log(cards[cardId].suit)
	this.setAttribute('src', cards[cardId].cardImage);
	if (cardsInPlay.length === 2) {
	checkForMatch();
  	}	
}
// displays all four back faces of cards
 var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src', 'images/back.png');
	cardElement.setAttribute('data-id', i);
	cardElement.addEventListener('click', flipCard);
	document.getElementById('game-board').appendChild(cardElement);
    document.getElementsByTagName('div').innerHTML = null; // new code for reset button 
	}
}
/*var resetGame = function () {
	document.getElementsById('reset-button'); {
	cardElement.addEventListener('click', createBoard);
    document.getElementsByTagName('div').innerHTML = null;

	 document.getElementsByTagName('div').innerHTML = null; */
	/* addEventListener('click', createBoard); */
/* 

	var cardsInPlay = []; 
}
} */
createBoard();




//For Funsies
console.log(["                                     ,(  `-.", "                                 ,': `.   `.", "                               ,`     `-.    ", "                             ,'  ` :     `.  `.", "                           ,~     :  .,   `.  `.", "                         ,'  ; :   ,       `.  ;", "                       ,'  :'       ;  ; ; _,-'", "                     .'  ;    '   ; ;'_,_ ;", "                   ,;   ;   ` : ;'_,-'   i'", "                 ,` `;       ; ','       :", "               .';     ; ' ,-'~", "             ,'      ;',-.'", "           ,(    ; _,-'~  ;", "         ,~.`  _','", "       .'; _,-' ~", "     ,'_;-''", "    ,,~", "    i'", "    :"].join("\n")), console.log("G I M M E // P I Z Z A");
//Variables
var cards = [
	{
        "rank": "queen",
        "suit": "diamonds",
        "cardImage": "images/queen-of-diamonds.png"
    },
    {
        "rank": "queen",
        "suit": "hearts",
        "cardImage": "images/queen-of-hearts.png"
    },
    {
        "rank": "king",
        "suit": "diamonds",
        "cardImage": "images/king-of-diamonds.png"
    },
    {
        "rank": "king",
        "suit": "hearts",
        "cardImage": "images/king-of-hearts.png"
    }
];
var cardsInPlay = [];

// var resetBoard = function() {
// 	for (var i = 0 ; i < cardsInPlay.length;i++) {
// 		cardsInPlay[i].
// 	}
// }

var flipCard = function() {
	var cardId = this.getAttribute('data-id');
    console.log("User filpped " + cards[cardId].rank);
    console.log("User filpped " + cards[cardId].suit);
    console.log("User filpped " + cards[cardId].cardImage);
    cardsInPlay.push(cards[cardId].rank);
    this.setAttribute("src",cards[cardId].cardImage)
    var status = document.getElementById("status")
    if (cardsInPlay.length >= 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            // alert("You found a match!");
            document.getElementById("status").innerHTML = "Congratulations, you won!";
        } else {
            document.getElementById("status").innerHTML = "Sorry, please try again";
        }
    } else {
        console.log("You need to flip another card")
    }
}

var createBoard = function() { 
	for (var i = 0; i < cards.length; i++) {
		var dealtCard = document.createElement('img');
		dealtCard.setAttribute('src','images/back.png');
		dealtCard.setAttribute('data-id',i);
		dealtCard.addEventListener("click",flipCard);
		document.getElementById("game-board").appendChild(dealtCard);
	}
	var status = document.createElement('div');
	var statusText = document.createTextNode("Waiting for player to pick a card");
	status.setAttribute("id","status");
	status.appendChild(statusText);
	document.getElementById("game-board").appendChild(status);
}




createBoard()




















//flipCard(2)
//flipCard(1)
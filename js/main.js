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


var checkForMatch = function() {
    if (cardsInPlay.length >= 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            console.log("You found a match!");
        } else {
            console.log("Sorry, try again.");
        }
    } else {
        console.log("You need to flip another card")
    }
}

var flipCard = function(cardId) {
    console.log("User filpped " + cards[cardId].rank)
    console.log("User filpped " + cards[cardId].suit)
    console.log("User filpped " + cards[cardId].cardImage)
    cardsInPlay.push(cards[cardId].rank)
    checkForMatch()
}

flipCard(2)
flipCard(1)
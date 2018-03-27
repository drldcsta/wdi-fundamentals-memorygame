//For Funsies
console.log(["                                     ,(  `-.", "                                 ,': `.   `.", "                               ,`     `-.    ", "                             ,'  ` :     `.  `.", "                           ,~     :  .,   `.  `.", "                         ,'  ; :   ,       `.  ;", "                       ,'  :'       ;  ; ; _,-'", "                     .'  ;    '   ; ;'_,_ ;", "                   ,;   ;   ` : ;'_,-'   i'", "                 ,` `;       ; ','       :", "               .';     ; ' ,-'~", "             ,'      ;',-.'", "           ,(    ; _,-'~  ;", "         ,~.`  _','", "       .'; _,-' ~", "     ,'_;-''", "    ,,~", "    i'", "    :"].join("\n")), console.log("G I M M E // P I Z Z A");
//Variables
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];


var checkForMatch = function() {
    if (cardsInPlay.length >= 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            console.log("You found a match!");
        } else {
            console.log("Sorry, try again.");
        }
    } else {
    	console.log ("You need to flip another card")
    }
}

var flipCard = function(cardId) {
    console.log("User filpped " + cards[cardId])
    cardsInPlay.push(cards[cardId])
    checkForMatch()
}

flipCard(2)
flipCard(3)
//For Funsies
console.log(["                                     ,(  `-.", "                                 ,': `.   `.", "                               ,`     `-.    ", "                             ,'  ` :     `.  `.", "                           ,~     :  .,   `.  `.", "                         ,'  ; :   ,       `.  ;", "                       ,'  :'       ;  ; ; _,-'", "                     .'  ;    '   ; ;'_,_ ;", "                   ,;   ;   ` : ;'_,-'   i'", "                 ,` `;       ; ','       :", "               .';     ; ' ,-'~", "             ,'      ;',-.'", "           ,(    ; _,-'~  ;", "         ,~.`  _','", "       .'; _,-' ~", "     ,'_;-''", "    ,,~", "    i'", "    :"].join("\n")), console.log("G I M M E // P I Z Z A");

//Variables
//Array that contains cards data
var cards = [{
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

//An empty array to track cards as they're selected
var cardsInPlay = [];

//Function that shuffles an array (so gameboard is not the same every time)
//stolen from https://stackoverflow.com/a/3718452/2623273
var shuffle = function(sourceArray) {
    for (var i = 0; i < sourceArray.length - 1; i++) {
        var j = i + Math.floor(Math.random() * (sourceArray.length - i));
        var temp = sourceArray[j];
        sourceArray[j] = sourceArray[i];
        sourceArray[i] = temp;
    }
    return sourceArray;
}

//function that sets the background video. 
//Accets a youtube video ID as parameter
var setBackgroundVideo = function(ytId) {
    document.getElementById("video-container").innerHTML = '<iframe id="victory-video" frameborder="0" height="100%" width="100%" src="https://youtube.com/embed/' + ytId + '?autoplay=1&controls=0&showinfo=0&autohide=1&mute=0&loop=1&playlist=' + ytId + '"></iframe>';
    document.getElementById("vidButton").style.display = 'inline' //Adds a button to page to stop video
}

//zeros out the video container div (stopping the video)
var clearVideo = function() {
    document.getElementById("video-container").innerHTML = "";
    document.getElementById("vidButton").style.display = 'none';
}

//Function that generates a shuffled game
var createBoard = function() {
    //Create a status div and set it's initial state.
    var status = document.createElement('div');
    var statusText = document.createTextNode("Waiting for player to pick a card");
    var cardsInPlay = [];
    var gameBoard = document.getElementById("game-board");
    cards = shuffle(cards);
    //zero out any existing game-board content
    gameBoard.innerHTML = "";
    status.setAttribute("id", "status");
    status.appendChild(statusText);
    document.getElementById("game-board").appendChild(status);
    for (var i = 0; i < cards.length; i++) {
        var dealtCard = document.createElement('img');
        dealtCard.setAttribute('src', 'images/back.png');
        dealtCard.setAttribute('data-id', i);
        dealtCard.setAttribute('class', 'playedCard')
        dealtCard.addEventListener("click", flipCard);
        document.getElementById("game-board").appendChild(dealtCard);
    }


}

//Function to unhide the instructions
var showInstructions = function() {
    var iContainer = document.getElementsByClassName("instructions")[0];
    iContainer.classList.add("show-instructions")
}

//Function to flip over all the cards on the board (does not shuffle cards)
var resetBoard = function() {
    var playedCards = document.getElementsByClassName("playedCard");
    var status = document.getElementById("status");
    var background = document.getElementById("video-container")
    background.innerHTML = ""
    status.innerHTML = "Waiting for player to pick a card";

    for (var i = 0; i < playedCards.length; i++) {
        playedCards[i].setAttribute('src', 'images/back.png')
    }
    cardsInPlay = [];
    // console.log(cardsInPlay)
}


//function to flip over a card and update gamestate accordingly
var flipCard = function() {
    var cardId = this.getAttribute('data-id');
    var status = document.getElementById("status");
    if (cardsInPlay.length < 2) {
        if (typeof cardsInPlay[0] === 'undefined') {
            cardsInPlay.push(cards[cardId]);
            this.setAttribute("src", cards[cardId].cardImage);
            status.innerHTML = "Please pick another card.";
            return;
        }
        if (cardsInPlay[0].rank === cards[cardId].rank && cardsInPlay[0].suit === cards[cardId].suit) {
            status.innerHTML = "Come on, man; you can't click the same card twice.";
            return;
        }
        if (cardsInPlay[0].rank === cards[cardId].rank) {
            this.setAttribute("src", cards[cardId].cardImage);
            cardsInPlay.push(cards[cardId]);
            status.innerHTML = "Congratulations, you won!<br> <button onclick='resetBoard();createBoard();clearVideo();'>Flip cards over and shuffle</button>";
            setBackgroundVideo("AWD0bfl6p30"); //celebrate good times
            return;
        } else {
            this.setAttribute("src", cards[cardId].cardImage);
            cardsInPlay.push(cards[cardId]);
            status.innerHTML = "Sorry, please try again.<br> <button onclick='resetBoard()'>Flip Cards Over</button>";
            return;
        }
    } else if (cardsInPlay[0].rank === cardsInPlay[1].rank) {
        status.innerHTML = "You already won, click below to start a new game!.<br> <button onclick='resetBoard();createBoard();clearVideo();'>Flip cards over and shuffle</button>";

    }
}
//Kick the tires and light the fires
createBoard()
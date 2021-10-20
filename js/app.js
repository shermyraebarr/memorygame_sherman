// create cards array containing all cards
let cards = document.getElementsByClassName("card");
let arrayOfCards = Array.from(cards); 

// add event listeners to each card to display card when clicked
for (var i = 0; i < arrayOfCards.length; i++) {
    cards[i].addEventListener('click', flipCard); 
};

// //PUT IN CSS
// .flipCard {
//     transform: rotateY(180deg);
// }

//create variables for first card and second card and boolean to mark if card has been flipped
let hasFlippedCard = false;
let firstCard, secondCard;

//flip your card
function flipCard() {
    this.classList.toggle('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false;

    checkForMatch();
}

//check if cards match
function checkForMatch() {
    if (firstCard === secondCard) { 
        disableCards();
        return;
    }

    unflipCards()
}

//disable flip event if cards match
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

//flip cards again if they don't match
function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }, 1500);
}

//count all moves player makes
function moveCoounter() {
    moves ++;
    counter.innerHTML = moves;
}

//NEED TO ADD FUNCTION THAT RESTARTS GAME IF 

//shuffle cards using immediately invoked function
(function shuffle() {
    cards.forEach(card => {
        let randomPos = math.floor(math.random() * 9);
        card.style.order = randomPos;
    });
}) ();

//adding comment




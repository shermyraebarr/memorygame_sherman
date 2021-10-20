// create cards array containing all cards
const cards = document.querySelectorAll('.memory-card');
let arrayOfCards = Array.from(cards); 

// add event listeners to each card to flip card when clicked
for (var i = 0; i < arrayOfCards.length; i++) {
    cards[i].addEventListener('click', flipCard); 
};

let hasFlippedCard = false;
let firstCard, secondCard;

// flip card
function flipCard() {
    this.classList.toggle('flip');
    if (!hasFlippedCard) {
        // first click
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    // assign value to secondCard
    hasFlippedCard = false;
    secondCard = this;

    checkForMatch();
}

// check if card values match
function checkForMatch() {
    // if match, disable flip
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        disableCards();
        return;
    }
    // no match --> flip card back over
    unflipCards();
}


// shuffle cards using immediately invoked function
(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
}) ()


// define function to disable card flip
function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
}

// define function to flip cards back over
function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }, 1500);
}






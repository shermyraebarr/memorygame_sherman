// create cards array containing all cards
const cards = document.querySelectorAll('.memory-card');
let arrayOfCards = Array.from(cards); 

// add event listeners to each card to flip card when clicked
for (var i = 0; i < arrayOfCards.length; i++) {
    cards[i].addEventListener('click', flipCard);
    cards[i].addEventListener('click', moveCounter); 
};

let hasFlippedCard = false;
let firstCard, secondCard;
var playerMoves = 0;

// shuffle cards using immediately invoked function
(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
}) ()


// flip card
function flipCard() {
    this.classList.add('flip');
    
    if (!hasFlippedCard) {
        // first card is first click
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    // assign value to secondCard
    hasFlippedCard = false;
    secondCard = this;
    playerMoves ++;

    checkForMatch();
}


// count remaining moves and update HTML element
totalMoves = parseInt(document.getElementById('moves').innerHTML)

function moveCounter() {
    var remainingMoves = totalMoves - playerMoves;
    document.getElementById('moves').innerText = remainingMoves;
    return;
}

console.log(remainingMoves)


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






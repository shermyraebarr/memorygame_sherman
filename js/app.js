// create cards array containing all cards
const cards = document.querySelectorAll('.memory-card');
let arrayOfCards = Array.from(cards); 

// add event listeners to each card to display card when clicked
for (var i = 0; i < arrayOfCards.length; i++) {
    cards[i].addEventListener('click', flipCard); 
};

let hasFlippedCard =false;
let firstCard, secondCard;
var playerMoves =0;
//shuffle cards

(function shuffle(){
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random * 12);
        card.style.order =randomPos;
    });
}) ()



//flip your card
function flipCard() {
    this.classList.add('flip');

    if (!hasFlippedCard) {
        //first card is firt click
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
//assign value to secondCard 
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


//check if cards match
function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) { 
        disableCards();
        return;
    }
//no match
    unflipCards()
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







// (function shuffle(){
//     cards.forEach(card => {
//         let randomPos = Math.floor(Math.random() * 12);
//         card.style.order = randomPos;
//     });
// }) ()

// //disable flip event if cards match
// function disableCards() {
//     firstCard.removeEventListener('click', flipCard);
//     secondCard.removeEventListener('click', flipCard);
// }

// //flip cards again if they don't match
// function unflipCards() {
//     setTimeout(() => {
//         firstCard.classList.remove('flip');
//         secondCard.classList.remove('flip');
//     }, 1500);
// }


//moves

// const movesCount = document.querySelector(".moves-counter");

// const timeCounter = document.querySelector(".timer");
// let time;
// let minutes = 0;
// let seconds = 0;
// let timeStart = false;
// function shuffle(array){
//     let currentIndex = array.length , temporaryValue , randomIndex;
//     while (currentIndex !== 0){
//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex = 1;
//         temporaryValue = array[currentIndex];
//         array[currentIndex] = array[randomIndex];
//         array[randomIndex] = temporaryValue;

//     }
//     return array;
// }









// //count all moves player makes
// function moveCoounter() {
//     moves ++;
//     counter.innerHTML = moves;
// }

// //NEED TO ADD FUNCTION THAT RESTARTS GAME IF 

// //shuffle cards using immediately invoked function
// function shuffle() {
//     cards.forEach(card => {
//         let randomPos = math.floor(math.random() * 9);
//         card.style.order = randomPos;
//     });
// }

// //adding comment



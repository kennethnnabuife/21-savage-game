const sumEl = document.getElementById("sum-el");

const showCards = document.getElementById("cards-el");

const declare = document.getElementById("declare");

const startBtn = document.getElementById("start-btn");

const newCard = document.getElementById("new-card");

const firstCard = Math.floor(Math.random() * 10);

const secondCard = Math.floor(Math.random() * 10);

let sum1 = firstCard + secondCard;

const show = [firstCard, secondCard];

const startGame = () => {
  /*cards.innerText = `Cards: ${firstCard} + ${secondCard}`;*/

  showCards.textContent = "Random Numbers: ";

  for (let i = 0; i < show.length; i += 1) {
    showCards.textContent += `${show[i]} `;
  }

  sumEl.innerText = `Total: ${sum1}`;

  if (sum1 <= 20) {
    declare.innerText = "Add another number";
  } else if (sum1 === 21) {
    declare.innerText = "You found 21 savage!😎😎😎";
  } else {
    declare.innerText = "You're out of the game!😭😭";
    newCard.removeEventListener("click", newSet);
  }
};

startBtn.addEventListener("click", startGame);

const newSet = () => {
  const newerCard = Math.floor(Math.random() * 11);
  // Push the card to the cards array
  sum1 += newerCard;
  show.push(newerCard);
  startGame();
};

newCard.addEventListener("click", newSet);

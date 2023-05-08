class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }

  get name() {
    return `${this.value} of ${this.suit}`;
  }

  get image() {
    return `https://deckofcardsapi.com/static/img/${this.code}.png`;
  }

  get code() {
    let valueCode;
    switch (this.value) {
      case 'Ace':
        valueCode = 'A';
        break;
      case 'Jack':
        valueCode = 'J';
        break;
      case 'Queen':
        valueCode = 'Q';
        break;
      case 'King':
        valueCode = 'K';
        break;
      default:
        valueCode = this.value;        
    }
    let suitCode;
    switch (this.suit) {
      case 'Hearts':
        suitCode = 'H';
        break;
      case 'Spades':
        suitCode = 'S';
        break;
      case 'Clubs':
        suitCode = 'C';
        break;
      case 'Diamonds':
        suitCode = 'D';
        break;    
    }
    return valueCode + suitCode;
  }
}

class Deck {
  constructor() {
    this.cards = [];
    const suits = ['Hearts', 'Spades', 'Clubs', 'Diamonds'];
    const values = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    for (let suit of suits) {
      for (let value of values) {
        const card = new Card(suit, value);
        this.cards.push(card);
      }
    }
  }
  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }
  deal_card() {
    if (this.cards.length > 0) {
      const card = this.cards.pop();
      alert(`You were dealt the ${card.name}`);
      return card;
    } else {
      alert('There are no more cards in the deck!');
      return null;
    }
  }
}

const deck = new Deck();

document.getElementById("btn").addEventListener("click", () => {
  deck.shuffle();
  const cardDiv = document.querySelector(".card");
  const card = deck.deal_card();
  if (card) {
    const cardImg = document.createElement("img");
    cardImg.src = card.image;
    cardDiv.innerHTML = "";
    cardDiv.appendChild(cardImg);
  } else {
    cardDiv.innerHTML = "There are no more cards in the deck!";
  }
});

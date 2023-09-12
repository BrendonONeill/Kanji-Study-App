export function checkCardAmount(number, maxNumber) {
    let cards;
    if (number > maxNumber) {
        cards = maxNumber;
    }
    else {
        cards = number;
    }
    return cards;
}
export function collectingCardsForGame(allCards, pickedDecks) {
    let gameCards = [];
    for (let s = 0; s < pickedDecks.length; s++) {
        let test = allCards[0][pickedDecks[s]];
        gameCards.push(test);
    }
    return gameCards;
}
export function randomCardSelection(deck, amount) {
    let newDeck = [];
    let sortSize = deck.length;
    for (let i = 0; i < amount; i++) {
        let pick = Math.floor(Math.random() * sortSize);
        newDeck.push(deck[pick]);
        deck.splice(pick, 1);
        sortSize--;
    }
    return newDeck;
}

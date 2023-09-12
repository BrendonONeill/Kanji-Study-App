
import { KanjiCard } from "./types"

export function checkCardAmount(number: number, maxNumber: number,) {
    let cards;
    if (number > maxNumber) {
        cards = maxNumber;
    }
    else {
        cards = number
    }
    return cards
}

export function collectingCardsForGame(allCards: KanjiCard[], pickedDecks: number[]) {
    let gameCards: KanjiCard[] = []
    for (let s = 0; s < pickedDecks.length; s++) {
        let test: KanjiCard = allCards[0][pickedDecks[s]];
        gameCards.push(test);
    }
    return gameCards
}

export function randomCardSelection(deck: KanjiCard[], amount: number) {

    let newDeck: KanjiCard[] = []
    let sortSize: number = deck.length;
    for (let i = 0; i < amount; i++) {
        let pick = Math.floor(Math.random() * sortSize);
        newDeck.push(deck[pick])
        deck.splice(pick, 1)
        sortSize--
    }
    return newDeck
}



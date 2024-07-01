
import { GameContext, KanjiCard } from "./types"


export function updateDeck(e, items, picked) {
    let eventValue: number = e.target.value;
    console.log("the addCardsToDeck function was called")
    if (e.target.classList.contains(`button-clicked-${items?.theme}`)) {
        e.target.classList.remove(`button-clicked-${items?.theme}`)
        picked(prev => (prev.filter(p => p !== Number(e.target.value))))
        items?.setMaxNumber(prev => prev - items.data.kanji.eventValue.length)

    }
    else {
        e.target.classList.add(`button-clicked-${items?.theme}`);
        picked(prev => [...prev, Number(e.target.value)])
        items?.setMaxNumber(prev => prev + items.data.kanji.eventValue.length)
    }
}


export function checkCardAmount(number: number, maxNumber: number,) {
    let cards;
    console.log("the checkCardAmount function was called")
    if (number > maxNumber) {
        cards = maxNumber;
    }
    else {
        cards = number
    }
    return cards
}

export function collectingCardsForGame(allCards: KanjiCard[], pickedDecks: number[]) {
    console.log("the collecting Cards For game function was called")
    let gameCards: KanjiCard[] = []
    for (let s = 0; s < pickedDecks.length; s++) {
        let test: KanjiCard = allCards[0][pickedDecks[s]];
        gameCards.push(test);
    }
    return gameCards
}

export function randomCardSelection(deck: KanjiCard[], amount: number) {

    let newDeck: KanjiCard[] = []
    console.log("RandomCardSelction was called")
    let sortSize: number = deck.length;
    for (let i = 0; i < amount; i++) {
        let pick = Math.floor(Math.random() * sortSize);
        newDeck.push(deck[pick])
        deck.splice(pick, 1)
        sortSize--
    }
    return newDeck
}

export function randomizeCards(items: GameContext, pickedNumbers) {
    if (items !== null) {
        let cardsNumber = checkCardAmount(items.number, items.maxNumber)
        let collectionOfCards: KanjiCard[] = collectingCardsForGame(items?.data, pickedNumbers)
        collectionOfCards = collectionOfCards.flat(Infinity);
        items.setCardsAmount(cardsNumber * 2)
        let sortedCards: KanjiCard[] = randomCardSelection(collectionOfCards, cardsNumber)
        items?.setGameCards([...sortedCards]);
    }
}





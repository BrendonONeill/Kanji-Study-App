import { GameContext, KanjiCard } from "./types"





export function updateDeck(e, items, picked) {
    let eventValue: string = e.target.value;
    console.log("the addCardsToDeck function was called")
    if (e.target.classList.contains(`button-clicked-${items?.theme}`)) {
        e.target.classList.remove(`button-clicked-${items?.theme}`)
        picked(prev => (prev.filter(p => p !== e.target.value)))
        items?.setMaxNumber(prev => prev - items.data[items.typeOfDeck][eventValue].length)

    }
    else {
        e.target.classList.add(`button-clicked-${items?.theme}`);
        picked(prev => [...prev, e.target.value])
        items?.setMaxNumber(prev => prev + items.data[items.typeOfDeck][eventValue].length)
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










export function collectingCardsForGame(allCards: KanjiCard[], pickedDecks: string[]) {
    console.log("the collecting Cards For game function was called")
    let gameCards: KanjiCard[] = []
    //debugger
    for (let s = 0; s < pickedDecks.length; s++) {
        let test: KanjiCard = allCards[pickedDecks[s]];
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
    console.log(pickedNumbers)
    if (items !== null) {
        let cardsNumber = checkCardAmount(items.number, items.maxNumber)
        console.log("Items: ", items.data.kanji, pickedNumbers)
        let collectionOfCards: KanjiCard[] = collectingCardsForGame(items?.data[items.typeOfDeck], pickedNumbers)
        collectionOfCards = collectionOfCards.flat(Infinity);
        items.setCardsAmount(cardsNumber * 2)
        let sortedCards: KanjiCard[] = randomCardSelection(collectionOfCards, cardsNumber)
        items?.setGameCards([...sortedCards]);
        console.log(items.gameCards);
    }
}





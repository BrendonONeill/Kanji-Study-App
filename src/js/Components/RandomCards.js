export const random = (e, kanji, number, pickedNumbers, maxNumber, gameCards, setGameCards, setCardsAmount) => {
    debugger;
    e.preventDefault();
    if (number > maxNumber)
        number = maxNumber;
    setGameCards([]);
    let collectionOfCards = [];
    for (let s = 0; s < pickedNumbers.length; s++) {
        let test = kanji[0][pickedNumbers[s]];
        collectionOfCards.push(test);
    }
    let sortKanji = collectionOfCards.flat(Infinity);
    let sortedCards = [];
    setCardsAmount(number * 2);
    for (let i = 0; i < number; i++) {
        let sortSize = sortKanji.length;
        let pick = Math.floor(Math.random() * sortSize);
        console.log(pick + ": This is your pick");
        sortedCards.push(sortKanji[pick]);
        sortKanji.splice(pick, 1);
    }
    setGameCards(gameCards => [...gameCards, ...sortedCards]);
};

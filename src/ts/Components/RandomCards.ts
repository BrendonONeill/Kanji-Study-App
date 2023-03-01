

export const random = (e: React.ChangeEvent<HTMLInputElement> | React.FormEvent,kanji: object[], number: number, pickedNumbers: number[], maxNumber: number, gameCards: object[], setGameCards: React.Dispatch<React.SetStateAction<object[]>>, setCardsAmount: React.Dispatch<React.SetStateAction<number>> ) => {
    debugger
    e.preventDefault();
    if(number > maxNumber) number = maxNumber;
    setGameCards([]);
    let collectionOfCards: object[] = []
    for(let s = 0; s < pickedNumbers.length; s++ )
    {
      let test: object[] = kanji[0][pickedNumbers[s]];
      collectionOfCards.push(test);
    }
    let sortKanji = collectionOfCards.flat(Infinity);
    let sortedCards: object[] = []
    setCardsAmount(number * 2)
    for(let i=0; i < number; i++)
    {
     let sortSize: number = sortKanji.length;
     let pick = Math.floor(Math.random() * sortSize);
     console.log(pick + ": This is your pick")
     sortedCards.push(sortKanji[pick])
     sortKanji.splice(pick,1)
    }
    setGameCards(gameCards => [...gameCards, ...sortedCards]);
  }
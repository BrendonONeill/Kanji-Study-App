export type KanjiCard = {
    id: number,
    kanji: string,
    english: string,
    romaji: string[],
    onyomi: string[],
    kunyomi: string[],
}

export type Data =
    {
        1: KanjiCard[],
        2: KanjiCard[],
        3: KanjiCard[],
        4: KanjiCard[],

    }


export type GameContext = {
    data: KanjiCard[] | null;
    setData: React.Dispatch<React.SetStateAction<KanjiCard[]>>
    gameCards: KanjiCard[];
    setGameCards: React.Dispatch<React.SetStateAction<KanjiCard[]>>
    score: number
    setScore: React.Dispatch<React.SetStateAction<number>>
    cardsAmount: number;
    setCardsAmount: React.Dispatch<React.SetStateAction<number>>
    finished: boolean;
    setFinished: React.Dispatch<React.SetStateAction<boolean>>;
    number: number;
    setNumber: React.Dispatch<React.SetStateAction<number>>
    maxNumber: number;
    setMaxNumber: React.Dispatch<React.SetStateAction<number>>
    green: KanjiCard[];
    setGreen: React.Dispatch<React.SetStateAction<KanjiCard[]>>;
    grey: KanjiCard[];
    setGrey: React.Dispatch<React.SetStateAction<KanjiCard[]>>;
    red: KanjiCard[];
    setRed: React.Dispatch<React.SetStateAction<KanjiCard[]>>;
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>
    decks: number[];
    setDecks: React.Dispatch<React.SetStateAction<number[]>>
}
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
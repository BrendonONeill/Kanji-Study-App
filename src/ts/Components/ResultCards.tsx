import GlobalContext from "../GlobalContext";
import { useContext } from "react";

type KanjiCard = {
  id: number,
  kanji: string,
  english: string,
  romaji: string[],
  onyomi: string[],
  kunyomi: string[],
}

type PropTypes =
  {
    card: KanjiCard[] | undefined,
    text: string,
  }

function ResultCards({ card, text }: PropTypes) {
  const GlobalItems = useContext(GlobalContext);
  return (
    <>
      <div className=" my-[1rem]">
        <p className=" p-[1rem] bg-[#0096C7] dark:bg-[#5A189A] rounded-[5px] text-[white] font-bold text-[1.4rem]">({card ? card.length : null}/{GlobalItems?.cardsAmount ? GlobalItems?.cardsAmount / 2 : 0}) {text} </p>
        <div className="p-4 flex flex-col items-center gap-3 md:flex-row md:flex-wrap">
          {
            GlobalItems?.typeOfDeck === "kanji" ?
              card ?
                card.map((c) => (
                  <div key={c.id} className=" border-[3px] border-[#0096C7] dark:border-[#0bb744] p-6 bg-white dark:bg-[#1C1C21] dark:text-white rounded-[10px] w-[100%] sm:basis-[80%] lg:basis-[24%] flex flex-col gap-4">
                    <p className="mx-auto my-[0.5rem] p-2 font-bold bg-[#0096C7] dark:bg-[#0BB744] dark:text-black text-white rounded-md w-[80%] text-center ">{c.kanji}</p>
                    <div className="card-divider border-t-[#0096c7] dark:border-t-[#0BB744]"><p className=" absolute font-bold top-[-15px] left-2 bg-white dark:bg-[#1C1C21] px-1">Meaning</p> <p className=" bg-[#CAF0F8] dark:bg-[#2F3037] min-w-[35px] text-center rounded-[5px] p-1">{c.english}</p></div>
                    <div className="card-divider border-t-[#0096c7] dark:border-t-[#0BB744]"><p className=" absolute font-bold top-[-15px] left-2 bg-white dark:bg-[#1C1C21] px-1">Rōmaji</p> {c.romaji.map((romaji) => (
                      <p className=" bg-[#CAF0F8] dark:bg-[#2F3037] min-w-[35px] text-center rounded-[5px] p-1">{romaji}</p>
                    ))}</div>
                    <div className="card-divider border-t-[#0096c7] dark:border-t-[#0BB744]"><p className=" absolute font-bold top-[-15px] left-2 bg-white dark:bg-[#1C1C21] px-1">On’yomi</p> {c.onyomi.map((onyomi) => (
                      <p className=" bg-[#CAF0F8] dark:bg-[#2F3037] min-w-[35px] text-center rounded-[5px] p-1">{onyomi}</p>
                    ))}</div>
                    <div className="card-divider border-t-[#0096c7] dark:border-t-[#0BB744]"><p className=" absolute font-bold top-[-15px] left-2 bg-white dark:bg-[#1C1C21] px-1">Kun’yomi</p> {c.kunyomi.map((kunyomi) => (
                      <p className=" bg-[#CAF0F8] dark:bg-[#2F3037] min-w-[35px] text-center rounded-[5px] p-1">{kunyomi}</p>
                    ))}</div>
                  </div>
                )) : null :
              GlobalItems?.typeOfDeck === "katakana" || GlobalItems?.typeOfDeck === "hiragana" ?
                card ?
                  card.map((c) => (
                    <div key={c.id} className=" mx-auto font-bold bg-white dark:bg-[#1C1C21] dark:text-white rounded-[5px] w-[300px] basis-[80%] sm:basis-[45%] lg:basis-[18%] ">
                      <p className="mx-auto rounded-t-[5px]  p-[1rem] bg-[#0096C7] dark:bg-[#0BB744] dark:text-black text-white text-center">{c[GlobalItems.typeOfDeck]}</p>
                      <p className="p-[1rem] text-center">{c.english} </p>
                    </div>
                  )) : null : null
          }
        </div>
      </div>
    </>
  )
}

export default ResultCards
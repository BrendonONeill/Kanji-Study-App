import GlobalContext from "../GlobalContext";
import { useContext } from "react";

function ResultCards({card, style, text}) {
  const GlobalItems = useContext(GlobalContext);
  return (
    <>
    <div className=" my-[1rem]">
        <p className=" p-[1rem] bg-[#0096C7] dark:bg-[#5A189A] rounded-md text-[white] font-bold text-[1.4rem]">({card.length}/{GlobalItems?.cardsAmount/2}) {text} </p>
        <div className="flex gap-3 flex-wrap flex-col sm:flex-row items-start p-[1rem] justify-start">
    {
        card.map((c) => (
          <div key={c.id} className=" font-bold  border-[3px] border-[#0096C7] dark:border-[#0bb744] p-[2rem] bg-white dark:bg-[#1C1C21] dark:text-white rounded-[10px] w-[300px] sm:basis-[80%] lg:basis-[24%] gap-3">
          <p className="mx-auto my-[0.5rem] p-2 bg-[#0096C7] dark:bg-[#0BB744] dark:text-black text-white rounded-md w-[80%] text-center ">{c.kanji}</p>
          <p>Meaning: {c.english} </p>
          <p>Rōmaji: {c.romaji}</p>
          <p>On’yomi: {c.onyomi[0]}</p>
          <p>Kun’yomi: {c.kunyomi[0]}</p>
      </div>
        ))
    }
    </div>
    </div>
    </>
  )
}

export default ResultCards
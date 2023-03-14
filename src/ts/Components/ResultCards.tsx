import GlobalContext from "../GlobalContext";
import { useContext } from "react";

function ResultCards({card, style, text}) {
  const GlobalItems = useContext(GlobalContext);
  return (
    <>
    <div className=" my-[1rem]">
        <p className=" p-[1rem] bg-[#0096C7] rounded-md text-[white] font-bold text-[1.4rem]">({card.length}/{GlobalItems?.cardsAmount/2}) {text} </p>
    {
        card.map((c) => (
            <div className="m-[1rem] font-bold p-[2rem] bg-white rounded-[10px] max-w-[300px] sm:basis-[45%] lg:basis-[24%]" style={style}>
                    <p className="p-2 bg-[#0096C7] text-white rounded-md text-center w-[60%] sm:w-[40%] ">{c.kanji}</p>
                    <p>Meaning: {c.english} </p>
                    <p>Rōmaji: {c.romaji}</p>
                    <p>On’yomi: {c.onyomi[0]}</p>
                    <p>Kun’yomi: {c.kunyomi[0]}</p>
            </div>
        ))
    }
    </div>
    </>
  )
}

export default ResultCards
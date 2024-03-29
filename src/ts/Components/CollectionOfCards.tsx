
import GlobalContext from "../GlobalContext";
import { useContext, useEffect } from "react";
import { KanjiCard } from "../Lib/types";

function CollectionOfCards() {
    const GlobalItems = useContext(GlobalContext);

    useEffect(() => {
        if (GlobalItems) {
            GlobalItems.setMaxNumber(0)
        }
    }, [])

    return (
        <div className=" bg-blue-300 dark:bg-[#7B2CBF] w-[100%] p-[1rem] flex rounded-[10px] gap-2 flex-col my-[5rem]">
            {
                GlobalItems?.decks.map((x: number, index) =>
                (
                    <div key={index} className=" pb-[4rem]">
                        <h2 className="mx-auto w-[80%] sm:w-[50%] text-center font-bold text-[1.5rem] rounded-md bg-white dark:bg-[#0BB744]">N5 Deck {x}</h2>
                        <div className="flex gap-3 flex-wrap flex-col sm:flex-row items-start p-[1rem] md:items-center">
                            {
                                GlobalItems?.data[0][x].map((d: KanjiCard) => (
                                    <div key={d.id} className=" font-bold p-[2rem] bg-white dark:bg-[#1C1C21] dark:text-white rounded-[10px] w-[300px] basis-[80%] sm:basis-[45%] lg:basis-[24%] ">
                                        <p className="mx-auto my-[0.5rem] p-2 bg-[#0096C7] dark:bg-[#0BB744] dark:text-black text-white rounded-md text-center w-[80%]">{d.kanji}</p>
                                        <p>Meaning: {d.english} </p>
                                        <p>Rōmaji: {d.romaji[0]}</p>
                                        <p>On’yomi: {d.onyomi.map((x) => (
                                            <p className=" inline-block mr-[0.8rem]">{x} </p>
                                        ))}</p>
                                        <p>Kun’yomi: {d.kunyomi.map((x) => (
                                            <p className=" inline-block mr-[0.8rem]">{x} </p>
                                        ))}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default CollectionOfCards
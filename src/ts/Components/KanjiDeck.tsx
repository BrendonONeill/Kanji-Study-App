import { KanjiCard } from "../Lib/types";

function KanjiDeck({ GlobalItems }) {
    return (
        <>
            {
                GlobalItems?.decks.map((x: number, index) =>
                (
                    <div key={index} className=" pb-[4rem]">
                        <h2 className="mx-auto w-[80%] sm:w-[50%] md:w-[20%] text-center font-bold text-[1.5rem] rounded-md bg-white dark:bg-[#0BB744]">N5 Deck {x}</h2>
                        <div className="flex gap-3 flex-wrap flex-col sm:flex-row items-start p-[1rem] md:justify-center md:items-center">
                            {
                                GlobalItems?.data.kanji[x].map((d: KanjiCard) => (
                                    <div key={d.id} className=" pt-[0.5rem] bg-white dark:bg-[#1C1C21] dark:text-white rounded-[10px] w-[300px] basis-[80%] sm:basis-[45%] lg:basis-[24%] h-[340px] ">
                                        <p className=" font-bold mx-auto my-[0.5rem] p-2 bg-[#0096C7] dark:bg-[#0BB744] dark:text-black text-white rounded-md text-center w-[80%]">{d.kanji}</p>
                                        <p className=" text-center font-bold text-[20px] m-auto w-[50%] mb-2" >{d.english} </p>
                                        <div className="bg-[#CAF0F8] dark:bg-[#2F3037] p-[0.5rem] flex flex-wrap justify-start h-[80px] gap-1">
                                        <p className=" font-bold bg-[#0096C7] dark:bg-[#0BB744] text-white dark:text-black rounded-[5px] h-[30px] p-1">Rōmaji</p>
                                        {d.romaji.map((x) => (
                                            <p className="p-1">{d.romaji[d.romaji.length - 1] === x ? x : x + ","} </p>
                                        ))}
                                        </div>
                                        <div className="p-[0.5rem] flex flex-wrap h-[80px] gap-1 justify-start">
                                        <p className=" font-bold bg-[#0096C7] dark:bg-[#0BB744] text-white dark:text-black  rounded-[5px] h-[30px] p-1">On’yomi</p> 
                                        {d.onyomi.map((x) => (
                                            <p className="p-1">{d.onyomi[d.onyomi.length - 1] === x ? x : x + ","} </p>
                                        ))}
                                        </div>
                                        <div className="bg-[#CAF0F8] dark:bg-[#2F3037] rounded-b-[5px] h-[80px] p-[0.5rem] flex flex-wrap gap-1 justify-start">
                                        <p className="font-bold bg-[#0096C7] dark:bg-[#0BB744] text-white dark:text-black  rounded-[5px] h-[30px] p-1">Kun’yomi</p> 
                                        {d.kunyomi.map((x) => (
                                            <p className="p-1">{d.kunyomi[d.kunyomi.length - 1] === x ? x : x + ","} </p>
                                        ))}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </>
    )
}

export default KanjiDeck
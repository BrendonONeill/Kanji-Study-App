
function LetterDeck({ GlobalItems, type }) {

    let test = GlobalItems?.data[type] || null
    return (
        <>
            {
                type === "hiragana" ?
                    GlobalItems?.hiraganaLetter.map((x, index) =>
                    (
                        <div key={index} className=" pb-[4rem]">
                            <h1 className=" bg-white p-[1rem] rounded-[5px] w-[180px] mx-auto text-center font-bold text-[24px]">{x}</h1>
                            <div className="flex gap-3 flex-wrap flex-col sm:flex-row items-start p-[1rem] md:items-center justify-center">
                                {test[x]?.map((g) => (
                                    <div key={g.id} className=" font-bold bg-white dark:bg-[#1C1C21] dark:text-white rounded-[5px] w-[300px] basis-[80%] sm:basis-[45%] lg:basis-[18%] ">
                                        <p className="mx-auto rounded-t-[5px]  p-[1rem] bg-[#0096C7] dark:bg-[#0BB744] dark:text-black text-white text-center">{g.hiragana}</p>
                                        <p className="p-[1rem] text-center">{g.english} </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                    :
                    type === "katakana" ?
                        GlobalItems?.katakanaLetter.map((x, index) =>
                        (

                            <div key={index} className=" pb-[4rem]">
                                <h1 className=" bg-white p-[1rem] rounded-[5px] w-[200px] mx-auto text-center font-bold text-[24px]">{x}</h1>
                                <div className="flex gap-3 flex-wrap flex-col sm:flex-row items-start p-[1rem] md:items-center justify-center">
                                    {test[x]?.map((g) => (
                                        <div key={g.id} className=" font-bold bg-white dark:bg-[#1C1C21] dark:text-white rounded-[5px] w-[300px] basis-[80%] sm:basis-[45%] lg:basis-[18%] ">
                                            <p className="mx-auto rounded-t-[5px]  p-[1rem] bg-[#0096C7] dark:bg-[#0BB744] dark:text-black text-white text-center">{g.katakana}</p>
                                            <p className="p-[1rem] text-center">{g.english} </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))
                        : null}
            {

            }
        </>
    )
}

export default LetterDeck
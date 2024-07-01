
function LetterDeck({ GlobalItems, type }) {

    let test = GlobalItems?.data[type] || null
    return (
        <>
            {
                type === "hiragana" ?
                    GlobalItems?.hiraganaLetter.map((x, index) =>
                    (
                        <div key={index} className=" pb-[4rem]">
                            <div className="flex gap-3 flex-wrap flex-col sm:flex-row items-start p-[1rem] md:items-center">
                                {test[x].map((g) => (
                                    <div key={g.id} className=" font-bold p-[2rem] bg-white dark:bg-[#1C1C21] dark:text-white rounded-[10px] w-[300px] basis-[80%] sm:basis-[45%] lg:basis-[24%] ">
                                        <p className="mx-auto my-[0.5rem] p-2 bg-[#0096C7] dark:bg-[#0BB744] dark:text-black text-white rounded-md text-center w-[80%]">{g.hiragana}</p>
                                        <p>English: {g.english} </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                    :
                    GlobalItems?.katakanaLetter.map((x, index) =>
                    (
                        <div key={index} className=" pb-[4rem]">
                            <div className="flex gap-3 flex-wrap flex-col sm:flex-row items-start p-[1rem] md:items-center">
                                {test[x].map((g) => (
                                    <div key={g.id} className=" font-bold p-[2rem] bg-white dark:bg-[#1C1C21] dark:text-white rounded-[10px] w-[300px] basis-[80%] sm:basis-[45%] lg:basis-[24%] ">
                                        <p className="mx-auto my-[0.5rem] p-2 bg-[#0096C7] dark:bg-[#0BB744] dark:text-black text-white rounded-md text-center w-[80%]">{g.katakana}</p>
                                        <p>English: {g.english} </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
            }
            {

            }
        </>
    )
}

export default LetterDeck
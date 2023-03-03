

function CollectionOfCards({data}) {
  return (
    <div className=" bg-blue-300 w-[100%] p-[1rem] flex rounded-[10px] gap-2 flex-col my-[5rem]">
        <div>
        <h2 className="mx-auto w-[80%] sm:w-[20%] text-center font-bold text-[1.5rem] rounded-md bg-white">Deck 1</h2>
        
        <div className="flex gap-3 flex-wrap flex-col sm:flex-row items-center p-[1rem]">
        
        {
            data[0][1].map((d) => (
                <div className=" font-bold p-[2rem] bg-white rounded-[10px] w-[200px] sm:basis-[45%] lg:basis-[24%] ">
                    <p className="p-2 bg-[#0096C7] text-white rounded-md text-center w-[60%] sm:w-[40%] ">{d.kanji}</p>
                    <p>Meaning: {d.english} </p>
                    <p>Rōmaji: {d.romaji}</p>
                    <p>On’yomi: {d.onyomi[0]}</p>
                    <p>Kun’yomi: {d.kunyomi[0]}</p>
                </div>
            ))
        }
        </div>
        </div>
        <div>
        <h2 className="mx-auto w-[80%] sm:w-[20%] text-center font-bold text-[1.5rem] rounded-md bg-white">Deck 2</h2>
        
        <div className="flex gap-3 flex-wrap flex-col sm:flex-row items-center p-[1rem]">
        
        {
            data[0][2].map((d) => (
                <div className=" font-bold p-[2rem] bg-white rounded-[10px] w-[200px] sm:basis-[45%] lg:basis-[24%]">
                    <p className="p-2 bg-[#0096C7] text-white rounded-md text-center w-[60%] sm:w-[40%] ">{d.kanji}</p>
                    <p>Meaning: {d.english} </p>
                    <p>Rōmaji: {d.romaji}</p>
                    <p>On’yomi: {d.onyomi[0]}</p>
                    <p>Kun’yomi: {d.kunyomi[0]}</p>
                </div>
            ))
        }
        </div>
        </div>
    </div>
  )
}

export default CollectionOfCards
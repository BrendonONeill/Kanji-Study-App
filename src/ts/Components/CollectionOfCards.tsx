

function CollectionOfCards({data}) {
  return (
    <div className=" bg-blue-300 w-[100%] p-[1rem] flex rounded-[10px] gap-2 flex-col my-[5rem]">
        <div className="flex gap-3">
        <h2>Deck 1</h2>
        {
            data[0][1].map((d) => (
                <div className=" font-bold p-[2rem] bg-white rounded-[10px] w-[200px] h-[150px] ">
                    <p>{d.kanji}</p>
                    <p>Reading: {d.reading}</p>
                    <p>English: {d.english}</p>
                </div>
            ))
        }
        </div>
        <div className="flex gap-3">
        <h2>Deck 2</h2>
        {
            data[0][2].map((d) => (
                <div className=" font-bold p-[2rem] bg-white rounded-[10px] w-[200px] h-[150px] ">
                    <p>{d.kanji}</p>
                    <p>Reading: {d.reading}</p>
                    <p>English: {d.english}</p>
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default CollectionOfCards
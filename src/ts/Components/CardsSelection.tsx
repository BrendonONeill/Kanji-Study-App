import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../GlobalContext";
import { useContext } from "react";


function CardsSelection() {
  const navigate = useNavigate();
  const GlobalItems = useContext(GlobalContext);

  useEffect(() => {
      if(GlobalItems?.gameCards.length !== 0)
      {
       
        navigate(`/game`);
      }  
  },[GlobalItems?.gameCards])

  const random = (e: React.ChangeEvent<HTMLInputElement> | React.FormEvent, pickedNumbers: number[] ) => {
    e.preventDefault();
    if(GlobalItems !== null )
    {
      let cardsNumber = 0
      if(GlobalItems.number > GlobalItems.maxNumber)
       {
         cardsNumber = GlobalItems.maxNumber;
       }
       else
       {
         cardsNumber = GlobalItems.number
       }
      GlobalItems.setGameCards([]);
      let collectionOfCards: object[] = []
      for(let s = 0; s < pickedNumbers.length; s++ )
      {
        let test: object[] = GlobalItems?.data[0][pickedNumbers[s]];
        collectionOfCards.push(test);
      }
      let sortKanji = collectionOfCards.flat(Infinity);
      let sortedCards: object[] = []
      GlobalItems.setCardsAmount(cardsNumber * 2)
      for(let i=0; i < cardsNumber; i++)
      {
      let sortSize: number = sortKanji.length;
      let pick = Math.floor(Math.random() * sortSize);
      
      sortedCards.push(sortKanji[pick])
      sortKanji.splice(pick,1)
      }
     GlobalItems?.setGameCards(gameCards => [...gameCards, ...sortedCards]);
    } 
  }


    let [pickedNumbers, setPickedNumbers] = useState<number[]>([])
    
    const addCardsToDeck = (e) => {
        let eventValue: number = e.target.value;
        if(e.target.classList.contains(`button-clicked-${GlobalItems?.theme}`)){
            e.target.classList.remove(`button-clicked-${GlobalItems?.theme}`)
            setPickedNumbers(prev => (prev.filter(p => p !== Number(e.target.value))))
            GlobalItems?.setMaxNumber(prev => prev - GlobalItems.data[0][eventValue].length)
        }
        else{e.target.classList.add(`button-clicked-${GlobalItems?.theme}`);
        setPickedNumbers(prev => [...prev, Number(e.target.value)])
        GlobalItems?.setMaxNumber(prev => prev + GlobalItems.data[0][eventValue].length)}
    }

  return (
    <div className=" pb-[5rem]">
        <div className=" p-[2rem] flex gap-[1rem] justify-center">
            <button value={1} className="p-[1.5rem] hover:bg-[#b35500] bg-[#FF7900] rounded-[10px] text-[#000] font-bold" onClick={(event) => addCardsToDeck(event)}>1</button>
            <button value={2} className="p-[1.5rem] hover:bg-[#b35500] bg-[#FF7900] rounded-[10px] text-[#000] font-bold" onClick={(event) => addCardsToDeck(event)}>2</button>
        </div>
    
        <form className="max-w-[80%] md:max-w-[60%] lg:max-w-[40%] mx-auto mt-2 p-[1rem] flex md:flex-row flex-col justify-center items-center" onSubmit={(e) => random( e, pickedNumbers)}>
       
      <input className=" border-[4px] rounded-[10px] border-[#023E8A] dark:border-[#0BB744] mx-[5px] w-[200px] p-[0.5rem]" type="number" id="number" placeholder="1" min={1} onChange={(e) => GlobalItems?.setNumber(Number(e.target.value))}  />
      <p className=" p-[1rem] dark:text-white">(Max {GlobalItems?.maxNumber})</p>
      { GlobalItems?.maxNumber !== 0 ? 
      <button type="submit" className=" p-[1rem] bg-[#FF7900] hover:bg-[#b35500] text-[#000] font-bold rounded-[10px] cursor-pointer ">Start Game</button>: null
    }
      </form>
    </div>
  )
}

export default CardsSelection
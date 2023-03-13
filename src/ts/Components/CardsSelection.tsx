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
        console.log("it works")
        navigate(`/game`);
      }  
  },[GlobalItems?.gameCards])

  const random = (e: React.ChangeEvent<HTMLInputElement> | React.FormEvent, pickedNumbers: number[] ) => {
    debugger
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
      console.log(pick + ": This is your pick")
      sortedCards.push(sortKanji[pick])
      sortKanji.splice(pick,1)
      }
     GlobalItems?.setGameCards(gameCards => [...gameCards, ...sortedCards]);
    } 
  }


    let [pickedNumbers, setPickedNumbers] = useState<number[]>([])
    
    const test = (e) => {
        debugger
        let eventValue: number = e.target.value;
        //Need to look into bug with removing cards as its adding them but not taking away cards
        if(e.target.classList.contains("test")){
            e.target.classList.remove("test")
            setPickedNumbers(prev => (prev.filter(p => p !== Number(e.target.value))))
            GlobalItems?.setMaxNumber(prev => prev - GlobalItems.data[0][eventValue].length)
        }
        else{e.target.classList.add("test");
        setPickedNumbers(prev => [...prev, Number(e.target.value)])
        GlobalItems?.setMaxNumber(prev => prev + GlobalItems.data[0][eventValue].length)
        console.log("This is the pickedNumbers: " + pickedNumbers)}
    }

  return (
    <div>
        <div className=" p-[2rem] flex gap-[1rem] justify-center">
            <button value={1} className="p-[1.5rem] bg-[#0096C7] rounded-[10px] text-[white] font-bold" onClick={(event) => test(event)}>1</button>
            <button value={2} className="p-[1.5rem] bg-[#0096C7] rounded-[10px] text-[white] font-bold" onClick={(event) => test(event)}>2</button>
        </div>
    
        <form className="max-w-[40%] mx-auto mt-2 p-[1rem] flex justify-center items-center" onSubmit={(e) => random( e, pickedNumbers)}>
       
      <input className=" border-[4px] rounded-[10px] border-[#023E8A] mx-[5px] w-[200px] p-[0.5rem]" type="number" id="number" placeholder="1" min={1} onChange={(e) => GlobalItems?.setNumber(Number(e.target.value))}  />
      <p className=" p-[1rem]">(Max {GlobalItems?.maxNumber})</p>
      { GlobalItems?.maxNumber !== 0 ? 
      <button type="submit" className=" p-[1rem] bg-[#D66218] text-[#fff] font-bold rounded-[10px] cursor-pointer ">Generate Cards</button>: null
    }
      </form>
    </div>
  )
}

export default CardsSelection
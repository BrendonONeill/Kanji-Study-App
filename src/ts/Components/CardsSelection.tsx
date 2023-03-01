import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

type PropTyping = {
  num: React.Dispatch<React.SetStateAction<number>>;
  random:  (e: React.ChangeEvent<HTMLInputElement> | React.FormEvent, kanji: object[], number: number, pickedNumbers: number[], maxNumber: number , gameCards : object[], setGameCards, setCardsAmount) => void;
  data: object[];
  number: number;
  maxNumber: number;
  setMaxNumber: React.Dispatch<React.SetStateAction<number>>;
  setGameCards: React.Dispatch<React.SetStateAction<object[]>>;
  setCardsAmount: React.Dispatch<React.SetStateAction<number>>;
  gameCards: object[];

};
function CardsSelection(idea: PropTyping) {
  const navigate = useNavigate();

  useEffect(() => {
    if(idea.gameCards.length !== 0)
    {
      console.log("it works")
      navigate(`/game`);
    }
  },[idea.gameCards])



    let [pickedNumbers, setPickedNumbers] = useState<number[]>([])
    
    const test = (e,data: object[]) => {
        debugger
        if(e.target.classList.contains("test")){
            e.target.classList.remove("test")
            setPickedNumbers(prevState => (prevState.filter(p => p !== e.target.value)))
            idea.setMaxNumber(prev => prev - data[0][e.target.value].length)
        }
        else{e.target.classList.add("test");
        setPickedNumbers(prev => [...prev, Number(e.target.value)])
        idea.setMaxNumber(prev => prev + data[0][e.target.value].length)
        console.log("This is the pickedNumbers: " + pickedNumbers)}
    }

  return (
    <div>
        <div className=" p-[2rem] flex gap-[1rem] justify-center">
            <button value={1} className="p-[1.5rem] bg-[#0096C7] rounded-[10px] text-[white] font-bold" onClick={(event) => test(event, idea.data)}>1</button>
            <button value={2} className="p-[1.5rem] bg-[#0096C7] rounded-[10px] text-[white] font-bold" onClick={(event) => test(event, idea.data)}>2</button>
        </div>
    
        <form className="max-w-[40%] mx-auto mt-2 p-[1rem] flex justify-center items-center" onSubmit={(e) => idea.random( e, idea.data, idea.number, pickedNumbers, idea.maxNumber, idea.gameCards, idea.setGameCards, idea.setCardsAmount)}>
       
      <input className=" border-[4px] rounded-[10px] border-[#023E8A] mx-[5px] w-[200px] p-[0.5rem]" type="number" id="number" placeholder="1" min={1} onChange={(e) => idea.num(Number(e.target.value))}  />
      <p className=" p-[1rem]">(Max {idea.maxNumber})</p>
      { idea.maxNumber !== 0 ? 
      <button type="submit" className=" p-[1rem] bg-[#D66218] text-[#fff] font-bold rounded-[10px] cursor-pointer ">Generate Cards</button>: null
    }
      </form>
    </div>
  )
}

export default CardsSelection
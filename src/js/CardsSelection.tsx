
import React, {useState} from "react";
function CardsSelection({num, random, data, number}) {
    let [pickedNumbers, setPickedNumbers] = useState<number[]>([])
    let [maxNumber, setMaxNumber] = useState(0)
    const test = (e,data) => {
        debugger
        if(e.target.classList.contains("test")){
            e.target.classList.remove("test")
            setPickedNumbers(prevState => (prevState.filter(p => p !== e.target.value)))
            setMaxNumber(prev => prev - data[0][e.target.value].length)
        }
        else{e.target.classList.add("test");
        setPickedNumbers(prev => [...prev, Number(e.target.value)])
        setMaxNumber(prev => prev + data[0][e.target.value].length)
        console.log("This is the pickedNumbers: " + pickedNumbers)}
    }

  return (
    <div>
        <div className=" p-[2rem] flex gap-[1rem] justify-center">
            <button value={1} className="p-[1.5rem] bg-[#0096C7] rounded-[10px] text-[white] font-bold" onClick={(event) => test(event, data)}>1</button>
            <button value={2} className="p-[1.5rem] bg-[#0096C7] rounded-[10px] text-[white] font-bold" onClick={(event) => test(event, data)}>2</button>
        </div>
        <form className="max-w-[40%] mx-auto mt-2 p-[1rem] flex justify-center items-center" onSubmit={(e) => random(e, data, number, pickedNumbers)}>
       
      <input className=" border-[4px] rounded-[10px] border-[#023E8A] mx-[5px] p-[0.5rem]" type="number" id="number" placeholder="1" min={1} onChange={(e) => num(Number(e.target.value))}  />
      <p className=" p-[1rem]">(Max {maxNumber})</p>
      { maxNumber !== 0 ? 
      <button type="submit" className=" p-[1rem] bg-[#D66218] text-[#fff] font-bold rounded-[10px] cursor-pointer ">Generate Cards</button>: null
    }
      </form>
    </div>
  )
}

export default CardsSelection
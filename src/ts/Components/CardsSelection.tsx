import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../GlobalContext";
import { useContext } from "react";
import { updateDeck, randomizeCards } from "../Lib/startGame"
import Loading from "./Loading";

function CardsSelection() {
  const navigate = useNavigate();
  const GlobalItems = useContext(GlobalContext);
  let [pickedNumbers, setPickedNumbers] = useState<string[]>([])

  useEffect(() => {
    if (GlobalItems?.gameCards.length !== 0) {
      navigate(`/game`);
    }
  }, [GlobalItems?.gameCards])

  const random = (e: React.ChangeEvent<HTMLInputElement> | React.FormEvent, pickedNumbers: string[]) => {
    e.preventDefault();
    randomizeCards(GlobalItems, pickedNumbers)
  }

  const addCardsToDeck = (e) => {
    updateDeck(e, GlobalItems, setPickedNumbers)
  }



  if (GlobalItems?.data !== null) {
    return (
      <>
        {
          GlobalItems?.typeOfDeck === "" || GlobalItems?.typeOfDeck === "kanji" ?

            <div className=" pb-[5rem] mt-[4rem]">
              <div className=" p-[2rem] flex gap-[1rem] justify-center">
                {
                  GlobalItems?.decks.map((x, index) => (
                    <button key={index} value={x} className="p-[0.8rem] hover:bg-[#b35500] bg-[#FF7900] dark:bg-[#0BB744] dark:hover:bg-[hsl(140,89%,20%)]  rounded-[5px] h-[50px] w-[50px] text-[#000] font-bold" onClick={(event) => addCardsToDeck(event)}>{x}</button>
                  ))
                }
              </div>
              <form className=" relative max-w-[60%] md:max-w-[60%] lg:max-w-[30%] mx-auto mt-2 p-[1rem] flex md:flex-row flex-col justify-center lg:justify-start gap-2 items-center" onSubmit={(e) => random(e, pickedNumbers)}>
                <p className=" p-[1rem] dark:text-white text-[12px] absolute top-[-22px] left-[10px] lg:left-[20px]">(Max {GlobalItems?.maxNumber})</p>
                <input className=" border-[4px] rounded-[12px] border-[#023E8A] dark:border-[#0BB744] mx-[5px] w-[200px] p-[0.5rem]" type="number" id="number" placeholder="1" min={1} onChange={(e) => GlobalItems?.setNumber(Number(e.target.value))} />
                  <button type="submit" disabled={GlobalItems?.maxNumber !== 0 ? false : true} className=" p-[0.8rem] bg-[#FF7900] hover:bg-[#b35500] dark:bg-[#0BB744] dark:hover:bg-[hsl(140,89%,20%)]  text-[#000] font-bold rounded-[5px] cursor-pointer disabled:bg-[grey] disabled:text-[black] disabled:cursor-default">Start Game</button>
              </form>
            </div> :
            GlobalItems?.typeOfDeck === "hiragana" ?

              <div className=" pb-[5rem]">
                <div className=" p-[1rem] flex gap-[1rem] justify-center flex-wrap lg:w-[50%] lg:mx-auto ">
                  {
                    GlobalItems?.hiraganaLetter.map((x, index) => (
                      <button key={index} value={x} className="p-[0.8rem] hover:bg-[#b35500] bg-[#FF7900] dark:bg-[#0BB744] dark:hover:bg-[hsl(140,89%,20%)] rounded-[5px] h-[50px] w-[50px] text-[#000] font-bold" onClick={(event) => addCardsToDeck(event)}>{x}</button>
                    ))
                  }
                </div>
                <form className=" relative max-w-[60%] md:max-w-[60%] lg:max-w-[30%] mx-auto mt-2 p-[1rem] flex md:flex-row flex-col justify-center lg:justify-start gap-2 items-center" onSubmit={(e) => random(e, pickedNumbers)}>
                  <p className=" p-[1rem] dark:text-white text-[12px] absolute top-[-22px] left-[10px] lg:left-[20px]">(Max {GlobalItems?.maxNumber})</p>
                  <input className=" border-[4px] rounded-[10px] border-[#023E8A] dark:border-[#0BB744] mx-[5px] w-[200px] p-[0.5rem]" type="number" id="number" placeholder="1" min={1} onChange={(e) => GlobalItems?.setNumber(Number(e.target.value))} />
                    <button type="submit" disabled={GlobalItems?.maxNumber !== 0 ? false : true} className=" p-[0.8rem] bg-[#FF7900] hover:bg-[#b35500] dark:bg-[#0BB744] dark:hover:bg-[hsl(140,89%,20%)]  text-[#000] font-bold rounded-[5px] cursor-pointer disabled:bg-[grey] disabled:text-[black] disabled:cursor-default">Start Game</button>
                </form>
              </div> :

              GlobalItems?.typeOfDeck === "katakana" ?

                <div className=" pb-[5rem]">
                  <div className=" p-[2rem] flex gap-[1rem] justify-center flex-wrap lg:w-[52%] lg:mx-auto ">
                    {
                      GlobalItems?.katakanaLetter.map((x, index) => (
                        <button key={index} value={x} className="p-[0.8rem] hover:bg-[#b35500] bg-[#FF7900] dark:bg-[#0BB744] dark:hover:bg-[hsl(140,89%,20%)]  rounded-[5px] h-[50px] w-[50px] text-[#000] font-bold" onClick={(event) => addCardsToDeck(event)}>{x}</button>
                      ))
                    }
                  </div>
                  <form className=" relative max-w-[60%] md:max-w-[60%] lg:max-w-[30%] mx-auto mt-2 p-[1rem] flex md:flex-row flex-col justify-center lg:justify-start gap-2 items-center" onSubmit={(e) => random(e, pickedNumbers)}>
                    <p className=" p-[1rem] dark:text-white text-[12px] absolute top-[-22px] left-[10px] lg:left-[20px]">(Max {GlobalItems?.maxNumber})</p>
                    <input className=" border-[4px] rounded-[10px] border-[#023E8A] dark:border-[#0BB744] mx-[5px] w-[200px] p-[0.5rem]" type="number" id="number" placeholder="1" min={1} onChange={(e) => GlobalItems?.setNumber(Number(e.target.value))} />
                      <button type="submit" disabled={GlobalItems?.maxNumber !== 0 ? false : true} className=" p-[0.8rem] bg-[#FF7900] hover:bg-[#b35500] dark:bg-[#0BB744] dark:hover:bg-[hsl(140,89%,20%)]  text-[#000] font-bold rounded-[5px] cursor-pointer disabled:bg-[grey] disabled:text-[black] disabled:cursor-default">Start Game</button> 
                  </form>
                </div> : null
        }
      </>
    )
  }
  else {
    return (
      <Loading />
    )
  }
}
export default CardsSelection
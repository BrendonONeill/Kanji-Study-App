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

            <div className=" pb-[5rem]">
              <div className=" p-[2rem] flex gap-[1rem] justify-center">
                {
                  GlobalItems?.decks.map((x, index) => (
                    <button key={index} value={x} className="p-[0.8rem] hover:bg-[#b35500] bg-[#FF7900] rounded-[5px] h-[50px] w-[50px] text-[#000] font-bold" onClick={(event) => addCardsToDeck(event)}>{x}</button>
                  ))
                }
              </div>
              <form className="max-w-[80%] md:max-w-[60%] lg:max-w-[40%] mx-auto mt-2 p-[1rem] flex md:flex-row flex-col justify-center items-center" onSubmit={(e) => random(e, pickedNumbers)}>
                <input className=" border-[4px] rounded-[10px] border-[#023E8A] dark:border-[#0BB744] mx-[5px] w-[200px] p-[0.5rem]" type="number" id="number" placeholder="1" min={1} onChange={(e) => GlobalItems?.setNumber(Number(e.target.value))} />
                <p className=" p-[1rem] dark:text-white">(Max {GlobalItems?.maxNumber})</p>
                {GlobalItems?.maxNumber !== 0 ?
                  <button type="submit" className=" p-[0.8rem] bg-[#FF7900] hover:bg-[#b35500] text-[#000] font-bold rounded-[5px] cursor-pointer ">Start Game</button> : null
                }
              </form>
            </div> :
            GlobalItems?.typeOfDeck === "hiragana" ?

              <div className=" pb-[5rem]">
                <div className=" p-[2rem] flex gap-[1rem] justify-center">
                  {
                    GlobalItems?.hiraganaLetter.map((x, index) => (
                      <button key={index} value={x} className="p-[0.8rem] hover:bg-[#b35500] bg-[#FF7900] rounded-[5px] h-[50px] w-[50px] text-[#000] font-bold" onClick={(event) => addCardsToDeck(event)}>{x}</button>
                    ))
                  }
                </div>
                <form className="max-w-[80%] md:max-w-[60%] lg:max-w-[40%] mx-auto mt-2 p-[1rem] flex md:flex-row flex-col justify-center items-center" onSubmit={(e) => random(e, pickedNumbers)}>
                  <input className=" border-[4px] rounded-[10px] border-[#023E8A] dark:border-[#0BB744] mx-[5px] w-[200px] p-[0.5rem]" type="number" id="number" placeholder="1" min={1} onChange={(e) => GlobalItems?.setNumber(Number(e.target.value))} />
                  <p className=" p-[1rem] dark:text-white">(Max {GlobalItems?.maxNumber})</p>
                  {GlobalItems?.maxNumber !== 0 ?
                    <button type="submit" className=" p-[0.8rem] bg-[#FF7900] hover:bg-[#b35500] text-[#000] font-bold rounded-[5px] cursor-pointer ">Start Game</button> : null
                  }
                </form>
              </div> :

              GlobalItems?.typeOfDeck === "katakana" ?

                <div className=" pb-[5rem]">
                  <div className=" p-[2rem] flex gap-[1rem] justify-center">
                    {
                      GlobalItems?.katakanaLetter.map((x, index) => (
                        <button key={index} value={x} className="p-[0.8rem] hover:bg-[#b35500] bg-[#FF7900] rounded-[5px] h-[50px] w-[50px] text-[#000] font-bold" onClick={(event) => addCardsToDeck(event)}>{x}</button>
                      ))
                    }
                  </div>
                  <form className="max-w-[80%] md:max-w-[60%] lg:max-w-[40%] mx-auto mt-2 p-[1rem] flex md:flex-row flex-col justify-center items-center" onSubmit={(e) => random(e, pickedNumbers)}>
                    <input className=" border-[4px] rounded-[10px] border-[#023E8A] dark:border-[#0BB744] mx-[5px] w-[200px] p-[0.5rem]" type="number" id="number" placeholder="1" min={1} onChange={(e) => GlobalItems?.setNumber(Number(e.target.value))} />
                    <p className=" p-[1rem] dark:text-white">(Max {GlobalItems?.maxNumber})</p>
                    {GlobalItems?.maxNumber !== 0 ?
                      <button type="submit" className=" p-[0.8rem] bg-[#FF7900] hover:bg-[#b35500] text-[#000] font-bold rounded-[5px] cursor-pointer ">Start Game</button> : null
                    }
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
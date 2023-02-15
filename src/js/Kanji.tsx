
import React, {useState} from "react";

const Kanji = ({ kanji, setScore }) => {

  const handleKeyPress = (event, index:number)=> {
    if(event.code === "Enter")
    {
      let inputWord = event.target.value.trim()
      if(inputWord.toLowerCase() === kanji[index].english || inputWord === kanji[index].reading)
      {
        if(event.target.parentElement.style.backgroundColor === "rgb(138, 1, 1)")
        {
          setScore((prev: number) => prev + 1)
          event.target.parentElement.style.backgroundColor = "#D4D4D4"
        }
        else
        {
          setScore((prev: number) => prev + 2)
          event.target.parentElement.style.backgroundColor = "#018A26"
        }
        event.target.style.color = "#636363"
        event.target.style.backgroundColor = "#B0B0B0"
        event.target.disabled = true;
        console.log(event.target.parentElement.style.backgroundColor)
      }
      else
      {
        console.log(event.target.parentElement.style.backgroundColor)
        event.target.parentElement.style.backgroundColor = "#8A0101"
      }
      
      
    }
    
  };
  {{console.log(kanji)}}
  return kanji.map((word, index: number) => (
    <div
   
      key={index}
      className=" mb-3 w-[200px] h-[200px] rounded-xl grid bg-[#023E8A] p-4 text-center basis-[15%]">
      <h1 className=" w-full text-[3rem] font-bold bg-white mb-5 rounded-md p-4">{word.kanji}</h1>
      <input  className=" w-full  bg-[#d6d6d6] rounded-md text-center font-bold text-[1.4rem]" type="text" key={index} onKeyDown={(e) => handleKeyPress(e, index)} />
      
    </div>
  ));
};

export default Kanji;

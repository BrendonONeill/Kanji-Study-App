
import GlobalContext from "../GlobalContext";
import { useContext } from "react";

const Kanji = () => {
  const GlobalItems = useContext(GlobalContext);

  const handleKeyPressed = (e, index) => {
    if (e.key === "Enter") {
      handleCheckAnswer(e, index)
    }
  }

  const handleCheckAnswer = (event: any, index: number) => {
    let inputWord = event.target.value.trim();
    if (event.target.disabled === true) {
      return;
    }
    if (inputWord === "") {
      return;
    }
    let test = inputWord.toLowerCase();
    if (GlobalItems?.typeOfDeck === "kanji") {
      if (GlobalItems?.gameCards[index].romaji.includes(test) || GlobalItems?.gameCards[index].onyomi.includes(test) || GlobalItems?.gameCards[index].kunyomi.includes(test)) {
        if (event.target.parentElement.classList.contains('wrong')) {
          almost(event, index)
        }
        else {
          correct(event, index)
        }
        event.target.style.color = "#636363"
        event.target.style.backgroundColor = "#B0B0B0"
        event.target.disabled = true;
      }
      else {
        wrong(event)
      }
    }
    else {

      if (GlobalItems?.gameCards[index].english === test) {
        if (event.target.parentElement.classList.contains('wrong')) {
          almost(event, index)
        }
        else {
          correct(event, index)
        }
        event.target.style.color = "#636363"
        event.target.style.backgroundColor = "#B0B0B0"
        event.target.disabled = true;
      }
      else {
        wrong(event)
      }
    }


  }


  function correct(e, index) {
    GlobalItems?.setScore((prev: number) => prev + 2)
    e.target.parentElement.style.backgroundColor = "#29bf12"
    GlobalItems?.setGreen(prev => [...prev, ...[GlobalItems.gameCards[index]]])
  }

  function almost(e, index) {
    GlobalItems?.setScore((prev: number) => prev + 1)
    e.target.parentElement.style.backgroundColor = "#495057"
    let copy = GlobalItems?.grey.find((obj) => obj.id === GlobalItems.gameCards[index].id)
    if (copy === undefined) {
      GlobalItems?.setGrey(prev => [...prev, ...[GlobalItems.gameCards[index]]])
    }
  }

  function wrong(e) {
    e.target.parentElement.style.backgroundColor = "rgb(239,35,60)";
    e.target.parentElement.classList.add('wrong');
  }




  return GlobalItems?.gameCards.map((word, index: number) => (
    <>
      <div
        key={word.id}
        className=" mb-3 w-[220px] h-[180px] rounded-xl flex flex-col bg-[#4361ee] p-4 text-center basis-[45%] sm:basis-[30%] lg:basis-[24%] xl:basis-[18%]">
        <div className=" basis-[70%] mb-4 flex justify-center items-center bg-white dark:bg-[#1C1C21] dark:text-white rounded-md">
          <h1 className=" w-full text-[1.5rem] font-bold">{word[GlobalItems.typeOfDeck]}</h1>
        </div>
        <input className=" w-full  bg-[#d6d6d6] hover:bg-[#bdbdbd] dark:bg-[#4C4D52] dark:hover:bg-[#333438] dark:text-white rounded-md text-center font-bold text-[1.4rem] basis-[30%]" type="text" key={index} onBlur={(e) => handleCheckAnswer(e, index)} onKeyDown={(e) => handleKeyPressed(e, index)} />
      </div>
    </>
  ));
};
export default Kanji;

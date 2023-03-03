import {handleKeyPress} from "./CardInput"

type PropTyping = {
  kanjiCards: object[];
  setScore: React.Dispatch<React.SetStateAction<number>>
};

const Kanji = (items: PropTyping) => {
  return items.kanjiCards.map((word, index: number) => (
    <div
      key={index}
      className=" mb-3 w-[220px] h-[180px] rounded-xl flex flex-col bg-[#023E8A] p-4 text-center basis-[45%] sm:basis-[30%] lg:basis-[24%] xl:basis-[18%]">
      <div className=" basis-[70%] mb-4 flex justify-center items-center bg-white rounded-md">
        <h1 className=" w-full text-[1.5rem] font-bold">{word.kanji}</h1>
      </div>
      <input  className=" w-full  bg-[#d6d6d6] rounded-md text-center font-bold text-[1.4rem] basis-[30%]" type="text" key={index} onKeyDown={(e) => handleKeyPress(e, index, items.kanjiCards, items.setScore)} />
    </div>
  ));
};
export default Kanji;

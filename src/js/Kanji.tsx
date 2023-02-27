import {handleKeyPress} from "./CardInput"
const Kanji = ({ kanji, setScore }) => {
  return kanji.map((word, index: number) => (
    <div
      key={index}
      className=" mb-3 w-[200px] h-[200px] rounded-xl grid bg-[#023E8A] p-4 text-center basis-[15%]">
      <h1 className=" w-full text-[3rem] font-bold bg-white mb-5 rounded-md p-4">{word.kanji}</h1>
      <input  className=" w-full  bg-[#d6d6d6] rounded-md text-center font-bold text-[1.4rem]" type="text" key={index} onKeyDown={(e) => handleKeyPress(e, index, kanji, setScore)} />
    </div>
  ));
};
export default Kanji;

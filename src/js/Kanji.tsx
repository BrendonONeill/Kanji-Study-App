import React from "react";

const Kanji = ({ kanji }) => {
  return kanji.map((word, index) => (
    <div
      key={index}
      className=" mb-3 w-[200px] h-[200px] rounded-xl grid bg-[#9381FF] p-4 text-center basis-[15%]"
    >
      <h1 className=" w-full text-[3rem] font-bold bg-white mb-5 rounded-md">{word}</h1>
      <input className=" w-full border-[1px] border-blue-300 bg-[#B8B8FF] rounded-md" type="text" />
    </div>
  ));
};

export default Kanji;

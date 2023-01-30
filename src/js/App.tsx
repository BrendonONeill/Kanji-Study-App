
import React, {} from "react";
import { createRoot } from "react-dom/client";
import Footer from "./Footer";
import Header from "./Header";
import Kanji from "./Kanji";

const App = () => {
  const kanji = [["車"], "医者", "一人", "休日", "林", "一", "に", "三", "四",];
  return (
    <>
    <div className=" h-[100vh] w-[1600px] m-auto bg-[#FFEEDD]  flex flex-col">
      <Header />
      <div className=" w-full p-8 flex flex-row flex-wrap gap-3 flex-row-auto content-start justify-start">
        <Kanji kanji={kanji} />
      </div>
    </div>
    <Footer/>
    </>
  );
};

const container : HTMLElement | null = document.getElementById("root");
console.log(container)
if(container !== null)
{
  const root = createRoot(container);
  root.render(<App />);

}


import React, {useState, useEffect} from "react";
import { createRoot } from "react-dom/client";
import Footer from "./Footer";
import Header from "./Header";
import Kanji from "./Kanji";

const App = () => {

  useEffect(() => {
   fetch("https://api.jsonbin.io/v3/b/63f62220c0e7653a057c7913",{
    headers:
    {
      'X-Access-Key' : `${process.env.JSON_API}`
    }
   })
    .then(response => response.json())
    .then(data => setData(data.record))
    .catch(error => console.log(error));
  },[])

  const [data, setData] = useState<object[]>([]);
  const [gameCards, setGameCards] = useState<object[]>([]);
  const [score, setScore] = useState(0);
  const [cardsAmount, setCardsAmount] = useState(0);
  const [finished, setFinished] = useState(false);
  const [number, setNumber] = useState(1);
  const maxCards = 10;

  const random = (e,kanji: object[], number: number) => {
    e.preventDefault();
    if(number > maxCards) number = maxCards
    setGameCards([]);
    let sortKanji = [...kanji];
    let sortedCards: object[] = []
    setCardsAmount(number * 2)
    for(let i=0; i < number; i++)
    {
     let sortSize: number = sortKanji.length;
     let pick = Math.floor(Math.random() * sortSize);
     console.log(pick + ": This is your pick")
     sortedCards.push(sortKanji[pick])
     sortKanji.splice(pick,1)
    }
    setGameCards(gameCards => [...gameCards, ...sortedCards]);
    
  }

  const calculatedScore = () => {
    
    setScore(Math.round((score / cardsAmount) * 100))
    console.log(score)
    setFinished(true);
  }
  return (
    <>
    <div className=" h-[100vh] w-[1600px] m-auto bg-[#FFF5EE]  flex flex-col">
      <Header />
      <div className="p-[1rem] mx-auto my-2 border-[5px] border-[#023E8A] rounded-[10px]">
        <p className="text-[1.4rem]">This is the first draft of my kanji learning website. It still has many bugs but will be fixed later.</p>
        <ol>
          <li>The user will input a number of cards they want to study (Max 10) and then press the generate cards.</li>
          <li>Then cards will display on the page with the kanji on the top of the card and on the bottom will be an input section for the user to input their guess.</li>
          <li>Once the user is finished they will press the finished button and it will calculate your score.</li>
        </ol>
        <p className="border-[#023E8A] rounded-[10px] border-[3px] p-[0.5rem]">The score is caluclated by the coloured cards green (If you don't get the answer correct first try) is 2 marks grey is 1 mark and red or blue is 0 marks.</p>
        <p></p>
      </div>
      <form className="max-w-[40%] mx-auto mt-2 p-[1rem]" onSubmit={(e) => random(e,data,number)}>
      <input className=" border-[4px] rounded-[10px] border-[#023E8A] mx-[1rem] p-[0.5rem]" type="number" id="number" placeholder="1" min={1} onChange={(e) => setNumber(Number(e.target.value))}  />
      <button type="submit" className=" p-[1rem] bg-[#D66218] text-[#fff] font-bold rounded-[10px] cursor-pointer ">Generate Cards</button>
      </form>
      
      
      <div className=" w-full p-8 flex flex-row flex-wrap gap-3 flex-row-auto content-start justify-start">
      
        { gameCards.length !== 0 ? 
          <Kanji kanji={gameCards} setScore={setScore} /> : null
        }
      </div>
      { gameCards.length !== 0 ?
      <button className=" p-[1rem] bg-[#D66218] rounded-[10px] text-[#fff] font-bold cursor-pointer max-w-[40%] mx-auto mt-2" onClick={() => calculatedScore()}>Finished</button>  :null}
      {finished?
      <div className="mx-auto p-[2rem] text-[2rem] shadow-sm shadow-black my-[2rem] border-[5px] border-[#023E8A] rounded-[10px]">
        <h2>{score}%</h2>
      </div>: null
      }
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

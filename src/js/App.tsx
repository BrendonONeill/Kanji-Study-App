
import React, {useState, useEffect} from "react";
import { createRoot } from "react-dom/client";
import CardsSelection from "./CardsSelection";
import CollectionOfCards from "./CollectionOfCards";
import Footer from "./Footer";
import Header from "./Header";
import InfoCard from "./InfoCard";
import Kanji from "./Kanji";

const App = () => {
    

  const [data, setData] = useState<object[]>([]);
  const [gameCards, setGameCards] = useState<object[]>([]);
  const [score, setScore] = useState(0);
  const [cardsAmount, setCardsAmount] = useState(0);
  const [finished, setFinished] = useState(false);
  const [number, setNumber] = useState(1);
  const maxCards = 10; // need to sort

  useEffect(() => {
    fetch("https://api.jsonbin.io/v3/b/63f62220c0e7653a057c7913",{
     headers:
     {
       'X-Access-Key' : `${import.meta.env.VITE_JSON_API_KEY}`
     }
    })
     .then(response => response.json())
     .then(data => setData(data.record))
     .catch(error => console.log(error));
   },[])

  const random = (e: React.ChangeEvent<HTMLInputElement>,kanji: object[], number: number, pickedNumbers: number[] ) => {
    debugger
    e.preventDefault(); 
    if(number > maxCards) number = maxCards
    setGameCards([]);
    let collectionOfCards: object[] = []
    for(let s = 0; s < pickedNumbers.length; s++ )
    {
      let test: object[] = kanji[0][pickedNumbers[s]];
      collectionOfCards.push(test);
    }
    let sortKanji = collectionOfCards.flat(Infinity);
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
    <div className=" min-h-[100vh] w-[1600px] m-auto bg-[#FFF5EE]  flex flex-col">
      <Header />
      <InfoCard />
      
      <CardsSelection  num={setNumber} random={random} data={data} number={number} />
      <div className=" w-full p-8 flex flex-row flex-wrap gap-3 flex-row-auto content-start justify-start">
        { gameCards.length !== 0 ? 
          <>
         
          <Kanji kanji={gameCards} setScore={setScore} /> </> : null
        }
      </div>
      { gameCards.length !== 0 ?
      <button className=" p-[1rem] bg-[#D66218] rounded-[10px] text-[#fff] font-bold cursor-pointer max-w-[40%] mx-auto mt-2" onClick={() => calculatedScore()}>Finished</button>  :null}
      {finished?
      <>
      
      <div className="mx-auto p-[2rem] text-[2rem] shadow-sm shadow-black my-[2rem] border-[5px] border-[#023E8A] rounded-[10px]">
        <h2>{score}%</h2>
      </div>
      </>: null
      }
      { data.length !== 0 ?
      <>
       
        <CollectionOfCards data={data} />
      </> : null
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

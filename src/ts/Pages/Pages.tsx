import { Route, Routes } from "react-router-dom";
import Main from "./Main"
import Game from "./Game";
import Results from "./Results";
import {useState, useEffect} from "react";
import { reset } from "../Components/Reset";

function Pages() {

  const [data, setData] = useState<object[]>([]);
  const [gameCards, setGameCards] = useState<object[]>([]);
  const [score, setScore] = useState(0);
  const [cardsAmount, setCardsAmount] = useState(0);
  const [finished, setFinished] = useState(false);
  const [number, setNumber] = useState(1);
  const [maxNumber, setMaxNumber] = useState(0);

  
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



  return (
    <>
    <Routes>
        <Route path="/" element={<Main data={data} maxNumber={maxNumber} setGameCards={setGameCards}  setCardsAmount={setCardsAmount} number={number} setNumber={setNumber} setMaxNumber={setMaxNumber} gameCards={gameCards}/> } />
        <Route path="/game" element={<Game setScore={setScore} setFinished={setFinished} cardsAmount={cardsAmount} gameCards={gameCards} score={score} />} />
        <Route path="/results" element={<Results score={score} finished={finished} />} />
    </Routes>
    </>
  )
}

export default Pages
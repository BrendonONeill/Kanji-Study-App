import { useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Kanji from "../Components/Kanji";


type PropTyping = {
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setFinished: React.Dispatch<React.SetStateAction<boolean>>;
  cardsAmount: number;
  gameCards: object[];
  score: number;
};

function Game(items: PropTyping) {

  const navigate = useNavigate();
  const calculatedScore = () => {
    
    items.setScore(Math.round((items.score / items.cardsAmount) * 100))
    console.log(items.score)
    items.setFinished(true);
    navigate(`/results`);
  }

  return (
    <>
    <div className=" min-h-[95vh] w-[1600px] m-auto bg-[#FFF5EE]  flex flex-col">
    <Header />
    <div className=" w-full p-8 flex flex-row flex-wrap gap-3 flex-row-auto content-start justify-start">
        { items.gameCards.length !== 0 ? 
          <>
          <Kanji kanjiCards={items.gameCards} setScore={items.setScore} /> 
          </> : null
        }
      </div>
      { items.gameCards.length !== 0 ?
      <button className=" p-[1rem] bg-[#D66218] rounded-[10px] text-[#fff] font-bold cursor-pointer max-w-[40%] mx-auto mt-2" onClick={() => calculatedScore()}>Finished</button>  :null}
    </div>
    <Footer/>
    </>
    
  )
}

export default Game
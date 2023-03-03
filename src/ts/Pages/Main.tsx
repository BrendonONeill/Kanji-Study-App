import CardsSelection from "../Components/CardsSelection";
import CollectionOfCards from "../Components/CollectionOfCards";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import InfoCard from "../Components/InfoCard";
import { random } from "../Components/RandomCards";

type PropTyping = {
  data: object[];
  maxNumber: number;
  setGameCards: React.Dispatch<React.SetStateAction<object[]>>;
  setCardsAmount: React.Dispatch<React.SetStateAction<number>>;
  number: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
  setMaxNumber: React.Dispatch<React.SetStateAction<number>>;
  gameCards: object[];
};

function Main(items: PropTyping) {

 

  return (
    <>
     <div className=" min-h-[95vh] w-[375px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] m-auto bg-[#FFF5EE]  flex flex-col">
      <Header />
      <InfoCard />
      <CardsSelection  num={items.setNumber} random={random} data={items.data} number={items.number} maxNumber={items.maxNumber} setMaxNumber={items.setMaxNumber} gameCards={items.gameCards} setGameCards={items.setGameCards}  setCardsAmount={items.setCardsAmount}  />
      { items.data.length !== 0 ?
      <>
        <CollectionOfCards data={items.data} />
      </> : null
      }
      
    </div>
    <Footer/>
    </>
  )
}
export default Main
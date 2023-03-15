import CardsSelection from "../Components/CardsSelection";
import CollectionOfCards from "../Components/CollectionOfCards";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import InfoCard from "../Components/InfoCard";
import GlobalContext from "../GlobalContext";
import { useContext } from "react";

function Main() {
  const GlobalItems = useContext(GlobalContext);
  
  return (
    <>
     <div className=" min-h-[95vh] w-[375px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] m-auto bg-[#FFF5EE] dark:bg-[#2F3037]  flex flex-col">
      <Header />
      <InfoCard />
      <CardsSelection />
      { GlobalItems?.data.length !== 0 ?
      <>
        <CollectionOfCards />
      </> : null
      }
    </div>
    <Footer/>
    </>
  )
}
export default Main
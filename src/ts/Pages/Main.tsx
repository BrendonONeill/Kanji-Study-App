import CardsSelection from "../Components/CardsSelection";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import InfoCard from "../Components/InfoCard";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  
  return (
    <>
     <div className=" min-h-[95vh] w-[375px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] m-auto bg-[#FFF5EE] dark:bg-[#2F3037]  flex flex-col">
      <Header />
      <InfoCard />
      <div className=" p-[2rem]">
        <button aria-label="preview decks" className=" p-[1.5rem] hover:bg-[#b35500] bg-[#FF7900] rounded-[10px] text-[#000] font-bold" onClick={() => navigate(`/cards`)}>Preview Decks</button>
      </div>
      <CardsSelection />
    </div>
    <Footer/>
    </>
  )
}
export default Main
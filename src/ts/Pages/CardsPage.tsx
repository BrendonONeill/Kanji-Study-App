import CollectionOfCards from "../Components/CollectionOfCards";
import GlobalContext from "../GlobalContext";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


function CardsPage() {
    const GlobalItems = useContext(GlobalContext);
    const navigate = useNavigate();

  return (
    <>

    <div className=" min-h-[95vh] w-[375px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] m-auto bg-[#FFF5EE] dark:bg-[#2F3037]  flex flex-col">
      <Header />
      <div className="p-[2rem] pb-0">
      <button aria-label="return to main page" className="p-[1.5rem] hover:bg-[#b35500] bg-[#FF7900] rounded-[10px] text-[#000] font-bold" onClick={() => navigate(`/`)}>Home Page</button>
      </div>
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

export default CardsPage
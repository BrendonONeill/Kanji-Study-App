import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../GlobalContext";
import { useContext, useEffect } from "react";
import ResultCards from "../Components/ResultCards";


function Results() {
  const GlobalItems = useContext(GlobalContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(GlobalItems?.gameCards.length === 0)
    {
      navigate(`/`);
    }
  },[])

  const reset = () =>
  {
    GlobalItems?.setGameCards([])
    GlobalItems?.setScore(0)
    GlobalItems?.setCardsAmount(0)
    GlobalItems?.setFinished(false)
    GlobalItems?.setNumber(1)
    GlobalItems?.setMaxNumber(0)
    GlobalItems?.setGreen([])
    GlobalItems?.setGrey([])
    GlobalItems?.setRed([])
    navigate(`/`);
  }

  return (
    <>
    <div className=" min-h-[95vh] w-[375px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] m-auto bg-[#FFF5EE] dark:bg-[#2F3037]  flex flex-col">
    <Header />
    {GlobalItems?.finished?
      <>
      <div className="mx-auto p-[2rem] text-[2rem] mt-[5rem] shadow-sm shadow-black my-[2rem] border-[5px] border-[#023E8A] dark:border-[#0BB744] rounded-[10px]">
        <h2 className=" dark:text-white">{GlobalItems?.score}%</h2>
      </div>
      </>: null
      }
      <button className=' p-[1rem] bg-[#FF7900] rounded-[10px] mb-[5rem] text-black font-bold cursor-pointer max-w-[40%] mx-auto mt-2' onClick={reset} >Home</button>

      {GlobalItems?.green.length !== 0 ? <ResultCards card={GlobalItems?.green} text={"Correct"} style={{backgroundColor: '#018A26', color: 'white'}} />  : null}
      {GlobalItems?.grey.length !== 0 ?<ResultCards card={GlobalItems?.grey}  text={"Look Over"} style={{backgroundColor:  '#D4D4D4'}} /> : null}
      {GlobalItems?.red.length !== 0 ?<ResultCards card={GlobalItems?.red}  text={"Study Again"} style={{backgroundColor:   '#8A0101', color: 'white'}} /> : null}
      </div>
      <Footer />
    </>
  )
}

export default Results
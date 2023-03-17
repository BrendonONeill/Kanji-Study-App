import Footer from "../Components/Footer"
import Header from "../Components/Header"
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();


  const returnHome = () => {
    navigate(`/`);
  }

  return (
    <>
    
    <div className=" min-h-[95vh] w-[375px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] m-auto bg-[#FFF5EE] dark:bg-[#2F3037]  flex flex-col">
    <Header />
    <div className=" w-[100%] p-[1rem] mx-auto">
    <img className="rounded-[10px]" src={"../images/404.jpg"} alt="" />
    <a className="text-black dark:text-white" href="https://www.freepik.com/free-vector/404-error-with-portals-concept-illustration_20602754.htm#query=404%20page&position=31&from_view=keyword&track=ais">Image by storyset</a>
    <div className="w-[100%] h-[100px] flex justify-center items-center">
    <button className=" bg-[#FF7900] p-[1rem] text-black rounded-[10px] m-auto font-bold" onClick={returnHome}>Return</button>
    </div>
    
    </div>
    
    

    </div>
    <Footer />
    </>
  )
}

export default NotFound
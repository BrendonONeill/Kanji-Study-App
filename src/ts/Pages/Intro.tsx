import Footer from "../Components/Footer"
import Header from "../Components/Header"
import { useNavigate } from "react-router-dom";
import GlobalContext from "../GlobalContext";
import { useContext } from "react";


function Intro() {
    const GlobalItems = useContext(GlobalContext);
    const navigate = useNavigate();
    function test(type: string) {
        GlobalItems?.setTypeOfDeck(type)
        navigate(`/main`)
    }
    return (
        <>
            <div className="  min-h-[95vh] w-[375px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] m-auto bg-[#FFF5EE] dark:bg-[#2F3037]  flex flex-col">
                <Header />
                <div className=" m-[0] mt-[1rem] md:m-[2rem]  p-[1rem] border-[5px] border-[#023E8A] dark:text-[white] dark:border-[#0BB744] rounded-[5px]">
                    <p className="p-[1rem] bg-[#023E8A] dark:bg-[#7824BC] text-white rounded-[10PX] text-center font-bold text-[1.4rem] mb-[0.8rem]">About Application </p>
                    <p>This is a fun application to test your basic japanese by selecting if you want to study beginner kanji or the basic letters from hiragana or katakana. It's a quick in and out solution to test your knowledge to see how well your getting on. Just select an option below and it will explain how the game works.</p>

                </div>
                <div className=" grid w-[90%] lg:w-[45%] m-auto mt-[3rem] gap-[1rem]">
                    <button className=" rounded-[5px] p-4 hover:bg-[#b35500] bg-[#FF7900] dark:bg-[#0BB744] dark:hover:bg-[hsl(140,89%,20%)]  text=[#000] col-span-2 h-[100px] font-bold text-[2rem]" onClick={() => test("kanji")}>Kanji</button>
                    <button className=" rounded-[5px] p-4 hover:bg-[#b35500] bg-[#FF7900] dark:bg-[#0BB744] dark:hover:bg-[hsl(140,89%,20%)]  text-[black] h-[80px] font-bold" onClick={() => test("hiragana")}>Hiragana</button>
                    <button className=" rounded-[5px]  p-4 hover:bg-[#b35500] bg-[#FF7900] dark:bg-[#0BB744] dark:hover:bg-[hsl(140,89%,20%)]  text-[black] h-[80px] font-bold" onClick={() => test("katakana")}>Katakana</button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Intro
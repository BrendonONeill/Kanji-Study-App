import GlobalContext from "../GlobalContext";
import { useContext } from "react";

function Header() {
  const GlobalItems = useContext(GlobalContext);

  const changeTheme = () => {
    if(GlobalItems?.theme === "light")
    {
      GlobalItems?.setTheme("dark")
      localStorage.setItem("theme", "dark");
    }
    else
    {
      GlobalItems?.setTheme("light")
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <div className=' p-[1rem] text-center bg-[#0096C7] dark:bg-black text-[#fff] rounded-b-md flex' data-id={`nav-${GlobalItems?.theme}`}>
        <div className='basis-[70%] sm:basis-[85%] md:basis-[95%] flex items-center'>
        <h1 className=' font-bold text-[1rem] flex items-center'><a href="https://kanji-study.onrender.com/">Kanji APP</a></h1>
        </div>
        <div className='p-[0.2rem] basis-[30%] sm:basis-[15%]  md::basis-[5%] h-full'>
          <ul className='flex list-none'>
            <li className='basis-[50%] p-2'><a href="https://github.com/BrendonONeill/Kanji-Study-App" target="_blank"><img  width={"30px"} height={"30px"} src="../images/github.svg" alt="" /></a></li>
            <li className='basis-[50%] p-2'> <a href="https://brendononeill.github.io/Portfolio-Revamp/" target="_blank" rel="noopener noreferrer"><img width={"30px"} height={"30px"} src="../images/folder.svg" alt="" /></a></li>
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <button className=" bg-[white] w-[40px] h-[23px] rounded-[25px] switcher-bg" onClick={changeTheme} id={GlobalItems?.theme}>
            <div className=" rounded-[50%] w-[20px] h-[20px] switcher" id={`div-${GlobalItems?.theme}`}></div>
          </button>
        </div>
    </div>
  )
}

export default Header
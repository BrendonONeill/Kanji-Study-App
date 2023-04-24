import { Route, Routes } from "react-router-dom";
import Main from "./Main"
import Game from "./Game";
import Results from "./Results";
import {useEffect} from "react";
import GlobalContext from "../GlobalContext";
import { useContext } from "react";
import NotFound from "./NotFound";
import CardsPage from "./CardsPage";

function Pages() {
  const GlobalItems = useContext(GlobalContext);

  if(GlobalItems?.data.length === 0)
  {
    useEffect(() => {
    fetch(`https://concerned-shirt-dog.cyclic.app/`)
    .then(response => response.json())
    .then(data => GlobalItems?.setData(data.record))
    .catch(error => console.log(error));
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      GlobalItems.setTheme("dark")
    } else {
      GlobalItems.setTheme("light")
    }
  },[])
  }
  

  
  return (
    <div className={GlobalItems?.theme}>
    <section className="w-full bg-[#CAF0F8] dark:bg-[#1C1C21]">
    <Routes>
        <Route path="/" element={<Main /> } />
        <Route path="/game" element={<Game />} />
        <Route path="/results" element={<Results />} />
        <Route path="/cards" element={<CardsPage />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
    </section>
    </div>
  )
}

export default Pages

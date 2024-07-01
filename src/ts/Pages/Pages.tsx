import { Route, Routes } from "react-router-dom";
import Main from "./Main"
import Game from "./Game";
import Results from "./Results";
import { useEffect } from "react";
import GlobalContext from "../GlobalContext";
import { useContext } from "react";
import NotFound from "./NotFound";
import CardsPage from "./CardsPage";
import { useQuery } from "@tanstack/react-query";
import { fetchKanji } from "../Lib/fetch";
import Intro from "./Intro";


function Pages() {
  const GlobalItems = useContext(GlobalContext);
  const { data: fetchedData } = useQuery({ queryKey: ['kanj'], queryFn: fetchKanji });

  useEffect(() => {
    localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches) ? GlobalItems?.setTheme("dark") : GlobalItems?.setTheme("light");
  }, [])

  useEffect(() => {
    if (fetchedData) GlobalItems?.setData(fetchedData);
    console.log(fetchedData)
  }, [fetchedData]);

  return (
    <div className={GlobalItems?.theme}>
      <section className="w-full bg-[#CAF0F8] dark:bg-[#1C1C21]">
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/selection" element={<Main />} />
          <Route path="/aaa" element={<Main />} />
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

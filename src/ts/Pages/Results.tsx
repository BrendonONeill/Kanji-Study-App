import React from 'react'
import Footer from "../Components/Footer";
import Header from "../Components/Header";


function Results({finished,score} : {finished: boolean, score: number}) {

  return (
    <>
    <div className=" min-h-[95vh] w-[1600px] m-auto bg-[#FFF5EE]  flex flex-col">
    <Header />
    {finished?
      <>
      <div className="mx-auto p-[2rem] text-[2rem] shadow-sm shadow-black my-[2rem] border-[5px] border-[#023E8A] rounded-[10px]">
        <h2>{score}%</h2>
      </div>
      </>: null
      }
      <p className=' mx-auto'>Temporary Reset button until sorted out bugs.</p>
      <a className=' p-[1rem] bg-[#D66218] rounded-[10px] text-[#fff] font-bold cursor-pointer max-w-[40%] mx-auto mt-2' href="https://kanji-study.onrender.com/">Try Again</a>
      </div>
      
      <Footer />
    </>
  )
}

export default Results
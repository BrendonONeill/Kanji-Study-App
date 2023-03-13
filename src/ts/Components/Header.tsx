
function Header() {

  return (
    <div className=' p-[1rem] text-center bg-[#0096C7] text-[#fff] rounded-b-md flex'>
        <div className='basis-[70%] sm:basis-[85%] md:basis-[95%] flex items-center'>
        <h1 className=' font-bold text-[1rem] flex items-center'><a href="https://kanji-study.onrender.com/">Kanji APP</a></h1>
        </div>
        <div className='p-[0.2rem] basis-[30%] sm:basis-[15%]  md::basis-[5%] h-full'>
          <ul className='flex list-none'>
            <li className='basis-[50%] p-2'><a href="https://github.com/BrendonONeill/Kanji-Study-App" target="_blank"><img  width={"30px"} height={"30px"} src="../images/github.svg" alt="" /></a></li>
            <li className='basis-[50%] p-2'> <a href="https://brendononeill.github.io/Portfolio-Revamp/" target="_blank" rel="noopener noreferrer"><img width={"30px"} height={"30px"} src="../images/folder.svg" alt="" /></a></li>
          </ul>
        </div>
    </div>
  )
}

export default Header
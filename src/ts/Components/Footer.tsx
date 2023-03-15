function Footer() {
  return (
    <div className='p-[1rem] bg-[#0096C7] dark:bg-[#7B2CBF] text-[#fff] w-[375px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] m-auto rounded-t-md flex'>
      <div className="basis-[50%] sm:basis-[90%] md:basis-[90%] flex items-center">
      <p className='font-bold text-[1rem] pb-4'>Brendon O'Neill © 2023</p>
      </div>
        <div className='p-[0.2rem] basis-[50%] sm:basis-[20%] md:basis-[10%] h-full'>
          <ul className='flex list-none'>
            <li className='basis-[50%] p-2'><a href="https://github.com/BrendonONeill/Kanji-Study-App" target="_blank"><img  width={"30px"} height={"30px"} src={"../images/github.svg"} alt="" /></a></li>
            <li className='basis-[50%] p-2'><a href="https://brendononeill.github.io/Portfolio-Revamp/" target="_blank" rel="noopener noreferrer"><img width={"30px"} height={"30px"} src={"../images/folder.svg"} alt="" /></a></li>
          </ul>
        </div>
    </div>
  )
}

export default Footer
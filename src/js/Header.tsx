import React from 'react'

function Header() {
  return (
    <div className=' p-[1rem] text-center bg-[#0096C7] text-[#fff] rounded-b-md flex justify-between'>
        <h1 className=' font-bold text-[3rem]'>Kanji APP</h1>
        <div className=' flex p-[1rem]'>
          <ul className=' flex list-none'>
            <li className='p-[1rem]'><a href="https://github.com/BrendonONeill/Kanji-Study-App" target="_blank">GitHub</a></li>
            <li className='p-[1rem]'> <a href="https://brendononeill.github.io/Portfolio-Revamp/" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
          </ul>
        </div>
    </div>
  )
}

export default Header
import React from 'react'

const Navbar = () => {
  return (
    <div className=' h-[10vh] flex justify-between px-20 py-14 '>
        <div className=" flex items-center flex-1 gap-x-5">
        <div className=" text-2xl">Maruf</div>
        <span>toggle</span>
      </div>
      <div className=" flex items-center justify-center">
        <div className="n-list ">
          <ul className=' flex gap-x-10 mr-10 text-lg '>
            <li className='hover:text-[#fca61f] transition hover:scale-105 duration-10'>
              <a href="#">Home</a>
            </li>
            <li className='hover:text-[#fca61f] transition hover:scale-105 duration-10'>
              <a href="#">Services</a>
            </li>
            <li className='hover:text-[#fca61f] transition hover:scale-105 duration-10' >
              <a href="#">Experience</a>
            </li>
            <li className='hover:text-[#fca61f] transition hover:scale-105 duration-10'>
              <a href="#">Portfolio</a>
            </li>
            <li className='hover:text-[#fca61f] transition hover:scale-105 duration-10'>
              <a href="#">Testmonials</a>
            </li>
          </ul>
        </div>
        <div className="button bg-gradient-to-b from-[#f7d80c] to-[#f7910c] text-white rounded-3xl px-5 py-3 cursor-pointer shadow-lg shadow-[#ffed47] hover:bg-gradient-to-b hover:from-[#fff] hover:to-[#fff]  transition hover:border-[#ffb300] hover:text-primary hover:border-2 duration-150">
            Contact us
        </div>
      </div>
    </div>
  )
}

export default Navbar
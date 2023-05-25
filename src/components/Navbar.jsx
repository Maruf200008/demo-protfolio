import React from 'react'

const Navbar = () => {
  return (
    <div className=' h-[10vh] flex justify-between px-10 py-5 '>
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
        <div className="button">
            Contact us
        </div>
      </div>
    </div>
  )
}

export default Navbar
import React from 'react'

const Card = ({emoji, heading, detail}) => {
  return (
    <div className='card w-[18rem] h-[20rem]  absolute flex flex-col items-center text-center bg-[rgba(255, 255, 255, 0.25)] border-4 border-primary rounded-md shadow-2xl px-6 py-4 gap-y-3 '>
        <img src={emoji} alt="" className='-mt-5 scale-90' />
        <h2 className=' text-2xl -mt-5 font-bold'>{heading}</h2>
        <p className=' text-lg text-gray-500'>{detail}</p>
        <button className=' uppercase bg-white shadow-lg rounded-md px-6 py-2 text-[#5290fd] font-semibold '>Learn More</button>
    </div>
  )
}

export default Card
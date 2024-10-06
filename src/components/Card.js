import React from 'react'
import {FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'

const Card = (props) => {
    let review = props.review;
  return (
    <div className='md:relative flex flex-col '>
        <div className='absolute top-[-7rem] z-[10] mx-auto '>
            <img className='aspect-square rounded-full w-[140px] h-[140px] z-[25]' src={review.image}/>
        </div>
        <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute left-[12px] top-[-125px]"></div>

        <div className='text-center mt-7'>
            <p className='font-bold text-2xl capitalize'>{review.name}</p>
        </div>

        <div className='text-center mt-7'>
            <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
        </div>

        <div className='text-center text-violet-400 mx-auto mt-5'>
            <FaQuoteLeft></FaQuoteLeft>
        </div>
        <div className='text-center mt-4 text-slate-500'>
            <p>{review.text}</p>
        </div>
        <div className='text-center text-violet-400 mx-auto mt-5'>
            <FaQuoteRight></FaQuoteRight>
        </div>
         
    </div>
  )
}

export default Card
import React, { useEffect, useState } from 'react'
import Card from './Card'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'

const Testimonials = (props) => {
    let reviews = props.reviews;
    let [index, setIndex] = useState(0);
    function leftShiftHandler(){
        if(index-1 < 0){
            setIndex(reviews.length-1)
        }else{
            setIndex(index-1)
        }
    }
    function rightShiftHandler(){
        if(index+1 >= reviews.length){
            setIndex(0)
        }else{
            setIndex(index+1)
        }
    }
    function surpriseHandler(){
        let randIndex = Math.floor(Math.random()*reviews.length)
        setIndex(randIndex)
    }
  return (
    <div className='w-[50vw] md:x-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-300
    hover:shadow-xl'>
        <Card review={reviews[index]}></Card>

        <div className='flex flex-row text-3xl gap-3 mt-5 text-violet-400 font-bold justify-center'>
            <button onClick={leftShiftHandler} className='cursor-pointer hover:text-violet-500'><FiChevronLeft></FiChevronLeft></button>
            <button onClick={rightShiftHandler} className='cursor-pointer hover:text-violet-500'><FiChevronRight></FiChevronRight></button>
        </div>
        <div>
            <button onClick={surpriseHandler} className='bg-violet-400 hover:bg-violet-500 
            transition-all duration-200 
            rounded-md cursor-pointer px-10 py-2 font-bold text-white text-md'>
                Surprise Me
            </button>
        </div>
    </div>
  )
}

export default Testimonials
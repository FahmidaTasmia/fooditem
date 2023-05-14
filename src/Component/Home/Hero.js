import React from 'react'
import img from '../../asset/leaf.png'
import { BiSearch } from "react-icons/bi";
import plate1 from '../../asset/image 1.png'
import plate2 from '../../asset/platesm.png'

function Hero() {
  return (
    <div className='grid grid-cols-2 lg:py-24'>
      <div >
        <h2 className='text-[65px] font-bold italic  leading-tight text-[#396C03] text-start' style={{backgroundImage:(`url(${img})`), backgroundPosition:'left', backgroundRepeat:'no-repeat', }}>
        Order food online from your favourite local restaurants.
        </h2>
        <p className='text-[24px] text-[#676767] text-start'>
        Freshly made food delivered to your door.
        </p>
       <div className='flex'>
        <input className='border rounded-full py-3 px-6' type="search" name="" id="" placeholder='Enter Your Location' />
        <p className='bg-[#396C03] w-[100px] flex  self-center py-2 rounded-full justify-center relative right-6'><BiSearch className='self-center'></BiSearch>search</p>
       </div>
      </div>

      <div>
      
       <div className='grid grid-cols-2'> <img src={plate2} alt="" />
       <img className='relative top-[-50px]' src={img} alt="" />
       </div>
       
       <div className='relative top-[-300px] right-8'>
       <img src={plate1} alt="" />
       </div>

      </div>
    </div>
  )
}

export default Hero

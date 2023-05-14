import React from 'react'
import img from '../../asset/leaf.png'
import { BiSearch } from "react-icons/bi";
import plate1 from '../../asset/image 1.png'
import plate2 from '../../asset/platesm.png'

function Hero() {
  return (
    <div className='grid md:grid-cols-2  lg:gap-8'>
      <div className='relative top-[-100px]' >
        <img className='relative top-[100px]' src={img} alt="" />
        <h2 className='lg:text-[65px] text-4xl font-bold italic  leading-tight text-[#396C03] text-start ml-14 relative top-[-30px]' >
        Order food online from your favourite local restaurants.
        </h2>
        <p className='text-[24px] text-[#676767] text-start ml-14 mb-5'>
        Freshly made food delivered to your door.
        </p>
       <div className='flex ml-14'>
        <input className='border rounded-full py-3 px-6' type="search" name="" id="" placeholder='Enter Your Location' />
        <p className='bg-[#396C03] w-[100px] flex  self-center py-2 rounded-full justify-center relative right-6'><BiSearch className='self-center'></BiSearch>search</p>
       </div>
      </div>

      <div className='m-auto'>
      
       <div className='grid grid-cols-2 '> <img className='' src={plate2} alt="" />
       <img className='relative top-[-60px] ' src={img} alt="" />
       </div>
       
       <div className='relative top-[-300px] right-8'>
       <img className='hover:scale-110 transition-all delay-75 duration-500  ' src={plate1} alt="" />
       </div>

      </div>
    </div>
  )
}

export default Hero

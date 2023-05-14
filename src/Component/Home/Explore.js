import React from 'react'
import { BiArrowToRight } from 'react-icons/bi'
import line from '../../asset/bg.png'
import cycle from '../../asset/cycle.png'
import './Home.css'

function Explore() {
  return (
    <div className='grid lg:grid-cols-2  bg-[#FFF9F2] lg:gap-5  min-h-screen '>
      <div className='mt-12'>
        <h2 className='italic text-[50px] font-bold text-start text-[#396C03] ml-14'>
        Explore your <br /> favourite city’s food.
        </h2>
        <p className='text-[18px] text-[#676767] text-start ml-14 mt-5'>
        Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh tristique. Non ligula tristique ut ut libero sit convallis maecenas. At egestas auctor porta mattis.
        </p>
       <div className='flex ml-14 mt-5'>
       <a href=" # " className='justify-start rounded-full gap-2 bg-[#396C03] btn'> Explore <BiArrowToRight></BiArrowToRight> </a>
       </div>
      </div>

      <div className='hidden md:block' style={{backgroundImage:(`url(${line})`), backgroundRepeat:'no-repeat'}} >
      
      <div className='relative' >
      <img className='cycle ' src={cycle} alt="" />
      </div>
      </div>
<div className='block md:hidden '>
<div className='relative' >
      <img className='cycle ' src={cycle} alt="" />
      </div>
</div>


    </div>
  )
}

export default Explore

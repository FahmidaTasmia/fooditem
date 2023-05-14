import React from 'react'

function Header() {
  return (
    <div className='md:flex justify-between mx-20 py-8'>
      <div>
        <h2 className='italic text-[#396C03] text-[28px] bold'>
            FoodTime
            </h2>
      </div>
      <div >
        <ul className='flex gap-8'>
            <li className='text-[14px] hover:text-[16px]'>Home</li>
            <li className='text-[14px] hover:text-[16px]'>Blog</li>
            <li className='text-[14px] hover:text-[16px]'>About Us</li>
            <li className='text-[14px] hover:text-[16px]'>Eng</li>
        </ul>
      </div>
      <div className='gap-3'>
        <button className='text-white px-5 rounded-full py-1 bg-[#396C03] mr-5'>login</button>
        <div className="indicator bg-[#396C03] p-3 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge bg-[#FF8B00] rounded-full indicator-item font-bold  ">2</span>
        </div>
      </div>
    </div>
  )
}

export default Header


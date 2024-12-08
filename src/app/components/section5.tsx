import React from 'react'
import Image from 'next/image'

const Section5 = () => {
  return (
    <div className="items-center text-center pb-10 px-20">
      <div className="items-center text-center py-20">
        <h1 className="text-[36px] font-semibold">Our Blogs</h1>
        <p className="mt-2 text-[16px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className="flex justify-between pb-20 gap-5 px-20">

        <div className="items-center text-center">
          <Image className='hover:shadow-md hover:rounded-md' src='/blog/blog1.png' alt="alt" height={400} width={400} />
          <p className="text-[18px] mt-5">Going all-in with millennial design</p>
          <button className="bg-transparent text-black border-b-2 my-3 text-[18px] font-light border-b-black">Read more</button>
          <div>
            <div className="flex justify-evenly">
              <p className="flex text-[16px]"> <img className="pr-2 " src="/icons/time.png" alt="" />5 min</p>
              <p className="flex text-[16px]"><img className="pr-2" src="/icons/date.png" alt="" />12th Oct 2022</p>
            </div>
          </div>
        </div>

        <div className="items-center text-center">
          <Image className='hover:shadow-md hover:rounded-md' src='/blog/blog2.png' alt="alt" height={400} width={400} />
          <p className="text-[18px] mt-5">Going all-in with millennial design</p>
          <button className="bg-transparent text-black border-b-2 my-3 pb-2 text-[18px] font-light border-b-black">Read more</button>
          <div>
            <div className="flex justify-evenly">
              <p className="flex text-[16px]"> <img className="pr-2" src="/icons/time.png" alt="" />5 min</p>
              <p className="flex text-[16px]"><img className="pr-2" src="/icons/date.png" alt="" />12th Oct 2022</p>
            </div>
          </div>
        </div>

        <div className="items-center text-center">
          <Image className='hover:shadow-md hover:rounded-md' src='/blog/blog3.png' alt="alt" height={400} width={400} />
          <p className="text-[18px] mt-5">Going all-in with millennial design</p>
          <button className="bg-transparent text-black border-b-2 my-3 pb-2 text-[18px] font-light border-b-black">Read more</button>
          <div>
            <div className="flex justify-evenly">
              <p className="flex"> <img className="pr-2" src="/icons/time.png" alt="" />5 min</p>
              <p className="flex"><img className="pr-2" src="/icons/date.png" alt="" />12th Oct 2022</p>
            </div>
          </div>
        </div>

      </div>
      <button className="bg-transparent text-black border-b-2 pb-2 text-[20px] border-b-black">More</button>
    </div>
  )
}

export default Section5;
import React from 'react'
import Image from 'next/image'

const Section4 = () => {
  return (
    <div className="bg-cream3 px-20 py-20 flex items-center justify-evenly">
        <div>
            <Image src='/images/asgaarda.png' alt="alt" width={800} height={400} />
        </div>
        <div className="text-center">
            <h3 className="text-[24px] font-light">New Arivals</h3>
            <h1 className="font-bold text-[50px]">Asgaard Sofa</h1>
            <button className="bg-transparent text-black border-[1px] mt-8 px-14 py-3 border-black">Shop now</button>
        </div>
    </div>
  )
}

export default Section4
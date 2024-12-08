import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (

    <div className="flex justify-between items-center bg-cream ">
      <div className="w-[50%] ml-[100px]">
        <h1 className="text-[60px] font-bold">Rocket Single Seater</h1>
        <button className="bg-transparent mt-4 border-b-2 pb-2 text-[20px] text-black border-b-black">Shop now</button>
      </div>
      <div>
        <Image className="" src='/images/rocket.png' alt="single seater" width={1500} height={1500} />
      </div>
    </div>

  );
};

export default Hero;
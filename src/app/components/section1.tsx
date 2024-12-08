import React from 'react'
import Image from 'next/image'

const section1 = () => {
  return (

    <div className="flex px-20 py-10 justify-between bg-cream2">
      <div>
        <Image src='/images/side1.png' height={900} width={900} alt="hello" />
        <h2 className="text-[30px] font-semibold">Side Tabel</h2>
        <button className="bg-transparent text-black mt-4 border-b-2 pb-2 text-[20px] border-b-black">Shop now</button>
      </div>
      <div>
        <Image src='/images/side2.png' height={900} width={900} alt="hello" />
        <h2 className="text-[30px] font-semibold">Side Tabel</h2>
        <button className="bg-transparent text-black mt-4 border-b-2 pb-2 text-[20px] border-b-black">Shop now</button>
      </div>

    </div>
  );
};

export default section1
import React from 'react'
import Image from 'next/image'

const Section3 = () => {
  return (

    <div>
      <div className="py-10 bg-gray-50">
        <div className="px-10 md:px-20 py-10 text-center">
          <h1 className="text-4xl font-bold mb-4">Top Picks for You</h1>
          <p className="text-lg text-gray-600">
          Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.          </p>
        </div>

        <div className="grid grid-cols-1 items-center justify-center sm:grid-cols-2 lg:grid-cols-4 gap-10 px-10 md:px-20 py-10">

          <div className="flex flex-col">
            <Image
              src="/images/img1.png"
              height={200}
              width={200}
              alt="Product Image"
              className="mb-4"
            />
            <h5 className=" text-gray-800 w-[70%] mb-2">Trenton Modular Sofa_3</h5>
            <h3 className="font-semibold text-black mb-4">Rs. 25,000.00</h3>
          </div>

          <div className="flex flex-col">
            <Image
              src="/images/img2.png"
              height={200}
              width={200}
              alt="Product Image"
              className="mb-4"
            />
            <h5 className=" w-[70%] text-gray-800 mb-2">Granite dining table with dining chair</h5>
            <h3 className=" font-semibold text-black mb-4">Rs. 25,000.00</h3>
          </div>

          <div className="flex flex-col">
            <Image
              src="/images/img3.png"
              height={200}
              width={200}
              alt="Product Image"
              className="mb-4"
            />
            <h5 className=" text-gray-800 w-[70%] mb-2">Outdoor bar table and stool</h5>
            <h3 className="font-semibold text-black mb-4">Rs. 25,000.00</h3>
          </div>

          <div className="flex flex-col">
            <Image
              src="/images/rocket.png"
              height={200}
              width={200}
              alt="Product Image"
              className="mb-4"
            />
            <h5 className=" text-gray-800 w-[70%] mb-2">Plain console with teak mirror</h5>
            <h3 className="font-semibold text-black  mb-4">Rs. 25,000.00</h3>
          </div>
        </div>
        <div className="text-center mt-4">
          <button className="bg-transparent text-black border-b-2 pb-2 text-[20px] border-b-black">Shop now</button>
        </div>
      </div>
    </div>
  )
}

export default Section3
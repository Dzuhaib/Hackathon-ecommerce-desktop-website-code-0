import React from 'react'
import Section1 from './section1'
import Image from 'next/image'

const page = () => {
    const title = ' > Shop'
  return (
    <div className=''>
        <div className='flex items-center bg4-center bg4-cover h-[320px] flex-col justify-center bg-[url("/images/shopbg.png")] bg-cover' >
            <Image src='/icons/shop1.png' height={70} width={70} alt=''  />
            <h1 className='text-[48px] font-semibold'>Shop</h1>
            <p><span className='font-semibold'>Home</span>{title}</p>
        </div>

        <div className='flex justify-between items-center h-[70px] px-10 bg-cream2'>
            <div className=''>
                <div className='flex-row gap-3 h-[50px] flex items-center'>
                    <h5 className='flex'><img className='flex mr-2' src="/icons/filter.png" width={18} height={18} alt="filter" /> Filter</h5>
                    <Image src='/icons/four.png' width={18} height={18} alt='' />
                    <Image src='/icons/view.png' width={18} height={18} alt='' />
                    <span> | </span>
                    <p>Showing 1–16 of 32 results</p>
                </div>
            </div>
            <div className=' '>
                <div className='flex-row h-[50px] gap-2 flex items-center'>
                    <h3>Show</h3>
                    <input className='w-16 text-black rounded-sm py-2 px-4' placeholder='16' type="number" />
                    <h3>Sort by</h3>
                    <input className='w-25 rounded-sm py-2 px-4' placeholder='Default' type="number" />
                    
                </div>
            </div>
        </div>

        {/* products */}
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
                src="/images/img5.png"
                height={200}
                width={200}
                alt="Product Image"
                className="mb-4"
                />
                <h5 className=" text-gray-800 w-[70%] mb-2">Plain console with teak mirror</h5>
                <h3 className="font-semibold text-black  mb-4">Rs. 25,000.00</h3>
            </div>
            </div>
        <div className="grid grid-cols-1 items-center justify-center sm:grid-cols-2 lg:grid-cols-4 gap-10 px-10 md:px-20 py-10">

            <div className="flex flex-col">
                <Image
                src="/images/rocket.png"
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
                src="/images/img6.png"
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
                src="/images/rocket.png"
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
        <div className="grid grid-cols-1 items-center justify-center sm:grid-cols-2 lg:grid-cols-4 gap-10 px-10 md:px-20 py-10">

            <div className="flex flex-col">
                <Image
                src="/images/rocket.png"
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
                src="/images/rocket.png"
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
                src="/images/rocket.png"
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
        <div className="grid grid-cols-1 items-center justify-center sm:grid-cols-2 lg:grid-cols-4 gap-10 px-10 md:px-20 py-10">

            <div className="flex flex-col">
                <Image
                src="/images/rocket.png"
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
                src="/images/rocket.png"
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
                src="/images/rocket.png"
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
                <div className='flex items-center justify-center gap-3 py-10 px-10'>
                    <button className='bg-cream2 rounded-md py-3 px-4'>1</button>
                    <button className='bg-cream2 rounded-md py-3 px-4'>2</button>
                    <button className='bg-cream2 rounded-md py-3 px-4'>3</button>
                    <button className='bg-cream2 rounded-md py-3 px-4'>Next</button>
                    
                </div>
        </div>
  )
}

export default page
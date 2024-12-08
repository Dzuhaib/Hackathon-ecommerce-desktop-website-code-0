import React from 'react'
import Image from 'next/image'

const page = () => {
    const title = ' > Cart'
  return (
    <div>
        <div className='flex items-center bg4-center bg4-cover h-[320px] flex-col justify-center bg-[url("/images/shopbg.png")] bg-cover' >
            <Image src='/icons/shop1.png' height={70} width={70} alt=''  />
            <h1 className='text-[48px] font-semibold'>Cart</h1>
            <p><span className='font-semibold'>Home</span>{title}</p>
        </div>
        <div className='flex justify-start'>
            <div className='w-[70%] px-20 py-20'>
                <div className='bg-cream shadow-md px-3 py-3 flex justify-between'>
                    <h2>Product</h2>
                    <h2>Price</h2>
                    <h2>Quantity</h2>
                    <h2>Subtitle</h2>
                </div>
                <div className='flex justify-between px-3 py-3'>
                    <div className='flex justify-between gap-4 items-center'>
                        <Image src='/images/product1/4.png' width={40} height={40} alt=''/>
                        <h2>Asgaard sofa</h2>
                    </div>
                    <div className=''>
                        <h2>Rs. 250,000.00</h2>
                    </div>
                    <div className=''>
                        <input className='border-[1px] border-black' type="number" placeholder='1' />
                    </div>
                    <div className=''>
                        <h2>Rs. 250,000.00</h2>
                    </div>
                </div>
            </div>

            <div className='w-[30%] shadow-md mb-10 py-10 px-10 bg-cream2 mt-20'>

                    <h2 className='font-semibold mb-5 text-[24px]'>Cart Totals</h2>
                    <div className='flex justify-between mb-3 w-[70%]'>
                        <h3 className='font-semibold'>Sub total</h3>
                        <h3>Rs. 250,000.00</h3>
                    </div>
                    <div className='flex justify-between w-[70%]'>
                        <h3 className='font-semibold'>total</h3>
                        <h3 className='text-cream4'>Rs. 250,000.00</h3>
                    </div>
                    <button className="bg-transparent text-black border-[1px] mt-8 px-14 py-3 border-black">Checkout</button>
            </div>

        </div>
    </div>
  )
}

export default page
import React from 'react'
import Image from 'next/image'

const page = () => {
    const title = ' > Contact'
  return (
    <div>
        <div className='flex items-center bg4-center bg4-cover h-[320px] flex-col justify-center bg-[url("/images/shopbg.png")] bg-cover' >
            <Image src='/icons/shop1.png' height={70} width={70} alt=''  />
            <h1 className='text-[48px] font-semibold'>Contact</h1>
            <p><span className='font-semibold'>Home</span>{title}</p>
        </div>

        <div className='text-center px-20 py-20'>
            <h2 className='text-[35px] font-semibold'>Get In Touch With Us</h2>
            <p>
                For More Information About Our Product & Services. Please Feel Free
                To Drop Us An Email. Our Staff Always Be There To Help You Out. 
                Do Not Hesitate!
            </p>
        </div>
        <div className='flex items-center px-20 jusitfy-between'>
            {/* text Div */}
            <div className='flex-1 justify-normal gap-5'>
                <div className='flex mb-4 gap-3'>
                    <div>
                        <Image src='/icons/location.png' height={20} width={20} alt='address' />
                    </div>
                    <div>
                        <h2 className='text-[24px]'>Address</h2>
                        <p className='w-[60%]'>236 5th SE Avenue, New York NY10000, United States</p>
                    </div>
                </div>
                <div className='flex mb-4 gap-3'>
                    <div>
                        <Image src='/icons/phone.png' height={20} width={20} alt='address' />
                    </div>
                    <div>
                        <h2 className='text-[24px]'>Phone</h2>
                        <p className=''>Mobile: +(84) 546-6789 <br/> Hotline: +(84) 456-6789</p>
                    </div>
                </div>
                <div className='flex gap-3'>
                    <div>
                        <Image src='/icons/hours.png' height={20} width={20} alt='address' />
                    </div>
                    <div>
                        <h2 className='text-[24px]'>Working Hours</h2>
                        <p className=''>Monday-Friday: 9:00 - 22:00 <br/> Saturday-Sunday: 9:00 - 21:00</p>
                    </div>
                </div>
            </div>
            {/* Form Div */}
            <div className='flex-1'>  
                        <div className="mb-4">
                        <label htmlFor="name" className="mb-2 text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                            placeholder="Enter your full name"
                        />
                        </div>
                        <div className="mb-4">
                        <label htmlFor="email" className=" mb-2 text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                            placeholder="Enter your email"
                        />
                        </div>

                        <div className="mb-4">
                        <label htmlFor="Subject" className="block mb-2 text-sm font-medium text-gray-700">
                            Subject
                        </label>
                        <input
                            type="text"
                            id="subject"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                            placeholder="Subject"
                        />
                        </div>
                        <div className="mb-4">
                        <label htmlFor="Message" className="block mb-2 text-sm font-medium text-gray-700">
                            Enter your message
                        </label>
                        <input
                            type="textarea"
                            id="message"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-black focus:border-black"
                            placeholder="Enter your message"
                        />
                        </div>

                        <button
                        type="submit"
                        className="w-full py-2 bg-black text-white rounded-md hover:bg-gray-800"
                        >
                        Submit
                        </button>
            </div>
        </div>
    </div>
  )
}

export default page
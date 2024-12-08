
import React from 'react'
import Image from 'next/image'

const page = () => {
    const title = ' > Blog'

  return (
    <div>
        <div className='flex items-center bg4-center bg4-cover h-[320px] flex-col justify-center bg-[url("/images/shopbg.png")] bg-cover' >
            <Image src='/icons/shop1.png' height={70} width={70} alt=''  />
            <h1 className='text-[48px] font-semibold'>Blog</h1>
            <p><span className='font-semibold'>Home</span>{title}</p>
        </div>

        <div className='flex pt-20 pb-5 px-20'>
            <div className='w-[70%]'>
                <div className='px-4 mb-8'>
                    <Image className='pb-5' src='/blog/blog1.png' width={1000} height={500} alt='blog1' />
                    <div className='flex w-[50%] justify-between'>
                        <p><img src="/icons/user.png" alt="" /> admin</p>
                        <p><img className='flex' src="/icons/calender.png" alt="" /> 08 Dec 2024</p>
                        <p><img className='flex' src="/icons/category.png" alt="" /> Wood</p>
                    </div>
                    <h1 className='font-semibold text-[24px] py-2'>Going all-in with millennial design</h1>
                    <p className='pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Labore aut facilis cum fugiat doloremque ducimus alias, 
                        culpa, non enim assumenda nesciunt blanditiis quaerat! Nulla 
                        distinctio quam pariatur, accusantium perspiciatis similique.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Labore aut facilis cum fugiat doloremque ducimus alias, 
                        culpa, non enim assumenda nesciunt blanditiis quaerat! Nulla 
                        distinctio quam pariatur, accusantium perspiciatis similique.
                    </p>
                    <button className="bg-transparent mb-5 text-black border-b-[1px] my-2 border-black">Read more</button>
                </div>
                <div className='px-4 mb-8'>
                    <Image className='pb-5' src='/blog/blog2.png' width={1000} height={500} alt='blog1' />
                    <div className='flex w-[50%] justify-between'>
                        <p><img src="/icons/user.png" alt="" /> admin</p>
                        <p><img className='flex' src="/icons/calender.png" alt="" /> 08 Dec 2024</p>
                        <p><img className='flex' src="/icons/category.png" alt="" /> Wood</p>
                    </div>
                    <p className='pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Labore aut facilis cum fugiat doloremque ducimus alias, 
                        culpa, non enim assumenda nesciunt blanditiis quaerat! Nulla 
                        distinctio quam pariatur, accusantium perspiciatis similique.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Labore aut facilis cum fugiat doloremque ducimus alias, 
                        culpa, non enim assumenda nesciunt blanditiis quaerat! Nulla 
                        distinctio quam pariatur, accusantium perspiciatis similique.
                    </p>
                    <button className="bg-transparent mb-5 text-black border-b-[1px] my-2 border-black">Read more</button>
                </div>
                <div className='px-4 mb-8'>
                    <Image className='pb-5' src='/blog/blog3.png' width={1000} height={500} alt='blog1' />
                    <div className='flex w-[50%] justify-between'>
                        
                        <p><img src="/icons/user.png" alt="" /> admin</p>
                        <p><img className='flex' src="/icons/calender.png" alt="" /> 08 Dec 2024</p>
                        <p><img className='flex' src="/icons/category.png" alt="" /> Wood</p>
                    </div>
                    <p className='pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Labore aut facilis cum fugiat doloremque ducimus alias, 
                        culpa, non enim assumenda nesciunt blanditiis quaerat! Nulla 
                        distinctio quam pariatur, accusantium perspiciatis similique.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Labore aut facilis cum fugiat doloremque ducimus alias, 
                        culpa, non enim assumenda nesciunt blanditiis quaerat! Nulla 
                        distinctio quam pariatur, accusantium perspiciatis similique.
                    </p>
                    <button className="bg-transparent mb-5 text-black border-b-[1px] my-2 border-black">Read more</button>
                </div>
            </div>
            <div className='w-[30%] px-5'>
                <div className='flex mb-5'>
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full py-3 pl-4 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
                    />
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                    <Image
                        src="/icons/search.png" // Replace with your search icon path
                        alt="Search Icon"
                        width={20}
                        height={20}
                        className="text-gray-500"
                    />
                </div>
            </div>

                <div className='px-4 '>
                    <h2 className='text-[24px] mb-4 font-semibold'>Categories</h2>
                    <div className='flex mb-4 text-gray-400 justify-between px-2 py-2'>
                        <h4>Crafts</h4>
                        <p>2</p>
                    </div>
                    <div className='flex mb-4 text-gray-400 justify-between px-2 py-2'>
                        <h4>Design</h4>
                        <p>8</p>
                    </div>
                    <div className='flex mb-4 text-gray-400 justify-between px-2 py-2'>
                        <h4>Handmade</h4>
                        <p>12</p>
                    </div>
                    <div className='flex mb-4 text-gray-400 justify-between px-2 py-2'>
                        <h4>Interior</h4>
                        <p>7</p>
                    </div>
                    <div className='flex mb-4 text-gray-400 justify-between px-2 py-2'>
                        <h4>Wood</h4>
                        <p>5</p>
                    </div>
                </div>
                <div className='px-4'>
                    <h2 className='text-[24px] mb-4 font-semibold'>Latest posts</h2>
                    <div className='flex gap-4 mb-4 px-2 py-2'>
                        <Image className='rounded-md' src='/blog/blog1.png' width={50} height={50} alt='blog' />
                        <div>
                            <h3 className='font-semibold'>Going all-in with millennial design</h3>
                            <p>08 Dec 2024</p>
                        </div>
                    </div>
                    <div className='flex gap-4 mb-4 px-2 py-2'>
                        <Image className='rounded-md' src='/blog/blog1.png' width={50} height={50} alt='blog' />
                        <div>
                            <h3 className='font-semibold'>Going all-in with millennial design</h3>
                            <p>08 Dec 2024</p>
                        </div>
                    </div>
                    <div className='flex gap-4 mb-4 px-2 py-2'>
                        <Image className='rounded-md' src='/blog/blog1.png' width={50} height={50} alt='blog' />
                        <div>
                            <h3 className='font-semibold'>Going all-in with millennial design</h3>
                            <p>08 Dec 2024</p>
                        </div>
                    </div>
                    <div className='flex gap-4 mb-4 px-2 py-2'>
                        <Image className='rounded-md' src='/blog/blog1.png' width={50} height={50} alt='blog' />
                        <div>
                            <h3 className='font-semibold'>Going all-in with millennial design</h3>
                            <p>08 Dec 2024</p>
                        </div>
                    </div>
                    <div className='flex gap-4 px-2 py-2'>
                        <Image className='rounded-md' src='/blog/blog1.png' width={50} height={50} alt='blog' />
                        <div>
                            <h3 className='font-semibold'>Going all-in with millennial design</h3>
                            <p>08 Dec 2024</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
            <div className='flex items-center justify-center gap-3 py-10'>
                        <button className='bg-cream2 rounded-md py-3 px-4'>1</button>
                        <button className='bg-cream2 rounded-md py-3 px-4'>2</button>
                        <button className='bg-cream2 rounded-md py-3 px-4'>3</button>
                        <button className='bg-cream2 rounded-md py-3 px-4'>Next</button>
            </div>


    </div>
  )
}

export default page
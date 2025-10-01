import React from 'react'
import DropdownImage5 from '../assets/Navbar/dropdownImage5.jpeg'
import DropdownImage6 from '../assets/Navbar/dropdownImage6.jpeg'

const Resourses = () => {
    return (
        <div className='font-roboto flex gap-6'>
            <div className='w-5/12'>
                <div className='bg-gray-100 rounded-3xl w-full flex gap-2'>
                    <div className='w-3/12 rounded-3xl'>
                        <img src={DropdownImage5} alt="" className='rounded-3xl  ' />
                    </div>
                    <div className='w-8/12 p-2 text-sm'>
                        <h1 className='font-bold'>

                            Blog

                        </h1>
                        <p className=''>
                            Explore actionable insights to transform your customer service</p>
                    </div>
                </div>
                <div className='bg-gray-100 rounded-3xl w-full mt-2 flex  gap-2'>
                    <div className='w-3/12 rounded-3xl'>
                        <img src={DropdownImage6} alt="" className='rounded-3xl  ' />
                    </div>
                    <div className='w-9/12 p-2 text-sm'>
                        <h1 className='font-bold'>

                            Resource library
                        </h1>
                        <p className=''>
                            Learn from expert guides, reports, and webinars on AI customer service.
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-3/12'>
                <div className=' rounded-3xl w-full flex gap-2'>
                    <div className=' py-1 px-5 text-sm'>
                        <h1 className='font-light text-lg text-gray-500'>
                            Learn
                        </h1>
                        <ul className='leading-loose text-base list-disc ml-5'>
                            <li className='hover:text-gray-400 cursor-pointer' >
                                Documentation ↗</li>
                            <li className='hover:text-gray-400 cursor-pointer'>
                                Ada academy ↗</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='w-3/12'>
                <div className=' rounded-3xl w-full flex gap-2'>
                    <div className=' py-1 px-5 text-sm'>
                        <h1 className='font-light text-lg text-gray-500'>

                            Tools
                        </h1>
                        <ul className='leading-loose text-base list-disc ml-5'>
                            <li className='hover:text-gray-400 cursor-pointer'>
                                ROI calculator</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resourses

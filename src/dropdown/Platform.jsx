import React from 'react'
import DropdownImage from '../assets/Navbar/dowpdownImage.avif'
import DropdownImage2 from '../assets/Navbar/dropdownImage2.avif'

const Platform = () => {
    return (
        <div className='font-roboto flex gap-6'>
            <div className='w-5/12'>
                <div className='bg-gray-100 rounded-3xl w-full flex gap-2'>
                    <div className='w-3/12 rounded-3xl'>
                        <img src={DropdownImage} alt="" className='rounded-3xl  ' />
                    </div>
                    <div className='w-8/12 p-2 text-sm'>
                        <h1 className='font-bold'>
                            Overview
                        </h1>
                        <p className=''>Measure, test, coach, and extend your AI agent at scale</p>
                    </div>
                </div>
                <div className='bg-gray-100 rounded-3xl w-full mt-2 flex gap-2'>
                    <div className='w-3/12 rounded-3xl'>
                        <img src={DropdownImage2} alt="" className='rounded-3xl  ' />
                    </div>
                    <div className='w-8/12 p-2 text-sm'>
                        <h1 className='font-bold'>
                            Integrations
                        </h1>
                        <p className=''>
                            Connect systems to personalize across channels and languages
                        </p>
                    </div>
                </div>
            </div>
            <div className='w-3/12'>
                <div className=' rounded-3xl w-full flex gap-2'>
                    <div className='w-8/12 py-1 px-5 text-sm'>
                        <h1 className='font-light text-lg text-gray-500'>
                            Products
                        </h1>
                        <ul className='leading-loose text-base list-disc ml-5'>
                            <li className='hover:text-gray-400 cursor-pointer' >Messaging</li>
                            <li className='hover:text-gray-400 cursor-pointer'>Voice</li>
                            <li className='hover:text-gray-400 cursor-pointer'>Email</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='w-3/12'>
                <div className=' rounded-3xl w-full flex gap-2'>
                    <div className='w-8/12 py-1 px-5 text-sm'>
                        <h1 className='font-light text-lg text-gray-500'>
                            Optimize
                        </h1>
                        <ul className='leading-loose text-base list-disc ml-5'>
                            <li className='hover:text-gray-400 cursor-pointer'>Playbooks</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Platform

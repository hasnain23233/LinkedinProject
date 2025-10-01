import React from 'react'
import DropdownImage3 from '../assets/Navbar/dropdownImage3.avif'
import DropdownImage4 from '../assets/Navbar/dropdownImage4.avif'

const Customers = () => {
    return (
        <div>
            <div className='w-full'>
                <div className='bg-gray-100 rounded-3xl w-full flex gap-2'>
                    <div className='w-3/12 rounded-3xl'>
                        <img src={DropdownImage3} alt="" className='rounded-3xl  ' />
                    </div>
                    <div className='w-9/12 p-2 text-sm'>
                        <h1 className='font-bold'>

                            Customer stories

                        </h1>
                        <p className=''>See how 350+ businesses delivered exceptional customer service
                        </p>
                    </div>
                </div>
                <div className='bg-gray-100 rounded-3xl w-full mt-2 flex gap-2'>
                    <div className='w-3/12 rounded-3xl'>
                        <img src={DropdownImage4} alt="" className='rounded-3xl  ' />
                    </div>
                    <div className='w-8/12 p-2 text-sm'>
                        <h1 className='font-bold'>

                            Wall of love

                        </h1>
                        <p className=''>
                            Loved by our customers and their customers
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers

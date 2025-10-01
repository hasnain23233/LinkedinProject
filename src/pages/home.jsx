import React from 'react'
import homeImage from '../assets/homePage/download.avif'
import StatsSection from '../components/StatsSection'
import dropdownImage5 from '../assets/Navbar/dropdownImage5.jpeg'
import monday from '../assets/Navbar/monday.svg'
import AItranner1 from '../assets/Navbar/AItranner1.avif'


const home = () => {
    return (
        <div className='font-roboto'>
            <div className='max-h-screen text-center flex items-center justify-end overflow-hidden'>
                <img src={homeImage} alt="" className='h-full w-full' />
                <div className="h-full absolute top-0 w-full mt-16 ">
                    <div className='h-full flex items-center'>
                        <div className='w-8/12 m-auto'>
                            <h1 className='text-3xl  md:text-5xl lg:text-7xl  text-white text-center'>
                                Trusted by enterprises to drive AI customer service
                            </h1>
                            <p className='text-white leading-loose mt-3 py-4'>Turning AI Agents into your most effective CX employees</p>
                            <button class="group relative inline-flex h-[calc(40px+2px)] items-center justify-center rounded-full bg-pink-200 py-1 pl-4 pr-12  text-black">
                                <span class="z-10 pr-2">Consult an expert</span>
                                <div class="absolute right-1 inline-flex h-10 w-10 items-center justify-end rounded-full bg-black ">
                                    <div class="mr-3 flex items-center justify-center hover:translate-x-1 transition-transform duration-300 ease-in-out text-white">
                                        <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-auto text-neutral-50"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-gray-100 text-center'>
                <StatsSection />
                <h1 className='text-5xl'>drive transformative <br /> impact with AI</h1>
                <div>
                    <div className='w-11/12 m-auto flex bg-[#d17a00]'>
                        <div className='w-4/12 relative '>
                            <img src={dropdownImage5} alt="" className=' h-full w-full' />
                            <div className='absolute top-0 left-0 px-4 w-full h-full items-center justify-center flex flex-col bg-black bg-opacity-50 text-white'>
                                <img src={monday} alt="" />
                            </div>
                        </div>
                        <div className='w-5/12 p-5 border-r border-gray-200 text-start flex flex-col justify-between gap-4'>
                            <h1 className='text-5xl text-white font-extralight'>deliver extraordinary experiences  on <br /> every channel</h1>
                            <div className='flex justify-between items-center text-white'>
                                <h1 className='text-xl w-6/12'>42% reduction in average agent handle time</h1>
                                <button class="group relative inline-flex h-[calc(40px+2px)] items-center justify-center rounded-full bg-pink-200 py-1 pl-4 pr-12  text-black">
                                    <span class="z-10 pr-2">Consult an expert</span>
                                    <div class="absolute right-1 inline-flex h-10 w-10 items-center justify-end rounded-full bg-black ">
                                        <div class="mr-3 flex items-center justify-center hover:translate-x-1 transition-transform duration-300 ease-in-out text-white">
                                            <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-auto text-neutral-50"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className="w-3/12">
                            <img src={AItranner1} className=' ml-3 mt-3' alt="" />
                            <p className='text-white text-sm text-start mt-8 p-3 border-b'>
                                “With Ada, we know the automated resolution will continue to improve as the AI agent learns and grows. There’s significant flexibility in making changes and improvements. The responses and the accuracy are phenomenal.”
                            </p>
                            <div className='text-start leading-loose text-white p-3 text-sm'>
                                <p>Tal Gulst</p>
                                <p>Bot Manager</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default home

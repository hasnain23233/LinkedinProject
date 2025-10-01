import React from 'react'
import homeImage from '../assets/homePage/download.avif'
import StatsSection from '../components/StatsSection'
import ScrollingAnimation from '../components/ScrollingAnimation'

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
            <div className='bg-gray-100'>
                <StatsSection />
                <ScrollingAnimation />
            </div>

        </div>
    )
}

export default home

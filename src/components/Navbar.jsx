import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(null); // track which menu is open

    // Toggle function
    const toggleMenu = (menu) => {
        if (openMenu === menu) {
            setOpenMenu(null);
        } else {
            setOpenMenu(menu);
        }
    };

    return (
        <nav className="fixed top-12 left-1/2 transform font-roboto -translate-x-1/2 w-11/12 bg-white shadow-md z-50 rounded-full">
            <div className="flex gap-12 items-center px-3 py-2">
                <h1 className="text-xl  font-bold w-[80px]">
                    <svg viewBox="0 0 71 20" fill="none" className="w-full" xmlns="http://www.w3.org/2000/svg"> <title>Ada Support</title> <path d="M31.968 19.462c-.742-.358-1.314-.862-1.718-1.512-.404-.65-.605-1.4-.605-2.247 0-.905.23-1.7.69-2.389.46-.687 1.117-1.215 1.971-1.583.855-.367 1.846-.55 2.972-.55h3.295c.3 0 .517-.057.648-.17.131-.113.197-.283.197-.509 0-.98-.338-1.771-1.014-2.374-.676-.603-1.605-.905-2.788-.905-.695 0-1.324.132-1.888.396-.563.264-1.019.613-1.366 1.046-.347.434-.54.914-.577 1.442h-2.169a4.84 4.84 0 0 1 .972-2.46c.554-.734 1.277-1.309 2.169-1.724a6.766 6.766 0 0 1 2.887-.622c1.22 0 2.282.222 3.183.665.901.442 1.6 1.06 2.099 1.851.497.792.746 1.715.746 2.77v9.187H39.42v-2.46l-.17.284a4.18 4.18 0 0 1-1.14 1.271 5.609 5.609 0 0 1-1.62.834 6.18 6.18 0 0 1-1.943.297c-.977 0-1.836-.18-2.578-.537v-.001Zm6.254-2.643c.797-.838 1.197-1.993 1.197-3.463v-.31h-4c-1.052 0-1.892.235-2.52.706-.63.47-.944 1.112-.944 1.922 0 .735.267 1.319.802 1.752.535.434 1.244.65 2.127.65 1.427 0 2.54-.419 3.338-1.257ZM46.235 19.038a6.236 6.236 0 0 1-2.324-2.63c-.535-1.111-.803-2.364-.803-3.759s.268-2.647.803-3.76a6.244 6.244 0 0 1 2.324-2.628c1.014-.64 2.243-.961 3.69-.961.976 0 1.901.236 2.775.706.873.471 1.525 1.084 1.957 1.838V.004h2.254v19.768h-2.254v-2.346c-.432.773-1.084 1.395-1.957 1.866a5.815 5.815 0 0 1-2.803.707c-1.427 0-2.648-.32-3.662-.961Zm6.38-1.739c.704-.442 1.253-1.064 1.647-1.865.395-.8.592-1.729.592-2.784 0-1.62-.427-2.912-1.282-3.873-.854-.96-1.995-1.441-3.422-1.441-.94 0-1.76.222-2.465.664-.704.443-1.253 1.065-1.647 1.866-.395.8-.592 1.729-.592 2.784 0 1.62.427 2.912 1.282 3.872.854.961 1.995 1.442 3.422 1.442.939 0 1.76-.222 2.465-.665ZM60.967 19.462c-.742-.358-1.315-.862-1.719-1.512-.404-.65-.605-1.4-.605-2.247 0-.905.23-1.7.69-2.389.46-.687 1.117-1.215 1.972-1.583.854-.367 1.845-.55 2.971-.55h3.296c.3 0 .516-.057.647-.17.132-.113.198-.283.198-.509 0-.98-.338-1.771-1.014-2.374-.676-.603-1.606-.905-2.79-.905-.694 0-1.323.132-1.886.396-.564.264-1.02.613-1.366 1.046-.348.434-.54.914-.578 1.442h-2.168a4.846 4.846 0 0 1 .971-2.46c.554-.734 1.277-1.309 2.17-1.724a6.766 6.766 0 0 1 2.886-.622c1.221 0 2.282.222 3.183.665.902.442 1.6 1.06 2.099 1.851.497.792.746 1.715.746 2.77v9.187h-2.253v-2.46l-.169.284c-.282.49-.662.914-1.14 1.271a5.611 5.611 0 0 1-1.62.834 6.18 6.18 0 0 1-1.944.297c-.977 0-1.836-.18-2.577-.537v-.001Zm6.253-2.643c.798-.838 1.197-1.993 1.197-3.463v-.31h-4c-1.052 0-1.892.235-2.52.706-.63.47-.944 1.112-.944 1.922 0 .735.268 1.319.803 1.752.535.434 1.243.65 2.126.65 1.427 0 2.54-.419 3.338-1.257ZM10.645 0C4.207 0 .976 5.765.98 9.565v10.209h4.367c0-5.368 10.607-5.356 10.607 0h4.361v-10.2c0-3.808-3.23-9.574-9.669-9.574Zm.004 13.998C8.075 14 5.99 11.906 5.992 9.325c.002-2.538 2.12-4.665 4.65-4.667 2.572-.001 4.658 2.092 4.657 4.673-.002 2.539-2.12 4.665-4.65 4.667Z" fill="#0A0B0C"></path> </svg>
                </h1>
                <ul className="flex space-x-6 w-7/12 text- font-light text-gray-800">
                    <li className="relative w-2/12">
                        <button
                            onClick={() => toggleMenu("Platform")}
                            className="flex  items-center justify-center gap-1 hover:text-white hover:bg-black rounded-full m-auto  p-2 w-full focus:outline-none"
                        >
                            Platform
                            {openMenu === "Platform" ? (
                                <FaChevronUp className="w-3 h-3" />
                            ) : (
                                <FaChevronDown className="w-3 h-3" />
                            )}
                        </button>
                        {openMenu === "Platform" && (
                            <div className="absolute left-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">
                                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                                    Dashboard
                                </a>
                                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                                    News
                                </a>
                                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                                    Updates
                                </a>
                            </div>
                        )}
                    </li>

                    <li className="relative w-2/12">
                        <button
                            onClick={() => toggleMenu("Industries")}
                            className="flex  items-center justify-center gap-1 hover:text-white hover:bg-black rounded-full m-auto  p-2 w-full focus:outline-none"
                        >
                            Industries
                            {openMenu === "Industries" ? (
                                <FaChevronUp className="w-3 h-3" />
                            ) : (
                                <FaChevronDown className="w-3 h-3" />
                            )}
                        </button>
                        {openMenu === "Industries" && (
                            <div className="absolute left-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">
                                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                                    Our Story
                                </a>
                                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                                    Team
                                </a>
                                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                                    Careers
                                </a>
                            </div>
                        )}
                    </li>

                    <li className="relative w-2/12">
                        <button
                            onClick={() => toggleMenu("Costomers")}
                            className="flex  items-center justify-center gap-1 hover:text-white hover:bg-black rounded-full m-auto  p-2 w-full focus:outline-none"
                        >
                            Costomers
                            {openMenu === "Costomers" ? (
                                <FaChevronUp className="w-3 h-3" />
                            ) : (
                                <FaChevronDown className="w-3 h-3" />
                            )}
                        </button>
                        {openMenu === "Costomers" && (
                            <div className="absolute left-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">
                                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                                    Web Development
                                </a>
                                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                                    Design
                                </a>
                                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                                    SEO
                                </a>
                            </div>
                        )}
                    </li>

                    {/* Contact Dropdown */}
                    <li className="relative w-2/12">
                        <button
                            onClick={() => toggleMenu("contact")}
                            className="flex  items-center justify-center gap-1 hover:text-white hover:bg-black rounded-full m-auto  p-2 w-full focus:outline-none"
                        >
                            Contact
                            {openMenu === "contact" ? (
                                <FaChevronUp className="w-3 h-3" />
                            ) : (
                                <FaChevronDown className="w-3 h-3" />
                            )}
                        </button>
                        {openMenu === "contact" && (
                            <div className="absolute left-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">
                                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                                    Email
                                </a>
                                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                                    Phone
                                </a>
                                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">
                                    Locations
                                </a>
                            </div>
                        )}
                    </li>
                    <li className="w-2/12">
                        <button
                            className="flex  items-center justify-center gap-1 hover:text-white hover:bg-black rounded-full m-auto  p-2 w-full focus:outline-none"
                        >
                            Pricing
                        </button></li>
                </ul>
                <div className="w-3/12 flex items-center justify-end gap-4">
                    <div className="hover:bg-gray-200 p-2 rounded-full cursor-pointer bg-gray-50">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>

                    </div>
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
        </nav>
    );
};

export default Navbar;

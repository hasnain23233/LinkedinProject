import React from 'react'

const Navbar = () => {
    return (
        <nav class="fixed top-12 left-1/2 transform -translate-x-1/2 w-11/12 bg-white shadow-md z-50 rounded-full">
            <div class="flex justify-between items-center p-4">
                <h1 class="text-xl font-bold">Logo</h1>
                <ul class="flex space-x-6">
                    <li><a href="#" class="hover:text-blue-500">Home</a></li>
                    <li><a href="#" class="hover:text-blue-500">About</a></li>
                    <li><a href="#" class="hover:text-blue-500">Contact</a></li>
                </ul>
            </div>
        </nav>


    )
}

export default Navbar

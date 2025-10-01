import React from 'react'
import Topbanner from '../components/Topbanner'
import Home from '../pages/home'
import Navbar from '../components/Navbar'

const Full_Page = () => {
    return (
        <div>
            <Navbar />
            <Topbanner />
            <Home />
        </div>
    )
}

export default Full_Page

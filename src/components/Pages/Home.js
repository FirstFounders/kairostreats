import React from 'react'
import ShowCase from '../Layouts/Showcase/ShowCase'
import Navbar from '../Layouts/Navbar/Navbar'
import Log from '../Layouts/Navbar/Log'
import CakeItem from '../Layouts/CakeItem/CakeItem'
import CustomCake from '../Layouts/CustomCake/CustomCake'
import Special from '../Layouts/Specials/Specials'
import Footer from '../Layouts/Footer/Footer'


function Home(){
    return(
        <div>
            <Log/>
            <Navbar/>
            <ShowCase/>
            <CakeItem/>
            <CustomCake/>
            <Special/>
            <Footer/>
            

        </div>
    )
}

export default Home
import React from 'react'
import ShowCase from '../Layouts/ShowCase'
import Navbar from '../Layouts/Navbar'
import CakeItem from '../Layouts/CakeItem/CakeItem'
import CustomCake from '../Layouts/CustomCake/CustomCake'
import Special from '../Layouts/Specials/Specials'
import Footer from '../Layouts/Footer/Footer'


function Home(){
    return(
        <div>
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
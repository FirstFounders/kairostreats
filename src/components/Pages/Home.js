import React from 'react'
import ShowCase from '../Layouts/Showcase/ShowCase'
import CakeItem from '../Layouts/CakeItem/CakeItem'
import CustomCake from '../Layouts/CustomCake/CustomCake'
import Special from '../Layouts/Specials/Specials'
import Footer from '../Layouts/Footer/Footer'


function Home(){
    return(
        <div>
            <ShowCase/>
            <CakeItem/>
            <CustomCake/>
            <Special/>
            <Footer/>
        </div>
    )
}

export default Home
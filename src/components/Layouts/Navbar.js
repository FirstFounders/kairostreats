import React from 'react'
import {Link} from 'react-router-dom'
import './Basket-Overlay/Overlay.css'

// import { Drawer, Select} from 'antd';



function Navbar(){
    
    return( 
                <nav>
                    <ul>
                        <li><img src={require('../../asset/images/logo.png')} alt="Kairo's" /></li>
                    </ul>
                    <ul>
                        <li className="menu"><Link to="https://victoriaagbamoro.github.io/Cake-WebPage">Categories <i class="fa fa-caret-down" aria-hidden="true"></i></Link>
                            <ul className="sub-menu">
                                <li className="pink"><Link to="https://victoriaagbamoro.github.io/Cake-WebPage">Character Cakes</Link></li>
                                <li><Link to="https://victoriaagbamoro.github.io/Cake-WebPage">Cakes for Her</Link></li>
                                <li><Link to="https://victoriaagbamoro.github.io/Cake-WebPage">Cakes for Him</Link></li>
                            </ul>
                        </li>

                        <li className="menu"><Link to="https://victoriaagbamoro.github.io/Cake-WebPage">Customize Cake</Link>

                        </li>
                    </ul>
                    <ul>
                        <li className="open-modal"><img  src={require('../../asset/images/basket.png')} alt="Kairo's" /></li>
                    </ul>
                </nav>
    )
}

export default Navbar;
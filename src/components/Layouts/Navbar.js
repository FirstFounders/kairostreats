import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(){
    return(
                <nav>
                    <ul>
                        <li><img src={require('../../asset/images/logo.png')} alt="Kairo's" /></li>
                    </ul>
                    <ul>
                        <li className="menu"><Link to="https://victoriaagbamoro.github.io/Cake-WebPage">Categories <i class="fa fa-caret-down" aria-hidden="true"></i></Link>
                            <ul className="sub-menu">
                                <li><Link to="https://victoriaagbamoro.github.io/Cake-WebPage">Link 1</Link></li>
                                <li><Link to="https://victoriaagbamoro.github.io/Cake-WebPage">Link 1</Link></li>
                                <li><Link to="https://victoriaagbamoro.github.io/Cake-WebPage">Link 1</Link></li>
                                <li><Link to="https://victoriaagbamoro.github.io/Cake-WebPage">Link 1</Link></li>
                            </ul>
                        </li>

                        <li className="menu"><Link to="https://victoriaagbamoro.github.io/Cake-WebPage">Customize Cake <i class="fa fa-caret-down" aria-hidden="true"></i></Link>
                            <ul className="sub-menu"> 
                                <li><Link to="https://victoriaagbamoro.github.io/Cake-WebPage">Link 1</Link></li>
                                <li><Link to="https://victoriaagbamoro.github.io/Cake-WebPage">Link 1</Link></li>
                                <li><Link to="https://victoriaagbamoro.github.io/Cake-WebPage">Link 1</Link></li>
                                <li><Link to="https://victoriaagbamoro.github.io/Cake-WebPage">Link 1</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <ul>
                        <li><img src={require('../../asset/images/basket.png')} alt="Kairo's" /></li>
                    </ul>
                </nav>
    )
}

export default Navbar;
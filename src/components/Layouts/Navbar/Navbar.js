import React from 'react'
import './Navbar.css'

function Navbar(){
    return(
        <div>

            <header>
                <nav>
                    <ul>
                        <li className="menu"><a href="https://victoriaagbamoro.github.io/Cake-WebPage">Categories <i class="fa fa-caret-down" aria-hidden="true"></i></a>
                            <ul className="sub-menu">
                                <li><a href="https://victoriaagbamoro.github.io/Cake-WebPage">Link 1</a></li>
                                <li><a href="https://victoriaagbamoro.github.io/Cake-WebPage">Link 1</a></li>
                                <li><a href="https://victoriaagbamoro.github.io/Cake-WebPage">Link 1</a></li>
                                <li><a href="https://victoriaagbamoro.github.io/Cake-WebPage">Link 1</a></li>
                            </ul>
                        </li>

                        <li className="menu"><a href="https://victoriaagbamoro.github.io/Cake-WebPage">Customize Cake <i class="fa fa-caret-down" aria-hidden="true"></i></a>
                            <ul className="sub-menu"> 
                                <li><a href="https://victoriaagbamoro.github.io/Cake-WebPage">Link 1</a></li>
                                <li><a href="https://victoriaagbamoro.github.io/Cake-WebPage">Link 1</a></li>
                                <li><a href="https://victoriaagbamoro.github.io/Cake-WebPage">Link 1</a></li>
                                <li><a href="https://victoriaagbamoro.github.io/Cake-WebPage">Link 1</a></li>
                            </ul>
                        </li>
                    </ul>

                    <ul>
                        
                    </ul>
                </nav>

            </header>

        </div>
    )
}

export default Navbar;
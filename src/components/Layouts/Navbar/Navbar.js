import React, { useState } from 'react';
import {Link} from 'react-router-dom'

import { Drawer} from 'antd';

// import '../Cart/Cart.css'

import Cart from '../Cart/Cart'

import './Navbar.css'


function Navbar(){

    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
      };

    
    
    return( 
                <nav>
                    <Link to="/">
                    <ul>
                        <li><img src={require('./images/logo.png')} alt="Kairo's" /></li>
                    </ul>
                    </Link>
                    <ul>
                        <li className="menu"><Link to="/">Categories <i class="fa fa-caret-down" aria-hidden="true"></i></Link>
                            <ul className="sub-menu">
                                <li><Link to="/forher">Cakes for Her</Link></li>
                                <li><Link to="/forhim">Cakes for Him</Link></li>
                                <li><Link to="/birthday">Birthday cakes</Link></li>
                                <li><Link to="/wedding">Wedding cakes</Link></li>
                            </ul>
                        </li>

                        <li className="menu"><Link to="/customizepage">Customize Cake</Link>

                        </li>
                    </ul>
                    <ul>
                        <li className="open-modal"><img onClick={showDrawer}  src={require('./images/basket.png')} alt="Kairo's" /></li>
                        <Drawer
                        width="700px"
                        placement="right"
                        closable={false}
                        onClose={onClose}
                        visible={visible}
                        drawerStyle={{
                        background: "#F24472",
                        width: "700px"
                        }
                            
                         }
                        >
                        <div className="close-bg">
                         <span className="close-modal-btn" onClick={()=>onClose()}>
                         <svg  width="20" height="20" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 1L1 22M1 1L21 22" stroke="white" stroke-width="2" stroke-linecap="round"/>
                        </svg> 
                        </span>
                        </div>
                        <div>
                            <Cart/>
                        </div>
                        </Drawer>
                    </ul>
                </nav>
    )
}

export default Navbar;
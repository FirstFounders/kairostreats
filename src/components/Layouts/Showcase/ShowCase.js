import React from 'react'
import './Showcase.css'

import { Link } from "react-router-dom";



class ShowCase extends React.Component{
    render(){
        return(
            <header className="showcase-bg">
                <div className="bg-icon">
                    <img className="line-1" src="https://i.ibb.co/b2zVrvK/Group-83line6.png" alt="Group-83line6"/>
                    <img className="line-2" src="https://i.ibb.co/c2RGDh1/Group-82line3.png" alt="Group-82line3"/>
                    <img className="line-3" src="https://i.ibb.co/wwnnY6j/Group-80line5.png" alt="Group-80line5" />
                    <img className="line-4" src="https://i.ibb.co/G2yk1LT/Group-81line4.png" alt="Group-81line4"/>
                </div>
                <div className="overall-container">
                    <div className="showcase-area">
                        <div className="image-area">
                            <div className="white-bg">
                                <img src="https://i.ibb.co/88x9pSZ/image-1image-bg.png" alt="background-bg"/>
                            </div>
                        </div>
                    </div>
                    <div className="text-area">
                        <div className="text">
                            <h1>Bam-Bam Lala <br></br>Special Offer</h1>
                            <p>Get bambam for your loved ones 
                                <br></br>this season!</p>
                            <Link to="/cakeitem">
                                <button>Shop!</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="svg-area">
                    <div className="move backward">
                    <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.292892 7.2929C-0.0976315 7.68342 -0.0976314 8.31658 0.292893 8.70711L6.65686 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928933C7.68054 0.538409 7.04738 0.538409 6.65685 0.928933L0.292892 7.2929ZM21 7L1 7L1 9L21 9L21 7Z" fill="#F24472"/>
                    </svg>
                    </div>
                    <div className="dot"> </div>
                    <div className="dot"> </div>
                    <div className="dot"> </div>
                    <div className="dot"> </div>
                    <div className="move forward">
                    <svg width="21" height="16" viewBox="0 0 21 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.7071 8.70711C21.0976 8.31658 21.0976 7.68342 20.7071 7.29289L14.3431 0.928932C13.9526 0.538408 13.3195 0.538408 12.9289 0.928932C12.5384 1.31946 12.5384 1.95262 12.9289 2.34315L18.5858 8L12.9289 13.6569C12.5384 14.0474 12.5384 14.6805 12.9289 15.0711C13.3195 15.4616 13.9526 15.4616 14.3431 15.0711L20.7071 8.70711ZM0 9L20 9V7L0 7L0 9Z" fill="#F24472"/>
                    </svg>
                    </div>
                </div>
            </header>
        )
    }
}

export default ShowCase
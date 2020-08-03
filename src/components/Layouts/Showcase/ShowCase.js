import React from 'react'
import './ShowCase.css'
import ArrowSvg from './ArrowSvg'


class ShowCase extends React.Component{
    render(){
        return(
            <div className="showcase-bg">
                <div className="overall-container">
                    <div className="bg-icon">
                        <img className="line-1" src="https://i.ibb.co/b2zVrvK/Group-83line6.png" alt="Group-83line6"/>
                        <img className="line-2" src="https://i.ibb.co/c2RGDh1/Group-82line3.png" alt="Group-82line3"/>
                        <img className="line-3" src="https://i.ibb.co/wwnnY6j/Group-80line5.png" alt="Group-80line5" />
                        <img className="line-4" src="https://i.ibb.co/G2yk1LT/Group-81line4.png" alt="Group-81line4"/>

                    </div>

                    <div className="showcase-area">
                        <div className="image-area">
                            <div className="white-bg">
                                <div className="image-bg">
                                    <img src="https://i.ibb.co/88x9pSZ/image-1image-bg.png" alt="background-bg"/>
                                </div>
                            </div>

                            <div className="svg-area">
                                <span><ArrowSvg/></span>

                            </div>

                        </div>

                        <div className="text-area">
                            <div className="text">
                                <h1>Bam-Bam Lala <br></br>Special Offer</h1>
                                <br></br>
                                <p>Get bambam for your loved ones 
                                    <br></br>this season!</p>
                                <br></br>
                                <button>Shop!</button>
                            </div>

                            

                        </div>



                    </div>
                </div>
                
                
            </div>
        )
    }
}

export default ShowCase
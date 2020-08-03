import React from 'react'
import './CustomCake.css'


export default function CustomCake(){
    return(
        <div>
            <div className="custom-heading">
                <h1>Customize your cake</h1>
                <img src="https://i.ibb.co/T0bJPBn/Group-65.png" alt="Group"/>
            </div>

            <div className="custom-bg">
                {/* <div className="custom-img">
                    <p>Customize a cake to your <br></br>taste and order</p>
                    <button>Customize</button>
                
                </div> */}

                <div className="img-display">
                    <img className="vector" src="https://i.ibb.co/42jKgyt/Group-86vector.png" alt="vector"/>
                    <div className="flex1">
                        <div>
                            <img src="https://i.ibb.co/kHjh9PQ/Rectangle-19cake1.png" alt="one"/>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/LJKFG5X/Rectangle-20cake2.png" alt="two"/>
                        </div>
                    </div>

                    <div className="flex2">
                        <div>
                            <img src="https://i.ibb.co/kHjh9PQ/Rectangle-19cake1.png" alt="three"/>
                        </div>
                        <div>
                            <img src="https://i.ibb.co/LJKFG5X/Rectangle-20cake2.png" alt="four"/>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
    )
}
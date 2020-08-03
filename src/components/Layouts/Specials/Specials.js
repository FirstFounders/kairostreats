import React from 'react'
import './Special.css'
import SpecialArrowSvg from './SpecialArrowSvg'



function Special(){
    return(
        <div className="bg-special">
            <div className="special-heading">
                <h1>Specials</h1>
                <img src="https://i.ibb.co/T0bJPBn/Group-65.png" alt="Group"/>
            </div>

            <div className="special-flex">
                <div>
                    <img src="https://i.ibb.co/1JJyMhk/Ellipse-14cake2.png" alt="Ellipse-14cake2"/>
                    <div className="s-text">
                        <h3>Ginger Cake</h3>
                        <p>N 23,800</p>
                    </div>
                </div>

                <div>
                    <img src="https://i.ibb.co/528TZ56/Ellipse-8cake1.png" alt="Ellipse-8cake1"/>
                    <div className="s-text">
                        <h3>Ginger Cake</h3>
                        <p>N 23,800</p>
                    </div>
                </div>

                <div>
                    <img src="https://i.ibb.co/QXNXYHF/Ellipse-11cake4.png" alt="Ellipse-8cake1"/>
                    <div className="s-text">
                        <h3>Ginger Cake</h3>
                        <p>N 23,800</p>
                    </div>
                </div>

                <div>
                    <img src="https://i.ibb.co/1JJyMhk/Ellipse-14cake2.png" alt="Ellipse-8cake1"/>
                    <div className="s-text">
                        <h3>Ginger Cake</h3>
                        <p>N 23,800</p>
                    </div>
                </div>

                <div>
                    <img src="https://i.ibb.co/528TZ56/Ellipse-8cake1.png" alt="Ellipse-8cake1"/>
                    <div className="s-text">
                        <h3>Ginger Cake</h3>
                        <p>N 23,800</p>
                    </div>
                </div>

                <div>
                    <img src="https://i.ibb.co/MGSbTJf/Ellipse-13cake5.png" alt="Ellipse-8cake1"/>
                    <div className="s-text">
                        <h3>Ginger Cake</h3>
                        <p>N 23,800</p>
                    </div>
                </div>

            </div>

            <div className="special-svg">
                <SpecialArrowSvg/>
            </div>


        </div>
    )
}

export default Special
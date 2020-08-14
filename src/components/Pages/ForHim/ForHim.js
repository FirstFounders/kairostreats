import React, {useState} from 'react';
import {Link} from 'react-router-dom'

import './ForHim.css'


function ForHim(){
    const [himdata, setHimData] = useState([]);

    const addTocart = (him) => {
        console.log("Add to cart sec");
        setHimData([...himdata, him]);
    }

        const [forHims] = useState([
            {
                id: 1,
                image: "https://i.ibb.co/g7L6gFP/vanilla.jpg",
                flavour: " Vanilla/strawberry",
                size8: "11500",
                size10: "17000",
                size12: "26500",
                text: "Order now"
              },
              {
                id: 2,
                image: "https://i.ibb.co/RSGsjh5/chocolate-velvet.jpg",
                flavour: "Chocolate/redvelvet ",
                size8: "14500",
                size10: "20000",
                size12: "29500",
                text: "Order now"
              },
              {
                id: 3,
                image: "https://i.ibb.co/f4H92bP/20200711-112216-1.jpg",
                flavour: "Vanilla/strawberry",
                size8: "11500",
                size10: "16500",
                size12: "24000",
                text: "Order now"
              },
              {
                id: 4,
                image: "https://i.ibb.co/4SYRmdR/20200715-105023-1.jpg",
                flavour: "Redvelvet/chocolate ",
                size8: "14500",
                size10: "20500",
                size12: "28000",
                text: "Order now"
              },
              {
                id: 5,
                image: "https://i.ibb.co/Vj1m8sm/20200617-091058-1.jpg",
                flavour: "vanilla/strawberry/coconut cake",
                size8: "15500",
                size10: "22500",
                text: "Order now"
              },
              {
                id: 6,
                image: "https://i.ibb.co/Vj1m8sm/20200617-091058-1.jpg",
                flavour: "Redvelvet/chocolate/oreocookiecake ",
                size8: "19000",
                size10: "26000",
                text: "Order now"
              }
        ]);
    return(
        <div className="Him-area">
            <div className="Him-heading">
                <h1>Cake For Him</h1>
                <img src='https://i.ibb.co/T0bJPBn/Group-65.png' alt='Group' />
            </div>
            <h2 className= "htag">Select a cake</h2>
            <div className="him-display">
                {forHims.map((forHim, id) => (
                    <div key={id}>
                        <div className="him-container">
                        <img className="him-gallery" src={forHim.image} alt={forHim.name}/>
                        <div className="him-overlay overlay-left">
                        <div className="him-text">
                            <Link to='/ordernow'>order now</Link>
                        </div>
                        </div>
                        </div>

                        <div className="him-content">
                            <h5>{forHim.flavour}</h5>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default ForHim
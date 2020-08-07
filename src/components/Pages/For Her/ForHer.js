import React, {useState} from 'react'
import "./ForHer.css"


function ForHer(){
    const [herdata, setHerData] = useState([]);

    const addTocart = (her) => {
        console.log("Add to cart sec");
        setHerData([...herdata, her]);
    }

    const [forHers] = useState([
        {
            id: 1,
            image: "https://i.ibb.co/2Fr9Ytz/with-strawberry.jpg" ,
            flavour: "With strawberry and vanilla cake ",
            size8: "11500",
            size10: "17500",
            size12: "25000",
            text: 'Order now'

            
            
        },

        {
            id: 2,
            image: "https://i.ibb.co/RSGsjh5/chocolate-velvet.jpg" ,
            flavour: "With Chocolate nd redvelvet cakes ",
            size8: "N14500",
            size10:  "N2100",
            size12: "N28000",
            text: 'Order now',

        },

        {
            id: 3,
            image: "https://i.ibb.co/q90kSvc/strawberry.jpg"  ,
            flavour: "Vanilla, strawberry, coconut cake ",
            size8: "N15500",
            size10:  "21500",
            size12: "30000",
            text: 'Order now'

        },

        {
            id: 4,
            image: "https://i.ibb.co/q90kSvc/strawberry.jpg"  ,
            flavour: "With  chocolate,  redvelvet,  white forest",
            size8: "18000",
            size10:  "23000",
            size12: "30000",
            text: 'Order now'

        },

        {
            id: 5,
            image: "https://i.ibb.co/XjVnrNJ/Strawberry-cake.jpg"   ,
            flavour: "Strawberry, blackforest and yoghurt cake",
            size8: "15000",
            size10:  "21500",
            text: 'Order now'

        },

        {
            id: 6,
            image: "https://i.ibb.co/GtP7pZv/vanillastrawberry.jpg",
            flavour: "Vanilla/strawberry ",
            size8: "12500",
            size10:  "17500",
            size12:  "24500",
            text: 'Order now'

        },

        {
            id: 7,
            image: "https://i.ibb.co/GtP7pZv/vanillastrawberry.jpg",
            flavour: "Redvelvet/chocolate ",
            size8: "16000",
            size10:  "22000",
            size12:  "29500",
            text: 'Order now'

        },

        {
            id: 8,
            image: "https://i.ibb.co/p3h414V/Golden-cake-1.jpg"  ,
            flavour: "Vanilla/strawberry /coconut",
            size8: "18000",
            size10:  "24500",
            text: 'Order now'

        },

        {
            id: 9,
            image: "https://i.ibb.co/qY60dwB/glowcake2.jpg",
            flavour: "Chocolate/redvelvet/carrot",
            size8: "2000",
            size10:  "27500",
            text: 'Order now'

        },

        {
            id: 10,
            image: "https://i.ibb.co/qY60dwB/glowcake2.jpg",
            flavour: "Vanilla/strawberry /coconut",
            size8: "2000",
            size10:  "27500",
            text: 'Order now'

        },

        {    
            id: 11,
            image: "https://i.ibb.co/6bTDmZ9/cakeforher.jpg" ,
            flavour: "Chocolate/redvelvet/carrot",
            size8: "2000",
            size10:  "27500",
            text: 'Order now'
        },

        {    
            id: 12,
            image: "https://i.ibb.co/6bTDmZ9/cakeforher.jpg" ,
            flavour: "Redvelvet,chocolate nd  vanilla",
            size8: "16500",
            size10: "21500",
            size12: "29500",
            text: 'Order now'
        },
    ]);

    return(
        <div className="Her-area">
            <div className="Her-heading">
                <h1>Cake For Her</h1>
                <img src='https://i.ibb.co/T0bJPBn/Group-65.png' alt='Group' />
            </div>

            <div className="her-display">
                {forHers.map((forHer, id) => (
                    <div key={id}>
                        <div className="her-container">
                            <img className="her-gallery" src={forHer.image} alt={forHer.name}/>
                            <div className="her-overlay overlay-left">
                            <div className="her-text">
                                <a href='#ordernow'onClick={() => addTocart(forHer)}>
                                    {forHer.text}
                                </a>
                            </div>
                            </div>
                        </div>

                        <div className="her-content">
                            <h5>{forHer.flavour}</h5>
                        </div>
                    </div>

                ))}

            </div>
        </div>
    )
}

export default ForHer
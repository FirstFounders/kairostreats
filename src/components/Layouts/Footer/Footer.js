import React from 'react'
import './Footer.css'


export default function Footer(){
    return(
        <div className="bg-footer">
            <div className="f-heading">
                <img src="https://i.ibb.co/gmWF7r4/Group-75contact.png" alt="Group-75contact" />
            </div>

            <div className="footerOne">
                <div className="infoBox">
                    <h2>Contact Us</h2>
                    <h3>1, seni towobola cl, Ilupeju</h3>
                    <h2>Phone</h2>
                    <h3>08993654052</h3>
                    <h2>Email Address</h2>
                    <h3>onyinyekairos@gmail.com</h3>
                </div>
                <div className="mapBox">
                    <iframe frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=650&amp;height=400&amp;hl=en&amp;q=1%20Seni%20Towobola%20Cl,%20Ilupeju,%20Lagos,%20Nigeria%20Lagos+(Kairos%20Treats)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    <script type='text/javascript' src='https://maps-generator.com/google-maps-authorization/script.js?id=52e9d59980545fb558958ccb418dd768e327f3ca'></script>
                </div>
            </div>
            <div className="footerTwo">
                <h3>About Us</h3>
            </div>
        </div>
    )
}
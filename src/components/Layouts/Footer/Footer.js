import React from 'react'
import './Footer.css'


export default function Footer(){
    return(
        <footer className="bg-footer">
            <div className="f-heading">
                <img src="https://i.ibb.co/gmWF7r4/Group-75contact.png" alt="Group-75contact" />
            </div>

            <div className="footerOne">
                <div className="infoBox">
                    {/* <h2>Contact Us</h2> */}
                    <h3>1, Seni Towobola Close, Ilupeju</h3>
                    {/* <h2>Phone</h2> */}
                    <h3><a href="tel:+2348029431828">0802-943-1828</a></h3>
                    {/* <h2>Email Address</h2> */}
                    <h3><a href = "mailto: info@ekairostreats.com">info@kairostreats.com</a></h3>
                </div>
                <div className="mapBox">
                    <iframe frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=800&amp;height=600&amp;hl=en&amp;q=1%20Seni%20Towobola%20Cl,%20Ilupeju,%20Lagos,%20Nigeria%20Lagos+(Kairos%20Treats)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                    <script type='text/javascript' src='https://maps-generator.com/google-maps-authorization/script.js?id=52e9d59980545fb558958ccb418dd768e327f3ca'></script>
                </div>
            </div>
            {/* <div className="copyright">
                <p>© Copyright 2020 kairostreats inc.</p>
            </div> */}
        </footer>
    )
}
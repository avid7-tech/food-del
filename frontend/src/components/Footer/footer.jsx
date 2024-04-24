// import React from 'react'

import { assets } from "../../assets/assets"
import './footer.css'
function Footer() {
  return (
    <div>
        <div className="footer" id="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, et error! Dolorum natus qui ex magnam tempore? Repellat illum reprehenderit eligendi, suscipit recusandae exercitationem, facilis placeat laudantium, error doloremque temporibus?</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-right">
                    <h2>GET IN TOUCH</h2>
                    <ul>
                        <li>+91-6377421711</li>
                        <li>avdheshojha7@gmail.com</li>
                    </ul>
                </div>
                <div className="footer-content-center">
                    <h2>COMPANY</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 © Tomato.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer
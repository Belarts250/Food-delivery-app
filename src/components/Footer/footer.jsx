import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

const footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis modi nisi dolorum, rem voluptas similique quia dolor adipisci voluptates veniam provident, maxime, alias ab veritatis? Nemo quibusdam voluptates cum laborum.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.t_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+250 723964418</li>
                <li>tomatocontact@gmail.com</li>
            </ul>
        </div>   
      </div>
      <hr />
      <p className="footer-copyright">&copy; 2024</p>
    </div>
  )
}

export default footer

import React from 'react'
import './Header.css'
import headerImg from '../../assets/header_img.png'

const Header = () => {
  return (
    <div className='header' style={{
        backgroundImage: `url(${headerImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        height: '34vw',
        margin: '30px auto',
        position: 'relative' ,
        
      }}>
      <div className="header-contents">
        <h2>Order your favorite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients that satisfy your cravings and elevate your dining experience, one delicious meal at a time.  </p>
        <button>View menu</button>
      </div>
    </div>
  )
}

export default Header

import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" />
        <ul className='navbar-menu'>
            <li>Home</li>
            <li>menu</li>
            <li>mobile-app</li>
            <li>contact us</li>
        </ul>
        <div className='navbar-right'>
            <img src={assets.search_icon} alt="seatch_icon image" />
            <div className='navbar-search-icon'>
                <img src={assets.basket_icon} alt="baskets_icon image" />
                <div className="dot"></div>
            </div>
           <button>sign in</button> 
            </div>
    </div>
  )
}

export default Navbar  /* Exportation du composant Navbar vers d'autres fichiers */
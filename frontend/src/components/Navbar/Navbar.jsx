import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
const Navbar = () => {
  /* Composant Navbar qui représente la barre de navigation de l'application */
    const [menu, setMenu] = useState("home"); // État local pour suivre l'élément de menu sélectionné et setMenu est la fonction pour le mettre à jour et useState est un hook React qui permet d'ajouter un état local à un composant fonctionnel.
  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" />
        <ul className='navbar-menu'>
           {/* -- Application de la classe "active" si l'élément est sélectionné -->*/} 
            <li className={menu==="home"?"active":""} onClick={()=>setMenu("home")}>Home</li>
            <li className={menu==="menu"?"active":""} onClick={()=>setMenu("menu")}>menu</li> 
            <li className={menu==="mobile-app"?"active":""} onClick={()=>setMenu("mobile-app")}>mobile-app</li>
            <li className={menu==="contact-us"?"active":""} onClick={()=>setMenu("contact-us")}>contact us</li>
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
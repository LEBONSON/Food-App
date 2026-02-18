import React, { useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/frontend_assets/assets";

const FoodItem = ({ id, name, price, description, image }) => {
// Gestion du nombre d'items dans le panier qui commence à 0 et prend la valeur précédente +1 à chaque clic 
      const [itemCount, setItemCount] = useState(0);
      const {cartItems, setCartItems, addToCart, removeFromCart} = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
       <img className="food-item-img" src={image} alt="" />
      {/* Affichage conditionnel de l'icône d'ajout ou du compteur d'items qui permet d'ajouter ou de retirer des items */}
      {!ca
           ? <img className="add" onClick={() => setItemCount(prev=>prev+1)} src={assets.add_icon_white} alt="" />
            : <div className="food-item-conter">
                <img onClick={()=> setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt="" />
                <p>{itemCount}</p>
                <img onClick={()=> setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt="" />

              </div> 
      }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" /> {/* affiche les étoiles de notation */}
          </div>
          <p className="food-item-desc">{description}</p>
          <p className="food-item-price">${price}</p>
    </div>
    </div>
  );
};

export default FoodItem;

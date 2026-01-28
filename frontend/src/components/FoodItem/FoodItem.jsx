import React, { useState } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/frontend_assets/assets";

const FoodItem = ({ id, name, price, description, image }) => {
// Gestion du nombre d'items dans le panier 
      const [itemCount, setItemCount] = useState(0);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
      <img className="food-item-img" src={image} alt="" />
      {!itemCount 
           ? <img className="add" onClick={() => setItemCount(prev=>+1)} src={assets.add_icon_white} alt="" />
            : <div className="food-item-container">
             
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

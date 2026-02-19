import React, { useContext} from "react";
import "./FoodItem.css";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
// Gestion du nombre d'items dans le panier qui commence à 0 et prend la valeur précédente +1 à chaque clic 
    //  const [itemCount, setItemCount] = useState(0); il permet de suivre le nombre d'items ajoutés au panier pour chaque item individuel, mais il ne gère pas le panier global de l'application. En utilisant le contexte global du StoreContext, on peut gérer le panier de manière centralisée et partager les données du panier entre tous les composants de l'application, ce qui est plus efficace que d'avoir un état local pour chaque item individuel.
    
        const {cartItems, setCartItems, addToCart, removeFromCart} = useContext(StoreContext); // il permet d'accéder aux données du panier et aux fonctions pour ajouter ou retirer des items du panier à partir du contexte global du StoreContext, ce qui permet de gérer le panier de manière centralisée dans toute l'application.

  return (
    <div className="food-item">
      <div className="food-item-img-container">
       <img className="food-item-img" src={image} alt="" />
      {/* Affichage conditionnel de l'icône d'ajout ou du compteur d'items qui permet d'ajouter ou de retirer des items
      {!itemCount 
           ? <img className="add" onClick={() => setItemCount(prev=>prev+1)} src={assets.add_icon_white} alt="" />
            : <div className="food-item-conter">
                <img onClick={()=> setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt="" />
                <p>{itemCount}</p>
                <img onClick={()=> setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt="" />

              </div> 
      }  */}


{/* Affichage conditionnel de l'icône d'ajout ou du compteur d'items qui permet d'ajouter ou de retirer des items en utilisant les fonctions addToCart et removeFromCart du contexte global pour mettre à jour le panier dans toute l'application */}
{!cartItems
           ? <img className="add" onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
            : <div className="food-item-conter">
                <img onClick={()=> removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems}</p>
                <img onClick={()=> addToCart(id)} src={assets.add_icon_green} alt="" />

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

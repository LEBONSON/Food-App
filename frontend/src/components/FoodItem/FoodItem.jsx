import React from 'react'
import './FoodItem.css'
import { assets } from '../../assets/frontend_assets/assets'

const FoodItem = ({id,name,price,description,image}) => {
  return (
    <div className='food-item'>
        <img className='food-item-img-container' src={image} alt=""/> 
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt=""/>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
    </div>
  )
}

export default FoodItem
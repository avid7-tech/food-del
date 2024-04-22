// import React from 'react'
import PropTypes from 'prop-types';
import { assets } from '../../assets/assets'
import './FoodItem.css'
import { useState } from 'react';

// eslint-disable-next-line no-unused-vars
const FoodItem = ({id,name,price,description,image})=> {

  const [itemCount, setItemCount] = useState(0);

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image' src={image} alt="" />
            {/* if count = 0, then provide add button */}
            {!itemCount
              ?<img className='add' onClick={()=>setItemCount(prev=>prev+1)} src={assets.add_icon_white} alt=''/>
              :<div className='food-item-counter'>
                <img onClick={()=> setItemCount(prev=>prev-1)} src={assets.remove_icon_red} alt="" />
                <p>{itemCount}</p>
                <img onClick={()=> setItemCount(prev=>prev+1)} src={assets.add_icon_green} alt="" />
              </div>
            }
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className='food-tem-desc'>{description}</p>
            <p className='food-item-price'>${price}</p>
        </div>
    </div>
  )
}

FoodItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };

export default FoodItem
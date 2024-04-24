// import React from 'react'
import { useContext } from 'react'
import './FoodDisplay.css'
import PropTypes from 'prop-types';
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

// eslint-disable-next-line no-unused-vars
function FoodDisplay({category}) {

    const {food_list} = useContext(StoreContext);

    return (
        <div className='food-display' id='food-display'>
            <h2>Top Dishes Near You!</h2>
            <div className="food-display-list">
                {food_list.map((item,index)=> {
                    if (category==="All" || category===item.category) {
                        return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
                    }
                    
                })}
            </div>
        </div>
    )
}

FoodDisplay.propTypes = {
    category: PropTypes.any // You can adjust the PropTypes based on the type of the category prop
};

export default FoodDisplay
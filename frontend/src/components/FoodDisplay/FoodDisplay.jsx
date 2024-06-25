import { useContext } from 'react';
import './FoodDisplay.css';
import FoodItem from '../FoodItem/FoodItem';
import { StoreContext } from '../../Context/StoreContext'; // Adjust import based on actual file path and casing
import PropTypes from 'prop-types';

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className='food-display-list'>
        {food_list.map((item) => {
          if (category === "All" || category === item.category) {
            return <FoodItem key={item._id} image={item.image} name={item.name} desc={item.description} price={item.price} id={item._id} />;
          }
          return null; // Ensure to handle all paths in the map function
        })}
      </div>
    </div>
  );
};

FoodDisplay.propTypes = {
  category: PropTypes.string.isRequired,
};

export default FoodDisplay;

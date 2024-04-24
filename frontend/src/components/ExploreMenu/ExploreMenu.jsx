// import React from 'react'
import './ExploreMenu.css'
import PropTypes from 'prop-types';
import {menu_list} from '../../assets/assets'

const ExploreMenu = ({category, setCategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our menu</h1>
      <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolore dolores mollitia ipsum corporis consectetur beatae architecto incidunt vel, aspernatur velit ipsa corrupti harum officiis quis dolorum quia praesentium excepturi!</p>
      <div className='explore-menu-list'>
          {menu_list.map((item,index)=>{
            return(
              <div onClick={()=> setCategory(prev => prev===item.menu_name ? "All":item.menu_name)} className='explore-menu-list-item' key={index}>
                <img className={category===item.menu_name ? "active":""} src={item.menu_image} alt={item.name} />
                <p>{item.menu_name}</p>
              </div>
            )
          })}
      </div>
    </div>
  )
}

ExploreMenu.propTypes = {
  category: PropTypes.string.isRequired,
  setCategory: PropTypes.func.isRequired,
};

export default ExploreMenu
// import React from "react";
import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

  const [cartItems, setCartItems] = useState({});

  const addToCart = (ItemId) => {
    if(!cartItems[ItemId]){
      setCartItems((prev) => ({...prev,[ItemId]:1}))
    }
    else{
      setCartItems((prev) => ({...prev,[ItemId]:prev[ItemId]+1}))
    }
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
  }

  useEffect(()=> {
    console.log(cartItems)
  },[cartItems])

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

StoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StoreContextProvider;

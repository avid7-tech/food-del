// import React from "react";
import { createContext } from "react";
import PropTypes from 'prop-types'; // Import PropTypes
import { food_list } from "../assets/assets"; 

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  
    const contextValue = {
        food_list
    };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

StoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default StoreContextProvider;
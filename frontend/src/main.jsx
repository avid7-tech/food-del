// import React from 'react'
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./Context/StoreContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);

/*
main.jsx is entry point of React App

IMPORTS
ReactDOM -> render react components in DOM
App -> root component
BrowserRouter -> component from reac-router-dom library, provides client side routing functionality (When you change the route in a React application using BrowserRouter, it triggers a re-render of the relevant component(s) associated with the new route. This ensures that the UI is updated to display the content corresponding to the new route without needing to reload the entire page.)
StoreContextProvider -> custom context provider

main.jsx renders the React App
Root component is app.jsx
*/
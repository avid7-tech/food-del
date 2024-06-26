// import React from 'react'
import { useState } from 'react'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import LoginPopup from './components/LoginPopup/LoginPopup'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import MyOrders from './pages/MyOrders/MyOrders'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify/Verify'

// a functional component named App
const App = () => {

  // initialize state variable using useState hook, represent whether login popups should be shown or not, setShowLogin is used to update the showLogin state
  const [showLogin, setShowLogin] = useState(false)

  return (
    <>
    <ToastContainer/>
    {/* if the value of showLogin is false, it will render <> </> (means just show the rest of the layout only!), which is a shorthand for a React fragment. */}
    {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> :<></>}
      {/* renders the main component */}
      <div className="app">
        {/* renders the navbar component, The setShowLogin function is passed to the Navbar component as a prop to enable showing the login popup when necessary. */}
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path='/myorders' element={<MyOrders />}/>
          <Route path='/verify' element={<Verify />}/>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

// App.propTypes = {
//   Cart: PropTypes.elementType.isRequired,
//   removeFromCart: PropTypes.bool.isRequired
// }


export default App;



/*

routes are used for maintaining the multiple route

Here, setShowLogin is set to true in navbar using onClick(), can see the code in Navbar.jsx also, we destructure(extract specific values) the setShowLogin in Navbar.jsx,
{this logic is above all, to overlay the other content in page, as it is login popup}

*/
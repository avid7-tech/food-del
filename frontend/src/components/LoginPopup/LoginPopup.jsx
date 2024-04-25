// import React from 'react'
import './LoginPopup.css'
import {assets} from '../../assets/assets'
import {useState} from 'react'
import PropTypes from 'prop-types';

const LoginPopup = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("Login");

  return (
    <div className='login-popup'>
        <form className='login-popup-container' action="">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState === "Login"?<></>:<input type="text" placeholder='your name' required />}
                <input type="text" placeholder='your email' required />
                <input type="text" placeholder='password required' required />
            </div>
            <button>{currState === "Signup" ? "Create account" : "Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By Continuing, I agree to the terms of use & Privacy Policy.</p>
            </div>
            {currState === "Login"
            ?<p>Create a new account ? <span onClick={()=> setCurrState("Signup")}>Click here</span></p>
            :<p>Already have an account ? <span onClick={()=> setCurrState("Login")}>Login here</span></p> 
            }
        </form>
    </div>
  );
}

LoginPopup.propTypes = {
    setShowLogin: PropTypes.func.isRequired
}

export default LoginPopup

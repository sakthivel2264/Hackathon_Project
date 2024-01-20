import React from 'react'
import "../styles/signup.css"
import guyImg from "../assets/images/hero.png";
import logo from "../assets/images/res-logo.png";
import { Link } from 'react-router-dom';
const Signup = () => {
  return (
    <div className="limiter">
        <div className="container-login100">
        <img src={logo} alt="logo" className='logos'/>
        <h5 className='loginheader'>Tasty Treat</h5>
          <div className="wrap-login100">
           
            <div className="login100-pic js-tilt">
              <img src={guyImg} alt="IMG"/>
            </div>
    
            <form className="login100-form validate-form">
              <span className="login100-form-title">
               Signup
              </span>
    
              <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                <input className="input100" type="text" name="email" placeholder="Email"/>
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-envelope" aria-hidden="true"></i>
                </span>
              </div>
    
              <div className="wrap-input100 validate-input" data-validate="Password is required">
                <input className="input100" type="password" name="pass" placeholder="Password"/>
                <span className="focus-input100"></span>
                <span className="symbol-input100">
                  <i className="fa fa-lock" aria-hidden="true"></i>
                </span>
              </div>
              
              <div className="container-login100-form-btn">
                <button className="login100-form-btn" formaction="https://github.com/SPRHackz?tab=repositories">
                  Login
                </button>
              </div>
    
              <div className="text-center p-t-12">
                <span className="txt1">
                  Forgot
                </span>
                <a className="txt2" href="#2">
                  Username / Password?
                </a>
              </div>
    
              <div className="text-center p-t-136 align-center">
                <Link className="txt2" to="/login">
                If you have Already Account
                  <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}

export default Signup
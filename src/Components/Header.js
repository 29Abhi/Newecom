import React from 'react'
import "./Header.css"
import { FaSearch } from "react-icons/fa";
import Nav from './Nav';

const Header = () => {
  return (
    <>
    <div className='container' >
     <img className='logo-img' src='./Image/BA.png'/>
      <img  className='logo-img1' src='./Image/Path 4.png'/>
      <img className='logo-img3' src='./Image/Path 5.png' />
      <img className='logo-img2' src='./Image/Path 6.png' />
      </div>
      <form className='serachbox'  action='#' >
      
        <input className='input_pro' type="text" placeholder='Products, Retailer, Brands,and more'  />
        <input className='input_loc' type="text" placeholder='Location' />
        <button className='search_btn' >
          <FaSearch className='search_icon' />
        </button>
      </form>
      <div className='register_div'>
        <button className='login_btn' >
          <span  className='login'> Login</span>
        </button>
        <button className='signup_btn' >
        <span className='signup' > Signup</span>
        </button>
      </div>
      <Nav/>
    </>
  )
}

export default Header
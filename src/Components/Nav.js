import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import "./Nav.css"
import { FaChevronDown } from "react-icons/fa";

const Nav = () => {
    const nav_link = ({isActive}) => {
        return {
         color : isActive ? '#2DB563': "#707070",
         textDecoration : isActive ? 'Underline' : 'NONE',
         fontFamily : "Poppins",
         fontStyle : "normal",
         fontSize : "17px",
         fontWeight : "400",

        }
    }
    return (
        <>
            <div className="main_nav_head" >
                <h2 className='navbar' >
                        <NavLink to="/Despensaries" style={nav_link} 
                          >Despensaries</NavLink>
                        </h2>
                    <h2>
                        <NavLink to="/Deliveries" style={nav_link}   >Deliveries</NavLink>
                    </h2>

                    <h2>
                        <NavLink to="/Strains" style={nav_link}   >Strains</NavLink>
                        </h2>
                    <h2>
                        <NavLink to="/Products" style={nav_link}   >Products</NavLink>
                        </h2>
                        <h2>
                        <NavLink to="/Deals" style={nav_link}  >Deals</NavLink>
                        </h2>
                    <h2>
                        <NavLink to="/learn" style={nav_link}   >learn</NavLink>
                        </h2>
                        <h2>
                        <NavLink to="/Brands" style={nav_link}   >Brands</NavLink>
                        </h2>
                    <h2>
                        <NavLink to="/More" style={nav_link}  >More</NavLink>
                        <FaChevronDown className='arrow_down' />
                        </h2>

            </div>
            <div className='social_icons' >
            <img className='social_img' src='./Image/facebook.png' />
            <img className='social_img' src='./Image/insta.png' />
            <img className='social_img' src='./Image/whats.png' />
            <img className='social_img' src='./Image/gmaul.png' />
            </div>
            <div className='cart_icons' >
                <img src='./Image/heart.png' />
                <img src='./Image/noti.png' />
                <img src='./Image/cart.png' />
            </div>
        </>
    )
}

export default Nav
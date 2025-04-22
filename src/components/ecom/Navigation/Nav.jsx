import React from 'react'
// import { FaShoppingCart } from "react-icons/fa";
import { FaShoppingCart, FaShoppingBag } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import './Nav.css';

const Nav = ({query,handleinputchange}) => {
  return (
    <nav>
      <div className='nav-container'>
      
        <input type="text" value={query} onChange={handleinputchange} placeholder="Search..." className='input-text'/>
        </div>
        <div className='profile-container'>
            <a href="#" className='nav-icons'>
            <FaShoppingBag />
                
            </a>
            <a href="#" className='nav-icons'>
            <FaShoppingCart />
                
            </a>
            <a href="#" className='nav-icons'>
            <CiHeart />
                
            </a>
            
        
    </div>
      
    </nav>
  )
}

export default Nav
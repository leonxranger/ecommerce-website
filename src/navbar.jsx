import { useState } from 'react';
import './navbar.css';
import { BiSearchAlt2 } from "react-icons/bi";
import { FiShoppingCart } from "react-icons/fi";
import '@fontsource/inter'; // Default weight (400)
import '@fontsource/inter/700.css'; 
import logoname  from './assets/logoname.png';

function Navbar() {
  return (
    <>
    <div className="navbar">
      <ul>
        <li className='logo'><img src={logoname} alt="logo" /></li>
        <li className='txt'>New Product</li>
        <li className='txt' >Men</li>
        <li className='txt' >Women</li>
        <li className='txt' >Brand</li>
        <li className='icons'><BiSearchAlt2 /><FiShoppingCart /> </li>
      </ul>
    </div>
    </>
  );
}

export default Navbar
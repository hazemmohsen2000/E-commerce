import React, {useContext, useRef, useState} from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import { FaBars } from "react-icons/fa";

function Navbar() {

    const [menu ,setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = () => { 
        menuRef.current.classList.toggle('nav-menu-visible')
    }
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="Website logo" />
            <p>ShopEase</p>
        </div>
        <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}><Link to="/">Shop</Link> {menu === "shop" ? <hr/> : <></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link to="/mens">Men</Link> {menu === "mens" ? <hr/> : <></>}</li>
            <li onClick={()=>{setMenu("womans")}}> <Link to="/womans">Woman</Link> {menu === "womans" ? <hr/> : <></>}</li>
            <li onClick={()=>{setMenu("kids")}}> <Link to="/kids">Kids</Link> {menu === "kids" ? <hr/> : <></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to = "/login"><button>Login</button></Link>
            <Link to = "/cart"><img src={cart_icon} alt="cart icon" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>

        </div>   
         <FaBars className='nav-dropdown'  onClick={dropdown_toggle}/>
    </div>
  )
}

export default Navbar
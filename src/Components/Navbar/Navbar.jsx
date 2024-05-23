import React, {useContext, useRef, useState} from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assets/arrow-drop-down-circle.png'
function Navbar() {

    const [menu ,setMenu] = useState("shop")
    const {getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle = (e) => { 
        menuRef.current.classList.toggle('nav-menu-visible')
        e.target.classList.toggle('open')
    }
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="Website logo" />
            <p>SHOPPER</p>
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
         <img className='nav-dropdown' src={nav_dropdown} onClick={dropdown_toggle} alt="arrow drop down menu" />

    </div>
  )
}

export default Navbar
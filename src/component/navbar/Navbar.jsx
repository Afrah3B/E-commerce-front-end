import React, { useContext, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Cart } from '../assets/cart.svg';
import { ReactComponent as ImgBox } from '../assets/img-box.svg';
import { ReactComponent as Search } from '../assets/search.svg';
import { ReactComponent as Send } from '../assets/send.svg';
import { ReactComponent as UserCircle } from '../assets/user-circle.svg';
import { ReactComponent as MenuIcon } from '../assets/menu.svg';
import './Navbar.css';
import { ShopContext } from '../../context/ShopContext';

export const Navbar = () => {

    const [menu, setmenu] = useState('home');
    const { getTotalCartItems } = useContext(ShopContext);
    const menuRef = useRef(null);

    const dropdown_toggle = (e) => {
        if(menuRef.current){
            menuRef.current.classList.toggle('nav-menu-visible');
            console.log('if statement')
        }
        console.log('out if statement')
        e.target.classList.toggle('open');
    }

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <ImgBox />
                <p>E-commerce</p>
            </div>

            <ul ref={menuRef} className="nav-menu">
                <li className={menu === "home" ? "nav-list" : ""} onClick={() => { setmenu("home") }}>
                    <Link to='/' className='link'>Home</Link>
                </li>
                <li className={menu === "shop" ? "nav-list" : ""} onClick={() => { setmenu("shop") }}>
                    <Link to='/shop' className='link'>Shop</Link>
                </li>
                <li className={menu === "women" ? "nav-list" : ""} onClick={() => { setmenu("women") }}>
                    <Link to='/women' className='link'>women</Link>
                </li>
                <li className={menu === "aboutus" ? "nav-list" : ""} onClick={() => { setmenu("aboutus") }}>
                    About us
                </li>
            </ul>
            <ul className="nav-menu-right">
                <li onClick={() => { setmenu("search") }}>
                    <Search className={menu === "search" ? 'search-svg' : ""} />
                    <input type="text" className={menu === "search" ? "input-search" : "input-search-none"} placeholder='product' />
                    <Send className={menu === "search" ? 'send-svg-2' : 'send-svg'} />
                </li>
                <li onClick={() => { setmenu("cart") }}>
                    <div className="nav-cart-count">{getTotalCartItems()}</div>
                    <Link to='/cart' className='link'><Cart className='cart'/></Link>
                </li>
                <li onClick={() => { setmenu("signin") }}>
                    <Link to='/signin' className='link'><UserCircle /></Link>
                </li>
                <li><MenuIcon className='nav-dropdown' onClick={dropdown_toggle} /></li>
            </ul>
        </div>
    )
}

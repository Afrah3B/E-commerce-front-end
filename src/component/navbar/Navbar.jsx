import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Cart } from '../assets/cart.svg';
import { ReactComponent as ImgBox } from '../assets/img-box.svg';
import { ReactComponent as Search } from '../assets/search.svg';
import { ReactComponent as Send } from '../assets/send.svg';
import { ReactComponent as UserCircle } from '../assets/user-circle.svg';

import './Navbar.css';

export const Navbar = () => {

    const [menu, setmenu] = useState('home');

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <ImgBox />
                <p>E-commerce</p>
            </div>
            <ul className="nav-menu">
                <li className={menu === "home" ? "nav-list" : ""} onClick={() => { setmenu("home") }}>
                    <Link to='/' className='link'>Home</Link>
                </li>
                <li className={menu === "shop" ? "nav-list" : ""} onClick={() => { setmenu("shop") }}>
                    <Link to='/shop' className='link'>Shop</Link>
                </li>
                <li className={menu === "aboutus" ? "nav-list" : ""} onClick={() => { setmenu("aboutus") }}>
                    About us
                </li>
                <li onClick={() => { setmenu("search") }}>
                    <Search className={menu === "search" ? 'search-svg' : ""} />
                    <input type="text" className={menu === "search" ? "input-search" : "input-search-none"} placeholder='product'/>
                    <Send className={menu === "search" ? 'send-svg-2' : 'send-svg'}/>
                </li>
                <li onClick={() => { setmenu("cart") }}>
                    <Link to='/cart' className='link'><Cart /></Link>
                </li>
                <div className="nav-cart-count">0</div>
                <li onClick={() => { setmenu("signin") }}>
                    <Link to='/signin' className='link'><UserCircle /></Link>
                </li>
            </ul>
        </div>
    )
}

import React from 'react';
import { ReactComponent as ImgBox } from '../assets/img-box.svg';
import { ReactComponent as Insta } from '../assets/instagram.svg';
import { ReactComponent as Tiktok } from '../assets/tiktok.svg';
import { ReactComponent as Whats } from '../assets/whats.svg';
import './Footer.css';

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-logo">
                <ImgBox/>
                <p>E-commerce</p>
            </div>
            <ul className='footer-links'>
                <li>Company</li>
                <li>Product</li>
                <li>Offices</li>
                <li>About us</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icon-container"><Insta/></div>
                <div className="footer-icon-container"><Tiktok/></div>
                <div className="footer-icon-container"><Whats/></div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 - All Right Reserved.</p>
            </div>
        </div>
    )
}

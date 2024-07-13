import React from 'react';
import { ReactComponent as ImgBox } from '../assets/img-box.svg';
import './Hero.css';

export const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
                <h2>new arrivals</h2>
                <button className="hero-latest-btn">
                    latest collection
                </button>
            </div>
            <div className="hero-right">
                <ImgBox />
            </div>
        </div>
    )
}

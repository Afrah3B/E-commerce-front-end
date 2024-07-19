import React from 'react';
import { ReactComponent as ImgBox } from '../assets/img-box.svg';
import './Offers.css';

export const Offers = () => {
    return (
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offes for you</h1>
                <p>Only On Best Sellers Products</p>
                <button>Check Now</button>
            </div>
            <div className="offers-right">
                <ImgBox className='offers-svg'/>
            </div>
        </div>
    )
}

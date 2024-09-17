import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom';

export const Item = (props) => {
    return (
        <div className="item">
            <Link to={`/product/${props.id}`}>
                <img src={props.image} alt='' className="item-img" onClick={window.scrollTo(0,0)}/>
            </Link>
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    SAR {props.new_price}
                </div>
                <div className="item-price-old">
                    SAR {props.old_price}
                </div>
            </div>
        </div>
    )
}

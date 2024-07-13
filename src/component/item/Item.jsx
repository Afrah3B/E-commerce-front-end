import React from 'react'
import './Item.css'

export const Item = (props) => {
    return (
        <div className="item">
            <props.image className="item-img"/>
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

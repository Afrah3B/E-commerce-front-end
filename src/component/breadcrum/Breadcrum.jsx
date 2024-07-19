import React from 'react'
import './Breadcrum.css'

export const Breadcrum = (props) => {
    const {product}=props;
  return (
    <div className="breadcrum">
        Home &gt; Shop &gt; {product.category} &gt; {product.name}
    </div>
  )
}

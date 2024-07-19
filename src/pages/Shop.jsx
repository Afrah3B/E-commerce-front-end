import React, { useContext } from 'react'
import './Shop.css';
import { ShopContext } from '../context/ShopContext';
import { Item } from '../component/item/Item';

export const Shop = ({category}) => {
  const {all_data} = useContext(ShopContext)
  return (
    <div className="shop-category">
      <h1>{category}</h1>
      <div className="shopcategory-indexsort">
        <p>
          <span>showing 1-12 </span>out of 36 products
        </p>
        <div className="shopcategory-sort">
          sort by 
        </div>
      </div>
      <div className="shopcategory-products">
        {all_data.map((item,i)=>{
          if(category===item.category){
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          }
          else{
            return null
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { Item } from '../item/Item'
import './NewCollections.css'

export const NewCollections = () => {
    const [new_collection,setNew_collection]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/newcollections')
        .then((res)=>res.json())
        .then((data)=>{setNew_collection(data);})
        .catch((error) => console.error('Error fetching products:', error));
      },[]);

    return (
        <div className="new-collections">
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {new_collection.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

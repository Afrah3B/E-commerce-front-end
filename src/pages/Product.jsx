import React, { useContext } from 'react'
import {ShopContext} from '../context/ShopContext'
import { useParams } from 'react-router-dom';
import { Breadcrum } from '../component/breadcrum/Breadcrum';
import { ProductDisplay } from '../component/productdisplay/ProductDisplay';
import { DescriptionBox} from '../component/descriptionbox/DescriptionBox';
import { RelatedProducts} from '../component/relatedproducts/RelatedProducts';


export const Product = () => {
  const {all_product} = useContext(ShopContext);
  const {productId}= useParams();
  const product = all_product.find((e)=>e.id===Number(productId))
  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProducts/>
    </div>
  )
}

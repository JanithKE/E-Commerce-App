import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import {ShopContext} from '../Context/ShopContext.jsx';
import BreadCrums from '../Components/BreadCrums/BreadCrums.jsx';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay.jsx';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox.jsx';
import RelatedProduct from '../Components/RelatedProduct/RelatedProduct.jsx';



const Product = () => {

  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();

  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <BreadCrums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox />
      <RelatedProduct/>
    </div>
  )
}

export default Product

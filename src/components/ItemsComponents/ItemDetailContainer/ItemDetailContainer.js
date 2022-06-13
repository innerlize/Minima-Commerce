import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail/ItemDetail.js';
import { getSingleProduct } from '../../../Database/firebase.js';
import './ItemDetailContainer.css';

function ItemDetailContainer() {

  const [product, setProduct] = useState();
  const itemId = useParams().itemId;

  useEffect(() => {
    getSingleProduct(itemId).then(resPromise => {
      setProduct(resPromise)
    }).catch((errorPromise) => console.log(errorPromise));
  }, [itemId]);

  return (
    <section className='productContainer'>
        <ItemDetail product={product} />
    </section>
  );
}

export default ItemDetailContainer;
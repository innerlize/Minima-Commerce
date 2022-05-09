import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail/ItemDetail.js';
import productsDB from '../ItemMocks/products/products.js';
import './ItemDetailContainer.css';

function getProduct(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const productFound = productsDB.find( (product) => {
        return id === product.id
      })

      resolve(productFound);
      reject(new Error('Error de Conexión'));
    }, 500);
  });
};

function ItemDetailContainer() {

  const [product, setProduct] = useState([]);
  const itemId = useParams().itemId;

  useEffect(() => {
    getProduct(itemId).then(resPromise => {
      setProduct(resPromise)
    }).catch((errorPromise) => console.log(errorPromise));
  }, [itemId]);

  return (
    <section>
        <ItemDetail product={product} />
    </section>
  );
}

export default ItemDetailContainer;
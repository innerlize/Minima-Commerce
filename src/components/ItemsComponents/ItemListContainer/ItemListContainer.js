import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList/ItemList.js';
import productsDB from '../ItemMocks/products/products.js';
import './ItemListContainer.css';

function getProducts(categoryId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (categoryId) {

        const arrayProducts = productsDB.filter( (product) => {
          return product.category === categoryId;
        });
        resolve(arrayProducts);

      } else {
        resolve(productsDB);
      }

      reject(new Error('Error de Conexión'));
    }, 500);
  });
};

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const id = useParams().categoryId;

  useEffect(() => {
    getProducts(id).then(resPromise => {
      setProducts(resPromise)
    }).catch((errorPromise) => console.log(errorPromise));
  }, [id]);

  return (
    <section>
        <ItemList products={products} />
    </section>
  );
}

export default ItemListContainer;
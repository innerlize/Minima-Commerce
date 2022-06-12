import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList/ItemList.js';
import { getProducts, getProductsByCategory } from '../../../Database/firebase.js';
import './ItemListContainer.css';


function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const id = useParams().categoryId;

    useEffect(() => {
      if (id === undefined) {
        getProducts().then(resPromise => {
          setProducts(resPromise);
        })
      }

      else {
        getProductsByCategory(id).then(resPromise => {
          setProducts(resPromise);
        })
      }

  }, [id]);

  return (
    <section className='productsSection'>
        <ItemList products={products} />
    </section>
  );
}

export default ItemListContainer;
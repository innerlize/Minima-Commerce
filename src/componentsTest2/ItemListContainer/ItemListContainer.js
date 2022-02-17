import React, { useState, useEffect } from 'react';
import ItemList from './ItemList/ItemList.js';
import { getMock } from '../helpers/mock.js';
import './ItemListContainer.css';

function ItemListContainer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getMock
    .then(res => setData(res))
  }, [])

  // console.log(data)

  return (
    <section>
        <ItemList products={data} />
    </section>
  );
}

export default ItemListContainer;

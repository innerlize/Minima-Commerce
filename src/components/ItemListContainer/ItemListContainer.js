import React, { useState, useEffect } from 'react';
import ItemCount from './ItemCount/ItemCount.js';
import ItemList from './ItemList/ItemList.js';
import { getMock } from '../helpers/mock.js';
import './ItemListContainer.css';

function ItemListContainer({ greetings }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getMock
    .then(res => setData(res))
  }, [])

  console.log(data)

  return (
    <section>
        <ItemList products={data} />
    </section>
  );
}

export default ItemListContainer;
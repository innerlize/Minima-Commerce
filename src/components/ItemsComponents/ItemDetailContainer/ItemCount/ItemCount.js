import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import './ItemCount.css';

const ItemCount = ({ stock, onAdd }) => {
  const [counter, setCounter] = useState(1);

  const restCounter = () => {
    if (counter <= 1) return;
    setCounter(counter - 1);
  };

  const sumCounter = () => {
    if (counter >= stock) return;
    setCounter(counter + 1);
  };

  return (
    <div className='counterElements'>
      <div className='counterElementsContainer'>
        <button className='buttonCounter rest' onClick={restCounter}><i className="fas fa-minus"></i></button>
        <span>{counter}</span>
        <button className='buttonCounter sum' onClick={sumCounter}><i className="fas fa-plus"></i></button>
      </div>
      <Button className='AddToCart' variant="primary" onClick={() => onAdd(counter)}>Add To Cart</Button>
    </div>
  );
};

export default ItemCount;
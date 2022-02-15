import React, { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock }) => {
  const [counter, setCounter] = useState(0);

  const restCounter = () => {
    if (counter <= 0) return;
    setCounter(counter - 1);
  };

  const sumCounter = () => {
    if (counter >= stock) return;
    setCounter(counter + 1);
  };

  return (
    <div className='counterElements'>
      <button className='buttonCounter rest' onClick={restCounter}><i className="fas fa-minus"></i></button>
      <span>{counter}</span>
      <button className='buttonCounter sum' onClick={sumCounter}><i className="fas fa-plus"></i></button>
    </div>
  );
};

export default ItemCount;
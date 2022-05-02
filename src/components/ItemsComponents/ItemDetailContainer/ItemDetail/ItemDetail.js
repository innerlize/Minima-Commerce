import React from 'react';
import ItemCount from '../ItemCount/ItemCount.js';
import { Card, Button } from 'react-bootstrap';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {

  return (
    <div className='item-container'>
      <Card className='unicItem'>
        <Card.Img variant="top" src={product.imagen} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            {product.desc}
          </Card.Text>
          <Card.Text>
            Switches type: {product.switches}
          </Card.Text>
          <Card.Text>
            RGB: {product.rgb}
          </Card.Text>
          <Card.Text>
            ${product.price}
          </Card.Text>
          <Button variant="primary">Add To Cart</Button>
          <ItemCount stock={product.stock} />
         </Card.Body>
      </Card>
    </div>
  )
}

export default ItemDetail;
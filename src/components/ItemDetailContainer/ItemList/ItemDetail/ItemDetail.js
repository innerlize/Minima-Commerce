import React from 'react';
import ItemCount from '../../ItemCount/ItemCount.js';
import { Card, Button } from 'react-bootstrap';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {
  const { id, imagen, desc, switches, rgb, name, price, stock, category } = product

  return (
    <Card className='item'>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <Card.Text>
          Switches type: {switches}
        </Card.Text>
        <Card.Text>
          RGB: {rgb}
        </Card.Text>
        <Card.Text>
          $ {price}
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
        <ItemCount stock={stock} />
       </Card.Body>
    </Card>
  )
}

export default ItemDetail;
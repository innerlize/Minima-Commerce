import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ product }) => {

  return (
    <Card className='item'>
      <Card.Img variant="top" src={product.imagen} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>
          ${product.price}
        </Card.Text>
        <Link to={`/Minima-Commerce/item/${product.id}`}>
          <Button variant="primary">More Details</Button>
        </Link>
       </Card.Body>
    </Card>
  )
}

export default Item;
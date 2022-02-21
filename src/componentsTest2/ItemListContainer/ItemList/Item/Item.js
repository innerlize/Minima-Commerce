import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ product }) => {
  const { id, imagen, desc, name, price, stock, category } = product
  console.log(product)

  return (
    <Card className='item'>
      <Card.Img variant="top" src={imagen} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {desc}
        </Card.Text>
        <Card.Text>
          ${price}
        </Card.Text>
        <Link to={`/item/${id}`}>
          <Button variant="primary">More Details</Button>
        </Link>
       </Card.Body>
    </Card>
  )
}

export default Item;
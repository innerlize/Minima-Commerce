import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import ItemLoader from '../../ItemLoader/ItemLoader.js';
import useCartContext from '../../ItemContext/CartContext.js';
import ItemCount from '../ItemCount/ItemCount.js';
import './ItemDetail.css';

const ItemDetail = ({ product }) => {

  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCartContext();

  function onAdd(stock) {
    setAddedToCart(true);
    addToCart(product, stock);
  }

  if (product === undefined) {
    return <ItemLoader />
  }

  else {
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

            { addedToCart ? <div className='addToCartContainer'>
                                <p className='productAdded'>This product has been added to your cart.</p>
                                <Link to={`/Minima-Commerce/cart`}>
                                  <button variant="primary">View Cart</button>
                                </Link>
                            </div>

                            :

                            <ItemCount onAdd={onAdd} stock={product.stock} /> }

           </Card.Body>
        </Card>
      </div>
    )
  }
}

export default ItemDetail;
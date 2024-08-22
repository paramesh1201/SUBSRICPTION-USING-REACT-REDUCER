import React from 'react';
import { RemoveProduct } from '../actions/cartAction';

const Cart = ({ products, total, dispatch }) => {
  const HandleRemoveProduct = (id, price) => {
    dispatch(RemoveProduct(id, price));
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => HandleRemoveProduct(product.id, product.price)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
    </div>
  );
};

export default Cart;
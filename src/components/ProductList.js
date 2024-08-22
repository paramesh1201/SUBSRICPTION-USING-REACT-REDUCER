import React from 'react';
import { AddProduct } from '../actions/cartAction';

const ProductList = ({ products, dispatch }) => {
  const HandleAddProduct = (product) => {
    dispatch(AddProduct(product));
  };

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - ${product.price}
          <button onClick={() => HandleAddProduct(product)}>Add to Cart</button>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
import React, { useReducer } from 'react';
import cartReducer from './reducers/cartReducers';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  const [state, dispatch] = useReducer(cartReducer, {});

  return (
    <div>
      <ProductList products={state.products} dispatch={dispatch} />
      <Cart products={state.products} total={state.total} dispatch={dispatch} />
    </div>
  );
};

export default App;
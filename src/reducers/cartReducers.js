const initialState = {
    products: [],
    total: 0,
  };
  
  const CartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_PRODUCT':
        return {
          ...state,
          products: [...state.products, action.product],
          total: state.total + action.product.price,
        };
      case 'REMOVE_PRODUCT':
        return {
          ...state,
          products: state.products.filter((product) => product.id !== action.id),
          total: state.total - action.price,
        };
      default:
        return state;
    }
  };
  
  export default CartReducer;
 const AddProduct = (product) => {
    return {
      type: 'ADD_PRODUCT',
      product,
    };
  };
  
   const RemoveProduct = (id, price) => {
    return {
      type: 'REMOVE_PRODUCT',
      id,
      price,
    };
  };
  export {AddProduct,RemoveProduct};
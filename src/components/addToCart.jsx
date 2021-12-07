import React from 'react';

const AddToCart = function AddToCart({ itemName }) {
  return (
    <button type="button" onClick={() => alert(`${itemName} - Added to cart`)}>
      Add to cart
    </button>
  );
};

export default AddToCart;

const AddToCart = ({ itemName }) => (
  <button onClick={() => alert(`${itemName} - Added to cart`)}>
    Add to cart
  </button>
);

export default AddToCart;

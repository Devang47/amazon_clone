import useStore from '../../store';

function ProductCart({ product }) {
  const user_location = useStore(state => state.user_location);
  return (
    <div className="product-cart">
      <p>
        <label htmlFor="qty">Quantity: </label>
        <select name="qty" id="qty" value="1">
          {new Array(9).fill(1).map((_, i) => (
            <option key={`${product.id}_${i}`} value={i}>
              {i} {i === 0 && '(Delete)'}
            </option>
          ))}
        </select>
      </p>
      <div>
        <button className="sign_in_btn">Add to Cart</button>
        <button className="sign_in_btn buy_now_btn">Buy Now</button>
      </div>
      <div className="secure-transaction">
        <span class="iconify" data-icon="bx:bxs-lock-alt"></span>
        <p>Secure transaction</p>
      </div>
      <div className="delivery-details">
        <span class="iconify" data-icon="akar-icons:location"></span>
        <p className="no-underline amz-link">Deliver to {user_location}</p>
      </div>
    </div>
  );
}

export default ProductCart;

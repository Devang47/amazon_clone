import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useStore, { useCartStore } from '../../store';

function ProductCart({ product }) {
  const addToCart = useCartStore(state => state.addToCart);
  const user_location = useStore(state => state.user_location);
  const [qty, setQty] = useState(1);
  const history = useHistory();

  return (
    <div className="product-cart">
      <p>
        <label htmlFor="qty">Quantity: </label>
        <select
          name="qty"
          id="qty"
          value={qty}
          onChange={e => setQty(parseInt(e.target.value))}
        >
          {new Array(9).fill(1).map((_, i) => (
            <option key={`${product.id}_${i}`} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </p>
      <div>
        <button
          className="sign_in_btn"
          onClick={() => {
            addToCart(product, qty);
            history.push('/cart');
          }}
        >
          Add to Cart
        </button>
        <button
          className="sign_in_btn buy_now_btn"
          onClick={() => {
            addToCart(product, qty);
            history.push('/cart');
          }}
        >
          Buy Now
        </button>
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
